import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRightIcon, GitHubIcon } from "@/components/Icons";
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
        <p className="case-meta">{project.dates} · {project.status}</p>
        {project.github || project.repositoryNote ? (
          <section className="case-links" aria-label="Project links">
            {project.github ? (
              <a href={project.github} target="_blank" rel="noreferrer">
                <GitHubIcon /> View repository <ArrowUpRightIcon />
              </a>
            ) : project.repositoryNote ? (
              <span className="repository-note">{project.repositoryNote}</span>
            ) : null}
          </section>
        ) : null}
        <h1>{project.title}</h1>
        <p className="case-summary">{project.description}</p>
        <ul className="case-tech" aria-label="Technologies used">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        
      </header>

      <div className="page-shell case-content">
        <section aria-labelledby="problem-title">
          <p className="section-label">The problem</p>
          <h2 id="problem-title">Why this needed to exist.</h2>
          <p className="case-large-copy">{project.details.problem}</p>
        </section>

        <section className="case-built" aria-labelledby="built-title">
          <p className="section-label">What I built</p>
          <h2 id="built-title">From interface to underlying system.</h2>
          <p>{project.built}</p>
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </section>

        <section className="architecture" aria-labelledby="architecture-title">
          <div>
            <p className="section-label">System outline</p>
            <h2 id="architecture-title">How the pieces connect.</h2>
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
          <p className="section-label">Engineering focus</p>
          <h2 id="decisions-title">The work behind the screen.</h2>
          <div>
            {project.details.engineering.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </section>

        {project.github || project.repositoryNote ? (
          <section className="case-links" aria-label="Project links">
            {project.github ? (
              <a href={project.github} target="_blank" rel="noreferrer">
                <GitHubIcon /> View repository <ArrowUpRightIcon />
              </a>
            ) : project.repositoryNote ? (
              <span className="repository-note">{project.repositoryNote}</span>
            ) : null}
          </section>
        ) : null}
      </div>

      <nav className="more-projects" aria-labelledby="more-projects-title">
        <div className="page-shell more-projects-inner">
          <p className="section-label" id="more-projects-title">Explore other projects</p>
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
