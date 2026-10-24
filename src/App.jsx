import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Header } from "@/components/tamal/Header";
import { Hero } from "@/components/tamal/Hero";
import { Expertise } from "@/components/tamal/Expertise";
import { Work } from "@/components/tamal/Work";
import { Experience } from "@/components/tamal/Experience";
import { FaqBreakout } from "@/components/tamal/FaqBreakout";
import { ContactBento } from "@/components/tamal/ContactBento";
import { Footer } from "@/components/tamal/Footer";
import { ProjectArticle } from "@/components/tamal/ProjectArticle";

import { listProyek } from "@/data";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

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
  }, [selectedProject]);

  // Sync with browser URL hash for seamless back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#project-")) {
        const id = parseInt(hash.replace("#project-", ""), 10);
        const found = listProyek.find((p) => p.id === id);
        if (found) {
          setSelectedProject(found);
          return;
        }
      }
      if (!hash || hash === "#work" || hash === "#hero" || hash === "#expertise" || hash === "#experience" || hash === "#contact" || hash === "#faq") {
        setSelectedProject(null);
      }
    };

    // Check on initial load
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    window.location.hash = `project-${project.id}`;
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleBackToPortfolio = () => {
    setSelectedProject(null);
    window.location.hash = "work";
    setTimeout(() => {
      const el = document.getElementById("work");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  // If a project is selected, render the dedicated Full-Page Case Study Article Layer
  if (selectedProject) {
    return (
      <ProjectArticle
        project={selectedProject}
        onBack={handleBackToPortfolio}
        onSelectProject={handleOpenProject}
      />
    );
  }

  // Otherwise, render the main Landing Page
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

        {/* 5. Breakout CTA Banner & Interactive FAQs */}
        <FaqBreakout />

        {/* 6. Contact & Bento Highlights */}
        <ContactBento />
      </main>

      {/* Minimalist Tech Footer */}
      <Footer />
    </div>
  );
}