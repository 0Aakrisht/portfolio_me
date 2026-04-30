import React from "react";
import { motion } from "framer-motion";

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#fafafa]">
      {/* Blob 1 */}
      <motion.div
        animate={{
          x: [0, 120, -80, 50, 0],
          y: [0, -100, 60, -40, 0],
          scale: [1, 1.2, 0.9, 1.1, 1],
          rotate: [0, 90, 180, 270, 360],
          borderRadius: ["50%", "40% 60%", "60% 40%", "50%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-300/50 mix-blend-multiply blur-[100px]"
      />

      {/* Blob 2 */}
      <motion.div
        animate={{
          x: [0, -120, 80, -50, 0],
          y: [0, 120, -80, 50, 0],
          scale: [1, 1.3, 0.8, 1.2, 1],
          rotate: [360, 270, 180, 90, 0],
          borderRadius: ["50%", "60% 40%", "40% 60%", "50%"],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] bg-purple-300/50 mix-blend-multiply blur-[100px]"
      />

      {/* Blob 3 */}
      <motion.div
        animate={{
          x: [0, 90, -120, 70, 0],
          y: [0, -140, 90, -60, 0],
          scale: [1, 0.9, 1.4, 1.1, 1],
          rotate: [0, -90, -180, -270, -360],
          borderRadius: ["50%", "45% 55%", "55% 45%", "50%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-pink-300/50 mix-blend-multiply blur-[100px]"
      />

      {/* Extra floating Blob 4 for more liveliness */}
      <motion.div
        animate={{
          x: [0, -80, 100, -60, 0],
          y: [0, 80, -100, 60, 0],
          scale: [0.8, 1.2, 0.9, 1.3, 0.8],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] left-[40%] w-[30vw] h-[30vw] rounded-full bg-yellow-200/40 mix-blend-multiply blur-[80px]"
      />

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[60px]" />
    </div>
  );
}
