import { ContactCTA } from "@/components/ContactCTA";
import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { TechnicalToolkit } from "@/components/TechnicalToolkit";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <FeaturedProjects />
      <TechnicalToolkit />
      <ContactCTA />
    </main>
  );
}
