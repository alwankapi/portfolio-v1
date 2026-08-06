"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Loader2, Mail, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import MagneticButton from "@/components/MagneticButton";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";

const contactLinks = [
  {
    label: "Email",
    value: "alwankapi@gmail.com",
    href: "mailto:alwankapi@gmail.com",
    chip: "bg-brand",
    icon: <Mail className="h-5 w-5 text-white" />,
  },
  {
    label: "GitHub",
    value: "@alwankapi",
    href: "https://github.com/alwankapi",
    chip: "bg-ink",
    icon: (
      <svg className="h-5 w-5 text-paper" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "Alwan Kapi Muntaha",
    href: "https://www.linkedin.com/in/alwan-kapi-muntaha-a63b83422",
    chip: "bg-accent",
    icon: (
      <svg className="h-5 w-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
];

const fields = [
  { name: "name", label: "Nama", type: "text", placeholder: "Nama lengkap kamu" },
  { name: "email", label: "Email", type: "email", placeholder: "email@kamu.com" },
  { name: "subject", label: "Subjek", type: "text", placeholder: "Tentang apa?" },
];

const inputClass =
  "contact-input w-full border-2 border-ink bg-surface px-4 py-3 text-sm font-bold text-ink transition-all duration-200 placeholder:text-ink/30 focus:outline-none";

export default function ContactSection() {
  // idle | loading | success | error
  const [status, setStatus] = useState("idle");
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);
  const statusTimer = useRef(null);

  useEffect(
    () => () => {
      clearTimeout(toastTimer.current);
      clearTimeout(statusTimer.current);
    },
    []
  );

  const showToast = (type, message) => {
    setToast({ type, message });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 5000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "loading") return;

    const form = event.currentTarget;
    setStatus("loading");
    setToast(null);

    try {
      // Simulated round-trip — swap for a real endpoint when the API is ready.
      await new Promise((resolve) => setTimeout(resolve, 1600));

      const email = form.email.value.trim();
      if (!email.includes("@")) throw new Error("Alamat email tidak valid.");

      setStatus("success");
      form.reset();
      showToast("success", "Pesan terkirim! Saya akan segera membalas.");
    } catch (error) {
      setStatus("error");
      showToast("error", error.message || "Gagal mengirim pesan. Coba lagi.");
    } finally {
      // Let the success/error state read for a beat, then return the button to idle.
      clearTimeout(statusTimer.current);
      statusTimer.current = setTimeout(() => setStatus("idle"), 1800);
    }
  };

  const isLoading = status === "loading";
  const isSuccess = status === "success";

  return (
    <section
      id="contact"
      className="grid-paper relative min-h-screen overflow-hidden bg-paper px-4 py-20 text-ink sm:px-8 sm:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-[20%] left-[10%] h-16 w-16 animate-spin-slow border-[3px] border-ink/10" />
        <div className="absolute bottom-[40%] right-[15%] h-24 w-24 animate-float rounded-full bg-accent/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <Reveal direction="up">
              <h2 className="mb-6 text-3xl font-black uppercase leading-[0.85] tracking-[-0.1em] sm:text-4xl md:text-5xl">
                LET&apos;S WORK
                <br />
                TOGETHER
              </h2>
            </Reveal>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 h-1 bg-ink"
            />

            <Reveal direction="up" delay={0.15}>
              <p className="mb-10 text-sm leading-relaxed text-muted sm:text-base">
                Punya proyek menarik atau ingin berdiskusi? Jangan ragu untuk
                menghubungi saya melalui form ini atau langsung melalui kontak di
                bawah.
              </p>
            </Reveal>

            <RevealGroup stagger={0.1} className="space-y-4">
              {contactLinks.map((link) => (
                <RevealItem key={link.label}>
                  <MagneticButton
                    as="a"
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    strength={0.18}
                    className="flex items-center gap-4 border-2 border-ink bg-surface p-4 shadow-brutal transition-shadow duration-200 hover:shadow-brutal-lg"
                  >
                    <div
                      className={`flex h-10 w-10 flex-shrink-0 items-center justify-center border-2 border-ink ${link.chip}`}
                    >
                      {link.icon}
                    </div>
                    <div>
                      <div className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-ink/60">
                        {link.label}
                      </div>
                      <div className="text-sm font-black">{link.value}</div>
                    </div>
                  </MagneticButton>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          {/* Right — Form */}
          <Reveal direction="left" delay={0.12} amount={0.2}>
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {fields.map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-ink/60"
                  >
                    {field.label}
                  </label>
                  <motion.input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    disabled={isLoading}
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={inputClass}
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-ink/60"
                >
                  Pesan
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Ceritakan proyek kamu..."
                  required
                  disabled={isLoading}
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <MagneticButton
                type="submit"
                disabled={isLoading}
                strength={0.3}
                animate={
                  status === "error"
                    ? { x: [0, -8, 8, -6, 6, 0] }
                    : isSuccess
                      ? { scale: [1, 1.04, 1] }
                      : {}

                }
                className={`flex w-full items-center justify-center gap-2 border-2 border-ink px-6 py-4 text-sm font-black uppercase tracking-[0.15em] shadow-brutal-md transition-colors duration-300 disabled:cursor-wait ${
                  isSuccess ? "bg-brand text-white" : "bg-ink text-paper"
                }`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isLoading ? (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-2"
                    >
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Mengirim...</span>
                    </motion.span>
                  ) : isSuccess ? (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Terkirim!</span>
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-2"
                    >
                      <span>Kirim Pesan</span>
                      <Send className="h-4 w-4" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </MagneticButton>
            </form>
          </Reveal>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.94 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            className={`fixed bottom-6 left-1/2 z-[70] flex w-[min(92vw,26rem)] -translate-x-1/2 items-center gap-3 border-2 border-ink p-4 shadow-brutal-lg ${
              toast.type === "success" ? "bg-ink text-paper" : "bg-brand text-white"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-400" />
            ) : (
              <AlertTriangle className="h-5 w-5 flex-shrink-0" />
            )}
            <span className="flex-1 text-sm font-bold">{toast.message}</span>
            <button
              type="button"
              onClick={() => setToast(null)}
              aria-label="Dismiss notification"
              className="flex-shrink-0 opacity-70 transition-opacity hover:opacity-100"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
