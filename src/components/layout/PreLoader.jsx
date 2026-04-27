import React from "react";
import { motion } from "framer-motion";

const PreLoader = () => {
  const name = "AFGAN GALIH";

  const containerVars = {
    initial: { y: 0 },
    
    exit: { 
      y: "-100vh", 
      transition: { 
        duration: 1.2, 
        ease: [0.76, 0, 0.24, 1], 
        delay: 0.2 
      } 
    }
  };

  const letterVars = {
    initial: { y: 120, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } 
    }
  };

  const lineVars = {
    initial: { scaleX: 0 },
    animate: { 
      scaleX: 1, 
      transition: { duration: 1.5, ease: "easeInOut" } 
    }
  };

  return (
    <motion.div
      variants={containerVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505]"
    >
      <div className="relative overflow-hidden px-10 py-5">
        <motion.div 
          className="flex gap-x-[0.1em]"
          transition={{ staggerChildren: 0.04 }} 
          initial="initial"
          animate="animate"
        >
          {name.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVars}
              className={`text-5xl md:text-8xl font-black italic tracking-tighter ${
                char === " " ? "mr-4" : "text-white"
              }`}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          variants={lineVars}
          className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-8 text-[10px] text-zinc-600 font-bold uppercase tracking-[0.6em] italic"
      >
        Portfolio 2025 — Processing
      </motion.p>
    </motion.div>
  );
};

export default PreLoader;