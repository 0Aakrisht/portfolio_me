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
          {/* Status Pill - Ultra Minimal */}
          <motion.div
            variants={itemVariants}
            className="mb-10 inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-black/10 bg-white/40 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
          >
            <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-black uppercase font-mono mt-[1px]">
              Status: Open
            </span>
          </motion.div>

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
            className="flex flex-col gap-4 max-w-2xl"
          >
            <h2 className="text-xl md:text-3xl font-mono text-black font-semibold tracking-tighter">
              Code now. Google later.
            </h2>

            <p className="text-base md:text-xl text-black/50 font-medium leading-relaxed tracking-tight">
              Student web developer figuring things out and building highly
              aesthetic, digital experiences along the way.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
