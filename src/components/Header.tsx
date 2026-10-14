import { Link } from "react-router-dom";
import { htmlLang, localePath } from "../lib/lang";
import { useLang, useT } from "./LangContext";

interface Props {
  /** Page key, so the language switch lands on the same page in the other language. */
  page: "" | "resume";
}

// Wordmark plus what vaan.dev is, nav on the right. Sits over the hero on the home page.
export default function Header({ page }: Props) {
  const lang = useLang();
  const t = useT();
  const other = lang === "en" ? "es" : "en";
  const home = localePath(lang);

  return (
    <header className="top">
      <div className="wrap">
        <div className="brand">
          <Link className="mark wide" to={home} aria-label={t("header.home")}>
            <span>vaan</span>
            <span className="tld">.dev</span>
          </Link>
          <span className="desc">{t("header.desc")}</span>
        </div>
        <nav className="nav" aria-label={t("header.nav")}>
          <Link to={{ pathname: home, hash: "#no-01" }}>{t("header.work")}</Link>
          <Link to={{ pathname: home, hash: "#about" }}>{t("header.about")}</Link>
          <Link
            className="lang"
            to={localePath(other, page)}
            hrefLang={htmlLang(other)}
            lang={htmlLang(other)}
            aria-label={t("header.switchLabel")}
          >
            {t("header.switchShort")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
