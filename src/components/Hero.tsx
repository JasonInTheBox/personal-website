import Link from "next/link";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import { siteConfig } from "@/data/site";

const coreStack = ["TypeScript", "React", "Node.js", "Python", "PostgreSQL", "AWS", "Electron"];

export function Hero() {
  return (
    <section className="hero page-shell" id="top" aria-labelledby="hero-title">
      <h1 id="hero-title">
        <span className="hero-name">Junjie Liu</span> builds full&#8209;stack and desktop
        software, from the interface to the cloud.
      </h1>
      <p className="hero-lede">
        Recent UC Santa Barbara Computer Science graduate. Project work in real-time
        desktop integrations, geospatial search, and campaign systems.
      </p>
      <p className="hero-status">
        <span aria-hidden="true" />
        Open to full-time software engineering roles
      </p>
      <div className="hero-cta" aria-label="Portfolio links">
        <Link className="button-primary" href="/resume">
          View résumé <ArrowUpRightIcon />
        </Link>
        <a className="text-link" href={`mailto:${siteConfig.email}`}>
          <MailIcon /> Email
        </a>
        <a className="text-link" href={siteConfig.github} target="_blank" rel="noreferrer">
          <GitHubIcon /> GitHub
        </a>
        <a className="text-link" href={siteConfig.linkedin} target="_blank" rel="noreferrer">
          <LinkedInIcon /> LinkedIn
        </a>
      </div>
      <p className="hero-stack">
        <span className="visually-hidden">Core stack: </span>
        {coreStack.join(" · ")}
      </p>
    </section>
  );
}
