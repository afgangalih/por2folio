import { useState, useEffect } from "react";

const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone: "Asia/Jakarta",
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Fungsi smooth scroll
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const sitemapLinks = [
    { label: "Beranda", id: "beranda" },
    { label: "Tentang", id: "tentang" },
    { label: "Proyek", id: "proyek" },
    { label: "Sertifikat", id: "sertifikat" }, 
    { label: "Kontak", id: "kontak" },
  ];

  return (
    <footer className="mt-40 relative">
     
      <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl pointer-events-none">
        <div className="absolute top-[-100px] left-1/4 w-64 h-64 bg-violet-600/5 blur-[120px] rounded-full"></div>
        <div className="absolute top-[-100px] right-1/4 w-64 h-64 bg-fuchsia-600/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
          {/* 1. Brand Section */}
          <div className="col-span-1 lg:col-span-2 space-y-8">
            <h1 className="text-4xl font-black tracking-tighter text-white">
              PORTO<span className="text-violet-500">FOLIO</span>
            </h1>
            <p className="text-zinc-500 text-base leading-relaxed max-w-md">
              Menggabungkan analisis data dan pengembangan web untuk menciptakan solusi digital yang fungsional, terukur, dan berorientasi pada kebutuhan pengguna.
            </p>

            <div className="flex flex-wrap items-center gap-x-12 gap-y-6 pt-2">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-bold">
                  Waktu Setempat
                </span>
                <span className="text-sm font-medium text-zinc-300">
                  {time} <span className="text-zinc-600 ml-1">WIB</span>
                </span>
              </div>
              <div className="flex flex-col gap-1 border-l border-zinc-800 pl-8">
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-bold">
                  Status
                </span>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-sm font-medium text-zinc-300">Ready to Work</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Navigation Links */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-violet-500/80">
              Sitemap
            </h4>
            <ul className="space-y-5 text-sm font-medium">
              {sitemapLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-zinc-500 hover:text-white transition-all duration-300 flex items-center gap-3 group text-left w-full"
                  >
                    <span className="w-0 h-px bg-violet-500 group-hover:w-6 transition-all duration-300"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Social Media */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-violet-500/80">
              Socials
            </h4>
            <div className="flex flex-col gap-6">
              <p className="text-sm text-zinc-600 leading-relaxed">
                Terhubung dengan saya di berbagai platform digital.
              </p>
              <div className="flex gap-8">
                {[
                  { icon: "ri-github-fill", url: "https://github.com/afgangalih" },
                  { icon: "ri-instagram-line", url: "https://www.instagram.com/afgnglh" },
                  { icon: "ri-linkedin-box-line", url: "https://www.linkedin.com/in/afgan-almadinah-16247b339/" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-zinc-500 hover:text-violet-500 hover:-translate-y-2 transition-all duration-300"
                    aria-label={`Visit my ${social.icon.split("-")[1]}`}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
            © 2025 <span className="text-zinc-400">Afgan Galih</span> — Crafted with passion
          </div>

          <div className="flex items-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-800 font-black pl-[0.4em] select-none hover:text-zinc-700 transition-colors">
              Built with React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;