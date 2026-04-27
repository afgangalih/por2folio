import React from "react";
import { listTools } from "../../data";

const Tools = () => {
  return (
    <section id="tools" className="mt-24 md:mt-40 px-4 max-w-7xl mx-auto" data-aos="fade-up">
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter uppercase mb-3 md:mb-4">
          Tech <span className="text-violet-500">Stack</span>
        </h2>
        <p className="text-zinc-500 max-w-xs md:max-w-md mx-auto text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase font-bold leading-relaxed">
          Alat & Teknologi yang saya gunakan untuk membangun karya digital
        </p>
      </div>

      {/* Responsive Grid: 2 Kolom di HP, 3 di Tablet, 4 di Desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {listTools.map((tool, index) => (
          <div 
            key={tool.id} 
            className="group relative" 
            data-aos="fade-up" 
            data-aos-delay={index * 50}
          >
            {/* Glow Effect - Dibuat lebih halus di HP agar tidak berat */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 rounded-[1.5rem] md:rounded-[2rem] blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
            
            {/* Card Body - Padding & Radius disesuaikan untuk Mobile */}
            <div className="relative flex items-center gap-3 md:gap-5 p-4 md:p-6 bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 rounded-[1.5rem] md:rounded-[2rem] group-hover:bg-zinc-800/60 group-hover:border-violet-500/50 group-hover:-translate-y-2 transition-all duration-500 shadow-xl overflow-hidden">
              
              {/* Icon Container - Ukuran dikecilkan sedikit di HP */}
              <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 bg-zinc-800 rounded-lg md:rounded-xl p-2 border border-zinc-700 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                <img src={tool.gambar} alt={tool.nama} className="w-full h-full object-contain" />
              </div>

              <div className="space-y-0.5 md:space-y-1 min-w-0">
                <h4 className="font-black text-white italic text-sm md:text-lg uppercase tracking-tight group-hover:text-violet-400 transition-colors duration-500 truncate">
                  {tool.nama}
                </h4>
                <div className="flex items-center gap-1.5 md:gap-2">
                  <span className="hidden sm:block w-3 h-[1px] bg-zinc-700 group-hover:w-6 group-hover:bg-violet-500 transition-all duration-500"></span>
                  <p className="text-[8px] md:text-[9px] text-zinc-500 uppercase font-black tracking-widest truncate group-hover:text-zinc-300">
                    {tool.ket}
                  </p>
                </div>
              </div>

              {/* Decorative Light Corner */}
              <div className="absolute -right-4 -bottom-4 w-10 h-10 bg-violet-600/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;