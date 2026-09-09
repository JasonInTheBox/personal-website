import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ResumeActions } from "@/components/ResumeActions";
import { ResumePdfPreview } from "@/components/ResumePdfPreview";
import { education, skillGroups } from "@/data/background";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Web Résumé | Junjie Liu",
  description:
    "Junjie Liu’s browser-friendly software engineering résumé, including education, technical skills, and selected projects.",
};

export default function ResumePage() {
  return (
    <main id="main-content" className="resume-page">
      <header className="page-shell resume-hero">
        <div className="resume-identity">
          <figure className="resume-portrait">
            <Image
              src="/resume/junjie-graduation.jpg"
              alt="Portrait of Junjie Liu in UC Santa Barbara graduation regalia"
              width={416}
              height={624}
              sizes="(max-width: 720px) 120px, 150px"
              priority
            />
          </figure>
          <div>
            <p className="section-label">Web résumé</p>
            <h1>{siteConfig.name}</h1>
            <p className="resume-role">{siteConfig.role}</p>
          </div>
        </div>
        <div className="resume-contact">
          <ResumeActions />
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </header>

      <ResumePdfPreview />

      <div className="page-shell resume-content">
        <section className="resume-section resume-summary" aria-labelledby="resume-summary-title">
          <p className="resume-section-label">Profile</p>
          <div>
            <h2 id="resume-summary-title">Software engineer with a whole-system perspective.</h2>
            <p>
              Recent UC Santa Barbara Computer Science graduate building full-stack,
              desktop, mobile, data, and AI-integrated applications. Interested in the
              connection between thoughtful interfaces and reliable systems.
            </p>
          </div>
        </section>

        <section className="resume-section" aria-labelledby="resume-education-title">
          <p className="resume-section-label">Education</p>
          <div className="resume-entry">
            <div>
              <h2 id="resume-education-title">{education.institution}</h2>
              <p>{education.degree}</p>
            </div>
            <span>{education.status}</span>
          </div>
        </section>

        <section className="resume-section" aria-labelledby="resume-skills-title">
          <p className="resume-section-label">Technical skills</p>
          <div className="resume-skill-groups">
            <h2 className="visually-hidden" id="resume-skills-title">Technical skills</h2>
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section" aria-labelledby="resume-projects-title">
          <p className="resume-section-label">Selected projects</p>
          <div className="resume-projects">
            <h2 className="visually-hidden" id="resume-projects-title">Selected projects</h2>
            {projects.map((project) => (
              <article key={project.slug}>
                <div className="resume-project-heading">
                  <h3>
                    <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                  </h3>
                  <span>{project.dates} · {project.status}</span>
                </div>
                <p>{project.description}</p>
                <small>{project.technologies.join(" · ")}</small>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
