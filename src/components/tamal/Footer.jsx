import React from "react";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Overview", href: "#hero" },
    { label: "Capabilities", href: "#expertise" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Insights", href: "#insights" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/afgangalih" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/afgan-almadinah-16247b339/" },
    { name: "Instagram", href: "https://instagram.com/afgnglh" },
    { name: "Email", href: "mailto:afganalmadinah2@gmail.com" },
  ];

  return (
    <footer className="bg-[#080808] border-t border-white/[0.08] text-[#86868b] transition-colors">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-16">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-12 border-b border-white/[0.06]">
          
          {/* Brand & Status Column */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#hero"
              className="inline-flex items-center gap-3 group focus:outline-none"
              aria-label="Afgan Galih"
            >
              <img
                src="/logo.png"
                alt="Afgan Galih Logo"
                className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-sans font-semibold text-base text-white tracking-tight">
                Afgan Galih
              </span>
            </a>

            <p className="font-sans text-xs sm:text-sm text-[#71717a] leading-relaxed max-w-sm">
              {t({
                en: "Software engineer and frontend architect building high-performance systems and intelligent interfaces.",
                id: "Software engineer dan arsitek frontend yang merancang sistem berkinerja tinggi serta antarmuka cerdas.",
              })}
            </p>

          </div>

          {/* Navigation Column */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-[#66d9ed] font-semibold">
              Navigation
            </div>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs font-sans">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[#86868b] hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-[#66d9ed] font-semibold">
              Connect
            </div>
            <ul className="space-y-2 text-xs font-sans">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#86868b] hover:text-white transition-colors group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="size-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#66d9ed]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#71717a]">
          <div className="text-center sm:text-left">
            <span>© {new Date().getFullYear()} Afgan Galih. </span>
            <span className="text-[#52525b]">Crafted with care & precision.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/[0.08] hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] text-[#a1a1aa] hover:text-white transition-all text-xs cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="size-3 group-hover:-translate-y-0.5 transition-transform text-[#66d9ed]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
