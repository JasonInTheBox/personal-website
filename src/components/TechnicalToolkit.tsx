import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/Icons";
import { skillGroups } from "@/data/background";

export function TechnicalToolkit() {
  return (
    <section
      className="technical-toolkit page-shell"
      id="toolkit"
      aria-labelledby="toolkit-title"
    >
      <p className="section-label">Technical toolkit</p>

      <div className="toolkit-heading-row">
        <h2 id="toolkit-title">The stack behind my work.</h2>
        <p>
          I’ve used these technologies across full-stack products, real-time desktop
          integrations, mobile applications, geospatial search, automated testing,
          and AWS-focused cloud work.
        </p>
      </div>

      <div className="home-toolkit-grid">
        {skillGroups.map((group) => (
          <article key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.items.join(" / ")}</p>
          </article>
        ))}
      </div>

      <div className="toolkit-footer">
        <Link className="text-link" href="/background">
          See coursework and complete background <ArrowUpRightIcon />
        </Link>
      </div>
    </section>
  );
}
