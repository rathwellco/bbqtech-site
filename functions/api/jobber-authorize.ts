// Jobber OAuth — kick off the authorization flow.
//
// Visit https://bbqtech.com/api/jobber-authorize once. This endpoint reads
// JOBBER_CLIENT_ID from env vars, builds the Jobber authorize URL, and
// 302-redirects you to it. Jobber then prompts you to authorize the app
// and redirects back to /api/jobber-oauth-callback with the code.
//
// Required env: JOBBER_CLIENT_ID

const JOBBER_AUTHORIZE_ENDPOINT = "https://api.getjobber.com/api/oauth/authorize";

interface Env {
  JOBBER_CLIENT_ID?: string;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const clientId = context.env.JOBBER_CLIENT_ID;
  if (!clientId) {
    return new Response(
      "JOBBER_CLIENT_ID is not configured in Cloudflare Pages env vars.",
      { status: 500, headers: { "Content-Type": "text/plain" } }
    );
  }

  const url = new URL(context.request.url);
  const redirectUri = `${url.origin}/api/jobber-oauth-callback`;
  const state = crypto.randomUUID();

  const params = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    redirect_uri: redirectUri,
    state,
  });

  return Response.redirect(`${JOBBER_AUTHORIZE_ENDPOINT}?${params.toString()}`, 302);
};
