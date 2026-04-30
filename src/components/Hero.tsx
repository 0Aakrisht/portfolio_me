import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-32 pb-20 w-full"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col items-start text-left max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-text-main leading-[1.1] mb-6 tracking-tighter">
            Aakrisht{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Pachhai.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-4">
            Code now, Google later.
          </p>

          <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto">
            Student web developer figuring things out and building along the
            way.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
