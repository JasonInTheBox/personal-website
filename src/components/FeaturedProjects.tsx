import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/Icons";
import { ProjectMedia } from "@/components/ProjectMedia";
import { projects } from "@/data/projects";

const FEATURED_COUNT = 3;

export function FeaturedProjects() {
  return (
    <section className="featured page-shell" aria-labelledby="featured-title">
      <div className="featured-heading">
        <h2 id="featured-title">Selected projects</h2>
      </div>

      <ol className="featured-list">
        {projects.slice(0, FEATURED_COUNT).map((project, index) => (
          <li key={project.slug}>
            <article className="featured-project">
              <Link
                href={`/projects/${project.slug}`}
                tabIndex={-1}
                aria-hidden="true"
                className="featured-media-link"
              >
                <ProjectMedia
                  project={project}
                  sizes="(max-width: 820px) 100vw, 58vw"
                  priority={index === 0}
                />
              </Link>
              <div className="featured-copy">
                <p className="featured-meta">
                  <span>{project.dates}</span>
                  <span className="status-badge">{project.status}</span>
                </p>
                <h3>
                  <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                </h3>
                <p>{project.description}</p>
                <p className="featured-tech">{project.technologies.slice(0, 4).join(" · ")}</p>
                <Link className="project-link" href={`/projects/${project.slug}`}>
                  Read case study <ArrowUpRightIcon />
                  <span className="visually-hidden">: {project.title}</span>
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ol>

      <Link className="text-link featured-all" href="/projects">
        All {projects.length} projects <ArrowUpRightIcon />
      </Link>
    </section>
  );
}
