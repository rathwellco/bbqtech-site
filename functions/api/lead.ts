// BBQTECH lead intake — emails every form submission to the operator.
//
// Delivery via Resend (https://resend.com). Free tier covers ~3000/month,
// 100/day — plenty for Phase 2 traffic. Replaces the previous Zoho Flow
// webhook relay; keeps Turnstile bot verification.
//
// Required env (set in Cloudflare Pages → Settings → Environment variables):
//   RESEND_API_KEY        — API key from resend.com dashboard
//
// Optional env:
//   LEAD_TO_EMAIL         — comma-separated recipients. Default: nick@grouperathwell.com
//   LEAD_FROM_EMAIL       — sender. Default: BBQTECH Leads <onboarding@resend.dev>
//                           Once bbqtech.com is verified in Resend, switch to
//                           "BBQTECH Leads <leads@bbqtech.com>".
//   TURNSTILE_SECRET_KEY  — enables Cloudflare Turnstile bot check when set.

const TURNSTILE_VERIFY = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const RESEND_ENDPOINT = "https://api.resend.com/emails";

const DEFAULT_TO = "nick@grouperathwell.com";
const DEFAULT_FROM = "BBQTECH Leads <onboarding@resend.dev>";

interface Env {
  RESEND_API_KEY?: string;
  LEAD_TO_EMAIL?: string;
  LEAD_FROM_EMAIL?: string;
  TURNSTILE_SECRET_KEY?: string;
}

const FIELD_LABELS_FR: Record<string, string> = {
  name: "Nom",
  phone: "Téléphone",
  email: "Courriel",
  address: "Adresse",
  service: "Service demandé",
  message: "Détails",
  language: "Langue du formulaire",
  source: "Source",
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
  service: "Service requested",
  message: "Details",
  language: "Form language",
  source: "Source",
  landing_page: "Landing page",
  referrer: "Referrer",
  session_start: "Session start",
  page_url: "Page URL",
  page_title: "Page title",
  user_agent: "Browser",
  submitted_at: "Submitted at",
};

// Lead fields shown first, in this order. Tracking metadata appears after.
const PRIMARY_FIELDS = ["name", "phone", "email", "address", "service", "message"];
const META_FIELDS = ["language", "source", "landing_page", "referrer", "page_url", "page_title", "session_start", "submitted_at", "user_agent"];

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
  const service = payload.service?.trim();
  return service ? `[BBQTECH] ${name} — ${service}` : `[BBQTECH] ${name}`;
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

    const result = await sendLeadEmail(payload, context.env);

    if (!result.ok) {
      // Log full payload so no lead is lost if email send fails.
      // Surface to user as success — the operator follows up from logs.
      console.error("BBQTECH lead email send failed:", {
        status: result.status,
        detail: result.detail,
        payload,
      });
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
