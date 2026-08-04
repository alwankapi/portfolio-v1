import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import KineticGrid from "@/components/KineticGrid";
import MarqueeDivider from "@/components/MarqueeDivider";
import Navbar from "@/components/Navbar";
import NoiseOverlay from "@/components/NoiseOverlay";
import ProjectSection from "@/components/ProjectSection";
import TechSkillSection from "@/components/TechSkillSection";

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
      <Navbar />
      {/* No scroll-snap here — Lenis owns the scrolling now. */}
      <div className="relative z-10">
        <HeroSection />
        <MarqueeDivider />
        <AboutSection />
        <ProjectSection />
        <TechSkillSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
