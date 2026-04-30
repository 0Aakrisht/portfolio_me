import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Hello", "Bonjour", "Hola", "Ciao", "Namaste"];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (index === words.length - 1) {
      // Delay before exiting on the last word
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 1200);
      return () => clearTimeout(timeout);
    }

    // Increased duration for slower word switching
    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 500);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ clipPath: "circle(150% at 50% 50%)" }}
          exit={{
            clipPath: "circle(0% at 50% 50%)",
            opacity: 0,
          }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-serif italic flex items-center gap-4"
            >
              <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#ef4444,#f97316,#eab308,#22c55e,#3b82f6,#a855f7)] pr-2">
                {words[index]}
              </span>
            </motion.h1>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
