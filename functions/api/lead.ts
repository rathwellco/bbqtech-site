// BBQTECH lead intake — emails every form submission to the operator and
// forwards it to Jobber as a Work Request via the GraphQL API.
//
// Order of operations (email is the canonical safety net):
//   1. Turnstile bot verification (if configured)
//   2. Send email via Resend
//   3. Forward to Jobber as Client + Request (best-effort, logs but never blocks)
//   4. Return success to the user
//
// Required env:
//   RESEND_API_KEY           — Resend API key
//
// Optional env:
//   LEAD_TO_EMAIL            — comma-separated recipients. Default: nick@grouperathwell.com
//   LEAD_FROM_EMAIL          — sender. Default: BBQTECH Leads <onboarding@resend.dev>
//   TURNSTILE_SECRET_KEY     — enables Cloudflare Turnstile bot check
//   JOBBER_CLIENT_ID         — Jobber OAuth client id (required for Jobber sync)
//   JOBBER_CLIENT_SECRET     — Jobber OAuth client secret (required for Jobber sync)
//   JOBBER_REFRESH_TOKEN     — captured via one-time /api/jobber-authorize flow (required for Jobber sync)
//   JOBBER_API_VERSION       — Jobber GraphQL API version date. Default: 2024-04-10. Bump if Jobber deprecates.

const TURNSTILE_VERIFY = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const RESEND_ENDPOINT = "https://api.resend.com/emails";
const JOBBER_TOKEN_ENDPOINT = "https://api.getjobber.com/api/oauth/token";
const JOBBER_GRAPHQL_ENDPOINT = "https://api.getjobber.com/api/graphql";
// Jobber REQUIRES X-JOBBER-GRAPHQL-VERSION on every request. Latest stable
// per the changelog at developer.getjobber.com/docs/changelog/ as of
// 2026-06-01 is 2025-04-16. Override via JOBBER_API_VERSION env var when
// Jobber publishes a newer breaking change you want to opt into.
// Old versions are supported for ~12-18 months from release.
const DEFAULT_JOBBER_API_VERSION = "2025-04-16";

const DEFAULT_TO = "nick@grouperathwell.com";
const DEFAULT_FROM = "BBQTECH Leads <onboarding@resend.dev>";

interface Env {
  RESEND_API_KEY?: string;
  LEAD_TO_EMAIL?: string;
  LEAD_FROM_EMAIL?: string;
  TURNSTILE_SECRET_KEY?: string;
  JOBBER_SYNC_ENABLED?: string;
  JOBBER_CLIENT_ID?: string;
  JOBBER_CLIENT_SECRET?: string;
  JOBBER_REFRESH_TOKEN?: string;
  JOBBER_API_VERSION?: string;
}

const FIELD_LABELS_FR: Record<string, string> = {
  name: "Nom",
  phone: "Téléphone",
  email: "Courriel",
  address: "Adresse",
  forfait: "Forfait choisi",
  bbq_brand: "Marque / modèle BBQ",
  symptom: "Symptôme / problème",
  service: "Service demandé",
  message: "Détails",
  language: "Langue du formulaire",
  source: "Source",
  variant: "Type de demande",
  landing_page: "Page d'arrivée",
  referrer: "Référent",
  session_start: "Début de session",
  page_url: "URL de la page",
  page_title: "Titre de la page",
  user_agent: "Navigateur",
  submitted_at: "Soumis le",
};

const FIELD_LABELS_EN: Record<string, string> = {
  name: "Name",
  phone: "Phone",
  email: "Email",
  address: "Address",
  forfait: "Selected package",
  bbq_brand: "BBQ brand / model",
  symptom: "Symptom / issue",
  service: "Service requested",
  message: "Details",
  language: "Form language",
  source: "Source",
  variant: "Request type",
  landing_page: "Landing page",
  referrer: "Referrer",
  session_start: "Session start",
  page_url: "Page URL",
  page_title: "Page title",
  user_agent: "Browser",
  submitted_at: "Submitted at",
};

// Lead fields shown first, in this order. Tracking metadata appears after.
const PRIMARY_FIELDS = ["name", "phone", "email", "address", "forfait", "bbq_brand", "symptom", "service", "message"];
const META_FIELDS = ["variant", "language", "source", "landing_page", "referrer", "page_url", "page_title", "session_start", "submitted_at", "user_agent"];

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatSubject(payload: Record<string, string>): string {
  const name = payload.name?.trim() || "Nouveau lead";
  const variant = (payload.variant || "").toLowerCase();
  const source = (payload.source || "").toLowerCase();
  const forfait = payload.forfait?.trim() || "";

  // Reservation form → highlight selected forfait when present. Diagnostic is
  // now a forfait option (collapsed from the deprecated /diagnostic page) so
  // detect it via forfait value and route to the Diagnostic subject prefix.
  if (variant === "reservation" || source.includes("reservation")) {
    if (forfait === "Diagnostic") {
      return `[BBQTECH Diagnostic] ${name}`;
    }
    return forfait ? `[BBQTECH Réservation] ${name} — ${forfait}` : `[BBQTECH Réservation] ${name}`;
  }
  // General catch-all
  return `[BBQTECH Question] ${name}`;
}

function formatText(payload: Record<string, string>, labels: Record<string, string>): string {
  const lines: string[] = [];
  const push = (key: string) => {
    const value = payload[key];
    if (!value) return;
    lines.push(`${labels[key] || key}: ${value}`);
  };
  for (const key of PRIMARY_FIELDS) push(key);
  lines.push("", "---");
  for (const key of META_FIELDS) push(key);
  // Catch any unexpected extras
  for (const key of Object.keys(payload)) {
    if (PRIMARY_FIELDS.includes(key) || META_FIELDS.includes(key)) continue;
    push(key);
  }
  return lines.join("\n");
}

function formatHtml(payload: Record<string, string>, labels: Record<string, string>, lang: string): string {
  const isFr = lang !== "en";
  const headline = isFr ? "Nouveau lead reçu" : "New lead received";
  const metaHeading = isFr ? "Métadonnées" : "Metadata";

  const renderRow = (key: string, value: string, isMeta: boolean): string => {
    const safeKey = escapeHtml(labels[key] || key);
    const safeValue = escapeHtml(value).replace(/\n/g, "<br/>");
    const labelColor = isMeta ? "#777" : "#333";
    const valueColor = isMeta ? "#555" : "#111";
    const valueSize = isMeta ? "13px" : "14px";
    return `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:${labelColor};width:38%;vertical-align:top;font-size:${valueSize};">${safeKey}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:${valueColor};font-size:${valueSize};word-break:break-word;">${safeValue}</td></tr>`;
  };

  const primaryRows: string[] = [];
  for (const key of PRIMARY_FIELDS) {
    const value = payload[key];
    if (!value) continue;
    primaryRows.push(renderRow(key, value, false));
  }

  const metaRows: string[] = [];
  for (const key of META_FIELDS) {
    const value = payload[key];
    if (!value) continue;
    metaRows.push(renderRow(key, value, true));
  }
  for (const [key, value] of Object.entries(payload)) {
    if (PRIMARY_FIELDS.includes(key) || META_FIELDS.includes(key) || !value) continue;
    metaRows.push(renderRow(key, value, true));
  }

  const metaBlock = metaRows.length
    ? `<div style="padding:12px 24px 4px;font-size:11px;letter-spacing:1px;text-transform:uppercase;color:#888;font-weight:700;">${metaHeading}</div><table style="width:100%;border-collapse:collapse;">${metaRows.join("")}</table>`
    : "";

  return `<!doctype html><html><body style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;background:#f5f5f5;padding:24px;">
<div style="max-width:640px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e5e5;">
  <div style="background:#000;color:#fff;padding:20px 24px;">
    <div style="font-size:13px;letter-spacing:1px;color:#E81B1B;text-transform:uppercase;font-weight:700;">BBQTECH</div>
    <div style="font-size:22px;font-weight:800;margin-top:4px;">${headline}</div>
  </div>
  <table style="width:100%;border-collapse:collapse;">${primaryRows.join("")}</table>
  ${metaBlock}
  <div style="padding:16px 24px;background:#fafafa;font-size:12px;color:#666;">
    bbqtech.com · ${new Date().toISOString()}
  </div>
</div></body></html>`;
}

async function verifyTurnstile(token: string, secret: string, remoteip: string | null): Promise<boolean> {
  const body = new FormData();
  body.append("secret", secret);
  body.append("response", token);
  if (remoteip) body.append("remoteip", remoteip);
  try {
    const res = await fetch(TURNSTILE_VERIFY, { method: "POST", body });
    const data = (await res.json()) as { success: boolean };
    return !!data.success;
  } catch {
    return false;
  }
}

// ─── Jobber GraphQL sync ───────────────────────────────────────────────

interface JobberTokenResponse {
  access_token?: string;
  refresh_token?: string;
  expires_in?: number;
  error?: string;
  error_description?: string;
}

async function refreshJobberAccessToken(env: Env): Promise<string | null> {
  if (!env.JOBBER_CLIENT_ID || !env.JOBBER_CLIENT_SECRET || !env.JOBBER_REFRESH_TOKEN) {
    return null;
  }
  const body = new URLSearchParams({
    client_id: env.JOBBER_CLIENT_ID,
    client_secret: env.JOBBER_CLIENT_SECRET,
    grant_type: "refresh_token",
    refresh_token: env.JOBBER_REFRESH_TOKEN,
  });
  const res = await fetch(JOBBER_TOKEN_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
  const rawBody = await res.text();
  let data: JobberTokenResponse = {};
  try {
    data = JSON.parse(rawBody);
  } catch {
    // non-JSON body — kept in rawBody for logging
  }
  if (!res.ok || !data.access_token) {
    console.error("Jobber token refresh failed:", { status: res.status, rawBody: rawBody.slice(0, 1000) });
    return null;
  }
  // If Jobber returned a new refresh_token, rotation is active — surface it so
  // the operator can update JOBBER_REFRESH_TOKEN in CF Pages env vars to keep
  // future calls working. Token storage in KV is a future improvement.
  if (data.refresh_token && data.refresh_token !== env.JOBBER_REFRESH_TOKEN) {
    console.warn(
      "Jobber returned a NEW refresh_token — rotation is active. Update JOBBER_REFRESH_TOKEN env var with this value before the next submission, or the next refresh will fail with 401:",
      { newRefreshToken: data.refresh_token, expiresIn: data.expires_in }
    );
  } else if (data.refresh_token) {
    console.log("Jobber token refresh ok — same refresh_token returned (no rotation).", { expiresIn: data.expires_in });
  } else {
    console.log("Jobber token refresh ok — no refresh_token in response.", { expiresIn: data.expires_in });
  }
  return data.access_token;
}

async function postJobberGraphQL(
  accessToken: string,
  apiVersion: string,
  query: string,
  variables: Record<string, unknown>
): Promise<{ ok: boolean; data?: unknown; errors?: unknown; status: number; rawBody?: string }> {
  const headers: Record<string, string> = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };
  // Only send the version header when explicitly configured. Jobber uses
  // the latest stable version when the header is absent.
  if (apiVersion) headers["X-JOBBER-GRAPHQL-VERSION"] = apiVersion;

  const res = await fetch(JOBBER_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
  });
  const rawBody = await res.text();
  let parsed: { data?: unknown; errors?: unknown } = {};
  try {
    parsed = JSON.parse(rawBody);
  } catch {
    // Non-JSON response (e.g. HTML 404 page) — keep rawBody for the caller to log.
  }
  return {
    ok: res.ok && !parsed.errors,
    data: parsed.data,
    errors: parsed.errors,
    status: res.status,
    rawBody,
  };
}

const CLIENT_CREATE_MUTATION = `
  mutation ClientCreate($input: ClientCreateInput!) {
    clientCreate(input: $input) {
      client { id }
      userErrors { message path }
    }
  }
`;

const REQUEST_CREATE_MUTATION = `
  mutation RequestCreate($input: RequestCreateInput!) {
    requestCreate(input: $input) {
      request { id title }
      userErrors { message path }
    }
  }
`;

function splitName(full: string): { firstName: string; lastName: string } {
  const trimmed = (full || "").trim();
  if (!trimmed) return { firstName: "Lead", lastName: "Web" };
  const parts = trimmed.split(/\s+/);
  if (parts.length === 1) return { firstName: parts[0], lastName: "—" };
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

function buildRequestBody(payload: Record<string, string>): string {
  const lines: string[] = [];
  if (payload.service) lines.push(`Service demandé : ${payload.service}`);
  if (payload.message) lines.push("", payload.message);
  if (payload.address) lines.push("", `Adresse : ${payload.address}`);
  if (payload.phone) lines.push(`Téléphone : ${payload.phone}`);
  if (payload.email) lines.push(`Courriel : ${payload.email}`);
  if (payload.language) lines.push("", `Langue : ${payload.language}`);
  if (payload.landing_page) lines.push(`Page d'arrivée : ${payload.landing_page}`);
  if (payload.referrer) lines.push(`Référent : ${payload.referrer}`);
  if (payload.submitted_at) lines.push(`Soumis : ${payload.submitted_at}`);
  return lines.join("\n");
}

async function syncLeadToJobber(
  payload: Record<string, string>,
  env: Env
): Promise<{ ok: boolean; detail?: string; clientId?: string; requestId?: string }> {
  if (!env.JOBBER_CLIENT_ID || !env.JOBBER_CLIENT_SECRET || !env.JOBBER_REFRESH_TOKEN) {
    return { ok: false, detail: "Jobber env vars not fully configured" };
  }
  const apiVersion = env.JOBBER_API_VERSION || DEFAULT_JOBBER_API_VERSION;

  const accessToken = await refreshJobberAccessToken(env);
  if (!accessToken) {
    return { ok: false, detail: "Could not refresh Jobber access token" };
  }

  const { firstName, lastName } = splitName(payload.name || "");
  const clientInput: Record<string, unknown> = {
    firstName,
    lastName,
  };
  if (payload.email) {
    clientInput.emails = [{ address: payload.email, primary: true, description: "MAIN" }];
  }
  if (payload.phone) {
    clientInput.phones = [{ number: payload.phone, primary: true, description: "MAIN" }];
  }

  const clientResp = await postJobberGraphQL(accessToken, apiVersion, CLIENT_CREATE_MUTATION, {
    input: clientInput,
  });
  if (!clientResp.ok) {
    console.error("Jobber clientCreate failed:", {
      status: clientResp.status,
      errors: clientResp.errors,
      data: clientResp.data,
      rawBody: clientResp.rawBody?.slice(0, 2000),
      endpoint: JOBBER_GRAPHQL_ENDPOINT,
      apiVersionSent: apiVersion || "(omitted)",
    });
    return { ok: false, detail: `clientCreate HTTP ${clientResp.status} — see logs` };
  }
  const clientData = clientResp.data as
    | { clientCreate?: { client?: { id?: string }; userErrors?: Array<{ message: string; path: string[] }> } }
    | undefined;
  const userErrors = clientData?.clientCreate?.userErrors;
  if (userErrors && userErrors.length > 0) {
    console.error("Jobber clientCreate userErrors:", userErrors);
    return { ok: false, detail: `clientCreate userErrors: ${userErrors.map((e) => e.message).join("; ")}` };
  }
  const clientId = clientData?.clientCreate?.client?.id;
  if (!clientId) {
    console.error("Jobber clientCreate returned no client id:", clientData);
    return { ok: false, detail: "clientCreate returned no client id" };
  }

  const requestTitle = payload.service
    ? `${payload.service} — bbqtech.com`
    : "Demande site web — bbqtech.com";
  // Note: Jobber's RequestCreateInput does NOT have `request` or `source` fields
  // (confirmed via API error 2026-06-01). Body goes in `description`; the
  // "source" concept is tracked elsewhere or via custom fields if needed.
  const requestInput = {
    clientId,
    title: requestTitle,
    description: buildRequestBody(payload),
  };

  const requestResp = await postJobberGraphQL(accessToken, apiVersion, REQUEST_CREATE_MUTATION, {
    input: requestInput,
  });
  if (!requestResp.ok) {
    console.error("Jobber requestCreate failed:", {
      status: requestResp.status,
      errors: requestResp.errors,
      data: requestResp.data,
      rawBody: requestResp.rawBody?.slice(0, 2000),
      clientId,
    });
    return { ok: false, detail: `requestCreate HTTP ${requestResp.status} — see logs`, clientId };
  }
  const requestData = requestResp.data as
    | { requestCreate?: { request?: { id?: string }; userErrors?: Array<{ message: string; path: string[] }> } }
    | undefined;
  const requestErrors = requestData?.requestCreate?.userErrors;
  if (requestErrors && requestErrors.length > 0) {
    console.error("Jobber requestCreate userErrors:", requestErrors);
    return { ok: false, detail: `requestCreate userErrors: ${requestErrors.map((e) => e.message).join("; ")}`, clientId };
  }
  const requestId = requestData?.requestCreate?.request?.id;
  return { ok: true, clientId, requestId };
}

// ─── Email delivery ────────────────────────────────────────────────────

async function sendLeadEmail(
  payload: Record<string, string>,
  env: Env
): Promise<{ ok: boolean; status: number; detail?: string }> {
  if (!env.RESEND_API_KEY) {
    return { ok: false, status: 0, detail: "RESEND_API_KEY not configured" };
  }
  const lang = (payload.language || "fr").toLowerCase();
  const labels = lang === "en" ? FIELD_LABELS_EN : FIELD_LABELS_FR;
  const to = (env.LEAD_TO_EMAIL || DEFAULT_TO)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const from = env.LEAD_FROM_EMAIL || DEFAULT_FROM;
  const replyTo = payload.email?.trim() ? [payload.email.trim()] : undefined;

  const body = {
    from,
    to,
    reply_to: replyTo,
    subject: formatSubject(payload),
    text: formatText(payload, labels),
    html: formatHtml(payload, labels, lang),
  };

  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (res.ok) return { ok: true, status: res.status };
  const detail = await res.text().catch(() => "");
  return { ok: false, status: res.status, detail };
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const origin = context.request.headers.get("Origin") || "*";
  const corsHeaders = {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const formData = await context.request.formData();
    const payload: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      payload[key] = value as string;
    }

    const secret = context.env.TURNSTILE_SECRET_KEY;
    if (secret) {
      const token = payload["cf-turnstile-response"];
      if (!token) {
        return new Response(
          JSON.stringify({ success: false, message: "Missing bot verification" }),
          { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }
      const remoteip = context.request.headers.get("CF-Connecting-IP");
      const ok = await verifyTurnstile(token, secret, remoteip);
      if (!ok) {
        return new Response(
          JSON.stringify({ success: false, message: "Bot verification failed" }),
          { status: 403, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }
    }
    delete payload["cf-turnstile-response"];

    const emailResult = await sendLeadEmail(payload, context.env);
    if (!emailResult.ok) {
      // Log full payload so no lead is lost if email send fails.
      console.error("BBQTECH lead email send failed:", {
        status: emailResult.status,
        detail: emailResult.detail,
        payload,
      });
    }

    // Jobber sync is opt-in via JOBBER_SYNC_ENABLED=true. Paused 2026-06-01
    // (KISS — email is sufficient for now). Re-enable by setting the env var
    // to "true" and confirming RequestCreateInput field names against the
    // current Jobber schema (see commit history for prior schema work).
    if (context.env.JOBBER_SYNC_ENABLED === "true") {
      const jobberResult = await syncLeadToJobber(payload, context.env);
      if (!jobberResult.ok) {
        console.warn("BBQTECH Jobber sync skipped/failed:", {
          detail: jobberResult.detail,
          clientId: jobberResult.clientId,
          name: payload.name,
          email: payload.email,
        });
      } else {
        console.log("BBQTECH Jobber sync ok:", {
          clientId: jobberResult.clientId,
          requestId: jobberResult.requestId,
        });
      }
    }

    return new Response(
      JSON.stringify({ success: true, message: "Lead received" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (err) {
    console.error("BBQTECH lead handler crashed:", err);
    return new Response(
      JSON.stringify({ success: false, message: "Server error" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

export const onRequestOptions: PagesFunction = async (context) => {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": context.request.headers.get("Origin") || "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};
