import Link from "next/link";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon } from "@/components/Icons";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="home-hero page-shell" id="top" aria-labelledby="hero-title">
      <div className="hero-name-block">
        <p className="hero-role">New Grad Software Engineer</p>
        <h1 id="hero-title">
          <span>Junjie</span>
          <span className="hero-last-name">Liu</span>
        </h1>
      </div>

      <div className="hero-detail">
        <p className="hero-school">UC Santa Barbara · B.S. Computer Science</p>
        <p className="hero-summary">
          I build full-stack, AI-integrated, desktop, and web applications where
          thoughtful interfaces meet solid systems.
        </p>
        <p className="hero-availability">
          <span aria-hidden="true" />
          Currently seeking full-time software engineering opportunities.
        </p>
      </div>

      <div className="hero-actions" aria-label="Portfolio links">
        <Link className="text-link text-link-strong" href="/projects">
          Explore projects <ArrowUpRightIcon />
        </Link>
        <Link className="text-link" href="/resume">
          Resume <ArrowUpRightIcon />
        </Link>
        <a className="text-link" href={siteConfig.github} target="_blank" rel="noreferrer">
          <GitHubIcon /> GitHub <ArrowUpRightIcon />
        </a>
        <a className="text-link" href={siteConfig.linkedin} target="_blank" rel="noreferrer">
          <LinkedInIcon /> LinkedIn <ArrowUpRightIcon />
        </a>
      </div>
    </section>
  );
}
