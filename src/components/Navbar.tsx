import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
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
      className="fixed top-0 left-0 right-0 z-50 p-4 pointer-events-none md:p-6"
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
          className="flex items-center gap-3 text-lg transition-opacity md:text-xl text-text-main hover:opacity-80"
        >
          {/* Avatar Placeholder - Made larger */}
          <div className="flex items-center justify-center w-10 h-10 overflow-hidden bg-transparent md:w-14 md:h-14 rounded-xl">
            <img
              src={myLogo}
              alt="Aakrisht Logo"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Cursive-style name */}
          <span className="font-serif italic font-medium tracking-wide">
            Aakrisht.
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="items-center hidden gap-8 md:flex">
          <button className="group relative flex items-center gap-2 px-6 py-2.5 bg-black text-white text-sm font-medium rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(0,0,0,0.15)]">
            <span>Resume</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button className="group flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white transition-all bg-black rounded-full hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(0,0,0,0.15)]">
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
