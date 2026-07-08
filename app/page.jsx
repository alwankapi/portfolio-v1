import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NoiseOverlay from "@/components/NoiseOverlay";
import ProjectSection from "@/components/ProjectSection";
import TechSkillSection from "@/components/TechSkillSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#f7f7f2] text-[#0a0a0a]">
      <NoiseOverlay />
      <div className="snap-y snap-mandatory overflow-y-auto scroll-smooth">
        <HeroSection />
        <AboutSection />
        <TechSkillSection />
        <ProjectSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
