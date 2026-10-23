import React from "react";
import { DATA } from "@/data/resume";
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  const footerNav = [
    { label: "Overview", href: "#hero" },
    { label: "Capabilities", href: "#expertise" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#0b0b0d] border-t border-white/[0.08] py-14 px-5 sm:px-8 text-[#86868b] text-xs">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Strip: Quick Directory & Back to Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footerNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans text-xs text-[#86868b] hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#86868b] hover:text-white transition-colors cursor-pointer group font-sans text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="size-3.5 group-hover:-translate-y-0.5 transition-transform text-[#a1a1a6]" />
          </button>
        </div>

        {/* Bottom Colophon: Location & Time */}
        <div className="flex items-center justify-between gap-4 font-mono text-[11px] text-[#6e6e73]">
          <div className="flex items-center gap-2.5">
            <span>{DATA.location}</span>
            <span>•</span>
            <span className="text-[#a1a1a6]">Local Time GMT+7</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
