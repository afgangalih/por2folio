import React from "react";
import { listInsights } from "@/data/insights";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, BookOpen } from "lucide-react";

export const InsightsSection = ({ onSelectArticle, onViewAll }) => {
  const { t } = useLanguage();
  // Display only top 3 main stories on the landing page
  const mainArticles = listInsights.slice(0, 3);

  return (
    <section id="insights" className="relative py-24 sm:py-32 bg-[#080808] border-t border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16 pb-6 border-b border-white/[0.08]">
          <div className="space-y-2 max-w-xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#66d9ed] block">
              Writing & Perspectives
            </span>
            <h2 className="font-sans font-semibold text-2xl sm:text-4xl text-white tracking-tight">
              {t({
                en: "Articles & Engineering Reports",
                id: "Artikel & Wawasan Teknologi",
              })}
            </h2>
            <p className="font-sans text-sm text-[#86868b] leading-relaxed">
              {t({
                en: "In-depth analyses, market breakdowns, and architectural perspectives on frontier technology.",
                id: "Analisis mendalam, laporan industri, dan perspektif arsitektur seputar teknologi mutakhir.",
              })}
            </p>
          </div>

          <button
            onClick={onViewAll}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-[#66d9ed]/50 bg-white/[0.03] hover:bg-white/[0.06] text-xs font-mono text-white transition-colors cursor-pointer self-start sm:self-end group"
          >
            <span>{t({ en: "See all insights", id: "Lihat semua artikel" })}</span>
            <ArrowRight className="size-3.5 text-[#66d9ed] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Magazine / Medium-Style Top 3 Article Feed */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {mainArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center group cursor-pointer transition-all"
            >
              {/* Left Column: 16:9 Editorial Article Thumbnail */}
              <div className="md:col-span-5 h-[200px] sm:h-[220px] rounded-2xl overflow-hidden bg-[#121215] border border-white/[0.08] relative shrink-0">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>

              {/* Right Column: Article Details & Metadata */}
              <div className="md:col-span-7 space-y-3">
                <div className="flex items-center gap-3 font-mono text-xs text-[#71717a]">
                  <span className="text-[#66d9ed]">{article.category}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-sans font-bold text-xl sm:text-2xl text-white group-hover:text-[#66d9ed] transition-colors tracking-tight leading-snug">
                  {article.title}
                </h3>

                <p className="font-sans text-sm text-[#86868b] leading-relaxed line-clamp-2">
                  {article.subtitle || article.excerpt}
                </p>

                <div className="pt-2 flex items-center gap-1.5 font-mono text-xs text-white group-hover:text-[#66d9ed] transition-colors">
                  <span>Read story</span>
                  <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA to see full repository */}
        <div className="mt-12 text-center">
          <button
            onClick={onViewAll}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#a1a1a6] hover:text-[#66d9ed] transition-colors cursor-pointer group"
          >
            <span>{t({ en: "Browse all articles and technical writings", id: "Telusuri seluruh arsip artikel & tulisan teknis" })}</span>
            <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
