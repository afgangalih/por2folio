import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { listProyek } from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight } from "lucide-react";
import { Icons } from "@/components/icons";

export const Work = ({ onSelectProject }) => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { name: "All", count: listProyek.length },
    {
      name: "Web Development",
      count: listProyek.filter((p) => p.category === "Web Development").length,
    },
    {
      name: "Mobile App",
      count: listProyek.filter((p) => p.category === "Mobile App").length,
    },
    {
      name: "Data & AI",
      count: listProyek.filter(
        (p) => p.category === "Data Analyst" || p.category === "Machine Learning"
      ).length,
    },
  ];

  const filteredProjects = listProyek.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Data & AI") {
      return (
        project.category === "Data Analyst" ||
        project.category === "Machine Learning"
      );
    }
    return project.category === activeCategory;
  });

  const featured = listProyek.find((p) => p.id === 2) || listProyek[0];

  return (
    <section id="work" className="relative py-28 px-5 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
        <div className="lg:col-span-5">
          <h2 className="font-sans font-bold text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-none">
            My
            <br />
            Work
          </h2>
        </div>
        <div className="lg:col-span-7">
          <p className="font-mono text-xs sm:text-sm text-[#86868b] max-w-2xl leading-relaxed">
            {t({
              en: "Selected software engineering projects across web applications, machine learning, and mobile ecosystems. Emphasizing clean systems, performance, and aesthetic precision.",
              id: "Pilihan proyek rekayasa perangkat lunak dalam aplikasi web, machine learning, dan ekosistem mobile. Menitikberatkan pada arsitektur bersih, performa, dan presisi estetika.",
            })}
          </p>
        </div>
      </div>

      {/* Featured Project Showcase Card (Refined Apple Minimalist Architecture) */}
      {featured && (
        <div className="relative mb-20 rounded-2xl overflow-hidden border border-white/[0.08] bg-[#141416] p-7 sm:p-12 transition-all duration-300 hover:border-white/20 group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#66d9ed] block">
                Featured Case Study
              </span>

              <h3 
                onClick={() => onSelectProject(featured)}
                className="font-sans font-semibold text-2xl sm:text-4xl text-white tracking-tight cursor-pointer hover:text-[#66d9ed] transition-colors"
              >
                {featured.nama}
              </h3>

              <p className="font-sans text-sm sm:text-base text-[#a1a1a6] leading-relaxed">
                {featured.details || featured.desk}
              </p>

              {/* Technologies clean text */}
              <div className="pt-1">
                <span className="font-mono text-xs text-[#6e6e73]">
                  {featured.tools?.join("  •  ")}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onSelectProject(featured)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-black hover:bg-[#e5e5e7] font-sans text-xs sm:text-sm font-semibold tracking-tight transition-colors cursor-pointer"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="size-4" />
                </button>

                {featured.github && (
                  <a
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-[#a1a1a6] hover:text-white transition-colors"
                    title="View Source on GitHub"
                  >
                    <Icons.github className="size-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Right Media Preview */}
            <div
              onClick={() => onSelectProject(featured)}
              className="lg:col-span-6 relative aspect-video rounded-xl overflow-hidden border border-white/[0.08] bg-black cursor-pointer group/image"
            >
              <img
                src={featured.gambar}
                alt={featured.nama}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/image:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      )}

      {/* Filter by Bar */}
      <div className="mb-12 pb-4 border-b border-white/[0.08] flex flex-wrap items-center gap-4 sm:gap-8 font-mono text-xs">
        <span className="text-[#6e6e73] uppercase tracking-widest">Filter</span>

        {categories.map((cat, idx) => {
          const isActive = activeCategory === cat.name;
          return (
            <React.Fragment key={cat.name}>
              {idx > 0 && <span className="text-white/20 select-none">/</span>}
              <button
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-[#86868b] hover:text-white"
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] ${
                    isActive ? "text-[#66d9ed]" : "text-[#6e6e73]"
                  }`}
                >
                  0{cat.count}
                </span>
              </button>
            </React.Fragment>
          );
        })}
      </div>

      {/* Clean Bento Project Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, index) => {
            const isWide = index % 5 === 0;

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`group rounded-2xl overflow-hidden border border-white/[0.08] bg-[#141416] hover:border-white/20 transition-all duration-300 flex flex-col justify-between ${
                  isWide ? "sm:col-span-2 lg:col-span-2" : "col-span-1"
                }`}
              >
                {/* Project Image */}
                <div
                  onClick={() => onSelectProject(project)}
                  className="relative aspect-video overflow-hidden bg-black cursor-pointer"
                >
                  <img
                    src={project.gambar}
                    alt={project.nama}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 font-mono text-[10px] text-[#a1a1a6]">
                    {project.category}
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h4
                        onClick={() => onSelectProject(project)}
                        className="font-sans font-semibold text-lg text-white hover:text-[#66d9ed] transition-colors cursor-pointer line-clamp-1"
                      >
                        {project.nama}
                      </h4>
                      {project.role && (
                        <span className="shrink-0 text-[10px] font-mono text-[#86868b]">
                          {project.role}
                        </span>
                      )}
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-[#86868b] line-clamp-2 leading-relaxed">
                      {project.desk}
                    </p>
                  </div>

                  {/* Clean text tools & view link */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] text-[#6e6e73] truncate max-w-[70%]">
                      {project.tools?.slice(0, 3).join(", ")}
                    </span>

                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-mono text-white/80 hover:text-white transition-colors cursor-pointer"
                    >
                      <span>Read</span>
                      <ArrowUpRight className="size-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
