import { useState, useEffect, useCallback, memo } from "react";

const NavItem = memo(({ link, activeSection, onClick }) => (
  <li>
    <a
      href={`#${link.id}`}
      onClick={(e) => onClick(e, link.id)}
      className={`relative px-4 py-3 font-bold tracking-[0.15em] text-[13px] uppercase transition-all duration-500 ${
        activeSection === link.id ? "text-white" : "text-zinc-500 hover:text-zinc-300"
      }`}
    >
      <span className="relative z-10">{link.label}</span>
      
      
      {activeSection === link.id && (
        <span className="absolute inset-0 z-0 flex items-center justify-center">
          <span className="h-full w-full bg-violet-600/10 blur-xl rounded-full animate-pulse" />
          <span className="absolute -bottom-1 h-[2px] w-6 bg-gradient-to-r from-transparent via-violet-400 to-transparent shadow-[0_0_15px_rgba(167,139,250,1)]" />
        </span>
      )}
    </a>
  </li>
));

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5, rootMargin: "-80px 0px 0px 0px" }
    );

    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    const offset = 90;
    const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: id === "beranda" ? 0 : y, behavior: "smooth" });
    setIsMenuOpen(false);
  }, []);

  const navLinks = [
    { id: "beranda", label: "Beranda" },
    { id: "tentang", label: "Tentang" },
    { id: "sertifikat", label: "Sertifikat" },
    { id: "proyek", label: "Proyek" },
    { id: "kontak", label: "Kontak" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-5 bg-zinc-950/60 backdrop-blur-xl border-b border-white/5 shadow-2xl"
            : "py-10 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-8 flex items-center justify-between">
          
          <div onClick={(e) => handleNavClick(e, "beranda")} className="group cursor-pointer">
            <h1 className="text-2xl font-black tracking-tighter text-white">
              PORTO<span className="text-violet-500 group-hover:text-violet-400 transition-colors">FOLIO</span>
            </h1>
          </div>

          
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-2">
              {navLinks.map((link) => (
                <NavItem key={link.id} link={link} activeSection={activeSection} onClick={handleNavClick} />
              ))}
            </ul>
            
            
            <div className="h-5 w-px bg-white/10 mx-2" />
            <a 
              href="#kontak" 
              onClick={(e) => handleNavClick(e, "kontak")}
              className="group relative text-[11px] font-black tracking-[0.3em] text-violet-400 hover:text-white transition-all uppercase"
            >
              Hire Me
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          
          <button
            className="md:hidden h-12 w-12 flex items-center justify-center rounded-2xl bg-zinc-900 border border-white/10 text-white shadow-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`transition-all duration-300 ${isMenuOpen ? "ri-close-line" : "ri-menu-5-line"} text-2xl`}></i>
          </button>
        </div>
      </nav>

      
      {isMenuOpen && (
        <div className="fixed inset-0 z-[9999] md:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute right-8 top-24 w-60 bg-zinc-900 border border-white/10 rounded-3xl p-5 shadow-2xl animate-fadeInScale">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`px-5 py-4 rounded-2xl font-bold text-[12px] tracking-widest uppercase transition-all ${
                    activeSection === link.id
                      ? "bg-violet-600/20 text-violet-400 border border-violet-500/20"
                      : "text-zinc-500 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;