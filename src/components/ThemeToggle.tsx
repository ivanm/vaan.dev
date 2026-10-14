import { useState } from "react";
import { ThemeGlyph } from "./Icons";
import { useT } from "./LangContext";

type Theme = "dark" | "light";
const KEY = "vaan-theme";

// Dark is the default; light is an explicit choice, remembered per viewer when storage allows.
// public/index.html applies the saved choice before first paint; this keeps it in sync.
export const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  if (theme === "light") root.dataset.theme = "light";
  else delete root.dataset.theme;
  document.querySelector<HTMLMetaElement>("meta[name=color-scheme]")?.setAttribute("content", theme);
  document
    .querySelector<HTMLMetaElement>("meta[name=theme-color]")
    ?.setAttribute("content", theme === "light" ? "#ECE8E1" : "#111214");
};

const current = (): Theme => (document.documentElement.dataset.theme === "light" ? "light" : "dark");

export default function ThemeToggle() {
  const t = useT();
  const [theme, setTheme] = useState<Theme>(current);

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    applyTheme(next);
    setTheme(next);
    try {
      localStorage.setItem(KEY, next);
    } catch (e) {
      // Storage can be blocked (private mode); the choice then lasts for this page view only.
    }
  };

  return (
    <button className="theme" type="button" aria-pressed={theme === "light"} onClick={toggle}>
      <ThemeGlyph />
      {t("footer.theme")}
    </button>
  );
}
