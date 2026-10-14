import { person } from "../data/resume";
import { LinkedInGlyph, XGlyph } from "./Icons";
import { useT } from "./LangContext";
import ThemeToggle from "./ThemeToggle";

// Contact first (e-mail, then quiet LinkedIn and X glyphs), theme on the right; colophon below.
export default function Footer() {
  const t = useT();
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="foot">
          <div className="reach">
            <a className="mail" href={`mailto:${person.email}`}>
              {person.email}
            </a>
            <ul className="social" aria-label={t("footer.social")}>
              <li>
                <a href={person.linkedin} rel="noopener noreferrer" aria-label={t("footer.linkedin")}>
                  <LinkedInGlyph />
                </a>
              </li>
              <li>
                <a href={person.x} rel="noopener noreferrer me" aria-label={t("footer.x")}>
                  <XGlyph />
                </a>
              </li>
            </ul>
          </div>
          <ThemeToggle />
        </div>
        <div className="foot num">
          <span>{t("footer.colophon")}</span>
        </div>
      </div>
    </footer>
  );
}
