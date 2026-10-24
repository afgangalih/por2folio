import React, { useState } from "react";
import { DATA } from "@/data/resume";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight, Mail, Copy, Check, Send, MessageCircle } from "lucide-react";

export const ContactBento = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Construct prefilled mailto as reliable fallback
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${DATA.contact.email}?subject=${subject}&body=${body}`, "_blank");
    
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 5000);
  };

  return (
    <section id="contact" className="relative bg-[#080808] border-t border-white/[0.08] py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Pitch & Personal Contact Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#66d9ed] block">
                Contact Us
              </span>

              <h2 className="font-sans font-semibold text-3xl sm:text-5xl text-white tracking-tight leading-[1.12]">
                {t({
                  en: "Let's work on what you care about!",
                  id: "Mari bangun apa yang bernilai untuk Anda!",
                })}
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#86868b] leading-relaxed pt-1">
                {t({
                  en: "Got a project in mind? From scalable web applications to intelligent AI systems, I'm ready to help. Let's turn your vision into reality.",
                  id: "Punya rencana proyek? Dari aplikasi web terukur hingga sistem kecerdasan buatan, saya siap berkolaborasi mewujudkan ide Anda.",
                })}
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-4 pt-2">
              {/* Email Row */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="space-y-0.5">
                  <span className="font-mono text-[11px] text-[#6e6e73] block uppercase tracking-wider">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${DATA.contact.email}`}
                    className="font-mono text-sm sm:text-base text-white hover:text-[#66d9ed] transition-colors"
                  >
                    {DATA.contact.email}
                  </a>
                </div>
                <button
                  onClick={copyEmail}
                  className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] font-mono text-xs text-[#a1a1a6] hover:text-white transition-colors flex items-center gap-1.5"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="size-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* WhatsApp Row */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="space-y-0.5">
                  <span className="font-mono text-[11px] text-[#6e6e73] block uppercase tracking-wider">
                    Instant Messaging
                  </span>
                  <span className="font-mono text-sm sm:text-base text-white">
                    +62 857 4957 7424
                  </span>
                </div>
                <a
                  href={DATA.contact.social.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] hover:border-emerald-500/40 hover:text-emerald-400 font-mono text-xs text-[#a1a1a6] transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="size-3" />
                  <span>WhatsApp</span>
                  <ArrowUpRight className="size-3" />
                </a>
              </div>

              {/* Location & Timezone */}
              <div className="flex items-center justify-between pt-1 font-mono text-xs text-[#6e6e73]">
                <span>Surabaya / Jakarta, Indonesia</span>
                <span>UTC+7 (WIB)</span>
              </div>
            </div>

            {/* Social Links Minimalist Line */}
            <div className="pt-4 flex items-center gap-5 font-mono text-xs text-[#86868b]">
              <a
                href={DATA.contact.social.LinkedIn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="size-3" />
              </a>
              <span>/</span>
              <a
                href={DATA.contact.social.GitHub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <span>GitHub</span>
                <ArrowUpRight className="size-3" />
              </a>
              <span>/</span>
              <a
                href={DATA.contact.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <span>Instagram</span>
                <ArrowUpRight className="size-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean, Structured Inquiry Form (ZeeFrames / International Style) */}
          <div className="lg:col-span-7 bg-[#0f0f12] border border-white/[0.08] rounded-2xl p-6 sm:p-9 shadow-2xl relative">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="size-6" />
                </div>
                <h3 className="font-sans font-semibold text-xl text-white">
                  {t({
                    en: "Message Prepared!",
                    id: "Pesan Telah Disiapkan!",
                  })}
                </h3>
                <p className="font-sans text-sm text-[#86868b] max-w-sm mx-auto leading-relaxed">
                  {t({
                    en: "Your email client has been launched with the details. I will review and reply within 24 hours.",
                    id: "Aplikasi email Anda telah dibuka dengan detail pesan. Saya akan merespon dalam waktu 24 jam.",
                  })}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs text-[#a1a1aa]">
                      {t({ en: "Full Name*", id: "Nama Lengkap*" })}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t({ en: "e.g. Alex Morgan", id: "contoh: Afgan Galih" })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/[0.1] text-white text-sm font-sans focus:outline-none focus:border-[#66d9ed] transition-colors placeholder:text-[#52525b]"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs text-[#a1a1aa]">
                      {t({ en: "Email Address*", id: "Alamat Email*" })}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t({ en: "alex@company.com", id: "nama@perusahaan.com" })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/[0.1] text-white text-sm font-sans focus:outline-none focus:border-[#66d9ed] transition-colors placeholder:text-[#52525b]"
                    />
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div className="space-y-1.5">
                  <label className="block font-mono text-xs text-[#a1a1aa]">
                    {t({ en: "Phone Number / WhatsApp (Optional)", id: "Nomor Telepon / WhatsApp (Opsional)" })}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+62 8..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/[0.1] text-white text-sm font-sans focus:outline-none focus:border-[#66d9ed] transition-colors placeholder:text-[#52525b]"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block font-mono text-xs text-[#a1a1aa]">
                    {t({
                      en: "Message / Project Goals*",
                      id: "Pesan / Kebutuhan Proyek*",
                    })}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t({
                      en: "Tell me about your project, goals, timeline, or architecture requirements...",
                      id: "Ceritakan tentang proyek, tujuan, estimasi waktu, atau kebutuhan teknis Anda...",
                    })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/[0.1] text-white text-sm font-sans focus:outline-none focus:border-[#66d9ed] transition-colors placeholder:text-[#52525b] resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-[#e5e5e7] text-black font-sans font-medium text-sm transition-all shadow-lg hover:shadow-white/10 active:scale-[0.98] cursor-pointer"
                  >
                    <span>{t({ en: "Submit Inquiry", id: "Kirim Pesan" })}</span>
                    <Send className="size-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
