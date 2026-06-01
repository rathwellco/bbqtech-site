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
};

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
  const ordered = ["name", "phone", "email", "address", "service", "message", "language", "source"];
  const lines: string[] = [];
  for (const key of ordered) {
    const value = payload[key];
    if (!value) continue;
    lines.push(`${labels[key] || key}: ${value}`);
  }
  // Append any extra fields not in the ordered list
  for (const [key, value] of Object.entries(payload)) {
    if (ordered.includes(key) || !value) continue;
    lines.push(`${labels[key] || key}: ${value}`);
  }
  return lines.join("\n");
}

function formatHtml(payload: Record<string, string>, labels: Record<string, string>): string {
  const ordered = ["name", "phone", "email", "address", "service", "message", "language", "source"];
  const rows: string[] = [];
  const renderRow = (key: string, value: string) => {
    const safeKey = escapeHtml(labels[key] || key);
    const safeValue = escapeHtml(value).replace(/\n/g, "<br/>");
    rows.push(
      `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#333;width:35%;vertical-align:top;">${safeKey}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#111;">${safeValue}</td></tr>`
    );
  };
  for (const key of ordered) {
    const value = payload[key];
    if (!value) continue;
    renderRow(key, value);
  }
  for (const [key, value] of Object.entries(payload)) {
    if (ordered.includes(key) || !value) continue;
    renderRow(key, value);
  }
  return `<!doctype html><html><body style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;background:#f5f5f5;padding:24px;">
<div style="max-width:640px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e5e5;">
  <div style="background:#000;color:#fff;padding:20px 24px;">
    <div style="font-size:13px;letter-spacing:1px;color:#E81B1B;text-transform:uppercase;font-weight:700;">BBQTECH</div>
    <div style="font-size:22px;font-weight:800;margin-top:4px;">Nouveau lead reçu</div>
  </div>
  <table style="width:100%;border-collapse:collapse;font-size:14px;">${rows.join("")}</table>
  <div style="padding:16px 24px;background:#fafafa;font-size:12px;color:#666;">
    Envoyé depuis bbqtech.com · ${new Date().toISOString()}
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
    html: formatHtml(payload, labels),
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
