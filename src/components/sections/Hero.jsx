import React, { useState } from "react";
import { motion } from "framer-motion";
import DataImage from "../../data";
import ProfileCard from "../ui/ProfileCard";

const CV_DOWNLOAD_URL =
  "https://drive.google.com/uc?export=download&id=1IAerGr5YLksRRonMZvUfVoT9XAEJzrWJ";
const CV_FALLBACK_URL =
  "https://drive.google.com/file/d/1IAerGr5YLksRRonMZvUfVoT9XAEJzrWJ/view?usp=sharing";

const Hero = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = () => {
    setIsDownloading(true);
    const link = document.createElement("a");
    link.href = CV_DOWNLOAD_URL;
    link.setAttribute("download", "CV_Afgan_Galih.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      window.open(CV_FALLBACK_URL, "_blank");
      setIsDownloading(false);
    }, 1200);
  };

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="container mx-auto px-6 sm:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-28 pb-12">
          {/* TEXT CONTENT */}
          <header className="order-2 lg:order-1 text-center lg:text-left space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h4
                className="text-violet-400 font-medium tracking-widest text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Data Analyst & IT Enthusiast
              </motion.h4>
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Afgan <br />
                <span className="text-violet-500">Galih.</span>
              </motion.h1>
              <motion.p
                className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Memiliki ketertarikan pada pengembangan web dan analisis data
                dengan pendekatan yang terstruktur dan relevan dengan kebutuhan
                sistem.
              </motion.p>
            </motion.div>

            {/* BUTTONS  */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              
              <motion.button
                onClick={handleDownloadCV}
                disabled={isDownloading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden transition-all duration-300 disabled:cursor-not-allowed"
              >
                
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 opacity-90 group-hover:opacity-100 transition-opacity" />

                
                <span className="absolute inset-0 rounded-2xl blur-xl bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

                
                <span className="relative flex items-center gap-3">
                  {isDownloading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Downloading...
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      Download CV
                    </>
                  )}
                </span>
              </motion.button>

              
              <motion.button
                onClick={() =>
                  document
                    .getElementById("proyek")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                whileHover={{ scale: 1.05, borderColor: "#a78bfa" }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-4 rounded-2xl font-semibold text-zinc-200 border-2 border-zinc-700 hover:border-violet-500 hover:text-white transition-all duration-300 group"
              >
                <span className="flex items-center gap-3">
                  Lihat Proyek
                  <svg
                    className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </motion.button>
            </motion.div>
          </header>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[380px] xl:max-w-[420px] scale-[0.9] sm:scale-100">
              <ProfileCard
                name="Afgan Galih"
                title="IT Enthusiast"
                handle="afgangalih"
                status="Available for Work"
                contactText="Let's Talk"
                avatarUrl={DataImage.HeroImage}
                miniAvatarUrl={DataImage.HeroImage}
                behindGlowColor="rgba(139, 92, 246, 0.4)"
                behindGlowSize="60%"
                enableTilt
                innerGradient="linear-gradient(145deg, #18181b 0%, #2e1065 100%)"
                onContactClick={() =>
                  document
                    .getElementById("kontak")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
