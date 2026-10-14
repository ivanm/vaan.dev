import { Link } from "react-router-dom";
import { Arrow } from "../components/Icons";
import { useLang, useT } from "../components/LangContext";
import Turntable from "../components/Turntable";
import { usePageMeta } from "../components/usePageMeta";
import { localePath } from "../lib/lang";

const DUMMYFORGE = "https://dummyforge.com";
const LINKEDIN = "https://www.linkedin.com/in/imayoral/";
const PARTS = `${process.env.PUBLIC_URL}/media/parts.webp`;

export default function Home() {
  const lang = useLang();
  const t = useT();
  usePageMeta({ lang, page: "", title: t("meta.homeTitle"), description: t("meta.homeDescription") });

  return (
    <main>
      {/* Hero: one room. The placard on the left and the plinth on the right share the same floor line. */}
      <section className="room" aria-labelledby="h">
        <div className="wrap grid hero">
          <div className="lead">
            <p className="eyebrow num">
              <b>No. 01</b>
              <i aria-hidden="true"></i>
              <span>2026</span>
            </p>
            <h1 id="h" className="wide">
              DummyForge
            </h1>
            <p className="line">{t("hero.line")}</p>
            <div className="cta">
              <a className="btn solid" href={DUMMYFORGE} rel="noopener">
                {t("hero.open")} <Arrow />
              </a>
              <p className="facts">{t("hero.facts")}</p>
            </div>
          </div>
          <Turntable />
        </div>
      </section>

      <section id="no-01" className="sec" aria-labelledby="w1">
        <div className="wrap">
          <p className="label">
            <b>{t("work.label")}</b>
            <i aria-hidden="true"></i>
            <span>DummyForge</span>
          </p>
          <div className="grid detail">
            <div className="text">
              <h2 id="w1">{t("work.title")}</h2>
              <ul className="ledger">
                <li>
                  {t("work.body")} <span>{t("work.bodyTag")}</span>
                </li>
                <li>
                  {t("work.color")} <span>{t("work.colorTag")}</span>
                </li>
                <li>
                  {t("work.pieces")} <span>{t("work.piecesTag")}</span>
                </li>
                <li>
                  {t("work.export")} <span>3MF · STL · OBJ</span>
                </li>
              </ul>
              <a className="go" href={DUMMYFORGE} rel="noopener">
                dummyforge.com <Arrow />
              </a>
            </div>
            <figure className="plate">
              <img src={PARTS} width={1600} height={1000} loading="lazy" decoding="async" alt={t("work.plateAlt")} />
              <figcaption>
                <span>
                  <b>Debug-Man 1.0</b> · {t("work.plateCount")}
                </span>
                <span>{t("work.plateNote")}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="about" className="sec" aria-labelledby="ab">
        <div className="wrap">
          <h2 className="label" id="ab">
            <b>{t("about.label")}</b>
          </h2>
          <div className="grid about">
            <div className="text">
              <p>{t("about.text")}</p>
              <div className="btns">
                <Link className="btn solid" to={localePath(lang, "resume")}>
                  {t("about.resume")}
                </Link>
                <a className="btn" href={LINKEDIN} rel="noopener">
                  LinkedIn <Arrow />
                </a>
              </div>
            </div>
            {/* The studio's catalogue: balances the closing section without more text about the person. */}
            <div className="index">
              <p className="index-label">{t("about.index")}</p>
              <ul className="ledger">
                <li>
                  <a href={DUMMYFORGE} rel="noopener">
                    DummyForge <Arrow />
                  </a>
                  <span className="num">{t("about.indexNow")}</span>
                </li>
                <li className="next">
                  {t("about.indexNext")} <span>{t("about.indexNextTag")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
