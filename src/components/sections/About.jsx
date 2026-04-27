import React from "react";
import DataImage from "../../data";

const About = () => {
  return (
    <section
      id="tentang"
      className="mt-24 md:mt-32 py-10 px-4 max-w-7xl mx-auto"
    >
      <div className="grid lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
        <div className="lg:col-span-2 space-y-6 md:space-y-8 flex flex-col">
          <div className="group relative" data-aos="fade-right">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"></div>

            <div className="relative p-8 md:p-10 bg-zinc-900/40 backdrop-blur-md border border-zinc-800 rounded-[2rem] shadow-2xl transition-all duration-500 ease-out group-hover:scale-[1.01] group-hover:-translate-y-2 group-hover:border-violet-500/40 group-hover:bg-zinc-800/60 h-full">
              <h2 className="text-3xl font-black italic tracking-tighter mb-6 flex items-center gap-3 text-white uppercase">
                <i className="ri-user-smile-line text-violet-500 group-hover:rotate-12 transition-transform duration-500"></i>{" "}
                About Me
              </h2>

              <p className="text-base md:text-lg leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors duration-500">
                Halo, saya{" "}
                <span className="text-white font-bold italic">Afgan Galih</span>
                , mahasiswa{" "}
                <span className="text-violet-400 font-medium">
                  Sistem Informasi Bisnis
                </span>
                yang memiliki minat mendalam pada pengembangan web dan analisis
                data. Saya percaya bahwa teknologi terbaik lahir dari gabungan{" "}
                <span className="text-zinc-200">logika yang kuat</span> dan{" "}
                <span className="text-zinc-200">estetika yang fungsional</span>.
              </p>

              <div className="flex items-center justify-between flex-wrap gap-6 border-t border-zinc-800/50 pt-8 mt-8 group-hover:border-violet-500/20 transition-colors duration-500">
                <div className="relative">
                  <div className="absolute -inset-1 bg-violet-500 rounded-xl blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
                  <img
                    src={DataImage.HeroImage}
                    alt="Profile"
                    className="relative w-14 h-14 rounded-xl border border-zinc-700 object-cover shadow-md group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex gap-8 md:gap-12">
                  <div className="text-center group/stat">
                    <h3 className="text-4xl font-black text-white italic tracking-tighter group-hover:text-violet-500 transition-colors duration-500">
                      5
                      <span className="text-violet-500 group-hover:text-white">
                        +
                      </span>
                    </h3>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
                      Proyek
                    </p>
                  </div>
                  <div className="text-center group/stat">
                    <h3 className="text-4xl font-black text-white italic tracking-tighter group-hover:text-violet-500 transition-colors duration-500">
                      2.5
                      <span className="text-violet-500 group-hover:text-white">
                        +
                      </span>
                    </h3>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
                      Tahun
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative" data-aos="fade-up">
            <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600/10 to-violet-600/10 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative p-8 bg-zinc-900/40 backdrop-blur-md border border-zinc-800 rounded-[2rem] shadow-2xl transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:border-violet-500/40 group-hover:bg-zinc-800/60">
              <h3 className="text-2xl font-black italic tracking-tighter mb-8 flex items-center gap-3 text-white uppercase">
                <i className="ri-briefcase-line text-violet-500"></i> Experience
              </h3>

              <div className="grid md:grid-cols-2 gap-6 text-white">
                <div className="group/item border-l-2 border-zinc-800 pl-6 py-2 hover:border-violet-500 transition-all duration-500 bg-zinc-800/0 hover:bg-zinc-800/30 rounded-r-xl">
                  <h4 className="font-black text-lg italic tracking-tight group-hover/item:text-violet-400 transition-colors">
                    Frontend Developer
                  </h4>
                  <p className="text-violet-400/80 text-xs font-bold uppercase tracking-widest mt-1">
                    Freelance / Remote
                  </p>
                  <p className="text-xs text-zinc-500 mt-2 font-medium">
                    Jan 2024 – Present
                  </p>
                </div>

                <div className="group/item border-l-2 border-zinc-800 pl-6 py-2 hover:border-violet-500 transition-all duration-500 bg-zinc-800/0 hover:bg-zinc-800/30 rounded-r-xl">
                  <h4 className="font-black text-lg italic tracking-tight group-hover/item:text-violet-400 transition-colors">
                    Graphic Designer
                  </h4>
                  <p className="text-violet-400/80 text-xs font-bold uppercase tracking-widest mt-1">
                    Self Employed
                  </p>
                  <p className="text-xs text-zinc-500 mt-2 font-medium">
                    2021 – 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="group relative lg:sticky lg:top-28 h-fit"
          data-aos="fade-left"
        >
          <div className="absolute -inset-1 bg-gradient-to-b from-violet-600/20 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="relative p-8 bg-zinc-900/40 backdrop-blur-md border border-zinc-800 rounded-[2rem] shadow-2xl transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:border-violet-500/40 group-hover:bg-zinc-800/60">
            <h3 className="text-2xl font-black italic tracking-tighter mb-10 flex items-center gap-3 text-white uppercase">
              <i className="ri-graduation-cap-line text-violet-500"></i>{" "}
              Education
            </h3>

            <div className="relative border-l border-zinc-800/50 pl-6 space-y-12">
              <div className="relative group/edu">
                <span className="absolute -left-[31px] top-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500 shadow-[0_0_15px_#8b5cf6]"></span>
                </span>

                <h4 className="font-black text-white italic tracking-tight group-hover/edu:text-violet-400 transition-colors duration-300">
                  D-IV Sistem Informasi Bisnis
                </h4>
                <p className="text-zinc-400 text-sm font-bold mt-1">
                  Politeknik Negeri Malang
                </p>
                <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-black mt-1">
                  2023 - Present
                </p>

                <div className="mt-4 p-4 bg-zinc-950/50 rounded-2xl text-xs text-zinc-400 border border-zinc-800 group-hover/edu:border-violet-500/30 group-hover/edu:text-zinc-200 transition-all duration-500 leading-relaxed italic">
                  "Fokus pada pengembangan ekosistem web modern, analisis data
                  bisnis, dan perancangan UI/UX yang user-centric."
                </div>
              </div>

              <div className="relative group/edu">
                <span className="absolute -left-[31px] top-1 w-3 h-3 bg-zinc-700 rounded-full group-hover/edu:bg-violet-500 transition-all duration-500"></span>

                <h4 className="font-black text-white italic tracking-tight group-hover/edu:text-violet-400 transition-colors duration-300">
                  Desain Komunikasi Visual
                </h4>
                <p className="text-zinc-400 text-sm font-bold mt-1">
                  SMK Plus Khoiriyah Hasyim
                </p>
                <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-black mt-1">
                  2020 - 2023
                </p>

                <div className="mt-4 p-4 bg-zinc-950/50 rounded-2xl text-xs text-zinc-400 border border-zinc-800 group-hover/edu:border-violet-500/30 group-hover/edu:text-zinc-200 transition-all duration-500 leading-relaxed italic">
                  "Mendalami fundamental desain grafis, tipografi, dan teori
                  warna yang menjadi pondasi visual saya saat ini."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
