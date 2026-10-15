import { Arrow } from "../components/Icons";
import { useLang, useT } from "../components/LangContext";
import { usePageMeta } from "../components/usePageMeta";
import { education, experience, person, skills } from "../data/resume";

// Résumé in the Plinth style. The print stylesheet (styles/resume.css) turns it into a one-column,
// black-on-white document, so "Print / Save as PDF" gives a clean PDF from any browser.
export default function Resume() {
  const lang = useLang();
  const t = useT();
  usePageMeta({ lang, page: "resume", title: t("meta.resumeTitle"), description: t("meta.resumeDescription") });

  return (
    <main className="cv">
      <div className="wrap">
        <div className="grid cv-head">
          <div className="cv-intro">
            <p className="eyebrow">
              <b>{t("resume.eyebrow")}</b>
              <i aria-hidden="true"></i>
              <span>
                {person.title[lang]} · {person.place[lang]}
              </span>
            </p>
            <h1 className="wide">{person.name}</h1>
            <p className="line">{person.summary[lang]}</p>
            <ul className="cv-contact" aria-label={t("resume.contact")}>
              {person.email ? (
                <li>
                  <a href={`mailto:${person.email}`}>{person.email}</a>
                </li>
              ) : null}
              <li>
                <a href={person.linkedin} rel="noopener">
                  linkedin.com/in/imayoral
                </a>
              </li>
              <li>
                <a href={person.x} rel="noopener me">
                  x.com/vaan
                </a>
              </li>
              <li>
                <a href={person.site}>vaan.dev</a>
              </li>
            </ul>
          </div>
          <div className="cv-actions">
            <button className="btn solid" type="button" onClick={() => window.print()}>
              {t("resume.print")}
            </button>
          </div>
        </div>

        <section className="cv-sec" aria-labelledby="cv-exp">
          <h2 className="label" id="cv-exp">
            <b>{t("resume.experience")}</b>
          </h2>
          {experience.map((r) => (
            <article className="grid cv-entry" key={r.id}>
              <p className="cv-dates num">{r.dates[lang]}</p>
              <div className="cv-body">
                <h3>
                  {r.url ? (
                    <a href={r.url} rel="noopener">
                      {r.company} <Arrow />
                    </a>
                  ) : (
                    r.company
                  )}
                  {r.org && <span className="cv-org"> · {r.org[lang]}</span>}
                </h3>
                <p className="cv-role">{r.role[lang]}</p>
                <ul>
                  {r.items.map((it, i) => (
                    <li key={i}>{it[lang]}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <section className="cv-sec" aria-labelledby="cv-skills">
          <h2 className="label" id="cv-skills">
            <b>{t("resume.skills")}</b>
          </h2>
          {skills.map((s) => (
            <div className="grid cv-entry cv-skill" key={s.name.en}>
              <h3 className="cv-dates">{s.name[lang]}</h3>
              <p className="cv-body">{s.items[lang]}</p>
            </div>
          ))}
        </section>

        <section className="cv-sec" aria-labelledby="cv-edu">
          <h2 className="label" id="cv-edu">
            <b>{t("resume.education")}</b>
          </h2>
          {education.map((e) => (
            <article className="grid cv-entry" key={e.school.en}>
              <p className="cv-dates num">{e.dates[lang]}</p>
              <div className="cv-body">
                <h3>{e.degree[lang]}</h3>
                <p className="cv-role">{e.school[lang]}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
