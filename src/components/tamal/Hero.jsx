import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { DATA } from "@/data/resume";
import { listTools } from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, ArrowDown } from "lucide-react";

export const Hero = () => {
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const spotlightRef = useRef(null);
  const orbRef = useRef(null);

  // GSAP: Mouse interactive spotlight & ambient breathing (runs outside React state for pure 60/120fps)
  useEffect(() => {
    const heroEl = heroRef.current;
    const spotlightEl = spotlightRef.current;
    const orbEl = orbRef.current;
    if (!heroEl || !spotlightEl) return;

    const ctx = gsap.context(() => {
      // Smooth quickTo for buttery lag-free cursor tracking
      const xTo = gsap.quickTo(spotlightEl, "x", { duration: 0.8, ease: "power3.out" });
      const yTo = gsap.quickTo(spotlightEl, "y", { duration: 0.8, ease: "power3.out" });

      const handleMouseMove = (e) => {
        const rect = heroEl.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        xTo(x);
        yTo(y);
      };

      heroEl.addEventListener("mousemove", handleMouseMove);

      // Ambient breathing pulse for the luminous orb
      if (orbEl) {
        gsap.to(orbEl, {
          y: -12,
          scale: 1.06,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      return () => {
        heroEl.removeEventListener("mousemove", handleMouseMove);
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Framer Motion: Apple entrance animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Apple signature cubic bezier
      },
    },
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-14 overflow-hidden bg-[#09090b] text-white select-none"
    >
      {/* 1. Dynamic Apple Spotlight (follows cursor smoothly with GSAP quickTo) */}
      <div
        ref={spotlightRef}
        className="absolute top-0 left-0 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 rounded-full blur-[150px] opacity-35 bg-[radial-gradient(circle,rgba(255,255,255,0.28)_0%,rgba(102,217,237,0.12)_40%,rgba(147,51,234,0.06)_70%,transparent_100%)] transition-opacity duration-1000"
      />

      {/* 2. Ambient background center halo */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
        <div className="w-[750px] h-[400px] rounded-full blur-[180px] bg-gradient-to-tr from-[#66d9ed]/5 via-white/[0.03] to-purple-500/5 opacity-50" />
      </div>

      {/* 3. Main Content Container */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 w-full flex flex-col items-center justify-center text-center my-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Luminous Apple Center Energy Orb */}
        <motion.div variants={itemVariants} className="relative mb-6 flex items-center justify-center">
          <div
            ref={orbRef}
            className="w-11 h-11 sm:w-13 sm:h-13 tamal-orb cursor-pointer transition-transform duration-500 hover:scale-125"
            title="Luminous Energy"
          />
        </motion.div>

        {/* Hero Title: Apple Pro Typography - 100% solid white, guaranteed visible without clipping bug */}
        <motion.h1
          variants={itemVariants}
          className="font-sans font-extrabold uppercase tracking-[-0.035em] leading-[0.92] text-5xl sm:text-7xl md:text-8xl lg:text-[108px] text-white drop-shadow-[0_4px_30px_rgba(255,255,255,0.15)]"
        >
          {DATA.name}
        </motion.h1>

        {/* Monospace Discipline Subtitle */}
        <motion.div variants={itemVariants} className="mt-5 sm:mt-6">
          <span className="font-mono text-xs sm:text-sm md:text-base uppercase tracking-[0.24em] text-[#66d9ed] font-medium">
            Software Engineer & AI Enthusiast
          </span>
        </motion.div>

        {/* Apple Editorial Narrative Summary */}
        <motion.p
          variants={itemVariants}
          className="mt-4 font-sans text-sm sm:text-base md:text-lg text-[#86868b] max-w-2xl leading-relaxed font-normal"
        >
          {t({
            en: "Bridging the gap between aesthetic craftsmanship and high-performance distributed systems.",
            id: "Menjembatani estetika visual dengan arsitektur sistem berperforma tinggi.",
          })}
        </motion.p>

        {/* Apple Action CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <motion.a
            href="#work"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3.5 rounded-full bg-white text-black font-medium text-xs sm:text-sm tracking-tight flex items-center gap-2 shadow-[0_0_28px_rgba(255,255,255,0.22)] hover:bg-[#e5e5ea] transition-all"
          >
            <span>{t({ en: "Explore Projects", id: "Lihat Proyek" })}</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white/85 hover:text-white border border-white/10 hover:border-white/20 font-medium text-xs sm:text-sm tracking-tight flex items-center gap-2 backdrop-blur-md transition-all"
          >
            <span>{t({ en: "Get in Touch", id: "Hubungi Saya" })}</span>
            <ArrowRight className="w-3.5 h-3.5 text-white/50" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* 4. Apple Monochromatic Tech Ribbon / Dock */}
      <div className="relative z-10 mt-14 sm:mt-16 w-full max-w-5xl mx-auto px-4">
        <div className="text-center mb-4">
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-white/35">
            {t({ en: "Core Technologies & Stack", id: "Teknologi & Alat Utama" })}
          </span>
        </div>

        {/* Marquee with smooth gradient fade masks */}
        <div className="relative w-full overflow-hidden mask-gradient-x py-2">
          {/* Subtle edge masks for seamless sliding */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 sm:gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
            {[...listTools, ...listTools].map((tool, idx) => (
              <div
                key={`${tool.id}-${idx}`}
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 group cursor-default backdrop-blur-xs"
              >
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-4 h-4 sm:w-5 sm:h-5 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <span className="font-mono text-xs text-white/50 group-hover:text-white transition-colors">
                  {tool.nama}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Minimal Apple Scroll Cue */}
      <div className="relative z-10 mt-8 flex flex-col items-center justify-center">
        <a
          href="#expertise"
          className="flex flex-col items-center gap-1.5 group text-white/35 hover:text-white transition-colors focus:outline-none"
        >
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/40 group-hover:text-white transition-colors">
            scroll
          </span>
          <div className="w-4 h-7 rounded-full border border-white/20 group-hover:border-white/50 flex items-start justify-center p-1 transition-colors">
            <div className="w-1 h-1.5 bg-white/70 rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};
