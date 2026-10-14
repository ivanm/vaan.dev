#!/usr/bin/env node
// npm "postbuild": writes a static copy of build/index.html for every non-root route, each with
// its own <html lang>, title, description, canonical URL, hreflang alternates and og/twitter tags.
//
// Why: GitHub Pages has no rewrites. Without these files, /es/ and /resume/ are answered by
// public/404.html (HTTP 404, then a JS redirect), so crawlers and link previews only ever see the
// English home page meta. With them, each route is a real 200 page with the right meta, and the
// SPA boots from it as usual. Strings come from src/locales/meta.json, the same file the app uses.
const fs = require("fs");
const path = require("path");
const meta = require("../src/locales/meta.json");

const SITE = "https://vaan.dev";
const BUILD = path.join(__dirname, "..", "build");
const src = fs.readFileSync(path.join(BUILD, "index.html"), "utf8");

const routes = [
  { dir: "es", lang: "es", page: "" },
  { dir: "resume", lang: "en", page: "resume" },
  { dir: "es/resume", lang: "es", page: "resume" },
];

const localePath = (lang, page) => (lang === "es" ? "/es/" : "/") + (page ? `${page}/` : "");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// Replace one attribute value on the single tag matched by `tagPattern`; fail loudly if the tag is
// missing so a template change cannot silently ship stale meta.
function setAttr(html, tagPattern, attr, value) {
  const re = new RegExp(`(<${tagPattern}[^>]*?\\s${attr}=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`prerender-routes: no match for <${tagPattern}> ${attr}`);
  return html.replace(re, `$1${esc(value)}$2`);
}

for (const r of routes) {
  const m = meta[r.lang];
  const title = r.page === "resume" ? m.resumeTitle : m.homeTitle;
  const description = r.page === "resume" ? m.resumeDescription : m.homeDescription;
  const url = SITE + localePath(r.lang, r.page);
  let html = src;

  html = setAttr(html, "html", "lang", r.lang === "es" ? "es-MX" : "en");
  if (!/<title>[^<]*<\/title>/.test(html)) throw new Error("prerender-routes: no <title>");
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);
  html = setAttr(html, 'meta name="description"', "content", description);
  html = setAttr(html, 'link rel="canonical"', "href", url);
  html = setAttr(html, 'link rel="alternate" hreflang="en"', "href", SITE + localePath("en", r.page));
  html = setAttr(html, 'link rel="alternate" hreflang="es-MX"', "href", SITE + localePath("es", r.page));
  html = setAttr(html, 'link rel="alternate" hreflang="x-default"', "href", SITE + localePath("en", r.page));
  html = setAttr(html, 'meta property="og:title"', "content", title);
  html = setAttr(html, 'meta property="og:description"', "content", description);
  html = setAttr(html, 'meta property="og:url"', "content", url);
  html = setAttr(html, 'meta property="og:locale"', "content", r.lang === "es" ? "es_MX" : "en_US");
  html = setAttr(html, 'meta property="og:locale:alternate"', "content", r.lang === "es" ? "en_US" : "es_MX");
  html = setAttr(html, 'meta name="twitter:title"', "content", title);
  html = setAttr(html, 'meta name="twitter:description"', "content", description);

  const out = path.join(BUILD, r.dir, "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  console.log(`prerender-routes: ${path.relative(BUILD, out)}  ${title}`);
}
