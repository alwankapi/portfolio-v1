"use client";

import ProfileCard from "@/components/ProfileCard";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen snap-start overflow-hidden bg-[#ffffff] px-6 py-24 text-[#0a0a0a] sm:px-10 lg:px-16"
    >
      <div aria-hidden="true" className="absolute inset-0 grid-paper opacity-60" />
      <div aria-hidden="true" className="absolute left-0 top-0 h-full w-5 bg-[#0a0a0a]" />
      <div aria-hidden="true" className="absolute bottom-10 right-10 hidden h-24 w-24 border-2 border-[#0a0a0a] bg-[#f7f7f2] shadow-[9px_9px_0_#0a0a0a] lg:block" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-12rem)] max-w-7xl items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] xl:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -44, rotate: -1 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[380px] lg:max-w-[420px]"
        >
          <ProfileCard
            name="Alwan Kapi"
            title="Web Developer"
            handle="alwankapi"
            status="Available"
            contactText="Contact Me"
            avatarUrl="/images/foto-awank3.jpeg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            behindGlowEnabled={true}
            innerGradient="linear-gradient(145deg, rgba(10, 10, 10, 0.7) 0%, rgba(74, 74, 74, 0.5) 100%)"
            behindGlowColor="rgba(10, 10, 10, 0.5)"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 46 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-8 inline-flex border-2 border-[#0a0a0a] bg-[#0a0a0a] px-4 py-2 text-xs font-black uppercase tracking-[0.32em] text-white shadow-[6px_6px_0_#d8d8c8]">
            Profile / 02
          </div>

          <h2 className="text-[clamp(3.4rem,8vw,8.5rem)] font-black uppercase leading-[0.78] tracking-[-0.1em]">
            ABOUT
            <br />
            ME
          </h2>

          <p className="mt-8 max-w-3xl border-l-4 border-[#0a0a0a] pl-5 text-base leading-8 text-[#323232] sm:text-lg">
            I am a Web Developer with a strong interest in website development, program analysis, and user interface design. I enjoy creating modern, responsive, and user-friendly digital experiences. My focus is on building clean web interfaces, analyzing system needs, and turning ideas into functional applications using technologies such as PHP, CodeIgniter, Laravel, Tailwind CSS, JavaScript, and Flutter.
          </p>

        </motion.div>
      </div>
    </section>
  );
}
