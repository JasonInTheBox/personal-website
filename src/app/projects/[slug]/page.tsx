import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRightIcon, GitHubIcon } from "@/components/Icons";
import { ProjectMedia } from "@/components/ProjectMedia";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: `${project.title} | Junjie Liu`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Junjie Liu`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const otherProjects = projects.filter((item) => item.slug !== project.slug);

  return (
    <main id="main-content" className={`case-study case-study-${currentIndex + 1}`}>
      <header className="page-shell case-hero">
        <div className="case-breadcrumb">
          <Link href="/projects">Projects</Link>
          <span aria-hidden="true">/</span>
          <span>{project.title}</span>
        </div>
        <p className="case-eyebrow">{project.eyebrow}</p>
        <h1>{project.title}</h1>
        <p className="case-summary">{project.description}</p>
        <dl className="case-facts">
          <div>
            <dt>Timeline</dt>
            <dd>{project.dates}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>
              <span className="status-badge">{project.status}</span>
            </dd>
          </div>
          <div>
            <dt>{project.stackLabel ?? "Stack"}</dt>
            <dd>{project.technologies.join(", ")}</dd>
          </div>
          <div>
            <dt>Links</dt>
            <dd className="case-fact-links">
              {project.website ? (
                <a href={project.website} target="_blank" rel="noreferrer">
                  Live site <ArrowUpRightIcon />
                </a>
              ) : null}
              {project.github && !project.repositoryNote ? (
                <a href={project.github} target="_blank" rel="noreferrer">
                  <GitHubIcon /> Code <ArrowUpRightIcon />
                </a>
              ) : null}
              {project.repositoryNote ? (
                <span className="case-fact-note">{project.repositoryNote}</span>
              ) : null}
              {!project.website && !project.github && !project.repositoryNote ? (
                <span>Coming soon</span>
              ) : null}
            </dd>
          </div>
        </dl>
        <ProjectMedia project={project} sizes="(max-width: 1180px) 100vw, 1180px" priority />
      </header>

      <div className="page-shell case-content">
        <section aria-labelledby="problem-title">
          <h2 id="problem-title">The problem</h2>
          <p className="case-large-copy">{project.details.problem}</p>
        </section>

        <section className="case-built" aria-labelledby="built-title">
          <h2 id="built-title">{project.phase === "in-progress" ? "What I’m building" : "What I built"}</h2>
          <p>{project.built}</p>
          {project.references?.map((reference) => (
            <p className="case-reference" key={reference.url}>
              Text reference: {" "}
              <a href={reference.url} target="_blank" rel="noreferrer">
                {reference.label}
              </a>
            </p>
          ))}
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </section>

        <section className="architecture" aria-labelledby="architecture-title">
          <div>
            <h2 id="architecture-title">{project.phase === "in-progress" ? "Planned system outline" : "System outline"}</h2>
          </div>
          <ol>
            {project.details.architecture.map((item, index) => (
              <li key={item}>
                <span>0{index + 1}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="decisions" aria-labelledby="decisions-title">
          <h2 id="decisions-title">{project.phase === "in-progress" ? "Design priorities" : "Engineering focus"}</h2>
          <div>
            {project.details.engineering.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </section>

        {project.github || project.website || project.repositoryNote ? (
          <section className="case-links" aria-label="Project links">
            {project.github && !project.repositoryNote ? (
              <a href={project.github} target="_blank" rel="noreferrer">
                <GitHubIcon /> View repository <ArrowUpRightIcon />
              </a>
            ) : project.repositoryNote ? (
              <span className="repository-note">{project.repositoryNote}</span>
            ) : null}
            {project.website ? (
              <a href={project.website} target="_blank" rel="noreferrer">
                Visit website <ArrowUpRightIcon />
              </a>
            ) : null}
          </section>
        ) : null}
      </div>

      <nav className="more-projects" aria-labelledby="more-projects-title">
        <div className="page-shell more-projects-inner">
          <h2 id="more-projects-title">Other projects</h2>
          <div className="more-project-grid">
            {otherProjects.map((otherProject) => {
              const projectIndex = projects.findIndex((item) => item.slug === otherProject.slug);

              return (
                <Link
                  className={`more-project-link more-project-link-${projectIndex + 1}`}
                  href={`/projects/${otherProject.slug}`}
                  key={otherProject.slug}
                >
                  <span>{otherProject.eyebrow}</span>
                  <strong>{otherProject.title}</strong>
                  <ArrowUpRightIcon />
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </main>
  );
}
