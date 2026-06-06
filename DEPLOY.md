# BBQTECH Placeholder Site

**What:** Minimal single-page placeholder for `bbqtech.ca`, deployed on Cloudflare Pages. Serves as a landing page while the Jobber site is being built, and acts as the host for DNS-level verifications (Google Search Console, etc.) and any verification files Google / Bing / Microsoft might require.

**Status:** Phase 1, scaffolded 2026-04-23.

**Stack:** Plain static HTML. No build step, no framework, no dependencies. Upgrade to Astro + Tailwind in Phase 2 when the real site is built (ROG pattern: `rathwellco/client-rog-site`).

---

## Deployment — Cloudflare Pages

### One-time setup (do this once, then auto-deploys forever)

**1. Create GitHub repo** (using gh CLI on Windows):
```powershell
# From this folder: c:/_dev/ventures/bbqtech/06_build/site/
cd c:/_dev/ventures/bbqtech/06_build/site
git init
git add .
git commit -m "Initial placeholder site for bbqtech.ca"
gh repo create rathwellco/bbqtech-site --public --source=. --push
```

**2. Connect Cloudflare Pages to the repo:**
   - Cloudflare dashboard → Workers & Pages → Create application → Pages → Connect to Git
   - Select `rathwellco/bbqtech-site`
   - **Production branch:** `master` (or `main` if gh defaulted to that)
   - **Framework preset:** None
   - **Build command:** (leave empty)
   - **Build output directory:** `/`
   - Deploy → CF Pages will serve from the root.

**3. Add custom domain `bbqtech.ca`:**
   - On the Pages project → Custom domains → Set up a custom domain
   - Enter `bbqtech.ca` → CF automatically creates the CNAME/A record since the domain is already on CF DNS
   - Wait ~1-2 minutes for SSL cert provisioning
   - Add `www.bbqtech.ca` as second custom domain (CF will create CNAME `www → bbqtech.ca`)

**4. Verify:** visit `https://bbqtech.ca` → should serve the placeholder page with SSL.

### Future deploys
Every push to `master` auto-deploys in ~30 seconds. No manual step.

---

## DNS Records in Cloudflare (current + planned)

### Records for CF Pages hosting
*(Auto-created by CF when you add the custom domain in Pages UI — confirm they exist)*

| Type | Name | Value | Proxy |
|------|------|-------|-------|
| CNAME | `bbqtech.ca` | `bbqtech-site.pages.dev` | ✅ Proxied |
| CNAME | `www` | `bbqtech.ca` | ✅ Proxied |

### Records for Microsoft 365 email (add when M365 tenant created)

M365 admin will give you exact values during domain setup. The record types needed:

| Purpose | Type | Name | Value (example — replace with M365 actual) | Proxy |
|---------|------|------|------|-------|
| Domain verification | TXT | `@` (root) | `MS=ms########` | N/A |
| Email routing | MX | `@` (root) | `bbqtech-ca.mail.protection.outlook.com` (priority 0) | ⚠️ DNS only (unproxied) |
| Autodiscover | CNAME | `autodiscover` | `autodiscover.outlook.com` | ⚠️ DNS only |
| SPF (sender policy) | TXT | `@` (root) | `v=spf1 include:spf.protection.outlook.com -all` | N/A |
| DKIM selector 1 | CNAME | `selector1._domainkey` | `selector1-bbqtech-ca._domainkey.<tenant>.onmicrosoft.com` | ⚠️ DNS only |
| DKIM selector 2 | CNAME | `selector2._domainkey` | `selector2-bbqtech-ca._domainkey.<tenant>.onmicrosoft.com` | ⚠️ DNS only |
| DMARC | TXT | `_dmarc` | `v=DMARC1; p=quarantine; rua=mailto:dmarc@bbqtech.ca; pct=100` | N/A |

**Important:** MX and email-related CNAMEs must be set to **"DNS only" (grey cloud)** in CF, NOT proxied. CF proxy breaks SMTP/IMAP.

### Records for verifications

Add each as a TXT record when the service tells you to.

| Service | Type | Name | Value format | When to add |
|---------|------|------|--------------|-------------|
| Google Search Console | TXT | `@` | `google-site-verification=XXXXXXXXXXXX` | Before submitting sitemap |
| Bing Webmaster | TXT | `@` | `BingSiteAuth=XXXXXXXX` | Optional, same day as GSC |
| Facebook domain verification | TXT | `@` | `facebook-domain-verification=xxxxxxxxxx` | If running Meta ads |
| Google Business Profile | — | — | Typically postcard or phone verification, not DNS | When GBP listing is created |
| Apple Business | TXT | `@` | `apple-domain=xxxxxx` | If applicable for Apple Maps / Apple Business Connect |

---

## Verification file uploads (HTML file method)

Some services (especially Google Search Console) accept an alternative to the TXT record: upload a specific HTML file to the site root. To use that method, drop the provided file (e.g., `google1a2b3c4d5e6f.html`) into this `site/` folder and commit — CF Pages will serve it at `https://bbqtech.ca/google1a2b3c4d5e6f.html`.

**Prefer the TXT DNS method** when possible — it's cleaner, doesn't require a code push, and moves with the domain even if the site changes hosting.

---

## Microsoft 365 setup sequence

1. Sign up for **M365 Business Basic** (~$7.50 CAD/user/month, cheapest with Exchange Online) or **Business Standard** (adds Office apps, ~$16 CAD/user/month)
2. Admin center → Setup → Domains → Add domain → `bbqtech.ca`
3. M365 shows a **TXT record for verification** — add it to CF DNS, wait 5-15 min, click Verify
4. M365 then displays the full list of records needed (MX, CNAMEs, TXT). Copy them into CF DNS (see table above)
5. Create user: `nicholas@bbqtech.com` (primary) and alias `info@bbqtech.com` (public-facing on site). Optional: add `hello@`, `contact@`, `support@` as catch-all aliases so no client gets bounced.
6. Test: send and receive an email with an external Gmail/Outlook address
7. Set up DMARC manually (M365 setup doesn't include DMARC by default — add TXT record per table above)

---

## Phase 2 — when the real site replaces this placeholder

When the Astro + Tailwind site is ready (ROG pattern):
1. Build out Astro project in the same `rathwellco/bbqtech-site` repo, replacing this static HTML
2. Update CF Pages build config:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. Auto-deploys on push. No DNS changes needed — the domain is already wired.

The placeholder gets naturally replaced; DNS records and M365 email persist unchanged.

---

## Lead intake — `functions/api/lead.ts`

The Astro ContactForm POSTs to `/api/lead.ts` (Cloudflare Pages Function). Each submission is emailed to the operator via **Resend**. No Zoho, no webhook chain — every lead lands in the inbox directly.

### One-time setup

1. **Sign up at [resend.com](https://resend.com)** (free tier: 100 emails/day, 3000/month).
2. **Get an API key** from the Resend dashboard → API Keys → Create.
3. **In Cloudflare Pages** → project `bbqtech-site` → Settings → Environment variables → Production:

   | Variable | Value | Required |
   |----------|-------|----------|
   | `RESEND_API_KEY` | `re_xxxxxxxxxx` (from Resend) | ✅ Required |
   | `LEAD_TO_EMAIL` | `nick@grouperathwell.com` (comma-separated for multiple) | Optional — defaults to `nick@grouperathwell.com` |
   | `LEAD_FROM_EMAIL` | `BBQTECH Leads <onboarding@resend.dev>` (default until domain verified) → switch to `BBQTECH Leads <leads@bbqtech.com>` after Resend domain verification | Optional |
   | `TURNSTILE_SECRET_KEY` | from Cloudflare Turnstile dashboard | Optional — fail-open when unset |

4. **Redeploy** (push any commit, or "Retry deployment" in CF Pages) — env vars only apply to new builds.

### Domain verification (do after first emails confirmed working)

1. In Resend → Domains → Add Domain → `bbqtech.com`.
2. Resend gives 3 DNS records (TXT for verification, TXT for SPF, CNAME for DKIM). Add them to Cloudflare DNS as **DNS only (grey cloud, not proxied)**.
3. Wait ~10 minutes, click Verify in Resend.
4. Update `LEAD_FROM_EMAIL` to `BBQTECH Leads <leads@bbqtech.com>` and redeploy.

Until verified, emails come from `onboarding@resend.dev`. They still land, but show as third-party sender in some inboxes.

### What gets emailed

Each submission produces a single HTML + plain-text email with: name, phone, email, address, service selection, message body, language, source. `Reply-To` is set to the lead's email so replying goes straight back to them.

### If email send fails

`lead.ts` logs the full payload to Cloudflare function logs (Pages dashboard → Functions → Real-time Logs) and still returns success to the form, so no one ever sees a broken form. Check function logs if leads stop arriving.

---

## Analytics & tracking

**Pattern:** Single GTM container loaded via Cloudflare Tag Gateway (first-party `/analytics/*` path). GA4, Google Ads conversion, Meta Pixel, etc. all configured as tags **inside GTM** — never injected directly in code. Mirrors the ROG setup at `clients/rog/06_build/site/`.

### Why first-party Tag Gateway

- Loads from `bbqtech.com/analytics/gtm.js` instead of `googletagmanager.com/gtm.js` — bypasses most ad blockers
- Faster (same TCP connection, same Cloudflare edge as the rest of the site)
- Privacy-friendlier (cookies stay first-party)

### One-time setup

1. **Create GA4 property** at [analytics.google.com](https://analytics.google.com/) for bbqtech.com → note the **Measurement ID** (`G-XXXXXXXXXX`)
2. **Create GTM container** at [tagmanager.google.com](https://tagmanager.google.com/) for bbqtech.com (web) → note the **Container ID** (`GTM-XXXXXXX`)
3. **Inside GTM**, create a **Google Analytics: GA4 Configuration** tag using the Measurement ID; set it to fire on **All Pages**. Add custom event tags later as conversions take shape (form_submission, etc.).
4. **Enable Cloudflare Tag Gateway** on the bbqtech.com zone:
   - Cloudflare dashboard → `bbqtech.com` zone → Workers Routes / Zaraz → check whether "Tag Gateway" is available on the plan
   - If using Zaraz: configure the GTM tool there and let Zaraz handle first-party routing automatically
   - If using a direct rewrite rule: create a Transform Rule that rewrites `/analytics/gtm.js` → `https://www.googletagmanager.com/gtm.js` and `/analytics/ns.html` → `https://www.googletagmanager.com/ns.html` (preserve query string)
5. **Set the IDs** in `site.config.ts` (commit + push):
   ```ts
   tracking: {
     gtmId: "GTM-XXXXXXX",
     ga4Id: "G-XXXXXXXXXX",  // reference only
     // ...
   },
   ```
6. **Verify** after deploy: open bbqtech.com in a browser → DevTools Network → confirm `/analytics/gtm.js?id=GTM-XXX` loads with 200. In GA4 → Reports → Realtime, you should see your visit within ~30s.

### Events emitted from this codebase

- `form_submission` — fires from `ContactForm.astro` after a successful POST to `/api/lead`. Payload:
  - `form_source` (e.g. "Website - Contact Page")
  - `form_language` ("fr" or "en")
  - `form_service` (selected service dropdown value, may be empty)

  Map this to a GA4 event + a Google Ads conversion tag in GTM. Conversion value / currency belong in GTM tag config, not in code.

### Attribution capture

`Base.astro` writes a `bbqtech_attribution` object to `sessionStorage` on first page view of each session, capturing `utm_*`, `gclid`, `gbraid`, `wbraid`, `fbclid`, `msclkid`, `referrer`, and `landing_page`. `ContactForm.astro` injects these into the form payload, so they reach the email and any downstream CRM. No external dependencies.

---

## Jobber OAuth setup (one-time)

`lead.ts` (Phase 2b) will also forward leads to Jobber as Work Requests via Jobber's GraphQL API. This requires a one-time OAuth authorization to capture a long-lived refresh token. Refresh-token-rotation is OFF in the Jobber app settings so the token stays valid until revoked.

### Endpoints involved

- `functions/api/jobber-authorize.ts` — visit this once to kick off OAuth
- `functions/api/jobber-oauth-callback.ts` — Jobber redirects here after authorization; exchanges code → refresh_token; displays the token for copy-paste

### Required env (Cloudflare Pages → Production)

| Variable | Source | Required for |
|----------|--------|--------------|
| `JOBBER_CLIENT_ID` | Jobber developer center → app detail | OAuth + GraphQL calls |
| `JOBBER_CLIENT_SECRET` | Jobber developer center → app detail | OAuth + token refresh |
| `JOBBER_REFRESH_TOKEN` | Captured during one-time authorization (see flow below) | GraphQL calls |

### One-time authorization flow

1. Confirm `JOBBER_CLIENT_ID` + `JOBBER_CLIENT_SECRET` are set in CF Pages env vars and a deploy has gone out since they were added.
2. In a browser, visit `https://bbqtech.com/api/jobber-authorize`.
3. You'll be redirected to Jobber and prompted to authorize the **BBQTECH Lead Intake** app for your Jobber account. Approve.
4. Jobber redirects to `https://bbqtech.com/api/jobber-oauth-callback?code=...`. The page exchanges the code for a refresh_token and displays it.
5. Copy the `refresh_token` value.
6. CF Pages → `bbqtech-site` → Settings → Environment variables → Production → add `JOBBER_REFRESH_TOKEN` = (pasted value).
7. Save, then redeploy (push any commit, or click *Retry deployment*).
8. Once redeployed, the lead handler can refresh access tokens on demand. Submit the form once to verify a Request appears in Jobber.

### When to redo this

- If you revoke the app in Jobber.
- If you turn refresh-token-rotation ON (token rotates on every use — needs different storage approach).
- If you accidentally delete the env var.

Re-running just means visiting `/api/jobber-authorize` again and updating the env var with the new token.
