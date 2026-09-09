import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Junjie Liu | New Grad Software Engineer",
  description:
    "Junjie Liu is a recent UC Santa Barbara Computer Science graduate building full-stack, AI-powered, desktop, web, and mobile applications.",
  applicationName: "Junjie Liu Portfolio",
  authors: [{ name: "Junjie Liu" }],
  keywords: ["Junjie Liu", "software engineer", "UC Santa Barbara", "portfolio"],
  openGraph: {
    title: "Junjie Liu | New Grad Software Engineer",
    description:
      "Recent UC Santa Barbara Computer Science graduate building practical software across web, desktop, mobile, and AI.",
    type: "website",
    locale: "en_US",
    siteName: "Junjie Liu Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Junjie Liu | New Grad Software Engineer",
    description:
      "Recent UC Santa Barbara Computer Science graduate building practical software across web, desktop, mobile, and AI.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
