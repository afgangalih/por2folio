import React, { useState, useEffect } from "react";
import { listInsights } from "@/data/insights";
import { useLanguage } from "@/context/LanguageContext";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ArrowRight, ChevronRight, Home, Search } from "lucide-react";

export const InsightsArchive = ({ onSelectArticle, onBackToHome }) => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const categories = [
    "All",
    "Artificial Intelligence",
    "Developer Tools",
    "UI UX Design",
    "Web Architecture",
  ];

  const filteredArticles = listInsights.filter((article) => {
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#080808] text-[#e4e4e7] flex flex-col justify-between selection:bg-[#66d9ed] selection:text-black antialiased">
      <Header />

      <main className="pt-28 sm:pt-36 pb-24 w-full flex-1">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 font-mono text-xs text-[#71717a] mb-8"
          >
            <button
              onClick={onBackToHome}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Home className="size-3.5" />
              <span>{t({ en: "Home", id: "Beranda" })}</span>
            </button>
            <ChevronRight className="size-3 text-white/30" />
            <span className="text-[#66d9ed]">
              {t({ en: "Insights", id: "Artikel & Wawasan" })}
            </span>
          </nav>

          {/* Editorial Header (Substack / Medium style) */}
          <header className="space-y-4 mb-12 pb-8 border-b border-white/[0.08]">
            <h1 className="font-sans font-bold text-3xl sm:text-5xl text-white tracking-tight">
              {t({
                en: "Writing & Perspectives",
                id: "Artikel & Wawasan Teknologi",
              })}
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#86868b] max-w-2xl leading-relaxed">
              {t({
                en: "Essays, architectural breakdowns, and engineering perspectives on frontier AI, developer tooling, and modern interface design.",
                id: "Esai mendalam, analisis arsitektur, dan laporan rekayasa perangkat lunak seputar AI, developer tools, dan desain antarmuka modern.",
              })}
            </p>

            {/* Search Input */}
            <div className="pt-4 max-w-md">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#71717a]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t({
                    en: "Search articles...",
                    id: "Cari artikel...",
                  })}
                  className="w-full pl-10 pr-4 py-2 bg-[#111114] border border-white/[0.08] focus:border-[#66d9ed] rounded-lg font-sans text-sm text-white placeholder-[#71717a] focus:outline-none transition-colors"
                />
              </div>
            </div>
          </header>

          {/* Minimalist Substack / Medium Category Tabs */}
          <div className="flex items-center gap-6 overflow-x-auto pb-3 mb-10 no-scrollbar border-b border-white/[0.08]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`pb-2.5 font-sans text-sm transition-colors whitespace-nowrap cursor-pointer border-b-2 -mb-[13px] ${
                  activeCategory === cat
                    ? "text-white font-medium border-[#66d9ed]"
                    : "text-[#71717a] hover:text-[#d4d4d8] border-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Article Feed */}
          {filteredArticles.length === 0 ? (
            <div className="py-16 text-center text-[#71717a] font-sans text-sm">
              {t({
                en: "No articles found matching your query.",
                id: "Tidak ada artikel yang sesuai dengan pencarian Anda.",
              })}
            </div>
          ) : (
            <div className="divide-y divide-white/[0.08]">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  onClick={() => onSelectArticle(article)}
                  className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-center group cursor-pointer transition-colors"
                >
                  {/* Left Column: Text & Metadata */}
                  <div className="sm:col-span-8 space-y-2.5">
                    <div className="flex items-center gap-2.5 font-mono text-xs text-[#71717a]">
                      <span className="text-[#66d9ed]">{article.category}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>

                    <h2 className="font-sans font-bold text-xl sm:text-2xl text-white group-hover:text-[#66d9ed] transition-colors tracking-tight leading-snug">
                      {article.title}
                    </h2>

                    <p className="font-sans text-sm text-[#86868b] leading-relaxed line-clamp-2">
                      {article.subtitle || article.excerpt}
                    </p>

                    <div className="pt-2 flex items-center gap-1.5 font-mono text-xs text-white/80 group-hover:text-[#66d9ed] transition-colors">
                      <span>Read story</span>
                      <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Right Column: Clean 16:9 Thumbnail */}
                  {article.coverImage && (
                    <div className="sm:col-span-4 h-40 sm:h-32 rounded-xl overflow-hidden bg-[#121215] border border-white/[0.08] relative shrink-0">
                      <img
                        src={article.coverImage}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                        loading="lazy"
                      />
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};
