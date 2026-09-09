import type { Metadata } from "next";
import { courseGroups, education, skillGroups, spokenLanguages } from "@/data/background";

export const metadata: Metadata = {
  title: "Background | Junjie Liu",
  description:
    "Junjie Liu’s computer science education, relevant coursework, technical toolkit, and spoken languages.",
};

export default function BackgroundPage() {
  return (
    <main id="main-content" className="background-page">
      <header className="page-shell background-hero">
        <p className="section-label">Education & technical background</p>
        <h1>The foundation behind the projects.</h1>
        <p>
          Computer science fundamentals, practical tools, and the technologies I’ve used
          across full-stack, desktop, mobile, data, and AI-integrated work.
        </p>
      </header>

      <section className="page-shell background-section education-detail" aria-labelledby="education-title">
        <div className="background-section-heading">
          <p className="section-label">Education</p>
          <h2 id="education-title">Where I studied.</h2>
        </div>
        <div className="degree-detail">
          <span aria-hidden="true">UCSB</span>
          <div>
            <h3>{education.institution}</h3>
            <p>{education.degree}</p>
            <p>{education.status}</p>
          </div>
        </div>
      </section>

      <section className="page-shell background-section coursework" aria-labelledby="coursework-title">
        <div className="background-section-heading">
          <p className="section-label">Coursework</p>
          <h2 id="coursework-title">Relevant courses.</h2>
        </div>
        <div className="course-groups">
          {courseGroups.map((group) => (
            <article key={group.title}>
              <header>
                <h3>{group.title}</h3>
              </header>
              <ul className="course-list">
                {group.courses.map((course) => (
                  <li key={`${course.code}-${course.title}`}>
                    <span>{course.code}</span>
                    <p>{course.title}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell background-section toolkit" aria-labelledby="toolkit-title">
        <div className="background-section-heading">
          <p className="section-label">Technical toolkit</p>
          <h2 id="toolkit-title">Languages, frameworks, and tools.</h2>
        </div>
        <div className="toolkit-groups">
          {skillGroups.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.items.join(" / ")}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell background-section spoken-languages" aria-labelledby="languages-title">
        <div className="background-section-heading">
          <p className="section-label">Spoken languages</p>
          <h2 id="languages-title">Languages I speak.</h2>
        </div>
        <ul className="spoken-language-list">
          {spokenLanguages.map((language) => (
            <li key={language.name}>
              <h3>{language.name}</h3>
              <p>{language.proficiency}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
