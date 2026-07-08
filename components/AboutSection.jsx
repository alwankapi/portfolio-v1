"use client";

import ProfileCard from "@/components/ProfileCard";

export default function AboutSection() {
  const skills = [
    "PHP",
    "Laravel",
    "CodeIgniter",
    "JavaScript",
    "Tailwind CSS",
    "Flutter",
    "MySQL",
    "Git",
    "REST API",
    "UI/UX",
  ];

  const stats = [
    { label: "Projects", value: "20+" },
    { label: "Experience", value: "2+ YRS" },
    { label: "Stacks", value: "10+" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen snap-start overflow-hidden bg-[#f5f0e8] px-0 py-0 text-[#0a0a0a] selection:bg-black selection:text-[#f5f0e8]"
    >
      {/* === BRUTALIST GRID BACKGROUND === */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #0a0a0a 0px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #0a0a0a 0px, transparent 1px, transparent 60px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* === TOP BLACK BAR === */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 z-20 h-2 w-full bg-black"
      />
      {/* === LEFT BLACK BAR === */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 z-20 h-full w-3 bg-black"
      />
      {/* === BOTTOM BLACK BAR === */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 z-20 h-2 w-full bg-black"
      />

      {/* === BRUTALIST CORNER DECORATIONS === */}
      <div
        aria-hidden="true"
        className="absolute right-6 top-6 z-10 hidden h-20 w-20 border-4 border-black bg-[#ff4d00] lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-14 right-6 z-10 hidden h-14 w-14 border-4 border-black bg-[#f5f0e8] shadow-[6px_6px_0_#0a0a0a] lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-6 left-10 z-10 hidden h-8 w-32 border-3 border-black bg-black text-center text-[10px] font-black uppercase leading-8 tracking-[0.3em] text-[#f5f0e8] lg:block"
      >
        RAW
      </div>

      {/* === MARQUEE STRIP === */}
      <div className="relative z-10 border-b-4 border-black bg-black py-2">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="mx-6 text-xs font-black uppercase tracking-[0.4em] text-[#f5f0e8]"
            >
              WEB DEVELOPER ✦ INTERFACE DESIGNER ✦ PROBLEM SOLVER ✦ CODE
              ARCHITECT ✦&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* === MAIN CONTENT === */}
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-8rem)] max-w-[1400px] items-stretch gap-0 px-4 py-16 sm:px-8 lg:grid-cols-[1fr_1.6fr] lg:gap-0 lg:px-12 lg:py-20">
        {/* === LEFT COLUMN — PROFILE CARD === */}
        <div className="relative flex flex-col items-center justify-center border-r-4 border-black p-8 lg:border-r-4">
          {/* Section Number Tag */}
          <div className="absolute left-4 top-4 -rotate-2 border-3 border-black bg-[#ff4d00] px-3 py-1 text-[10px] font-black uppercase tracking-[0.35em] text-white shadow-[4px_4px_0_#0a0a0a] lg:left-8 lg:top-8">
            02 — PROFILE
          </div>

          <div className="relative mt-8 w-full max-w-[340px] lg:mt-4 lg:max-w-[380px]">
            <ProfileCard
              name="Alwan Kapi"
              title="Web Developer"
              handle="alwankapi"
              status="Available"
              contactText="Contact Me"
              avatarUrl="/images/foto-awank bergaya formal.png"
              showUserInfo={true}
              enableTilt={false}
              enableMobileTilt={false}
              behindGlowEnabled={true}
              innerGradient="linear-gradient(145deg, rgba(10, 10, 10, 0.85) 0%, rgba(50, 50, 50, 0.7) 100%)"
              behindGlowColor="rgba(10, 10, 10, 0.6)"
            />
          </div>

          {/* Brutalist label under card */}
          <div className="mt-6 w-full max-w-[340px] border-3 border-black bg-[#f5f0e8] p-3 shadow-[6px_6px_0_#0a0a0a] lg:max-w-[380px]">
            <p className="text-center text-[10px] font-black uppercase tracking-[0.5em] text-[#0a0a0a]">
              ← Drag to interact →
            </p>
          </div>
        </div>

        {/* === RIGHT COLUMN — CONTENT === */}
        <div className="relative flex flex-col justify-center p-8 lg:p-12 xl:p-16">
          {/* Giant Brutalist Heading */}
          <div className="relative">
            <h2
              className="text-[clamp(4rem,10vw,10rem)] font-black uppercase leading-[0.72] tracking-[-0.06em] text-black"
              style={{
                WebkitTextStroke: "3px #0a0a0a",
                paintOrder: "stroke fill",
              }}
            >
              ABO
              <span className="relative inline-block">
                U
                <span
                  aria-hidden="true"
                  className="absolute -right-3 -top-3 h-5 w-5 bg-[#ff4d00]"
                  style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                />
              </span>
              T
            </h2>
            <h2
              className="text-[clamp(4rem,10vw,10rem)] font-black uppercase leading-[0.72] tracking-[-0.06em] text-transparent"
              style={{
                WebkitTextStroke: "3px #0a0a0a",
              }}
            >
              ME
            </h2>

            {/* Decorative line */}
            <div className="mt-4 flex items-center gap-3">
              <div className="h-1 w-16 bg-black" />
              <div className="h-1 w-8 bg-[#ff4d00]" />
              <div className="h-1 w-4 bg-black" />
            </div>
          </div>

          {/* Description Block */}
          <div className="relative mt-8 border-l-4 border-black bg-white/60 p-5 backdrop-blur-sm">
            <p className="text-sm leading-7 text-[#1a1a1a] sm:text-base sm:leading-8">
              I am a{" "}
              <span className="relative inline-block bg-black px-2 py-0.5 text-[#f5f0e8]">
                Web Developer
              </span>{" "}
              with a strong interest in website development, program analysis,
              and user interface design. I enjoy creating modern, responsive,
              and user-friendly digital experiences.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#1a1a1a] sm:text-base sm:leading-8">
              My focus is on building clean web interfaces, analyzing system
              needs, and turning ideas into functional applications.
            </p>
          </div>

          {/* Stats Row — Brutalist Boxes */}
          <div className="mt-8 grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-3 border-black bg-[#0a0a0a] p-4 text-center shadow-[5px_5px_0_#ff4d00] transition-all duration-200 hover:-translate-y-1 hover:shadow-[7px_7px_0_#ff4d00]"
              >
                <div className="text-xl font-black text-[#ff4d00] sm:text-2xl lg:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.3em] text-[#f5f0e8]/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Skills — Brutalist Tags */}
          <div className="mt-8">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-3 w-3 bg-[#ff4d00]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0a0a0a]">
                Tech Arsenal
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={skill}
                  className="border-2 border-black bg-[#f5f0e8] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-black shadow-[3px_3px_0_#0a0a0a] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#ff4d00] hover:text-white hover:shadow-[4px_4px_0_#0a0a0a]"
                  style={{
                    transitionDelay: `${i * 30}ms`,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom CTA — Brutalist */}
          <div className="mt-10 flex items-end gap-4">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 border-3 border-black bg-black px-6 py-4 text-xs font-black uppercase tracking-[0.3em] text-[#f5f0e8] shadow-[6px_6px_0_#ff4d00] transition-all duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0_#ff4d00]"
            >
              <span>LET'S WORK</span>
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <div className="hidden h-12 w-12 border-3 border-black bg-[#ff4d00] shadow-[4px_4px_0_#0a0a0a] sm:flex sm:items-center sm:justify-center">
              <span className="text-lg font-black text-white">↗</span>
            </div>
          </div>
        </div>
      </div>

      {/* === INJECTED KEYFRAMES === */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}