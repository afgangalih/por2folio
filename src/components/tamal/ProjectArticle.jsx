import React, { useEffect, useMemo } from "react";
import { listProyek } from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";

export const ProjectArticle = ({ project, onBack, onSelectProject }) => {
  const { t } = useLanguage();

  // Scroll to top immediately on project change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [project?.id]);

  const currentIndex = useMemo(() => {
    if (!project) return -1;
    return listProyek.findIndex((p) => p.id === project.id);
  }, [project]);

  const prevProject = useMemo(() => {
    if (currentIndex <= 0) return listProyek[listProyek.length - 1];
    return listProyek[currentIndex - 1];
  }, [currentIndex]);

  const nextProject = useMemo(() => {
    if (currentIndex === -1 || currentIndex >= listProyek.length - 1) return listProyek[0];
    return listProyek[currentIndex + 1];
  }, [currentIndex]);

  // Handle keyboard navigation (Esc, Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onBack();
      } else if (e.key === "ArrowRight" && nextProject) {
        onSelectProject(nextProject);
      } else if (e.key === "ArrowLeft" && prevProject) {
        onSelectProject(prevProject);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextProject, prevProject, onBack, onSelectProject]);

  if (!project) return null;

  const projectTitle = project.nama || project.title;
  const projectCategory = project.category || "Web Development";
  const projectRole =
    typeof project.role === "object" ? t(project.role) : project.role || "Developer";
  const projectDesc = project.details || project.desk || project.description;
  const projectTools = project.tools || project.technologies || [];
  const projectImages =
    project.images && project.images.length > 0 ? project.images : [project.gambar];

  return (
    <div className="min-h-screen bg-[#111113] text-[#f5f5f7] flex flex-col justify-between selection:bg-white selection:text-black antialiased">
      {/* 1. Global Navigation */}
      <Header />

      <main className="pt-28 sm:pt-36 pb-28 max-w-6xl mx-auto px-5 sm:px-8 w-full flex-1">
        
        {/* Navigation Strip (Back link & Minimalist Breadcrumb) */}
        <div className="flex items-center justify-between pb-8 mb-12 border-b border-white/[0.08]">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#a1a1a6] hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowLeft className="size-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>{t({ en: "All Projects", id: "Semua Proyek" })}</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#6e6e73]">
            <span>Portfolio</span>
            <span>/</span>
            <span className="text-[#a1a1a6]">{projectCategory}</span>
          </div>
        </div>

        {/* 2. Hero Header: Clean Kicker + Confident Title */}
        <header className="mb-14 sm:mb-20 space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#66d9ed]">
            <span>{projectCategory}</span>
            <span className="text-white/30">•</span>
            <span className="text-[#86868b]">Case Study</span>
          </div>

          <h1 className="font-sans font-semibold text-3xl sm:text-5xl lg:text-[64px] text-white tracking-tight leading-[1.08]">
            {projectTitle}
          </h1>
        </header>

        {/* 3. Dual-Column Overview & Technical Specifications (Tamal Sen structure with Apple refinement) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-16 mb-20 border-b border-white/[0.08]">
          
          {/* Left Column: Clear Narrative Prose & Feature Highlights */}
          <div className="lg:col-span-7 space-y-8">
            <p className="font-sans text-base sm:text-xl text-[#d1d1d6] leading-relaxed font-normal">
              {typeof projectDesc === "object" ? t(projectDesc) : projectDesc}
            </p>

            {/* Key Features (Simple, clean, typography-first list) */}
            {project.features && project.features.length > 0 && (
              <div className="space-y-4 pt-4">
                <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#86868b]">
                  {t({ en: "Key Highlights", id: "Sorotan Utama" })}
                </h2>
                <ul className="space-y-2.5">
                  {project.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-baseline gap-3 text-sm sm:text-base text-[#a1a1a6] leading-snug"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#66d9ed] shrink-0" />
                      <span>{typeof feat === "object" ? t(feat) : feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column: Clean Specification Rows & Direct Links */}
          <div className="lg:col-span-5 space-y-6 lg:pl-6">
            
            {/* Spec: Role */}
            <div className="border-t border-white/[0.12] pt-4">
              <span className="block text-xs font-mono uppercase tracking-wider text-[#86868b] mb-1.5">
                {t({ en: "Role", id: "Peran" })}
              </span>
              <p className="font-sans text-base font-medium text-white">
                {projectRole}
              </p>
            </div>

            {/* Spec: Technologies (Clean comma-separated text list) */}
            <div className="border-t border-white/[0.12] pt-4">
              <span className="block text-xs font-mono uppercase tracking-wider text-[#86868b] mb-1.5">
                Technologies
              </span>
              <p className="font-mono text-xs sm:text-sm text-[#d1d1d6] leading-relaxed">
                {projectTools.join(", ")}
              </p>
            </div>

            {/* Spec: Action Links (Minimalist solid & ghost buttons) */}
            <div className="border-t border-white/[0.12] pt-6 flex flex-wrap gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-black hover:bg-[#e5e5e7] font-sans text-xs sm:text-sm font-semibold tracking-tight transition-colors cursor-pointer"
                >
                  <span>Open Project</span>
                  <ArrowUpRight className="size-4" />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-sans text-xs sm:text-sm font-medium tracking-tight transition-colors cursor-pointer"
                >
                  <Icons.github className="size-3.5" />
                  <span>Source Code</span>
                </a>
              )}
            </div>

          </div>
        </section>

        {/* 4. Full-Width Clean Showcase Gallery (Large, unadorned, high-definition) */}
        <section className="space-y-12 sm:space-y-16 mb-24">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#86868b] block">
              Interface Overview
            </span>
          </div>

          <div className="space-y-10 sm:space-y-14">
            {projectImages.map((imgSrc, idx) => (
              <figure key={idx} className="space-y-3">
                <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-black shadow-2xl">
                  <img
                    src={imgSrc}
                    alt={`${projectTitle} - preview screen ${idx + 1}`}
                    className="w-full h-auto object-cover select-none"
                    loading="lazy"
                  />
                </div>
                {projectImages.length > 1 && (
                  <figcaption className="text-[11px] font-mono text-[#6e6e73] tracking-wider text-right">
                    0{idx + 1} &mdash; 0{projectImages.length}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>

        {/* 5. Apple-style "Next Project" Transition Strip */}
        <section className="pt-12 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#86868b] block">
              Next Project
            </span>
            <button
              onClick={() => onSelectProject(nextProject)}
              className="group inline-flex items-center gap-2 font-sans font-semibold text-2xl sm:text-3xl text-white hover:text-[#66d9ed] transition-colors cursor-pointer text-left"
            >
              <span>{nextProject.nama || nextProject.title}</span>
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <span className="text-xs font-mono text-[#6e6e73] block">
              {nextProject.category}
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-[#a1a1a6]">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="px-4 py-2 rounded-full border border-white/10 hover:border-white/30 hover:text-white transition-colors cursor-pointer"
            >
              Previous
            </button>
            <button
              onClick={() => onSelectProject(nextProject)}
              className="px-4 py-2 rounded-full border border-white/10 hover:border-white/30 hover:text-white transition-colors cursor-pointer"
            >
              Next
            </button>
          </div>
        </section>

      </main>

      {/* Standard Clean Footer */}
      <Footer />
    </div>
  );
};
