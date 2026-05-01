import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-32 pb-20 w-full overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-start w-full max-w-5xl"
        >
          {/* Main Title - Brutalist/Minimalist Typography */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-[8rem] lg:text-[10.5rem] font-black text-black leading-[0.8] tracking-tighter mb-12"
          >
            Aakrisht <br />
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#000,#888,#000)] bg-[length:200%_auto] inline-block mt-2 pb-4"
            >
              Pachhai.
            </motion.span>
          </motion.h1>

          {/* Subtext Container */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start gap-4 max-w-2xl"
          >
            <h2 className="text-xl md:text-3xl font-mono text-black font-semibold tracking-tighter flex items-center">
              <span>
                {"Code now. Google later.".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.01, delay: 0.8 + index * 0.06 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[2px] md:w-[3px] h-[22px] md:h-[30px] bg-black ml-1 md:ml-2"
              />
            </h2>

            <p className="text-base md:text-xl text-black/50 font-medium leading-relaxed tracking-tight mb-2">
              Student web developer figuring things out and building highly
              aesthetic, digital experiences along the way.
            </p>

            {/* Status Pill - Moved below the description */}
            <div className="mt-2 inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-black/10 bg-white/40 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-black uppercase font-mono mt-[1px]">
                Open
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
