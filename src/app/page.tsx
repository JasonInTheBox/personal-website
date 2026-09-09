import { ContactCTA } from "@/components/ContactCTA";
import { EngineeringIntro } from "@/components/EngineeringIntro";
import { Hero } from "@/components/Hero";
import { ProjectCarousel } from "@/components/ProjectCarousel";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <ProjectCarousel />
      <EngineeringIntro />
      <ContactCTA />
    </main>
  );
}
