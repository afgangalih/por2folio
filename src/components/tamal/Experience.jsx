import React, { useState } from "react";
import { DATA } from "@/data/resume";
import { useLanguage } from "@/context/LanguageContext";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Experience = () => {
  const { lang, t } = useLanguage();
  const [openItems, setOpenItems] = useState([0]); // default first one open as reference

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="experience" className="relative py-28 px-5 sm:px-8 max-w-7xl mx-auto">
      {/* Header: Apple Minimalist Style */}
      <div className="mb-14 sm:mb-16 max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#66d9ed]">
          <span>Career & Foundation</span>
          <span className="text-white/30">•</span>
          <span className="text-[#86868b]">Timeline</span>
        </div>

        <h2 className="font-sans font-semibold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
          {t({ en: "Professional Experience.", id: "Pengalaman Profesional." })}
        </h2>

        <p className="font-sans text-base sm:text-lg text-[#86868b] leading-relaxed">
          {t({
            en: "A chronicle of engineering roles and technical responsibilities. Expand any role to inspect full details.",
            id: "Rekam jejak peran rekayasa perangkat lunak dan tanggung jawab teknis. Tekan tanda + untuk melihat detail.",
          })}
        </p>
      </div>

      {/* Experience List: Expandable Minimalist Apple Row Architecture */}
      <div className="space-y-4 sm:space-y-5">
        {DATA.work.map((item, index) => {
          const isOpen = openItems.includes(index);
          const periodText =
            item.end == null
              ? lang === "en"
                ? `${item.start} — Present`
                : `${item.start} — Sekarang`
              : item.start === item.end
              ? item.start
              : `${item.start} — ${item.end}`;

          return (
            <div
              key={item.company}
              className={`rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? "border-white/20 bg-[#161618]"
                  : "border-white/[0.08] bg-[#141416] hover:border-white/15 hover:bg-[#18181b]"
              }`}
            >
              {/* Clickable Summary Bar */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              >
                <div className="space-y-1 min-w-0 pr-2">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-sans font-semibold text-lg sm:text-2xl text-white tracking-tight">
                      {item.title}
                    </h3>
                    <span className="text-sm sm:text-base font-normal text-[#86868b]">
                      at {item.company}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs text-[#6e6e73]">
                    {item.location && <span>{item.location}</span>}
                    <span className="text-white/20">•</span>
                    <span className="text-[#a1a1a6]">{periodText}</span>
                  </div>
                </div>

                {/* Apple-style circular + / − toggle button */}
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen
                      ? "border-white/30 bg-white text-black"
                      : "border-white/10 bg-white/[0.04] text-[#a1a1a6] hover:text-white hover:border-white/20"
                  }`}
                  aria-label={isOpen ? "Collapse details" : "Expand details"}
                >
                  <Plus
                    className={`size-4 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Expandable Detail Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 border-t border-white/[0.06] space-y-6">
                      {/* Description */}
                      <p className="font-sans text-sm sm:text-base text-[#a1a1a6] leading-relaxed">
                        {t(item.description)}
                      </p>

                      {/* Technical Badges & Company Link */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                        <div className="flex flex-wrap gap-1.5">
                          {item.badges?.map((badge) => (
                            <span
                              key={badge}
                              className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] font-mono text-xs text-[#d1d1d6]"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>

                        {item.href && item.href !== "#" && (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-mono text-xs text-[#86868b] hover:text-white transition-colors"
                          >
                            <span>{item.href.replace(/^https?:\/\//, "")}</span>
                            <ArrowUpRight className="size-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Education Section: Apple Minimalist Dual Cards */}
      <div className="mt-20 sm:mt-24 pt-16 border-t border-white/[0.08]">
        <div className="mb-10 space-y-2">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#86868b] block">
            Academic Background
          </span>
          <h3 className="font-sans font-semibold text-2xl sm:text-3xl text-white tracking-tight">
            {t({ en: "Education & Qualifications", id: "Pendidikan & Kualifikasi" })}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {DATA.education.map((edu) => (
            <div
              key={edu.school}
              className="rounded-2xl border border-white/[0.08] bg-[#141416] p-7 sm:p-9 flex items-start gap-5 transition-all duration-300 hover:border-white/20 hover:bg-[#18181b]"
            >
              {edu.logoUrl && (
                <div className="w-14 h-14 rounded-xl bg-white/[0.03] border border-white/[0.08] p-2.5 shrink-0 flex items-center justify-center">
                  <img
                    src={edu.logoUrl}
                    alt={edu.school}
                    className="w-full h-full object-contain filter grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all"
                  />
                </div>
              )}
              <div className="min-w-0 flex-1 space-y-1">
                <span className="font-mono text-xs text-[#66d9ed] block">
                  {edu.end === "Present"
                    ? lang === "en"
                      ? `${edu.start} — Present`
                      : `${edu.start} — Sekarang`
                    : `${edu.start} — ${edu.end}`}
                </span>
                <h4 className="font-sans font-semibold text-lg text-white leading-snug">
                  {edu.school}
                </h4>
                <p className="font-sans text-sm text-[#86868b] leading-relaxed">
                  {t(edu.degree)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
