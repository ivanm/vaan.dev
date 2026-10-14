import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import i18n from "../i18n";
import type { Lang } from "../lib/lang";
import Footer from "./Footer";
import Header from "./Header";
import { LangContext } from "./LangContext";

interface Props {
  lang: Lang;
  page: "" | "resume";
  children: ReactNode;
}

// Shell shared by every route: language context, header, footer, and scroll handling
// (jump to #hash targets after client-side navigation, otherwise start at the top).
export default function Page({ lang, page, children }: Props) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (i18n.language !== lang) i18n.changeLanguage(lang);
  }, [lang]);

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <LangContext.Provider value={lang}>
      <Header page={page} />
      {children}
      <Footer />
    </LangContext.Provider>
  );
}
