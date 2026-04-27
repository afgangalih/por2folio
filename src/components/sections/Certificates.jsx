import React, { useState, useEffect } from "react";
import { listSertifikat } from "../../data";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedCert ? "hidden" : "unset";
  }, [selectedCert]);

  return (
    <section id="sertifikat" className="mt-24 md:mt-40 py-10 px-4 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="text-center mb-16 md:mb-20" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter uppercase mb-4">
          Certification <span className="text-violet-500">&</span> Awards
        </h2>
        <p className="text-zinc-500 max-w-md mx-auto text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">
          Validasi kompetensi & pencapaian profesional
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {listSertifikat.map((cert, index) => (
          <div
            key={cert.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            onClick={() => setSelectedCert(cert)}
            className="group relative cursor-pointer"
          >
           
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />

            
            <div className="relative p-8 md:p-10 bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 rounded-[2.5rem] transition-all duration-500 ease-out group-hover:scale-[1.01] group-hover:-translate-y-2 group-hover:border-violet-500/50 group-hover:bg-zinc-800/80 shadow-2xl overflow-hidden">
              
              
              <div className="absolute -right-24 -top-24 w-72 h-72 bg-violet-600/5 blur-[100px] rounded-full group-hover:bg-violet-600/15 transition-all duration-700" />

              <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                {/* CONTENT TOP */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-violet-400 group-hover:text-violet-300 transition-colors duration-500">
                      <i className={`${cert.logo} text-3xl`} />
                      <span className="text-[10px] font-black tracking-[0.2em] uppercase">
                        {cert.organisasi}
                      </span>
                    </div>

                    <span className="px-4 py-1.5 rounded-full bg-zinc-800/60 border border-zinc-700/50 text-zinc-500 text-[9px] font-black tracking-widest group-hover:border-violet-500/30 group-hover:text-zinc-300 transition-all duration-500">
                      {cert.tahun}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-white italic tracking-tight leading-tight group-hover:text-violet-400 transition-colors duration-500">
                    {cert.nama}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2 group-hover:text-zinc-300 transition-colors duration-500">
                    {cert.deskripsi}
                  </p>
                </div>

                {/* FOOTER */}
                <div className="flex items-center justify-between pt-6 border-t border-zinc-800/50 group-hover:border-violet-500/20 transition-colors duration-500">
                  <div className="flex flex-wrap gap-2">
                    {cert.tools.slice(0, 2).map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-zinc-800/80 text-white text-[9px] font-black rounded-lg border border-zinc-700 uppercase tracking-tight group-hover:bg-violet-500/10 group-hover:border-violet-500/40 transition-all duration-500"
                      >
                        {tool}
                      </span>
                    ))}
                    {cert.tools.length > 2 && (
                      <span className="text-[10px] text-zinc-600 font-bold self-center ml-1">
                        +{cert.tools.length - 2}
                      </span>
                    )}
                  </div>

                  {/* ARROW BUTTON */}
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600 transition-all duration-500 group-hover:rotate-45 shadow-lg">
                    <i className="ri-arrow-right-up-line text-xl md:text-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedCert && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity duration-500"
            onClick={() => setSelectedCert(null)}
          />

          <div className="relative w-full max-w-xl bg-zinc-950 border border-zinc-800 rounded-[2rem] shadow-2xl overflow-hidden animate-fadeInScale">
            {/* MODAL HEADER */}
            <div className="sticky top-0 z-10 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 px-6 py-5 flex items-center justify-between">
              <div className="flex items-center gap-4 text-violet-400">
                <i className={`${selectedCert.logo} text-3xl`} />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500">
                    {selectedCert.organisasi}
                  </p>
                  <h3 className="text-white font-black text-lg italic leading-tight">
                    {selectedCert.nama}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
              >
                <i className="ri-close-line text-2xl" />
              </button>
            </div>

            {/* MODAL CONTENT */}
            <div className="max-h-[50vh] overflow-y-auto px-8 py-6 space-y-6 custom-scrollbar">
              <div className="flex items-center gap-3 text-zinc-400 text-xs font-bold uppercase tracking-widest">
                <i className="ri-calendar-check-line text-violet-500 text-lg" />
                <span>Tahun Terbit: {selectedCert.tahun}</span>
              </div>

              <div className="space-y-3">
                <h4 className="text-[10px] font-black tracking-[0.2em] text-zinc-500 uppercase">
                  Deskripsi Program
                </h4>
                <p className="text-zinc-300 text-sm leading-relaxed italic">
                  "{selectedCert.details}"
                </p>
              </div>

              <div className="pt-4">
                <h4 className="text-[10px] font-black tracking-[0.2em] text-zinc-500 uppercase mb-3">
                  Keahlian yang Divalidasi
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-[10px] font-bold bg-zinc-900 text-violet-400 rounded-lg border border-zinc-800"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* MODAL FOOTER */}
            <div className="p-6 bg-zinc-950 border-t border-zinc-800">
              <a
                href={selectedCert.kredensi}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-violet-600 hover:text-white transition-all duration-500 shadow-xl"
              >
                Verifikasi Kredensi
                <i className="ri-external-link-line text-lg" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;