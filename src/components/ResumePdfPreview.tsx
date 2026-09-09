import { siteConfig } from "@/data/site";

export function ResumePdfPreview() {
  return (
    <section className="page-shell resume-pdf-disclosure" aria-label="PDF résumé preview">
      <details className="resume-pdf-preview">
        <summary>
          <span>
            <strong>Preview PDF résumé</strong>
            <small>Expand the original one-page document</small>
          </span>
          <span className="resume-pdf-toggle" aria-hidden="true">+</span>
        </summary>
        <div className="resume-pdf-frame">
          <iframe
            src={`${siteConfig.resumePdf}#view=FitH&toolbar=1`}
            title="Junjie Liu PDF résumé"
          />
        </div>
      </details>
    </section>
  );
}
