import React from "react";
import { DATA } from "@/data/resume";
import { listSertifikat } from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight, Award } from "lucide-react";

export const ContactBento = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { name: "WhatsApp", url: DATA.contact.social.whatsapp.url, handle: "+62 857 4957 7424" },
    { name: "LinkedIn", url: DATA.contact.social.LinkedIn.url, handle: "linkedin.com/in/afgan-almadinah" },
    { name: "GitHub", url: DATA.contact.social.GitHub.url, handle: "github.com/afgangalih" },
    { name: "Instagram", url: DATA.contact.social.instagram.url, handle: "@afgnglh" },
  ];

  const cert1 = listSertifikat[0];
  const cert2 = listSertifikat[1];
  const cert3 = listSertifikat[2] || listSertifikat[3];

  return (
    <section id="contact" className="relative bg-[#0d0d0f] border-t border-white/[0.08] py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Communication & Availability */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#66d9ed] block">
                Initiate Contact
              </span>
              <h2 className="font-sans font-semibold text-3xl sm:text-5xl text-white tracking-tight leading-[1.1]">
                {t({
                  en: "Available for select engineering opportunities.",
                  id: "Terbuka untuk kolaborasi & rekayasa perangkat lunak.",
                })}
              </h2>
              <p className="font-sans text-base text-[#86868b] leading-relaxed pt-2">
                {t({
                  en: "Have an architectural challenge or an ambitious digital product to build? Reach out directly via email or message.",
                  id: "Punya proyek ambisius atau tantangan arsitektur sistem? Hubungi saya langsung melalui email atau pesan singkat.",
                })}
              </p>
            </div>

            {/* Email Contact Link */}
            <div className="pt-2">
              <a
                href={`mailto:${DATA.contact.email}`}
                className="font-mono text-xl sm:text-2xl text-white hover:text-[#66d9ed] transition-colors border-b border-white/20 hover:border-[#66d9ed] pb-1 inline-block"
              >
                {DATA.contact.email}
              </a>
            </div>

            {/* Social channels list */}
            <div className="space-y-4 pt-6 border-t border-white/[0.08]">
              <span className="font-mono text-xs uppercase tracking-widest text-[#6e6e73] block">
                Networks & Channels
              </span>
              <div className="space-y-2.5 font-mono text-sm">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-[#a1a1a6] hover:text-white transition-colors group py-1.5"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-[#6e6e73] group-hover:text-[#a1a1a6] transition-colors flex items-center gap-1 font-sans">
                      {link.handle}
                      <ArrowUpRight className="size-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Apple Bento Certification Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 1: AI Engineer */}
            {cert1 && (
              <div className="sm:col-span-2 rounded-2xl border border-white/[0.08] bg-[#141416] p-8 sm:p-10 text-white flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:bg-[#18181b]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#66d9ed] uppercase tracking-wider">
                      {cert1.organisasi} • {cert1.tahun}
                    </span>
                    <Award className="size-5 text-[#86868b]" />
                  </div>

                  <h3 className="font-sans font-semibold text-2xl text-white tracking-tight leading-snug">
                    {cert1.nama}
                  </h3>

                  <p className="font-sans text-sm text-[#a1a1a6] leading-relaxed max-w-xl">
                    {cert1.details || cert1.deskripsi}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert1.tools?.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] font-mono text-xs text-[#d1d1d6]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {cert1.kredensi && (
                  <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="font-mono text-xs text-[#6e6e73]">
                      Verified Credential
                    </span>
                    <a
                      href={cert1.kredensi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-[#a1a1a6] hover:text-white transition-colors"
                    >
                      <span>Certificate</span>
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  </div>
                )}
              </div>
            )}

            {/* Card 2: Cloud Computing */}
            {cert2 && (
              <div className="rounded-2xl border border-white/[0.08] bg-[#141416] p-7 sm:p-8 text-white flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:bg-[#18181b]">
                <div className="space-y-3">
                  <span className="font-mono text-[11px] text-[#66d9ed] uppercase tracking-wider block">
                    {cert2.organisasi} • {cert2.tahun}
                  </span>
                  <h4 className="font-sans font-semibold text-lg text-white leading-snug">
                    {cert2.nama}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#86868b] leading-relaxed">
                    {cert2.deskripsi}
                  </p>
                </div>

                {cert2.kredensi && (
                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="font-mono text-[11px] text-[#6e6e73]">Cloud Architecture</span>
                    <a
                      href={cert2.kredensi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-[#a1a1a6] hover:text-white transition-colors"
                    >
                      <span>View</span>
                      <ArrowUpRight className="size-3" />
                    </a>
                  </div>
                )}
              </div>
            )}

            {/* Card 3: Data Science / Python */}
            {cert3 && (
              <div className="rounded-2xl border border-white/[0.08] bg-[#141416] p-7 sm:p-8 text-white flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:bg-[#18181b]">
                <div className="space-y-3">
                  <span className="font-mono text-[11px] text-[#66d9ed] uppercase tracking-wider block">
                    {cert3.organisasi} • {cert3.tahun}
                  </span>
                  <h4 className="font-sans font-semibold text-lg text-white leading-snug">
                    {cert3.nama}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#86868b] leading-relaxed">
                    {cert3.deskripsi}
                  </p>
                </div>

                {cert3.kredensi && (
                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="font-mono text-[11px] text-[#6e6e73]">Data Science</span>
                    <a
                      href={cert3.kredensi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-[#a1a1a6] hover:text-white transition-colors"
                    >
                      <span>View</span>
                      <ArrowUpRight className="size-3" />
                    </a>
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};
