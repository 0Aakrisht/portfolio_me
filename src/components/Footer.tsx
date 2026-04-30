import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-8 border-t border-white/10 bg-primary/50 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-600">
            © {currentYear} Aakrisht Pachhai. All rights reserved.
          </div>

          <div className="flex items-center gap-4 font-medium text-xs text-gray-400">
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group flex items-center justify-center space-x-0 ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
