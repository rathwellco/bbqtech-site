// BBQTech lead intake — relays form submissions to Zoho Flow webhooks.
// Same pattern as ROG (clients/rog/06_build/site/functions/api/lead.ts).
//
// TODO BEFORE LAUNCH: replace placeholders below with the BBQTech Zoho Flow
// webhook URLs (one for FR leads, one for EN leads). The form sets a hidden
// `language` field that this function routes on.
const WEBHOOK_EN = "TODO_BBQTECH_ZOHO_WEBHOOK_EN";
const WEBHOOK_FR = "TODO_BBQTECH_ZOHO_WEBHOOK_FR";

const TURNSTILE_VERIFY = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

interface Env {
  TURNSTILE_SECRET_KEY?: string;
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

    // Turnstile verification (fail closed when secret is configured)
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

    const webhookUrl = payload.language === "fr" ? WEBHOOK_FR : WEBHOOK_EN;

    if (!webhookUrl || webhookUrl.startsWith("TODO_")) {
      // Webhook not yet configured — log to CF function logs and accept the
      // submission so the user does not see a failure. Nicholas should wire
      // the Zoho Flow webhooks ASAP after launch.
      console.error("BBQTech lead received but Zoho webhook URL is not configured:", payload);
      return new Response(
        JSON.stringify({ success: true, message: "Lead received (webhook pending configuration)" }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const success = response.ok;

    return new Response(
      JSON.stringify({ success, message: success ? "Lead submitted" : "Submission failed" }),
      {
        status: success ? 200 : 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch {
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
