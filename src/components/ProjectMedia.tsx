import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectMediaProps = {
  project: Project;
  sizes: string;
  priority?: boolean;
};

export function ProjectMedia({ project, sizes, priority }: ProjectMediaProps) {
  return (
    <div className="project-media">
      {project.image ? (
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes={sizes}
          priority={priority}
        />
      ) : (
        <div className="project-media-placeholder" aria-hidden="true">
          <span>{project.eyebrow}</span>
          <strong>{project.title}</strong>
        </div>
      )}
    </div>
  );
}
