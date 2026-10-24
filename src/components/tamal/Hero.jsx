import React, { useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { listTools } from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import { Shield, ArrowUpRight, ArrowDown } from "lucide-react";

export const Hero = () => {
  const { lang, t } = useLanguage();
  const heroRef = useRef(null);
  const bubbleRef = useRef(null);
  const starRef = useRef(null);
  const glowRef = useRef(null);
  const marqueeRef = useRef(null);       // tech stack scroll ribbon
  const marqueeTweenRef = useRef(null);  // store GSAP tween for hover pause/resume

  // Typewriter — direct DOM mutation (zero React re-render per character)
  const words = useMemo(() => {
    return lang === "id"
      ? ["Berdampak", "Terukur", "Cerdas", "Berkinerja Tinggi", "Estetis"]
      : ["Impactful", "Scalable", "Intelligent", "High-Performance", "Aesthetic"];
  }, [lang]);

  const typeRef = useRef(null);   // <span> whose textContent we mutate directly
  const caretRef = useRef(null);  // blinking caret element
  const twState = useRef({ wordIdx: 0, charIdx: 0, deleting: false, paused: false });
  const twTimer = useRef(null);

  // Kick off / restart typewriter whenever language or words list changes
  useEffect(() => {
    const state = twState.current;
    state.wordIdx = 0;
    state.charIdx = 0;
    state.deleting = false;
    state.paused = false;
    if (typeRef.current) typeRef.current.textContent = "";

    const tick = () => {
      const { wordIdx, charIdx, deleting, paused } = state;
      if (paused) return;

      const word = words[wordIdx];

      if (!deleting) {
        if (charIdx < word.length) {
          // Type next character
          state.charIdx += 1;
          if (typeRef.current) typeRef.current.textContent = word.slice(0, state.charIdx);
          // Slightly variable speed for organic feel (90–130ms)
          twTimer.current = setTimeout(tick, 90 + Math.random() * 40);
        } else {
          // Full word shown — pause then start deleting
          state.paused = true;
          twTimer.current = setTimeout(() => {
            state.paused = false;
            state.deleting = true;
            tick();
          }, 2000);
        }
      } else {
        if (charIdx > 0) {
          // Delete one character
          state.charIdx -= 1;
          if (typeRef.current) typeRef.current.textContent = word.slice(0, state.charIdx);
          twTimer.current = setTimeout(tick, 45);
        } else {
          // Word fully deleted — move to next
          state.wordIdx = (wordIdx + 1) % words.length;
          state.deleting = false;
          twTimer.current = setTimeout(tick, 120);
        }
      }
    };

    // Small initial delay so page entrance animation settles first
    twTimer.current = setTimeout(tick, 900);
    return () => clearTimeout(twTimer.current);
  }, [words]);

  // GSAP: Buttery smooth 60/120fps mouse parallax, organic floating & seamless marquee
  useEffect(() => {
    const heroEl = heroRef.current;
    const bubbleEl = bubbleRef.current;
    const starEl = starRef.current;
    const glowEl = glowRef.current;
    const marqueeEl = marqueeRef.current;
    if (!heroEl) return;

    const ctx = gsap.context(() => {
      // 1. Organic floating animation for 3D glass bubble
      if (bubbleEl) {
        gsap.to(bubbleEl, {
          y: -18,
          x: 10,
          rotation: 4,
          scale: 1.04,
          duration: 4.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // 2. Gentle floating for electric cyan 4-point star
      if (starEl) {
        gsap.to(starEl, {
          y: -14,
          rotation: -8,
          duration: 3.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // 3. Seamless infinite marquee — 2 copies, translate -50%, repeat: -1
      if (marqueeEl) {
        marqueeTweenRef.current = gsap.to(marqueeEl, {
          xPercent: -50,
          duration: 28,
          ease: "none",
          repeat: -1,
        });
      }

      // 4. Mouse Parallax (ZeeFrames Signature 3D Depth)
      if (bubbleEl && starEl && glowEl) {
        const bubbleX = gsap.quickTo(bubbleEl, "x", { duration: 1, ease: "power2.out" });
        const bubbleY = gsap.quickTo(bubbleEl, "y", { duration: 1, ease: "power2.out" });

        const starX = gsap.quickTo(starEl, "x", { duration: 1.2, ease: "power2.out" });
        const starY = gsap.quickTo(starEl, "y", { duration: 1.2, ease: "power2.out" });

        const glowX = gsap.quickTo(glowEl, "x", { duration: 1.5, ease: "power2.out" });
        const glowY = gsap.quickTo(glowEl, "y", { duration: 1.5, ease: "power2.out" });

        const handleMouseMove = (e) => {
          const rect = heroEl.getBoundingClientRect();
          const normX = (e.clientX - rect.left) / rect.width - 0.5;
          const normY = (e.clientY - rect.top) / rect.height - 0.5;

          bubbleX(normX * 45);
          bubbleY(normY * 35);

          starX(-normX * 60);
          starY(-normY * 45);

          glowX(normX * 70);
          glowY(normY * 50);
        };

        heroEl.addEventListener("mousemove", handleMouseMove);

        return () => {
          heroEl.removeEventListener("mousemove", handleMouseMove);
        };
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Framer Motion entrance orchestration
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
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Apple / Linear curve
      },
    },
  };

  // Stack of 6 core tools for the ZeeFrames-style trust badge
  const featuredTools = listTools.slice(1, 7);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-12 overflow-hidden bg-[#080808] text-white select-none"
    >
      {/* 1. Volumetric Electric Cyan Glow (Signature Portfolio Tone) */}
      <div
        ref={glowRef}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[550px] pointer-events-none z-0 rounded-full blur-[170px] opacity-40 bg-[radial-gradient(circle,rgba(102,217,237,0.32)_0%,rgba(56,189,248,0.18)_35%,rgba(37,99,235,0.08)_65%,transparent_100%)]"
      />

      {/* 2. Secondary soft top cyan vignette */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(102,217,237,0.12),rgba(255,255,255,0))]" />

      {/* 3. Floating 3D Fluid Glass Bubble with Cyan Specular Refraction */}
      <div
        ref={bubbleRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[330px] sm:w-[480px] sm:h-[460px] pointer-events-none z-0 opacity-75"
        style={{
          borderRadius: "44% 56% 62% 38% / 48% 42% 58% 52%",
          background:
            "radial-gradient(circle at 30% 25%, rgba(255, 255, 255, 0.35), rgba(102, 217, 237, 0.22) 35%, rgba(15, 23, 42, 0.55) 70%, rgba(102, 217, 237, 0.1) 100%)",
          boxShadow:
            "inset 0 0 50px rgba(255, 255, 255, 0.4), inset -20px -20px 80px rgba(102, 217, 237, 0.3), 0 30px 90px rgba(0, 0, 0, 0.85)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        {/* Specular reflections inside the bubble */}
        <div className="absolute top-8 left-12 w-24 h-16 rounded-full bg-white/40 blur-md transform -rotate-12" />
        <div className="absolute bottom-10 right-14 w-28 h-20 rounded-full bg-[#66d9ed]/25 blur-lg" />
      </div>

      {/* 4. Floating 4-Pointed Star Accent (Electric Cyan Star) */}
      <div
        ref={starRef}
        className="absolute left-[8%] sm:left-[15%] top-[42%] sm:top-[38%] pointer-events-none z-10 hidden sm:block"
      >
        <svg
          width="64"
          height="70"
          viewBox="0 0 73 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_24px_rgba(102,217,237,0.7)]"
        >
          <path
            d="M36.5 0C36.5 22.0914 52.8365 40 73 40C52.8365 40 36.5 57.9086 36.5 80C36.5 57.9086 20.1635 40 0 40C20.1635 40 36.5 22.0914 36.5 0Z"
            fill="#66D9ED"
          />
        </svg>
      </div>

      {/* 5. Main Hero Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 w-full flex flex-col items-center justify-center text-center my-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ZeeFrames Trust & Stack Pill (Cyan Accent) */}
        <motion.div variants={itemVariants} className="mb-7 sm:mb-8">
          <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full border border-white/10 bg-[#0d0d0e]/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:border-[#66d9ed]/40 transition-colors">
            {/* Shield Icon in Cyan Box */}
            <div className="w-6 h-6 rounded-md bg-[#66d9ed] flex items-center justify-center text-black shadow-sm shrink-0">
              <Shield className="w-3.5 h-3.5 fill-black stroke-black" />
            </div>

            {/* Trust Copy — more horizontal breathing room */}
            <span className="font-sans text-xs sm:text-sm text-white/80 font-normal px-1">
              {t({
                en: "Trusted to craft scalable systems with",
                id: "Membangun sistem berkinerja tinggi dengan",
              })}
            </span>

            {/* Overlapping Tool Avatars */}
            <div className="flex items-center">
              {featuredTools.map((tool, idx) => (
                <div
                  key={tool.id}
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#1e1e20] border-2 border-[#0d0d0e] flex items-center justify-center p-1 -ml-2 first:ml-0 shadow-md group relative"
                  title={tool.nama}
                  style={{ zIndex: featuredTools.length - idx }}
                >
                  <img
                    src={tool.gambar}
                    alt={tool.nama}
                    className="w-full h-full object-contain filter group-hover:scale-110 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ZeeFrames Massive Display Headline with Tilted 'FULLSTACK & AI' Cyan Sticker */}
        <motion.div variants={itemVariants} className="relative max-w-4xl">
          <h1 className="font-sans font-black uppercase text-4xl sm:text-6xl md:text-7xl lg:text-[84px] tracking-tight leading-[0.98] text-white">
            <span className="block text-white/90">Creative Intelligence</span>
            <span className="relative inline-block text-white mt-1">
              In Every System.
              {/* Tilted Electric Cyan Sticker */}
              <span className="absolute -top-3 sm:-top-4 -right-4 sm:-right-8 bg-[#66d9ed] text-[#080808] font-sans text-[11px] sm:text-xs font-extrabold px-2.5 sm:px-3 py-1 rounded-md rotate-[13deg] shadow-[0_4px_20px_rgba(102,217,237,0.45)] tracking-wider uppercase select-none hover:rotate-0 transition-transform duration-300">
                FULLSTACK & AI
              </span>
            </span>
          </h1>
        </motion.div>

        {/* Typewriter Subheadline — DOM-direct mutation, zero React re-render per char */}
        <motion.div variants={itemVariants} className="mt-6 sm:mt-8 max-w-2xl min-h-[52px] sm:min-h-[44px] flex items-center justify-center">
          <p className="font-sans text-base sm:text-lg md:text-xl text-white/85 leading-relaxed font-normal">
            {lang === "id" ? (
              <>
                Membangun solusi{" "}
                <span className="inline-flex items-baseline gap-1 text-[#66d9ed] font-semibold">
                  <span ref={typeRef} />
                  <span
                    ref={caretRef}
                    className="inline-block w-[2px] h-[1em] bg-[#66d9ed] rounded-full shadow-[0_0_8px_#66d9ed]"
                    style={{ animation: "blink 1s step-end infinite" }}
                  />
                </span>{" "}
                aplikasi web, arsitektur sistem, dan AI untuk kebutuhan nyata.
              </>
            ) : (
              <>
                We craft{" "}
                <span className="inline-flex items-baseline gap-1 text-[#66d9ed] font-semibold">
                  <span ref={typeRef} />
                  <span
                    ref={caretRef}
                    className="inline-block w-[2px] h-[1em] bg-[#66d9ed] rounded-full shadow-[0_0_8px_#66d9ed]"
                    style={{ animation: "blink 1s step-end infinite" }}
                  />
                </span>{" "}
                web applications, architectures, and AI solutions worldwide.
              </>
            )}
          </p>
        </motion.div>



        {/* Action Button Duo */}
        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {/* Primary Solid White Pill */}
          <motion.a
            href="#work"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-full bg-white text-black font-sans font-medium text-sm tracking-tight flex items-center gap-2.5 shadow-[0_4px_28px_rgba(255,255,255,0.25)] hover:bg-[#ececec] transition-colors"
          >
            <span>{t({ en: "Explore Projects", id: "Lihat Karya" })}</span>
            <ArrowDown className="w-4 h-4 text-black" />
          </motion.a>

          {/* Secondary Dark Translucent Pill */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-full bg-transparent hover:bg-white/[0.08] text-white border border-white/80 hover:border-white font-sans font-medium text-sm tracking-tight flex items-center gap-2.5 transition-all backdrop-blur-md"
          >
            <span>© 2026 Work</span>
            <div className="flex items-center gap-1 text-[#66d9ed]">
              <span className="text-xs uppercase tracking-wider font-mono">Open</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* 6. Tech Stack Marquee — GSAP seamless infinite scroll */}
      <div className="relative z-10 mt-10 sm:mt-12 w-full">
        <div className="text-center mb-5">
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.26em] text-white/35">
            {t({
              en: "Trusted by Industry Leaders & Fast-Growing Startups",
              id: "Teknologi & Ekosistem Rekayasa Perangkat Lunak",
            })}
          </span>
        </div>

        {/* Scroll ribbon — overflow hidden container */}
        <div className="relative w-full overflow-hidden py-3">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-48 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #080808 0%, transparent 100%)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-48 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #080808 0%, transparent 100%)" }} />

          {/* GSAP target: 2 copies, GSAP translates -50% endlessly */}
          <div
            ref={marqueeRef}
            className="flex w-max"
            onMouseEnter={() => marqueeTweenRef.current?.pause()}
            onMouseLeave={() => marqueeTweenRef.current?.resume()}
          >
            {[...listTools, ...listTools].map((tool, idx) => (
              <div
                key={`${tool.id}-${idx}`}
                className="flex items-center gap-2.5 mx-6 sm:mx-8 opacity-50 hover:opacity-100 transition-opacity duration-300 group cursor-default shrink-0"
              >
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <span className="font-sans text-xs sm:text-sm font-medium tracking-tight text-white/60 group-hover:text-white transition-colors whitespace-nowrap">
                  {tool.nama}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
