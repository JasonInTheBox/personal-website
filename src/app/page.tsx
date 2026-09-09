import { ContactCTA } from "@/components/ContactCTA";
import { Hero } from "@/components/Hero";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { TechnicalToolkit } from "@/components/TechnicalToolkit";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <ProjectCarousel />
      <TechnicalToolkit />
      <ContactCTA />
    </main>
  );
}
