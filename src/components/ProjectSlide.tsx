import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/Icons";
import type { Project } from "@/data/projects";

type ProjectSlideProps = {
  project: Project;
  index: number;
};

export function ProjectSlide({ project, index }: ProjectSlideProps) {
  return (
    <article className={`project-slide project-slide-${index + 1}`}>
      <div className="slide-number" aria-hidden="true">
        0{index + 1}
      </div>

      <div className="slide-copy">
        <p className="slide-type">{project.eyebrow}</p>
        <p className="slide-meta">{project.dates} · {project.status}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="slide-highlights" aria-label={`${project.title} highlights`}>
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>

      <div className="slide-side">
        <p className="slide-tech">{project.technologies.slice(0, 4).join(" · ")}</p>
        <Link className="project-link" href={`/projects/${project.slug}`}>
          View project <ArrowUpRightIcon />
        </Link>
      </div>
    </article>
  );
}
