import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Header } from "@/components/tamal/Header";
import { Hero } from "@/components/tamal/Hero";
import { Expertise } from "@/components/tamal/Expertise";
import { Work } from "@/components/tamal/Work";
import { Experience } from "@/components/tamal/Experience";
import { CertificatesReel } from "@/components/tamal/CertificatesReel";
import { InsightsSection } from "@/components/tamal/InsightsSection";
import { InsightsArchive } from "@/components/tamal/InsightsArchive";
import { BlogArticle } from "@/components/tamal/BlogArticle";
import { FaqBreakout } from "@/components/tamal/FaqBreakout";
import { ContactBento } from "@/components/tamal/ContactBento";
import { Footer } from "@/components/tamal/Footer";
import { ProjectArticle } from "@/components/tamal/ProjectArticle";

import { listProyek } from "@/data";
import { listInsights } from "@/data/insights";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isInsightsArchive, setIsInsightsArchive] = useState(false);

  // Initialize Lenis Smooth Scrolling with GSAP integration
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, [selectedProject, selectedArticle, isInsightsArchive]);

  // Sync with browser URL hash for seamless back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      // 1. Project Case Study: #project-1, #project/1
      if (hash.startsWith("#project-") || hash.startsWith("#project/")) {
        const idStr = hash.startsWith("#project-")
          ? hash.replace("#project-", "")
          : hash.replace("#project/", "");
        const id = parseInt(idStr, 10);
        const found = listProyek.find((p) => p.id === id);
        if (found) {
          setSelectedProject(found);
          setSelectedArticle(null);
          setIsInsightsArchive(false);
          return;
        }
      }

      // 2. Individual Article: #insight/openai-vs-anthropic-2026 or #insight-openai-vs-anthropic-2026
      if (hash.startsWith("#insight/") || hash.startsWith("#insight-")) {
        const slug = hash.startsWith("#insight/")
          ? hash.replace("#insight/", "")
          : hash.replace("#insight-", "");
        const found = listInsights.find((a) => a.id === slug || a.slug === slug);
        if (found) {
          setSelectedArticle(found);
          setSelectedProject(null);
          setIsInsightsArchive(false);
          return;
        }
      }

      // 3. All Insights Archive: #insights/all or #insights-all
      if (hash === "#insights/all" || hash === "#insights-all") {
        setIsInsightsArchive(true);
        setSelectedArticle(null);
        setSelectedProject(null);
        return;
      }

      // 4. Landing Page and Anchor Sections
      setSelectedProject(null);
      setSelectedArticle(null);
      setIsInsightsArchive(false);

      // Smooth scroll to section if hash exists on landing page
      if (hash && hash !== "#" && !hash.includes("/")) {
        const targetId = hash.replace("#", "");
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 60);
      }
    };

    // Check on initial load
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setSelectedArticle(null);
    setIsInsightsArchive(false);
    window.location.hash = `project-${project.id}`;
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleOpenArticle = (article) => {
    setSelectedArticle(article);
    setSelectedProject(null);
    setIsInsightsArchive(false);
    // Best-practice clean URL as requested: #insight/{id}
    window.location.hash = `insight/${article.id}`;
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleOpenAllInsights = () => {
    setIsInsightsArchive(true);
    setSelectedArticle(null);
    setSelectedProject(null);
    window.location.hash = "insights/all";
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleBackToLandingInsights = () => {
    setSelectedArticle(null);
    setSelectedProject(null);
    setIsInsightsArchive(false);
    window.location.hash = "insights";
    setTimeout(() => {
      const el = document.getElementById("insights");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 60);
  };

  const handleBackToHome = () => {
    setSelectedArticle(null);
    setSelectedProject(null);
    setIsInsightsArchive(false);
    window.location.hash = "hero";
    setTimeout(() => {
      const el = document.getElementById("hero");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 60);
  };

  const handleBackToPortfolio = () => {
    setSelectedProject(null);
    setSelectedArticle(null);
    setIsInsightsArchive(false);
    window.location.hash = "work";
    setTimeout(() => {
      const el = document.getElementById("work");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 60);
  };

  // 1. If an individual article is selected: render Medium-style reader
  if (selectedArticle) {
    return (
      <BlogArticle
        article={selectedArticle}
        onBackToInsights={handleOpenAllInsights}
        onBackToHome={handleBackToLandingInsights}
        onSelectArticle={handleOpenArticle}
      />
    );
  }

  // 2. If the All Insights Archive is opened: render Substack-style archive with filter
  if (isInsightsArchive) {
    return (
      <InsightsArchive
        onSelectArticle={handleOpenArticle}
        onBackToHome={handleBackToLandingInsights}
      />
    );
  }

  // 3. If a project is selected: render Case Study Layer
  if (selectedProject) {
    return (
      <ProjectArticle
        project={selectedProject}
        onBack={handleBackToPortfolio}
        onSelectProject={handleOpenProject}
      />
    );
  }

  // 4. Otherwise, render the main Landing Page
  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-[#66d9ed] selection:text-black">
      {/* Tamal Sen Header Navigation */}
      <Header />

      {/* Main Portfolio Sections */}
      <main>
        {/* 1. Hero Section with Glowing Sun Orb */}
        <Hero />

        {/* 2. My Expertise Section with Code Syntax Style */}
        <Expertise />

        {/* 3. My Work with Featured Project & Bento Grid */}
        <Work onSelectProject={handleOpenProject} />

        {/* 4. Professional Experience & Education */}
        <Experience />

        {/* 5. Minimalist Credential Registry */}
        <CertificatesReel />

        {/* 6. International Tech Insights (Top 3 Main Stories) */}
        <InsightsSection
          onSelectArticle={handleOpenArticle}
          onViewAll={handleOpenAllInsights}
        />

        {/* 7. Breakout CTA Banner & Interactive FAQs */}
        <FaqBreakout />

        {/* 8. Clean Editorial Contact & Inquiry Hub */}
        <ContactBento />
      </main>

      {/* Minimalist Tech Footer */}
      <Footer />
    </div>
  );
}