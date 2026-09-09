import Link from "next/link";
import { ArrowUpRightIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import { siteConfig } from "@/data/site";

export function ContactCTA() {
  return (
    <section className="contact-cta" id="contact" aria-labelledby="contact-title">
      <div className="page-shell contact-cta-inner">
        <p className="section-label">Say hello</p>
        <h2 id="contact-title">Looking for a new grad engineer?</h2>
        <p>
          I’m currently seeking full-time software engineering opportunities and would
          be glad to talk about a role, a project, or the work your team is doing.
        </p>
        <div className="contact-actions">
          <a className="contact-button" href={`mailto:${siteConfig.email}`}>
            <MailIcon /> Email me <ArrowUpRightIcon />
          </a>
          <a className="contact-button" href={siteConfig.linkedin} target="_blank" rel="noreferrer">
            <LinkedInIcon /> LinkedIn <ArrowUpRightIcon />
          </a>
          <Link className="contact-button contact-page-link" href="/contact">
            Contact page <ArrowUpRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
