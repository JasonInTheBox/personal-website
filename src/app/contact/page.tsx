import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRightIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact | Junjie Liu",
  description:
    "Contact Junjie Liu about full-time software engineering opportunities, projects, or technical work.",
};

export default function ContactPage() {
  return (
    <main id="main-content" className="contact-page">
      <header className="page-shell contact-page-hero">
        <p className="section-label">Contact</p>
        <h1>Let’s see what changes we’re looking to make.</h1>
        <p>
          I’m currently seeking full-time software engineering opportunities and would
          be glad to hear about a role, a project, or the work your team is doing.
        </p>
      </header>

      <section className="page-shell contact-channels" aria-labelledby="contact-options-title">
        <div className="contact-page-heading">
          <p className="section-label">Reach out</p>
          <h2 id="contact-options-title">Choose the channel that works for you.</h2>
        </div>

        <div className="contact-channel-list">
          <a href={`mailto:${siteConfig.email}`}>
            <span className="contact-channel-icon"><MailIcon /></span>
            <span>
              <small>Email</small>
              <strong>{siteConfig.email}</strong>
            </span>
            <ArrowUpRightIcon />
          </a>

          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
            <span className="contact-channel-icon"><LinkedInIcon /></span>
            <span>
              <small>LinkedIn</small>
              <strong>Connect with me</strong>
            </span>
            <ArrowUpRightIcon />
          </a>
        </div>
      </section>

      <section className="contact-page-footer">
        <div className="page-shell contact-page-footer-inner">
          <p className="section-label">Explore first</p>
          <h2>Want a little more context?</h2>
          <div>
            <Link className="text-link" href="/projects">
              Browse my projects <ArrowUpRightIcon />
            </Link>
            <Link className="text-link" href="/resume">
              Read my resume <ArrowUpRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
