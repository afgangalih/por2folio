import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Terminal, Layout, Smartphone } from "lucide-react";

export const Expertise = () => {
  const { t } = useLanguage();

  const expertiseItems = [
    {
      index: "01",
      title: "Software & AI Systems",
      icon: Terminal,
      description: {
        en: "Designing scalable backend architectures, robust REST APIs, and automated data pipelines. Focused on clean OOP principles, high-performance database design, and intelligent automation.",
        id: "Merancang arsitektur backend terukur, REST API andal, dan pipeline data otomatis. Berfokus pada prinsip OOP yang bersih, desain database berkinerja tinggi, dan otomatisasi cerdas.",
      },
      skills: ["Python", "FastAPI / Django", "TypeScript", "SQL & Database", "RESTful APIs", "OOP Design"],
    },
    {
      index: "02",
      title: "Frontend & Fullstack Architecture",
      icon: Layout,
      description: {
        en: "Building high-performance, modular web applications with uncompromising attention to typography, micro-interactions, and visual harmony. Bridging design aesthetics with resilient frontend logic.",
        id: "Membangun aplikasi web modular berperforma tinggi dengan ketelitian mendalam pada tipografi, interaksi mikro, dan harmoni visual. Menghubungkan estetika desain dengan logika frontend yang tangguh.",
      },
      skills: ["React & Next.js", "Tailwind CSS", "Laravel 11", "Inertia.js", "Framer Motion", "Lenis & GSAP"],
    },
    {
      index: "03",
      title: "Mobile & Machine Learning",
      icon: Smartphone,
      description: {
        en: "Developing seamless cross-platform mobile apps using Flutter and integrating intelligent rule-based expert systems with predictive analytics to solve complex real-world workflows.",
        id: "Mengembangkan aplikasi mobile lintas platform dengan Flutter serta mengintegrasikan sistem pakar berbasis aturan dan analitik prediktif untuk menyelesaikan alur kerja yang kompleks.",
      },
      skills: ["Flutter & Dart", "Expert Systems", "Firebase", "Machine Learning", "Data Analytics", "Power BI"],
    },
  ];

  return (
    <section
      id="expertise"
      className="relative py-28 px-5 sm:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header: Apple Minimalist Style */}
      <div className="mb-16 sm:mb-20 max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#66d9ed]">
          <span>Capabilities</span>
          <span className="text-white/30">•</span>
          <span className="text-[#86868b]">Core Disciplines</span>
        </div>

        <h2 className="font-sans font-semibold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
          {t({ en: "Engineering with aesthetic precision.", id: "Rekayasa perangkat lunak dengan presisi estetika." })}
        </h2>

        <p className="font-sans text-base sm:text-lg text-[#86868b] leading-relaxed">
          {t({
            en: "A focused synthesis of technical depth and interface craftsmanship across software, web, and intelligent systems.",
            id: "Sintesis mendalam antara ketajaman teknis dan keahlian desain antarmuka dalam perangkat lunak, web, dan sistem cerdas.",
          })}
        </p>
      </div>

      {/* 3-Column Clean Bento Cards (Apple SaaS Minimalist) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {expertiseItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="group relative rounded-2xl border border-white/[0.08] bg-[#141416] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:bg-[#18181b]"
            >
              {/* Card Top: Index & Icon */}
              <div>
                <div className="flex items-center justify-between pb-8 mb-6 border-b border-white/[0.06]">
                  <span className="font-mono text-xs text-[#6e6e73] tracking-widest uppercase">
                    // {item.index}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#a1a1a6] group-hover:text-white group-hover:border-white/20 transition-all">
                    <Icon className="size-4" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-sans font-semibold text-xl sm:text-2xl text-white tracking-tight mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm sm:text-base text-[#a1a1a6] leading-relaxed font-normal">
                  {t(item.description)}
                </p>
              </div>

              {/* Card Bottom: Core Stack (Clean subdued tags) */}
              <div className="mt-8 pt-6 border-t border-white/[0.06] space-y-3">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-[#6e6e73]">
                  Core Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] font-mono text-xs text-[#d1d1d6]"
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
    </section>
  );
};
