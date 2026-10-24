import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { DATA } from "@/data/resume";
import { Download, Menu, X, Globe } from "lucide-react";

export const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Overview", index: "01", href: "#hero" },
    { label: "Capabilities", index: "02", href: "#expertise" },
    { label: "Work", index: "03", href: "#work" },
    { label: "Experience", index: "04", href: "#experience" },
    { label: "Contact", index: "05", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#080808]/85 backdrop-blur-xl border-b border-white/[0.08] py-2 sm:py-2.5 shadow-lg shadow-black/30"
          : "bg-transparent py-3 sm:py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo — prominent within slim bar */}
        <a
          href="#hero"
          className="flex items-center group focus:outline-none"
          aria-label="Afgan Galih Portfolio"
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="h-9 sm:h-11 w-auto object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-[0_0_16px_rgba(102,217,237,0.5)]"
          />
        </a>

        {/* Desktop Nav Items (Apple Minimalist Typography) */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3.5 py-1 font-sans text-xs tracking-tight text-[#a1a1a6] hover:text-white transition-colors rounded-full hover:bg-white/[0.04]"
            >
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Right Actions: Apple-style Lang Toggle & White Solid CV Button */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Language Switcher Capsule */}
          <button
            onClick={() => setLang(lang === "en" ? "id" : "en")}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/[0.08] hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.06] font-mono text-[11px] text-[#a1a1a6] hover:text-white transition-all cursor-pointer"
            title="Switch Language"
          >
            <Globe className="size-3 text-[#66d9ed]" />
            <span className="uppercase font-semibold tracking-wider">{lang}</span>
          </button>

          {/* CV / Resume Button: Apple Solid White Pill CTA */}
          <a
            href="https://drive.google.com/file/d/1y_rb-L3l5gMeMOse02aKOfLmzEAmDD5r/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white text-black hover:bg-[#ececec] font-sans text-xs font-semibold tracking-tight transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <Download className="size-3.5" />
            <span>{t({ en: "Resume", id: "Unduh CV" })}</span>
          </a>
        </div>

        {/* Mobile Menu Controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "id" : "en")}
            className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5 font-mono text-[11px] text-[#a1a1a6] uppercase font-semibold"
          >
            {lang}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#a1a1a6] hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Apple Frosted Glass) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0c0e]/95 backdrop-blur-2xl border-t border-white/[0.08] px-6 py-5 mt-2 space-y-4">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-sm text-[#a1a1a6] hover:text-white transition-colors py-2 border-b border-white/[0.04]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="https://drive.google.com/file/d/1y_rb-L3l5gMeMOse02aKOfLmzEAmDD5r/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white text-black font-sans text-xs font-semibold tracking-tight shadow-sm"
          >
            <Download className="size-3.5" />
            <span>{t({ en: "Download Resume", id: "Unduh CV" })}</span>
          </a>
        </div>
      )}
    </header>
  );
};
