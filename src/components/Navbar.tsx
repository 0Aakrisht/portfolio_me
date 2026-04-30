import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import myLogo from "../assets/my_logo.svg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true); // Scroll down
      } else {
        setIsHidden(false); // Scroll up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isHidden ? -150 : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none"
    >
      <div
        className={`pointer-events-auto max-w-7xl mx-auto px-6 py-2 md:py-2 flex items-center justify-between rounded-full border border-black/10 transition-all duration-500 hover:border-black/20 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-xl shadow-md"
            : "bg-white/40 backdrop-blur-md shadow-sm"
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 text-lg md:text-xl text-text-main hover:opacity-80 transition-opacity"
        >
          {/* Avatar Placeholder */}
          <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl flex items-center justify-center overflow-hidden border border-black/10 shadow-sm bg-white">
            <img
              src={myLogo}
              alt="Aakrisht Logo"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Cursive-style name */}
          <span className="font-serif italic font-medium tracking-wide">
            Aakrisht.
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button className="px-7 py-2.5 bg-black text-white text-sm font-semibold rounded-xl hover:bg-gray-800 hover:scale-105 transition-all shadow-md active:scale-95">
            Resume
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button className="px-5 py-2 bg-black text-white text-xs font-semibold rounded-xl hover:bg-gray-800 transition-all shadow-sm active:scale-95">
            Resume
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
