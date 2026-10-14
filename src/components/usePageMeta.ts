import { useEffect } from "react";
import { htmlLang, localePath, SITE, type Lang } from "../lib/lang";

interface PageMeta {
  lang: Lang;
  page: "" | "resume";
  title: string;
  description: string;
}

const setMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
};

const setLink = (selector: string, attrs: Record<string, string>) => {
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement("link");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
};

/**
 * Keeps <html lang>, the title, description, canonical, hreflang alternates and the
 * Open Graph / Twitter tags in step with the route. scripts/prerender-routes.js writes
 * the same values into each route's static HTML for crawlers that do not run JS.
 */
export function usePageMeta({ lang, page, title, description }: PageMeta) {
  useEffect(() => {
    const url = SITE + localePath(lang, page);
    document.documentElement.lang = htmlLang(lang);
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:locale", lang === "es" ? "es_MX" : "en_US");
    setMeta("property", "og:locale:alternate", lang === "es" ? "en_US" : "es_MX");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setLink('link[rel="canonical"]', { rel: "canonical", href: url });
    setLink('link[rel="alternate"][hreflang="en"]', { rel: "alternate", hreflang: "en", href: SITE + localePath("en", page) });
    setLink('link[rel="alternate"][hreflang="es-MX"]', { rel: "alternate", hreflang: "es-MX", href: SITE + localePath("es", page) });
    setLink('link[rel="alternate"][hreflang="x-default"]', { rel: "alternate", hreflang: "x-default", href: SITE + localePath("en", page) });
  }, [lang, page, title, description]);
}
