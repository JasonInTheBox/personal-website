"use client";

import { siteConfig } from "@/data/site";

export function ResumeActions() {
  return (
    <>
      <a className="resume-download" href={siteConfig.resumePdf} download>
        Download PDF résumé
        <span aria-hidden="true">↓</span>
      </a>
      <button className="resume-print" type="button" onClick={() => window.print()}>
        Print web résumé
        <span aria-hidden="true">↗</span>
      </button>
    </>
  );
}
