export type Locale = "fr" | "en";

export type Bilingual<T = string> = { fr: T; en: T };

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
 */
export function getAltLocaleUrl(pathname: string, currentLang: Locale): string {
  if (currentLang === "en") {
    const stripped = pathname.replace(/^\/en/, "");
    return stripped === "" ? "/" : stripped;
  }
  return pathname === "/" ? "/en/" : `/en${pathname}`;
}

/**
 * Build a locale-aware href for in-app links.
 * t-aware: pass a FR slug for both locales, EN gets /en prefix.
 */
export function localeHref(path: string, lang: Locale): string {
  if (path.startsWith("http") || path.startsWith("tel:") || path.startsWith("mailto:") || path.startsWith("#")) {
    return path;
  }
  if (lang === "en") {
    if (path === "/") return "/en/";
    return `/en${path}`;
  }
  return path;
}
