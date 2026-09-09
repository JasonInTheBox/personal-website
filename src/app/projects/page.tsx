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
        <p className="section-label">Projects cross products and systems</p>
        <h1>Projects that taught me to see the whole system.</h1>
        <div>
          <p>
            Desktop clients, campaign workflow, geospatial search, and mobile AI—built
            by following each problem across the interface, API, and data layer.
          </p>
        </div>
      </header>

      <section className="page-shell project-index" aria-label="All projects">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.slug} />
        ))}
      </section>
    </main>
  );
}
