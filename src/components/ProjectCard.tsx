import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/Icons";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className={`index-project index-project-${index + 1}`}>
      <header className="index-project-header">
        <span aria-hidden="true">0{index + 1}</span>
        <div>
          <p>{project.eyebrow}</p>
          <p className="index-project-timing">{project.dates} · {project.status}</p>
        </div>
      </header>
      <div className="index-project-copy">
        <h2>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h2>
        <p className="index-project-description">{project.description}</p>

        <div className="index-project-built">
          <p className="section-label">What I built</p>
          <p>{project.built}</p>
        </div>

        <ul className="index-project-highlights" aria-label="Project highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <footer className="index-project-footer">
          <p>{project.technologies.join(" / ")}</p>
          <Link className="project-link" href={`/projects/${project.slug}`}>
            Learn more <ArrowUpRightIcon />
          </Link>
        </footer>
      </div>
    </article>
  );
}
