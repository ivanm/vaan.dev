import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en";
import es from "./locales/es";

const lng: string =
  localStorage.getItem("language") !== null
    ? JSON.parse(localStorage.getItem("language"))
    : "en";
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es }
  },
  lng,
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
