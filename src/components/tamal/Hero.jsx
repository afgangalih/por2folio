import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { DATA } from "@/data/resume";
import { listTools } from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  const { lang, t } = useLanguage();
  const orbRef = useRef(null);
  const nameRef = useRef(null);
  const subtitleRef = useRef(null);
  const marqueeRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the Glowing Sun Orb with floating motion
      gsap.to(orbRef.current, {
        y: -14,
        scale: 1.05,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Name & Subtitle reveal
      gsap.fromTo(
        nameRef.current,
        { opacity: 0, y: 35, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out", delay: 0.2 }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.5 }
      );

      gsap.fromTo(
        marqueeRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2, ease: "power2.out", delay: 0.8 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-[#1a191d]"
      style={{
        backgroundImage: `radial-gradient(circle at 50% 35%, rgba(155, 55, 255, 0.08) 0%, transparent 60%)`,
      }}
    >
      {/* Background ambient noise & grid */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center justify-center text-center my-auto">
        
        {/* Tamal's Signature Glowing Orb */}
        <div className="relative mb-6 sm:mb-8 flex items-center justify-center">
          <div
            ref={orbRef}
            className="w-11 h-11 sm:w-14 sm:h-14 tamal-orb cursor-pointer transition-transform duration-500 hover:scale-125"
            title="Luminous Energy"
          />
        </div>

        {/* Massive Typography Name */}
        <h1
          ref={nameRef}
          className="font-sans font-extrabold uppercase text-white tracking-tight leading-[0.95] text-5xl sm:text-7xl md:text-8xl lg:text-[115px] select-none"
        >
          {DATA.name}
        </h1>

        {/* Monospace Subtitle */}
        <p
          ref={subtitleRef}
          className="mt-6 sm:mt-8 font-mono text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-[0.22em] text-white/90 max-w-3xl leading-relaxed font-medium"
        >
          {lang === "en"
            ? "Software Engineer, Fullstack & AI Enthusiast."
            : "Software Engineer, Fullstack & AI Enthusiast."}
        </p>

        {/* Brief summary teaser */}
        <p className="mt-3 font-sans text-xs sm:text-sm text-white/50 max-w-xl">
          {t({
            en: "Bridging the gap between aesthetics and high-performance technology.",
            id: "Menjembatani estetika visual dengan teknologi berkinerja tinggi.",
          })}
        </p>
      </div>

      {/* As Featured In / Tech Stack Marquee Section */}
      <div ref={marqueeRef} className="relative z-10 mt-12 w-full max-w-5xl mx-auto px-4">
        <div className="text-center mb-5">
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.3em] text-white/40">
            {t({ en: "Core Technologies & Stack", id: "Teknologi & Alat Utama" })}
          </span>
        </div>

        {/* Continuous sliding marquee */}
        <div className="relative w-full overflow-hidden mask-gradient-x py-3">
          {/* Subtle gradient edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#1a191d] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#1a191d] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-8 sm:gap-12 w-max animate-marquee hover:[animation-play-state:paused]">
            {[...listTools, ...listTools].map((tool, idx) => (
              <div
                key={`${tool.id}-${idx}`}
                className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 group cursor-default"
              >
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <span className="font-mono text-xs sm:text-sm text-white/60 group-hover:text-white transition-colors">
                  {tool.nama}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 mt-8 flex flex-col items-center justify-center">
        <a
          href="#expertise"
          className="flex flex-col items-center gap-1 group text-white/40 hover:text-[#66d9ed] transition-colors focus:outline-none"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">
            // scroll
          </span>
          <div className="w-5 h-8 rounded-full border border-white/20 group-hover:border-[#66d9ed] flex items-start justify-center p-1 transition-colors">
            <div className="w-1.5 h-2 bg-[#66d9ed] rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};
