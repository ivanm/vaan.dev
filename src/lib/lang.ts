// Language lives in the URL: English at the root, Spanish (es-MX) under /es/.
// Every page exists in both languages at mirrored paths.
export type Lang = "en" | "es";

export const SITE = "https://vaan.dev";

/** BCP 47 tag used for <html lang>, hreflang and og:locale. */
export const htmlLang = (lang: Lang) => (lang === "es" ? "es-MX" : "en");

export const langFromPath = (pathname: string): Lang =>
  /^\/es(\/|$)/.test(pathname) ? "es" : "en";

/** Path of a page in the given language, with a trailing slash (the canonical form GitHub Pages serves). */
export const localePath = (lang: Lang, page: "" | "resume" = "") => {
  const prefix = lang === "es" ? "/es/" : "/";
  return page ? `${prefix}${page}/` : prefix;
};

/** The page key of a pathname, ignoring language and trailing slash. */
export const pageFromPath = (pathname: string): "" | "resume" => {
  const rest = pathname.replace(/^\/es(?=\/|$)/, "").replace(/\/+$/, "");
  return rest === "/resume" ? "resume" : "";
};
