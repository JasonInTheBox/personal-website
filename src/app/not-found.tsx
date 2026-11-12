import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/Icons";

export default function NotFound() {
  return (
    <main id="main-content" className="page-shell not-found">
      <h1>Page not found</h1>
      <p>That link may be out of date. Here are the main places to go instead.</p>
      <div className="hero-cta">
        <Link className="button-primary" href="/projects">
          View projects <ArrowUpRightIcon />
        </Link>
        <Link className="text-link" href="/resume">
          Résumé
        </Link>
        <Link className="text-link" href="/">
          Home
        </Link>
      </div>
    </main>
  );
}
