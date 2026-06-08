export type Locale = "fr" | "en";

export type Bilingual<T = string> = { fr: T; en: T };

/**
 * Top-level route slugs that differ between FR and EN. Used by localeHref
 * and getAltLocaleUrl so internal links can be authored once in the FR
 * vocabulary and translated automatically when rendered in EN context.
 *
 * Only top-level segments are translated (the first segment of the path).
 * Deeper paths like /forfaits/[slug] handle their own translation via
 * explicit altLocaleUrl props (see src/pages/forfaits/[slug].astro).
 */
const FR_TO_EN_SLUGS: Record<string, string> = {
  "reservation": "booking",
  "reservation-nettoyage": "booking-cleaning",
  "reservation-reparation": "booking-repair",
  "reservation-assemblage": "booking-assembly",
};
const EN_TO_FR_SLUGS: Record<string, string> = Object.fromEntries(
  Object.entries(FR_TO_EN_SLUGS).map(([fr, en]) => [en, fr])
);

function splitPathAndQuery(path: string): { path: string; query: string } {
  const idx = path.indexOf("?");
  if (idx < 0) return { path, query: "" };
  return { path: path.slice(0, idx), query: path.slice(idx) };
}

function translateFirstSegment(path: string, map: Record<string, string>): string {
  const segments = path.split("/").filter(Boolean);
  if (segments.length === 0) return path;
  const first = segments[0];
  if (!map[first]) return path;
  segments[0] = map[first];
  const trailing = path.endsWith("/") ? "/" : "";
  return "/" + segments.join("/") + trailing;
}

/**
 * Extract a bilingual field for the current locale, with FR fallback.
 * Accepts plain strings (returned as-is) for fields that don't need translation.
 */
export function t<T>(field: Bilingual<T> | T, lang: Locale): T {
  if (field && typeof field === "object" && "fr" in (field as object)) {
    const bi = field as unknown as Bilingual<T>;
    return bi[lang] ?? bi.fr;
  }
  return field as T;
}

/**
 * Read the active locale from the Astro page URL.
 * FR is at root (/), EN is at /en/.
 */
export function getLangFromUrl(url: URL): Locale {
  const seg = url.pathname.split("/").filter(Boolean)[0];
  return seg === "en" ? "en" : "fr";
}

/**
 * Given the current pathname, return the equivalent pathname in the opposite locale.
 * Used by the language toggle in Nav + Footer.
 *
 * Translates top-level slugs that differ between locales (e.g. /reservation ↔ /en/booking).
 */
export function getAltLocaleUrl(pathname: string, currentLang: Locale): string {
  if (currentLang === "en") {
    const stripped = pathname.replace(/^\/en/, "");
    if (stripped === "" || stripped === "/") return "/";
    return translateFirstSegment(stripped, EN_TO_FR_SLUGS);
  }
  if (pathname === "/") return "/en/";
  const translated = translateFirstSegment(pathname, FR_TO_EN_SLUGS);
  return `/en${translated}`;
}

/**
 * Build a locale-aware href for in-app links.
 * Author all internal links with FR slugs — this function adds /en prefix
 * and translates top-level slugs (e.g. /reservation → /en/booking) when
 * lang === "en". Query strings are preserved.
 */
export function localeHref(path: string, lang: Locale): string {
  if (path.startsWith("http") || path.startsWith("tel:") || path.startsWith("mailto:") || path.startsWith("sms:") || path.startsWith("#")) {
    return path;
  }
  if (lang === "en") {
    if (path === "/") return "/en/";
    const { path: justPath, query } = splitPathAndQuery(path);
    const translated = translateFirstSegment(justPath, FR_TO_EN_SLUGS);
    return `/en${translated}${query}`;
  }
  return path;
}

/**
 * Resolve the "Réserver" CTA href. If siteConfig.bookingUrl is set
 * (Zoho Calendar or external scheduler), use it externally. Otherwise
 * fall back to the central triage hub (/reservation in FR, /en/booking in EN)
 * so users self-route to cleaning / repair / assembly / "not sure".
 * Direct-intent CTAs (PricingTable cards, RepairDiagnostic section) override
 * this fallback by passing a more specific path.
 */
export function bookingHref(
  bookingUrl: string,
  lang: Locale,
  fallbackPath: string = "/reservation"
): { href: string; external: boolean } {
  const trimmed = (bookingUrl || "").trim();
  if (trimmed) {
    return { href: trimmed, external: true };
  }
  return { href: localeHref(fallbackPath, lang), external: false };
}

/**
 * Build the sms: link with prefilled body.
 */
export function smsHref(phoneRaw: string, body: string): string {
  return `sms:${phoneRaw}?&body=${encodeURIComponent(body)}`;
}
