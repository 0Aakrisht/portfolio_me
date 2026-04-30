import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type Preset = "dot" | "minimal" | "chevrons";

interface ScrollIndicatorProps {
  preset?: Preset;
  className?: string;
  color?: string; // Tailwind text color class, e.g., 'text-gray-500'
  speed?: number; // Animation duration in seconds
  onClick?: () => void;
}

export default function ScrollIndicator({
  preset = "dot",
  className = "",
  color = "text-text-muted",
  speed = 1.5,
  onClick,
}: ScrollIndicatorProps) {
  const handleScroll = () => {
    if (onClick) {
      onClick();
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  const renderIndicator = () => {
    switch (preset) {
      case "minimal":
        return (
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-70 mb-2">
              Scroll
            </span>
            <div className="w-[1px] h-12 bg-current/20 relative overflow-hidden">
              <motion.div
                animate={{ y: ["-100%", "100%"] }}
                transition={{
                  repeat: Infinity,
                  duration: speed * 1.2,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-current w-full"
              />
            </div>
          </div>
        );

      case "chevrons":
        return (
          <div className="flex flex-col items-center justify-center -space-y-4">
            <motion.div
              animate={{ opacity: [0.2, 1, 0.2], y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: speed,
                ease: "easeInOut",
                delay: 0,
              }}
            >
              <ChevronDown
                size={28}
                strokeWidth={1.5}
                className="drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              />
            </motion.div>
            <motion.div
              animate={{ opacity: [0.2, 1, 0.2], y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: speed,
                ease: "easeInOut",
                delay: speed * 0.2,
              }}
            >
              <ChevronDown
                size={28}
                strokeWidth={1.5}
                className="drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              />
            </motion.div>
          </div>
        );

      case "dot":
      default:
        return (
          <div className="w-7 h-12 border-[2px] border-current rounded-full flex justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{
                repeat: Infinity,
                duration: speed,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 bg-current rounded-full my-0.5"
            />
          </div>
        );
    }
  };

  return (
    <button
      onClick={handleScroll}
      className={`relative flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity focus:outline-none ${color} ${className}`}
      aria-label="Scroll down"
    >
      {renderIndicator()}
    </button>
  );
}
