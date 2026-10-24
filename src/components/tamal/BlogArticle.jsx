import React, { useEffect, useState } from "react";
import { listInsights } from "@/data/insights";
import { useLanguage } from "@/context/LanguageContext";
import { Header } from "./Header";
import { Footer } from "./Footer";
import {
  ChevronRight,
  Home,
  Share2,
  Check,
  Heart,
  ArrowRight,
} from "lucide-react";

export const BlogArticle = ({
  article,
  onBackToInsights,
  onBackToHome,
  onSelectArticle,
}) => {
  const { t } = useLanguage();
  const [copiedLink, setCopiedLink] = useState(false);
  const [claps, setClaps] = useState(42);
  const [hasClapped, setHasClapped] = useState(false);

  // Scroll to top immediately when article opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [article?.id]);

  if (!article) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleClap = () => {
    setClaps((prev) => prev + 1);
    setHasClapped(true);
  };

  const relatedArticles = listInsights.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#080808] text-[#e4e4e7] flex flex-col justify-between selection:bg-[#66d9ed] selection:text-black antialiased">
      {/* 1. Global Navigation */}
      <Header />

      <main className="pt-28 sm:pt-36 pb-24 w-full flex-1">
        
        {/* Breadcrumb Navigation Bar (Substack / Medium style) */}
        <div className="max-w-3xl mx-auto px-5 sm:px-8 mb-8 pb-5 border-b border-white/[0.08] flex items-center justify-between">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-xs text-[#71717a] flex-wrap">
            <button
              onClick={onBackToHome}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Home className="size-3.5" />
              <span>{t({ en: "Home", id: "Beranda" })}</span>
            </button>
            <ChevronRight className="size-3 text-white/30" />
            <button
              onClick={onBackToInsights}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t({ en: "Insights", id: "Artikel" })}
            </button>
            <ChevronRight className="size-3 text-white/30" />
            <span className="text-[#66d9ed] truncate max-w-[200px] sm:max-w-xs">
              {article.category}
            </span>
          </nav>

          <span className="font-mono text-xs text-[#71717a] hidden sm:inline">
            {article.readTime}
          </span>
        </div>

        {/* Medium-Style Article Content Container (Distraction-Free) */}
        <article className="max-w-3xl mx-auto px-5 sm:px-8">
          
          {/* Article Header */}
          <header className="space-y-5 mb-10">
            {/* Category text - clean without badge design */}
            <div className="font-mono text-xs text-[#66d9ed] uppercase tracking-wider">
              {article.category}
            </div>

            {/* Headline */}
            <h1 className="font-sans font-bold text-3xl sm:text-5xl text-white tracking-tight leading-[1.18]">
              {article.title}
            </h1>

            {/* Subtitle / Excerpt */}
            {article.subtitle && (
              <p className="font-sans text-lg sm:text-xl text-[#a1a1aa] leading-relaxed font-normal">
                {article.subtitle}
              </p>
            )}

            {/* Medium Byline: Author Avatar, Name, Date, Read Time */}
            <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <img
                  src="/logo.png"
                  alt={article.author}
                  className="w-11 h-11 rounded-full object-contain p-1.5 bg-[#141417] border border-white/[0.1] shadow-sm"
                />
                <div className="space-y-0.5">
                  <div className="font-sans font-semibold text-sm text-white">
                    {article.author}
                  </div>
                  <div className="font-mono text-xs text-[#71717a] flex items-center gap-2">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Share & Clap */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleClap}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-mono transition-all cursor-pointer ${
                    hasClapped
                      ? "border-[#66d9ed]/50 bg-[#66d9ed]/10 text-[#66d9ed]"
                      : "border-white/[0.08] bg-white/[0.03] text-[#a1a1aa] hover:text-white hover:border-white/20"
                  }`}
                  title="Applaud this story"
                >
                  <Heart className={`size-3.5 ${hasClapped ? "fill-[#66d9ed]" : ""}`} />
                  <span>{claps}</span>
                </button>

                <button
                  onClick={handleShare}
                  className="p-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-[#a1a1aa] hover:text-white hover:border-white/20 transition-colors cursor-pointer"
                  title="Share article link"
                >
                  {copiedLink ? (
                    <Check className="size-3.5 text-emerald-400" />
                  ) : (
                    <Share2 className="size-3.5" />
                  )}
                </button>
              </div>
            </div>
          </header>

          {/* Featured Hero Image */}
          {article.coverImage && (
            <figure className="mb-12 space-y-2.5">
              <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0c0c0e]">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-auto object-cover max-h-[460px]"
                />
              </div>
              {article.coverCaption && (
                <figcaption className="font-mono text-xs text-[#71717a] text-center italic">
                  {article.coverCaption}
                </figcaption>
              )}
            </figure>
          )}

          {/* Article Dynamic Body (Medium-Style Typography) */}
          <div className="space-y-7">
            {article.content?.map((block, idx) => {
              if (block.type === "paragraph") {
                return (
                  <p
                    key={idx}
                    className="font-sans text-[17px] sm:text-[19px] text-[#d4d4d8] leading-[1.82] font-normal"
                  >
                    {block.text}
                  </p>
                );
              }

              if (block.type === "heading") {
                return (
                  <h2
                    key={idx}
                    className="font-sans font-bold text-2xl sm:text-3xl text-white tracking-tight mt-12 mb-3 pt-4 border-t border-white/[0.06]"
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "quote") {
                return (
                  <div
                    key={idx}
                    className="my-10 p-6 sm:p-8 rounded-2xl bg-[#0f0f12] border-l-4 border-[#66d9ed] space-y-2 shadow-lg"
                  >
                    <blockquote className="font-sans italic text-lg sm:text-xl text-white leading-relaxed">
                      "{block.text}"
                    </blockquote>
                    {block.author && (
                      <cite className="font-mono text-xs text-[#66d9ed] not-italic block pt-1">
                        — {block.author}
                      </cite>
                    )}
                  </div>
                );
              }

              if (block.type === "image") {
                return (
                  <figure key={idx} className="my-10 space-y-2">
                    <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0c0c0e]">
                      <img
                        src={block.url}
                        alt={block.caption || "Article visual"}
                        className="w-full h-auto object-cover max-h-[420px]"
                        loading="lazy"
                      />
                    </div>
                    {block.caption && (
                      <figcaption className="font-mono text-xs text-[#71717a] text-center italic">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              }

              return null;
            })}
          </div>

          {/* Medium Author Bio Box */}
          <div className="mt-16 pt-8 border-t border-white/[0.08] flex items-start gap-4">
            <img
              src="/logo.png"
              alt={article.author}
              className="w-12 h-12 rounded-full object-contain p-2 bg-[#141417] border border-white/[0.1] shrink-0"
            />
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#66d9ed] uppercase tracking-wider block">
                Written by
              </span>
              <h4 className="font-sans font-semibold text-base text-white">
                {article.author}
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#86868b] leading-relaxed">
                Software Engineer & Researcher specializing in scalable web systems, frontier AI infrastructure, and intuitive human-computer interfaces.
              </p>
            </div>
          </div>

        </article>

        {/* Medium-Style "More from Afgan Galih / Related Stories" Feed */}
        {relatedArticles.length > 0 && (
          <section className="max-w-3xl mx-auto px-5 sm:px-8 mt-20 pt-12 border-t border-white/[0.08] space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-white tracking-tight">
                More Articles & Perspectives
              </h3>
              <button
                onClick={onBackToInsights}
                className="font-mono text-xs text-[#66d9ed] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>View all</span>
                <ArrowRight className="size-3" />
              </button>
            </div>

            <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectArticle(rel)}
                  className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5 group cursor-pointer"
                >
                  <div className="space-y-2 max-w-xl">
                    <div className="flex items-center gap-2 font-mono text-xs text-[#71717a]">
                      <span className="text-[#66d9ed]">{rel.category}</span>
                      <span>•</span>
                      <span>{rel.readTime}</span>
                    </div>

                    <h4 className="font-sans font-semibold text-lg text-white group-hover:text-[#66d9ed] transition-colors leading-snug">
                      {rel.title}
                    </h4>

                    <p className="font-sans text-xs sm:text-sm text-[#86868b] line-clamp-2 leading-relaxed">
                      {rel.subtitle || rel.excerpt}
                    </p>
                  </div>

                  {rel.coverImage && (
                    <div className="w-full sm:w-32 h-20 rounded-xl overflow-hidden bg-black border border-white/[0.08] shrink-0">
                      <img
                        src={rel.coverImage}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};
