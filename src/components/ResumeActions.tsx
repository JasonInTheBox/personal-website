"use client";

export function ResumeActions() {
  return (
    <button className="resume-print" type="button" onClick={() => window.print()}>
      Print or save as PDF
      <span aria-hidden="true">↗</span>
    </button>
  );
}
