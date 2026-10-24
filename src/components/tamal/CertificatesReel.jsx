import React from "react";
import { listSertifikat } from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight } from "lucide-react";

export const CertificatesReel = () => {
  const { t } = useLanguage();

  return (
    <section id="certificates" className="relative py-20 sm:py-28 bg-[#080808] border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header — Clean Linear / Vercel Registry Style */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12 pb-6 border-b border-white/[0.08]">
          <div className="space-y-2">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#66d9ed]">
              Licenses & Certifications
            </div>
            <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-white tracking-tight">
              {t({
                en: "Verified Engineering Credentials",
                id: "Sertifikasi & Kredensial Resmi",
              })}
            </h2>
          </div>

          <div className="font-mono text-xs text-[#86868b] sm:text-right">
            [Accredited Records]
          </div>
        </div>

        {/* Minimalist Registry Table / List */}
        <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {listSertifikat.map((cert, index) => (
            <a
              key={cert.id}
              href={cert.kredensi}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-5 px-3 -mx-3 rounded-xl transition-all duration-200 hover:bg-white/[0.02]"
            >
              {/* Left Column: Index Number + Issuer + Title */}
              <div className="flex items-start md:items-center gap-4 sm:gap-6 min-w-0">
                <span className="font-mono text-xs text-[#52525b] group-hover:text-[#66d9ed] transition-colors pt-0.5 md:pt-0 w-5 shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#71717a]">
                    <span className="text-[#a1a1aa] group-hover:text-white transition-colors">
                      {cert.organisasi}
                    </span>
                    <span className="text-white/20">•</span>
                    <span>{cert.tahun}</span>
                  </div>

                  <h3 className="font-sans font-medium text-base sm:text-lg text-white group-hover:text-[#66d9ed] transition-colors truncate">
                    {cert.nama}
                  </h3>
                </div>
              </div>

              {/* Right Column: Skill Pills & Action */}
              <div className="flex items-center justify-between md:justify-end gap-5 mt-3 md:mt-0 pl-9 md:pl-0 shrink-0">
                <div className="hidden sm:flex items-center gap-1.5">
                  {cert.tools?.slice(0, 2).map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] font-mono text-[11px] text-[#86868b]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-1 font-mono text-xs text-[#71717a] group-hover:text-white transition-colors">
                  <span>Verify</span>
                  <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Registry Status Note */}
        <div className="mt-6 flex items-center justify-between font-mono text-[11px] text-[#52525b] px-1">
          <span>STATUS: ALL VERIFIED ON GOOGLE DRIVE</span>
          <span>SECURE REPOSITORY</span>
        </div>

      </div>
    </section>
  );
};
