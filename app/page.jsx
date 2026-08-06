import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import NoiseOverlay from "@/components/providers/NoiseOverlay";
import ProjectSection from "@/components/sections/ProjectSection";
import TechSkillSection from "@/components/sections/TechSkillSection";
import ThemeToggle from "@/components/layout/ThemeToggle";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-paper text-ink">
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
