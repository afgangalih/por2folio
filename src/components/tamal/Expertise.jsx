import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Terminal, Layout, Cpu, CheckCircle2, ArrowUpRight } from "lucide-react";

export const Expertise = () => {
  const { lang, t } = useLanguage();

  const expertiseItems = [
    {
      index: "01",
      tag: "SYSTEM & BACKEND",
      title: "Software & AI Systems",
      icon: Terminal,
      description: {
        en: "Designing resilient backend architectures, high-throughput APIs, and automated data pipelines with strict clean-code and OOP discipline.",
        id: "Merancang arsitektur backend andal, API throughput tinggi, dan pipeline data otomatis dengan prinsip clean-code & OOP berstandar industri.",
      },
      highlights: {
        en: [
          "Scalable REST & GraphQL API Design",
          "Database Indexing & Query Optimization",
          "Automated Data Pipelines & Clean OOP",
        ],
        id: [
          "Desain REST & GraphQL API Terukur",
          "Optimasi Indeks & Performa Database",
          "Pipeline Data Otomatis & Arsitektur OOP",
        ],
      },
      skills: ["Python", "FastAPI / Django", "TypeScript", "PostgreSQL / MySQL", "RESTful APIs", "Docker"],
    },
    {
      index: "02",
      tag: "FULLSTACK & INTERFACE",
      title: "Frontend & Fullstack Architecture",
      icon: Layout,
      description: {
        en: "Crafting modular, high-performance web applications with uncompromising attention to typography, fluid 60fps micro-interactions, and visual precision.",
        id: "Membangun aplikasi web modular berperforma tinggi dengan ketelitian mendalam pada tipografi, interaksi 60fps yang halus, dan presisi visual.",
      },
      highlights: {
        en: [
          "React 19, Next.js & Modern SSR/SSG",
          "State Architecture & Sub-second Vitals",
          "Bespoke GSAP & Framer Motion Physics",
        ],
        id: [
          "React 19, Next.js & Ekosistem Modern SSR",
          "Arsitektur State & Web Vitals Kilat",
          "Fisika Animasi Halus GSAP & Framer Motion",
        ],
      },
      skills: ["React & Next.js", "Tailwind CSS", "Laravel 11", "TypeScript", "Framer Motion", "GSAP"],
    },
    {
      index: "03",
      tag: "INTELLIGENCE & MOBILE",
      title: "AI Integration & Mobile",
      icon: Cpu,
      description: {
        en: "Embedding custom LLM capabilities, semantic retrieval pipelines, and building seamless cross-platform mobile experiences for real-world business impact.",
        id: "Mengintegrasikan kapabilitas LLM kustom, semantic vector search, serta membangun aplikasi mobile lintas platform untuk kebutuhan bisnis nyata.",
      },
      highlights: {
        en: [
          "Custom LLM & Autonomous Agent Workflows",
          "Cross-Platform Flutter Mobile Apps",
          "Predictive Analytics & Expert Decision Logic",
        ],
        id: [
          "Integrasi LLM & Alur Kerja Agen Cerdas",
          "Aplikasi Mobile Lintas Platform Flutter",
          "Analitik Prediktif & Logika Sistem Pakar",
        ],
      },
      skills: ["Flutter & Dart", "LLM APIs (OpenAI / Claude)", "Vector Search", "Firebase", "Machine Learning", "Power BI"],
    },
  ];

  return (
    <section
      id="expertise"
      className="relative w-full bg-[#080808] py-20 sm:py-28 border-t border-white/[0.06] select-none"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header: Apple SaaS Refined Minimalist Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#66d9ed] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#66d9ed] animate-pulse" />
              <span>Capabilities // Core Disciplines</span>
            </div>

            <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1]">
              {t({
                en: "Engineered with precision. Crafted with intent.",
                id: "Direkayasa dengan presisi. Dibangun dengan tujuan nyata.",
              })}
            </h2>

            <p className="font-sans text-sm sm:text-base text-white/60 leading-relaxed max-w-xl font-normal">
              {t({
                en: "A focused synthesis of technical depth and modern craftsmanship across software architecture, cloud platforms, and intelligent automation.",
                id: "Sintesis mendalam antara ketajaman teknis dan estetika antarmuka dalam arsitektur perangkat lunak, sistem cloud, dan otomatisasi cerdas.",
              })}
            </p>
          </div>

          {/* Quick Stats or Tech Pill */}
          <div className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-full border border-white/10 bg-[#0d0d10] text-xs font-mono text-white/70">
            <span className="text-[#66d9ed]">3 Core Pillars</span>
            <span className="text-white/20">•</span>
            <span>Production Ready</span>
          </div>
        </div>

        {/* 3-Column Apple Minimalist Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {expertiseItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative rounded-3xl border border-white/[0.08] bg-[#0d0d10] hover:border-[#66d9ed]/50 hover:shadow-[0_0_30px_rgba(102,217,237,0.12)] p-7 sm:p-8 flex flex-col justify-between transition-all duration-500 overflow-hidden"
              >
                {/* Subtle Ambient Hover Glow in Corner */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-[radial-gradient(circle_at_top_right,rgba(102,217,237,0.12),transparent_70%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Top Row: Index Tag & Sleek Micro-Icon */}
                  <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] font-semibold text-[#66d9ed] tracking-wider uppercase">
                        {item.tag}
                      </span>
                    </div>

                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#66d9ed] group-hover:scale-110 group-hover:bg-[#66d9ed] group-hover:text-black group-hover:shadow-[0_0_16px_rgba(102,217,237,0.45)] transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-bold text-xl sm:text-2xl text-white tracking-tight mb-2.5 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  {/* Concise Description */}
                  <p className="font-sans text-xs sm:text-sm text-white/65 leading-relaxed font-normal mb-5">
                    {t(item.description)}
                  </p>

                  {/* Informative Apple-Style Feature Bullets */}
                  <div className="space-y-2 pt-2 pb-1 border-t border-white/[0.04]">
                    {item.highlights[lang === "id" ? "id" : "en"].map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-white/75 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#66d9ed] shrink-0 mt-0.5" />
                        <span className="leading-snug">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: Core Stack Tags */}
                <div className="mt-6 pt-5 border-t border-white/[0.06] space-y-2.5">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-white/40">
                    Core Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] font-mono text-[11px] text-white/70 group-hover:border-white/15 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
