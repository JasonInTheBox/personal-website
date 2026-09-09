import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <Link className="footer-name" href="/">
          Junjie Liu<span aria-hidden="true">.</span>
        </Link>
        <p>New Grad Software Engineer · UC Santa Barbara CS</p>
        <div className="footer-links">
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/background">Background</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
        <p className="footer-copyright">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
