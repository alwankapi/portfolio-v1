import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import KineticGrid from "@/components/KineticGrid";
import NoiseOverlay from "@/components/NoiseOverlay";
import ProjectSection from "@/components/ProjectSection";
import TechSkillSection from "@/components/TechSkillSection";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-paper text-ink">
      <div className="fixed inset-0 z-0">
        <KineticGrid
          background="#0a0a0a"
          dotColor="#F4EBD0"
          lineColor="#D01B1B"
          trailColor="#D01B1B"
          spacing={40}
          radius={300}
          strength={3}
          trail={true}
        />
      </div>
      <NoiseOverlay />

      {/* Nav bar removed — the theme switch stays as a standalone floating control. */}
      <div className="fixed right-4 top-4 z-50 sm:right-8 sm:top-7">
        <ThemeToggle className="rounded-full" />
      </div>

      {/* No scroll-snap here — Lenis owns the scrolling now. */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <TechSkillSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
