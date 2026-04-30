import React from "react";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GitHubSection from "./components/GitHubSection";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AmbientBackground from "./components/AmbientBackground";
import Preloader from "./components/Preloader";

export default function App() {
  return (
    <div className="relative min-h-screen bg-primary text-text-main transition-colors duration-500">
      <Preloader />
      <CustomCursor />

      {/* Animated Ambient Glow Background */}
      <AmbientBackground />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <GitHubSection />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
