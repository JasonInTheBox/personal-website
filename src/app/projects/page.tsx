import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Junjie Liu",
  description:
    "Explore my software engineering projects across desktop, full-stack web, AI-assisted discovery, data systems, and mobile applications.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className="projects-page">
      <header className="page-shell page-intro">
        <h1>Projects</h1>
        <div>
          <p>
            Desktop clients, campaign workflows, geospatial search, mobile AI, and a
            bilingual Analects learning app in progress—each shaped by the connections
            between its interface, API, and data layer.
          </p>
        </div>
      </header>

      <ol className="page-shell project-list" aria-label="All projects">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.slug} />
        ))}
      </ol>
    </main>
  );
}
