import Link from "next/link";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon } from "@/components/Icons";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="home-hero page-shell" id="top" aria-labelledby="hero-title">
      <div className="hero-name-block">
        <p className="hero-role">{siteConfig.role}</p>
        <h1 id="hero-title">
          <span>Junjie</span>
          <span className="hero-last-name">Liu</span>
        </h1>
      </div>

      <div className="hero-detail">
        <p className="hero-school">Qualifications at a glance</p>
        <p className="hero-summary">
          I build full-stack and desktop software across the interface, API, data,
          and cloud layers—with project work in real-time integrations, geospatial
          search, and campaign systems.
        </p>
        <dl className="hero-credentials">
          <div>
            <dt>Core stack &amp; tools</dt>
            <dd>
              TypeScript · JavaScript · Python · Java · C++ · React · Next.js ·
              Node.js · Express.js · PostgreSQL · AWS · Docker · Git · CI/CD · REST
              APIs · WebSockets · Jest · Playwright
            </dd>
          </div>
        </dl>
        <p className="hero-availability">
          <span aria-hidden="true" />
          <strong>Seeking full-time software engineering opportunities.</strong>
        </p>
      </div>

      <div className="hero-actions" aria-label="Portfolio links">
        <Link className="text-link text-link-strong" href="/resume">
          View web résumé <ArrowUpRightIcon />
        </Link>
        <Link className="text-link" href="/projects">
          Projects <ArrowUpRightIcon />
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
