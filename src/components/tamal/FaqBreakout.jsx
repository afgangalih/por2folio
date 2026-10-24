import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight, Plus, Minus, Star } from "lucide-react";
import { DATA } from "@/data/resume";

export const FaqBreakout = () => {
  const { lang, t } = useLanguage();
  const [openIdx, setOpenIdx] = useState(0); // 1st item open by default like reference

  const faqs = [
    {
      q: {
        en: "What services do you specialize in, and what is your core tech stack?",
        id: "Layanan apa saja yang Anda tawarkan, dan apa tech stack utama Anda?",
      },
      a: {
        en: "I specialize in high-performance Fullstack Web Applications (React, Next.js, Node.js, Laravel), Cloud Architectures, and Custom AI Integrations (LLM agents, RAG pipelines, and automated intelligence). Every system is engineered with scalability, sub-second latency, and premium UX in mind.",
        id: "Saya berspesialisasi dalam Rekayasa Web Fullstack berkinerja tinggi (React, Next.js, Node.js, Laravel), Arsitektur Cloud terukur, dan Integrasi AI Kustom (LLM agents, RAG pipelines, serta otomatisasi cerdas). Setiap sistem dibangun dengan standar performa tinggi dan UX modern.",
      },
    },
    {
      q: {
        en: "What is your development process, and how long does a project take?",
        id: "Bagaimana proses pengerjaan proyek, dan berapa lama estimasi waktunya?",
      },
      a: {
        en: "The workflow spans 4 disciplined stages: Architecture & Discovery, Sprint-Based Development, Rigorous QA/Testing, and Zero-Downtime Deployment. Typical turnarounds range from 2–4 weeks for targeted MVPs to 6–10 weeks for full-scale enterprise platforms.",
        id: "Alur kerja terbagi dalam 4 fase: Discovery & Arsitektur Sistem, Eksekusi Sprint Cepat, Pengujian/QA Menyeluruh, hingga Deployment ke Production. Estimasi berkisar antara 2–4 minggu untuk MVP terfokus, hingga 6–10 minggu untuk sistem skala penuh.",
      },
    },
    {
      q: {
        en: "Can you integrate AI or machine learning models into existing platforms?",
        id: "Bisakah mengintegrasikan model AI ke dalam aplikasi yang sudah berjalan?",
      },
      a: {
        en: "Absolutely. I integrate OpenAI/Anthropic APIs, local open-source LLMs via Ollama, semantic vector databases (Pinecone/Milvus), and autonomous agent workflows into existing databases and backend infrastructures cleanly without breaking active user workflows.",
        id: "Tentu bisa. Saya berpengalaman menghubungkan API OpenAI/Anthropic, model LLM lokal via Ollama, vector search, dan agen cerdas ke dalam backend serta basis data yang sudah ada secara mulus tanpa mengganggu sistem berjalan.",
      },
    },
    {
      q: {
        en: "How do you ensure system performance, code quality, and security?",
        id: "Bagaimana Anda menjamin performa sistem, kualitas kode, dan keamanan?",
      },
      a: {
        en: "By applying modern software engineering best practices: modular clean-code architectures, automated CI/CD pipelines, database indexing, edge caching, and strict OWASP security standards. Systems are profiled for lightning-fast Core Web Vitals and bulletproof stability.",
        id: "Dengan menerapkan arsitektur kode modular, automated CI/CD pipeline, optimasi indeks database, edge caching, dan kepatuhan standar keamanan OWASP. Semua dirancang untuk memuat di bawah 1 detik dengan stabilitas tinggi.",
      },
    },
    {
      q: {
        en: "How does collaboration work, and is there post-launch support?",
        id: "Bagaimana model kolaborasinya, dan apakah ada garansi setelah rilis?",
      },
      a: {
        en: "Collaboration is transparent via dedicated Slack/WhatsApp channels with weekly demo milestones. Post-launch, I provide hands-on warranty support for bug fixes, performance monitoring, and comprehensive architectural documentation.",
        id: "Komunikasi dilakukan secara transparan melalui Slack/WhatsApp dengan milestone demo mingguan. Pasca rilis, tersedia garansi pemeliharaan, monitoring stabilitas, dan dokumentasi arsitektur sistem yang lengkap.",
      },
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* ======================================================== */}
      {/* 1. VIBRANT BREAKOUT BANNER (High-Energy Cyan Contrast)    */}
      {/* ======================================================== */}
      <div className="relative w-full bg-gradient-to-r from-[#66d9ed] via-[#38bdf8] to-[#2563eb] py-16 sm:py-24 px-5 sm:px-8 overflow-hidden select-none">
        {/* Subtle radial ambient highlight */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-blue-900/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10">
          {/* Left Text Block */}
          <div className="max-w-2xl text-left space-y-5">
            <h2 className="font-sans font-black text-3xl sm:text-5xl md:text-[54px] tracking-tight leading-[1.05] text-[#080808]">
              {t({
                en: "Your next great product decision starts with one conversation.",
                id: "Keputusan produk & rekayasa sistem terbaik dimulai dari satu percakapan.",
              })}
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#080808]/85 leading-relaxed font-normal max-w-xl">
              {t({
                en: "If your system isn't where you want it to be, 30 minutes with us might tell you why. And more often than not, we're exactly the team to fix it.",
                id: "Jika performa sistem atau produk digital Anda belum maksimal, diskusi 30 menit akan membantu membedahnya. Mari temukan solusi rekayasa terbaik bersama.",
              })}
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black font-sans font-semibold text-sm tracking-tight shadow-[0_8px_25px_rgba(0,0,0,0.18)] hover:bg-[#080808] hover:text-white transition-all duration-300 group active:scale-95 cursor-pointer"
              >
                <span>
                  {t({
                    en: "Book a Free Discovery Call",
                    id: "Mulai Konsultasi Gratis",
                  })}
                </span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right: ZeeFrames Signature 3D Floating Star Graphics */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center shrink-0">
            {/* Primary Big 3D Star */}
            <motion.div
              animate={{
                y: [-8, 8, -8],
                rotate: [-2, 3, -2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]"
            >
              <svg
                width="160"
                height="176"
                viewBox="0 0 160 176"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-48 sm:h-52"
              >
                {/* 3D Under-extrusion / Shadow Body */}
                <path
                  d="M80 18C80 58 112 90 152 90C112 90 80 122 80 162C80 122 48 90 8 90C48 90 80 58 80 18Z"
                  fill="#111827"
                  transform="translate(8, 14)"
                />
                <path
                  d="M80 18C80 58 112 90 152 90C112 90 80 122 80 162C80 122 48 90 8 90C48 90 80 58 80 18Z"
                  fill="#1e1b4b"
                  transform="translate(4, 8)"
                />
                {/* Front Star Face with Electric Cyan / Specular Sheen */}
                <path
                  d="M80 0C80 44 116 80 160 80C116 80 80 116 80 160C80 116 44 80 0 80C44 80 80 44 80 0Z"
                  fill="url(#star_front_grad)"
                />
                {/* Inner Bevel Specular Highlights */}
                <path
                  d="M80 10C80 48 112 80 150 80C112 80 80 112 80 150C80 112 48 80 10 80C48 80 80 48 80 10Z"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="2"
                  fill="none"
                />
                <defs>
                  <linearGradient id="star_front_grad" x1="0" y1="0" x2="160" y2="160" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ffffff" />
                    <stop offset="0.3" stopColor="#66d9ed" />
                    <stop offset="0.8" stopColor="#0ea5e9" />
                    <stop offset="1" stopColor="#0369a1" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Secondary Floating Mini Star */}
            <motion.div
              animate={{
                y: [6, -6, 6],
                rotate: [4, -4, 4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-2 right-2 sm:top-4 sm:right-6 z-20 drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
            >
              <svg width="60" height="66" viewBox="0 0 73 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M36.5 6C36.5 26 51 43 70 43C51 43 36.5 60 36.5 80C36.5 60 22 43 3 43C22 43 36.5 26 36.5 6Z"
                  fill="#0f172a"
                  transform="translate(3, 4)"
                />
                <path
                  d="M36.5 0C36.5 22.0914 52.8365 40 73 40C52.8365 40 36.5 57.9086 36.5 80C36.5 57.9086 20.1635 40 0 40C20.1635 40 36.5 22.0914 36.5 0Z"
                  fill="#ffffff"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. FAQ SECTION (Obsidian Matte Dark + Cyan Highlights)   */}
      {/* ======================================================== */}
      <div id="faq" className="relative bg-[#080808] py-24 sm:py-32 px-5 sm:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Heading & Trust Proof */}
            <div className="lg:col-span-5 space-y-6">
              {/* Mono Category Badge */}
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#66d9ed] block font-semibold">
                FAQS
              </span>

              {/* Display Headline */}
              <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.08]">
                {t({
                  en: "Questions? We've Got Answers",
                  id: "Pertanyaan? Kami Punya Jawabannya",
                })}
              </h2>

              {/* Sub-description */}
              <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed font-normal">
                {t({
                  en: "Clear insights into engineering standards, architecture decisions, delivery timelines, and how we collaborate.",
                  id: "Penjelasan transparan tentang alur rekayasa software, standar arsitektur, estimasi pengerjaan, dan model kolaborasi.",
                })}
              </p>

              {/* Action Buttons & Rating Pill */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-sans font-medium text-xs tracking-tight shadow-md hover:bg-[#ececec] transition-colors"
                >
                  <span>{t({ en: "Book a free call", id: "Jadwalkan Diskusi" })}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                {/* Rating Badge */}
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 bg-[#121214]">
                  <div className="flex items-center text-[#ff4b4b]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#ff4b4b]" />
                    ))}
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-white/60 font-medium">
                    {t({ en: "8+ REVIEWS", id: "8+ ULASAN" })}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Accordion Stack */}
            <div className="lg:col-span-7 space-y-3.5">
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;

                return (
                  <motion.div
                    key={idx}
                    layout
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "border-[#66d9ed] bg-[#0d0d10] shadow-[0_0_24px_rgba(102,217,237,0.18)]"
                        : "border-white/10 bg-[#111114]/70 hover:border-white/20 hover:bg-[#141418]"
                    }`}
                  >
                    {/* Accordion Question Header */}
                    <button
                      onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <span className="font-sans font-semibold text-sm sm:text-base text-white tracking-tight leading-snug">
                        {t(faq.q)}
                      </span>

                      {/* Pill Button Icon */}
                      <div
                        className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 transition-colors duration-200 ${
                          isOpen
                            ? "bg-[#66d9ed] text-black shadow-sm"
                            : "bg-[#222226] text-white/60"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4 stroke-[2.5]" />
                        ) : (
                          <Plus className="w-4 h-4 stroke-[2.5]" />
                        )}
                      </div>
                    </button>

                    {/* Accordion Answer Content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-white/70 font-sans leading-relaxed border-t border-white/[0.05]">
                            {t(faq.a)}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
