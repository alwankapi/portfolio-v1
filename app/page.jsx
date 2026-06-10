import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import NoiseOverlay from "@/components/NoiseOverlay";
import TechSkillSection from "@/components/TechSkillSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#f7f7f2] text-[#0a0a0a]">
      <NoiseOverlay />
      <Navbar />
      <div className="snap-y snap-mandatory overflow-y-auto scroll-smooth">
        <HeroSection />
        <AboutSection />
        <TechSkillSection />
      </div>
    </main>
  );
}