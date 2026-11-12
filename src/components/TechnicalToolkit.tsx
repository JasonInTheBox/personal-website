import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/Icons";
import { skillGroups } from "@/data/background";

export function TechnicalToolkit() {
  return (
    <section className="toolkit-strip page-shell" aria-labelledby="toolkit-title">
      <h2 id="toolkit-title" className="section-label">
        Toolkit
      </h2>
      <dl>
        {skillGroups.map((group) => (
          <div key={group.title}>
            <dt>{group.title}</dt>
            <dd>{group.items.join(" · ")}</dd>
          </div>
        ))}
      </dl>
      <Link className="text-link" href="/background">
        Coursework and full background <ArrowUpRightIcon />
      </Link>
    </section>
  );
}
