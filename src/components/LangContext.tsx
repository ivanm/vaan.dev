import { createContext, useContext, useMemo } from "react";
import { useTranslation } from "react-i18next";
import type { Lang } from "../lib/lang";

export const LangContext = createContext<Lang>("en");

export const useLang = () => useContext(LangContext);

/** Translator bound to the page's language (from the URL), not to i18next's global language. */
export const useT = () => {
  const lang = useLang();
  const { i18n } = useTranslation();
  return useMemo(() => {
    const t = i18n.getFixedT(lang);
    return (key: string): string => String(t(key));
  }, [i18n, lang]);
};
