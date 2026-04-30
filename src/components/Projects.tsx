import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

export default function Projects() {
  const content = {
    title: "Featured Work",
    subtitle:
      "A selection of projects that showcase my skills in building robust, scalable applications.",
    projects: [
      {
        id: 1,
        title: "E-Commerce Platform",
        desc: "A full-stack e-commerce solution with Next.js, Stripe, and Tailwind.",
        color: "bg-blue-500",
        textColor: "text-white",
        subTextColor: "text-blue-100",
        image: "🛒",
      },
      {
        id: 2,
        title: "AI Content Generator",
        desc: "SaaS platform utilizing OpenAI API to generate marketing copy.",
        color: "bg-teal-600",
        textColor: "text-white",
        subTextColor: "text-teal-100",
        image: "🤖",
      },
      {
        id: 3,
        title: "Crypto Dashboard",
        desc: "Real-time cryptocurrency tracking app with WebSockets and D3.",
        color: "bg-slate-800",
        textColor: "text-white",
        subTextColor: "text-slate-300",
        image: "📈",
      },
      {
        id: 4,
        title: "Social Media App",
        desc: "Mobile-first social networking PWA built with React and Firebase.",
        color: "bg-amber-500",
        textColor: "text-white",
        subTextColor: "text-amber-50",
        image: "📱",
      },
      {
        id: 5,
        title: "Booking System",
        desc: "Appointment scheduling software for local businesses.",
        color: "bg-rose-500",
        textColor: "text-white",
        subTextColor: "text-rose-100",
        image: "📅",
      },
    ],
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHoveringDock, setIsHoveringDock] = useState(false);

  const activeProject = content.projects[currentIndex];

  const handleDragEnd = (e: any, { offset }: any) => {
    const swipe = offset.x;
    if (swipe < -50) {
      setCurrentIndex((prev) => (prev + 1) % content.projects.length);
    } else if (swipe > 50) {
      setCurrentIndex(
        (prev) =>
          (prev - 1 + content.projects.length) % content.projects.length,
      );
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center md:text-left mb-16 max-w-2xl mx-auto md:mx-0">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-main tracking-tight">
            {content.title}
          </h2>
          <p className="text-text-muted text-lg font-medium">
            {content.subtitle}
          </p>
        </div>

        {/* Gallery Container */}
        <div className="relative max-w-[900px] mx-auto mb-16">
          {/* Main Display Box */}
          <div className="relative z-10 w-full h-[400px] md:h-[600px] rounded-[2rem] shadow-sm border border-black/5 bg-white overflow-hidden p-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className={`relative w-full h-full rounded-[1.5rem] flex flex-col justify-end items-start cursor-grab active:cursor-grabbing p-8 md:p-12 overflow-hidden shadow-inner ${activeProject.color}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl md:text-[150px] opacity-40 mix-blend-overlay">
                  {activeProject.image}
                </div>

                <div className="relative z-10 w-full">
                  <h3
                    className={`text-4xl md:text-5xl font-bold mb-3 tracking-tight ${activeProject.textColor}`}
                  >
                    {activeProject.title}
                  </h3>
                  <p
                    className={`text-lg md:text-xl font-medium leading-relaxed max-w-2xl ${activeProject.subTextColor}`}
                  >
                    {activeProject.desc}
                  </p>
                </div>

                <div className="absolute top-6 right-6 md:top-8 md:right-8 flex gap-3">
                  <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300">
                    <Play size={20} className="ml-1" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive Fanned Dock */}
          <div
            className="absolute -bottom-8 md:-bottom-12 left-1/2 transform -translate-x-1/2 flex justify-center items-end gap-4 md:gap-6 h-40 z-30 w-full max-w-[700px] px-8"
            onMouseEnter={() => setIsHoveringDock(true)}
            onMouseLeave={() => setIsHoveringDock(false)}
          >
            {content.projects.map((project, index) => {
              const isActive = currentIndex === index;
              const centerOffset = index - (content.projects.length - 1) / 2;

              return (
                <motion.button
                  key={project.id}
                  onClick={() => setCurrentIndex(index)}
                  initial={false}
                  animate={{
                    x: isHoveringDock
                      ? 0
                      : centerOffset *
                        (typeof window !== "undefined" &&
                        window.innerWidth < 768
                          ? -25
                          : -45),
                    y: isHoveringDock
                      ? isActive
                        ? -15
                        : 0
                      : Math.abs(centerOffset) * 15 + (isActive ? -5 : 15),
                    rotate: isHoveringDock ? 0 : centerOffset * 12,
                    scale: isHoveringDock ? 0.9 : isActive ? 1.05 : 0.85,
                    zIndex: isHoveringDock
                      ? isActive
                        ? 40
                        : 20
                      : content.projects.length - Math.abs(centerOffset),
                  }}
                  whileHover={{ y: -30, scale: 1.15, zIndex: 50 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                    mass: 0.8,
                  }}
                  className={`relative w-16 h-16 md:w-24 md:h-24 rounded-[1.2rem] md:rounded-[1.5rem] shadow-[0_10px_25px_rgb(0,0,0,0.25)] border-[3px] md:border-[4px] border-white flex items-center flex-shrink-0 justify-center overflow-hidden cursor-pointer ${project.color}`}
                >
                  <span className="text-2xl md:text-4xl translate-y-[-2px]">
                    {project.image}
                  </span>

                  {!isActive && (
                    <motion.div
                      className="absolute inset-0 bg-black/25 backdrop-blur-[1px]"
                      animate={{ opacity: isHoveringDock ? 0.1 : 0.5 }}
                      whileHover={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
