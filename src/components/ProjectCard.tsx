import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/Icons";
import { ProjectMedia } from "@/components/ProjectMedia";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <li>
      <Link className="project-row" href={`/projects/${project.slug}`}>
        <span className="project-row-number" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <ProjectMedia project={project} sizes="(max-width: 720px) 100vw, 220px" />
        <span className="project-row-copy">
          <strong>{project.title}</strong>
          <span>{project.description}</span>
          <span className="project-row-tech">{project.technologies.slice(0, 4).join(" · ")}</span>
        </span>
        <span className="project-row-meta">
          <span>{project.dates}</span>
          <span className="status-badge">{project.status}</span>
        </span>
        <ArrowUpRightIcon className="project-row-arrow" />
      </Link>
    </li>
  );
}
