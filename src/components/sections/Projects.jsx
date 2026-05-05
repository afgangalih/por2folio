import React, { useState, useEffect } from "react";
import { listProyek } from "../../data";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const categories = [
    "Semua",
    "Web Development",
    "Mobile App",
    "Data Analyst",
    "Machine Learning",
    "UI/UX"
  ];

  const filteredProjects = listProyek.filter((proyek) => {
    if (activeFilter === "Semua") return true;
    return proyek.category === activeFilter;
  });

  useEffect(() => {
    if (selectedProject || fullScreenImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    if (selectedProject && !fullScreenImage) {
      setCurrentImageIndex(0);
    }
  }, [selectedProject, fullScreenImage]);

  return (
    <section id="proyek" className="mt-24 md:mt-40 py-10 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-10 md:mb-12" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter uppercase mb-4">
          Featured <span className="text-violet-500">Projects</span>
        </h2>
        <p className="text-zinc-500 max-w-lg mx-auto text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold leading-relaxed">
          Eksplorasi karya, studi kasus, dan eksperimen profesional
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="100">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
              activeFilter === category
                ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30 border border-violet-500"
                : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map((proyek, index) => (
          <div
            key={proyek.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            onClick={() => setSelectedProject(proyek)}
            className="group relative cursor-pointer"
          >
            
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />

            
            <div className="relative h-full bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 rounded-[2.5rem] overflow-hidden transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:-translate-y-2 group-hover:border-violet-500/50 group-hover:bg-zinc-800/80 shadow-2xl">
              
              
              <div className="relative aspect-video overflow-hidden border-b border-zinc-800/50">
                <img
                  src={proyek.gambar}
                  alt={proyek.nama}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </div>

              
              <div className="p-7 flex flex-col justify-between h-[calc(100%-aspect-video)] gap-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl font-black text-white tracking-tight group-hover:text-violet-400 transition-colors duration-500">
                      {proyek.nama}
                    </h3>
                    <span className="text-[9px] uppercase font-black bg-violet-500/10 text-violet-400 px-3 py-1 rounded-full border border-violet-500/20 group-hover:bg-violet-500/20 transition-all duration-500">
                      {proyek.role}
                    </span>
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2 group-hover:text-zinc-300 transition-colors duration-500">
                    {proyek.desk}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-zinc-800 group-hover:border-violet-500/20 transition-colors duration-500">
                  <div className="flex flex-wrap gap-2">
                    {proyek.tools.slice(0, 2).map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-[10px] font-black uppercase rounded-lg bg-zinc-800/50 text-zinc-400 border border-zinc-700/50 group-hover:border-violet-500/30 group-hover:text-zinc-200 transition-all duration-500"
                      >
                        {tool}
                      </span>
                    ))}
                    {proyek.tools.length > 2 && (
                      <span className="text-[10px] text-zinc-600 font-bold self-center">
                        +{proyek.tools.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="w-11 h-11 flex items-center justify-center rounded-full border border-zinc-800 text-zinc-500 group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600 transition-all duration-500 group-hover:rotate-45 shadow-lg">
                    <i className="ri-arrow-right-up-line text-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {fullScreenImage && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-md animate-fadeIn"
          onClick={() => setFullScreenImage(null)}
        >
          <button
            onClick={() => setFullScreenImage(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900/80 text-white hover:bg-zinc-800 transition-all z-10 border border-zinc-800"
          >
            <i className="ri-close-line text-2xl" />
          </button>
          <img
            src={fullScreenImage}
            alt="Fullscreen Preview"
            className="max-w-full max-h-[90svh] object-contain rounded-xl shadow-2xl animate-fadeInScale"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {selectedProject && (
        <div className="fixed inset-0 z-[999] flex items-end md:items-center justify-center p-3 sm:p-6">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-xl animate-fadeIn"
            onClick={() => setSelectedProject(null)}
          />

          <div className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-800 rounded-[2rem] shadow-2xl max-h-[90svh] flex flex-col overflow-hidden animate-fadeInScale">
            <div className="sticky top-0 z-20 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 p-6 flex justify-between items-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-violet-400 font-black mb-1">
                  {selectedProject.role}
                </p>
                <h3 className="text-xl font-black text-white italic">
                  {selectedProject.nama}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
              >
                <i className="ri-close-line text-2xl" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 custom-scrollbar">
              <div className="relative group/img overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
                {selectedProject.images && selectedProject.images.length > 0 ? (
                  <>
                    <img
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.nama} - Slide ${currentImageIndex + 1}`}
                      className="w-full h-auto object-cover transition-all duration-500 cursor-zoom-in"
                      onClick={() => setFullScreenImage(selectedProject.images[currentImageIndex])}
                    />
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={() => setCurrentImageIndex(prev => prev === 0 ? selectedProject.images.length - 1 : prev - 1)}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-violet-600 transition-colors backdrop-blur-md opacity-0 group-hover/img:opacity-100"
                        >
                          <i className="ri-arrow-left-s-line text-2xl" />
                        </button>
                        <button
                          onClick={() => setCurrentImageIndex(prev => prev === selectedProject.images.length - 1 ? 0 : prev + 1)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-violet-600 transition-colors backdrop-blur-md opacity-0 group-hover/img:opacity-100"
                        >
                          <i className="ri-arrow-right-s-line text-2xl" />
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {selectedProject.images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === idx ? 'bg-violet-500 w-4' : 'bg-white/50 hover:bg-white'}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <img
                    src={selectedProject.gambar}
                    alt={selectedProject.nama}
                    className="w-full h-auto object-cover cursor-zoom-in"
                    onClick={() => setFullScreenImage(selectedProject.gambar)}
                  />
                )}
              </div>

              <div className="space-y-4">
                <h4 className="text-[10px] font-black tracking-[0.2em] text-zinc-500 uppercase">
                  Project Overview
                </h4>
                <p className="text-zinc-300 leading-relaxed">
                  {selectedProject.details}
                </p>
              </div>

              {selectedProject.features && (
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black tracking-[0.2em] text-zinc-500 uppercase">
                    Key Features
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedProject.features.map((f, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 bg-zinc-900 border border-zinc-800 p-4 rounded-2xl group/feat hover:border-violet-500/30 transition-colors duration-300"
                      >
                        <i className="ri-checkbox-circle-fill text-violet-500 text-lg" />
                        <span className="text-sm text-zinc-300">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-4 pt-4">
                <h4 className="text-[10px] font-black tracking-[0.2em] text-zinc-500 uppercase">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-xs font-bold bg-zinc-900 text-zinc-200 border border-zinc-800 rounded-xl"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-800 p-6 bg-zinc-950 flex flex-col sm:flex-row gap-4">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-4 rounded-2xl bg-zinc-100 text-zinc-900 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-all duration-300 shadow-lg"
                >
                  <i className="ri-github-fill text-xl" />
                  Source Code
                </a>
              )}

              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-4 rounded-2xl bg-violet-600 text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-violet-500 transition-all duration-300 shadow-lg shadow-violet-600/20"
                >
                  <i className="ri-external-link-line text-xl" />
                  Live Preview
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;