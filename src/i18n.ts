import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en";
import es from "./locales/es";
import { langFromPath } from "./lib/lang";

// The URL decides the language (/es/... is Spanish). The GitHub Pages 404.html redirect
// script in public/index.html restores the real path before this module runs.
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  lng: langFromPath(window.location.pathname),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
