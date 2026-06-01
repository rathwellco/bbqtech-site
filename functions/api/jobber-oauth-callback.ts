// Jobber OAuth — one-time callback endpoint.
//
// Flow:
//   1. Nicholas visits the authorization URL (see DEPLOY.md → Jobber OAuth setup).
//   2. Jobber asks him to authorize the BBQTECH Lead Intake app.
//   3. Jobber redirects to THIS endpoint with ?code=<authorization_code>.
//   4. We exchange the code for an access_token + refresh_token at the token endpoint.
//   5. We render an HTML page showing the refresh_token so Nicholas can paste it
//      into Cloudflare Pages env vars as JOBBER_REFRESH_TOKEN.
//   6. After that env var is set, lead.ts can refresh access tokens on demand
//      without going through this flow again. (Tokens don't auto-rotate when
//      refresh-token-rotation is OFF in the Jobber app settings.)
//
// Required env (set in Cloudflare Pages):
//   JOBBER_CLIENT_ID
//   JOBBER_CLIENT_SECRET
//
// This endpoint is ONLY needed for the one-time authorization. Once a
// refresh_token is stored, this file can be left in place (idle) or deleted.

const JOBBER_TOKEN_ENDPOINT = "https://api.getjobber.com/api/oauth/token";

interface Env {
  JOBBER_CLIENT_ID?: string;
  JOBBER_CLIENT_SECRET?: string;
}

interface JobberTokenResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
  scope?: string;
  error?: string;
  error_description?: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function errorPage(title: string, message: string, status = 400): Response {
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${escapeHtml(title)}</title>
<style>
  body { font-family: -apple-system, Segoe UI, Roboto, sans-serif; background: #f5f5f5; color: #111; padding: 48px 24px; }
  .card { max-width: 640px; margin: 0 auto; background: #fff; border: 1px solid #e5e5e5; border-radius: 12px; padding: 32px; }
  h1 { color: #E81B1B; font-size: 24px; margin: 0 0 12px; }
  pre { background: #f5f5f5; padding: 12px; border-radius: 8px; overflow-x: auto; white-space: pre-wrap; word-break: break-word; }
</style></head><body><div class="card">
  <h1>${escapeHtml(title)}</h1>
  <p>${escapeHtml(message)}</p>
</div></body></html>`;
  return new Response(html, { status, headers: { "Content-Type": "text/html; charset=utf-8" } });
}

function successPage(refreshToken: string, accessToken: string, expiresIn: number, scope: string | undefined): Response {
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>Jobber authorized — copy refresh_token</title>
<style>
  body { font-family: -apple-system, Segoe UI, Roboto, sans-serif; background: #f5f5f5; color: #111; padding: 48px 24px; }
  .card { max-width: 720px; margin: 0 auto; background: #fff; border: 1px solid #e5e5e5; border-radius: 12px; padding: 32px; }
  h1 { color: #111; font-size: 24px; margin: 0 0 8px; }
  .ok { color: #0a7d2c; font-weight: 600; }
  pre { background: #111; color: #fff; padding: 16px; border-radius: 8px; overflow-x: auto; white-space: pre-wrap; word-break: break-all; font-size: 13px; }
  code { background: #f1f1f1; padding: 2px 6px; border-radius: 4px; font-size: 13px; }
  ol li { margin-bottom: 8px; }
  .small { font-size: 13px; color: #666; }
  button { background: #E81B1B; color: #fff; border: none; padding: 10px 16px; border-radius: 6px; cursor: pointer; font-weight: 600; }
  button:hover { background: #c41616; }
</style></head><body><div class="card">
  <h1>Authorization successful</h1>
  <p class="ok">Jobber returned a refresh_token. Copy it now — this page is the only place it's shown.</p>

  <h2 style="font-size:14px;text-transform:uppercase;color:#888;letter-spacing:1px;margin-top:24px;">refresh_token</h2>
  <pre id="rt">${escapeHtml(refreshToken)}</pre>
  <button onclick="navigator.clipboard.writeText(document.getElementById('rt').textContent).then(() => this.textContent='Copied').catch(() => alert('Copy failed — select manually'))">Copy refresh_token</button>

  <h2 style="font-size:14px;text-transform:uppercase;color:#888;letter-spacing:1px;margin-top:32px;">Next steps</h2>
  <ol>
    <li>Cloudflare dashboard → Pages → <code>bbqtech-site</code> → Settings → Environment variables → Production.</li>
    <li>Add variable <code>JOBBER_REFRESH_TOKEN</code> = (paste the value above).</li>
    <li>Click Save, then trigger a redeploy (push any commit or click <em>Retry deployment</em>).</li>
    <li>Once redeployed, the live lead handler can call Jobber's GraphQL API. Submit the form once to test end-to-end.</li>
  </ol>

  <h2 style="font-size:14px;text-transform:uppercase;color:#888;letter-spacing:1px;margin-top:32px;">Diagnostics</h2>
  <p class="small">
    Access token expires in: <code>${expiresIn}s</code><br/>
    Scopes granted: <code>${escapeHtml(scope || "(none reported)")}</code>
  </p>
  <details>
    <summary class="small" style="cursor:pointer;">Show access_token (short-lived, usually not needed)</summary>
    <pre style="font-size:11px;">${escapeHtml(accessToken)}</pre>
  </details>
</div></body></html>`;
  return new Response(html, { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } });
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const url = new URL(context.request.url);
  const code = url.searchParams.get("code");
  const errorParam = url.searchParams.get("error");

  if (errorParam) {
    const desc = url.searchParams.get("error_description") || "Jobber returned an error during authorization.";
    return errorPage("Authorization failed", `${errorParam}: ${desc}`, 400);
  }
  if (!code) {
    return errorPage(
      "Missing authorization code",
      "This endpoint expects a ?code= query parameter from Jobber's OAuth redirect. If you reached this page directly, start the flow from the authorization URL documented in DEPLOY.md.",
      400
    );
  }

  const clientId = context.env.JOBBER_CLIENT_ID;
  const clientSecret = context.env.JOBBER_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    return errorPage(
      "Server not configured",
      "JOBBER_CLIENT_ID or JOBBER_CLIENT_SECRET is missing from Cloudflare Pages environment variables. Set both and redeploy before retrying.",
      500
    );
  }

  // Token exchange — application/x-www-form-urlencoded per OAuth2 spec
  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: "authorization_code",
    code,
    redirect_uri: `${url.origin}/api/jobber-oauth-callback`,
  });

  const resp = await fetch(JOBBER_TOKEN_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });

  const data = (await resp.json().catch(() => ({}))) as JobberTokenResponse;

  if (!resp.ok || !data.refresh_token) {
    const msg = data.error_description || data.error || `HTTP ${resp.status}`;
    return errorPage("Token exchange failed", `Jobber rejected the code: ${msg}`, 502);
  }

  return successPage(data.refresh_token, data.access_token, data.expires_in, data.scope);
};
