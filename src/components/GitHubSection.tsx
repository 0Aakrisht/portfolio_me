import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, Star, GitPullRequest, Github } from "lucide-react"; // <-- Add this line

export default function GitHubSection() {
  const [stats, setStats] = useState({
    repos: "...",
    stars: "...",
    prs: "...",
  });

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const userRes = await fetch("https://api.github.com/users/aakrisht-dev");
        const userData = await userRes.json();

        const reposRes = await fetch(
          "https://api.github.com/users/aakrisht-dev/repos?per_page=100",
        );
        const reposData = await reposRes.json();
        const starsCount = Array.isArray(reposData)
          ? reposData.reduce(
              (acc: number, repo: any) => acc + repo.stargazers_count,
              0,
            )
          : 0;

        let prsCount = "50+";
        try {
          const prsRes = await fetch(
            "https://api.github.com/search/issues?q=author:aakrisht-dev+type:pr",
          );
          const prsData = await prsRes.json();
          if (prsData.total_count !== undefined) {
            prsCount = prsData.total_count.toString();
          }
        } catch (e) {
          console.error("Failed to fetch PRs", e);
        }

        setStats({
          repos:
            userData.public_repos !== undefined
              ? userData.public_repos.toString()
              : "20+",
          stars: starsCount.toString(),
          prs: prsCount,
        });
      } catch (error) {
        console.error("Error fetching GitHub stats", error);
        setStats({ repos: "20+", stars: "10+", prs: "50+" });
      }
    };

    fetchGitHubStats();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const text = {
    title: "Open Source Contributions",
    subtitle:
      "Check out my latest commits, repositories, and activity on GitHub.",
    viewProfile: "View GitHub Profile",
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          <span className="text-gradient">{text.title}</span>
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-text-muted text-lg max-w-2xl mx-auto"
        >
          {text.subtitle}
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-3 gap-6"
      >
        {/* Contributions Chart Card */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-2 glass p-8 rounded-3xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="text-accent w-6 h-6" />
              <h3 className="text-xl font-semibold text-text-main">
                Activity Overview
              </h3>
            </div>
            <div className="bg-white/50 rounded-2xl p-4 border border-black/5 overflow-x-auto overflow-y-hidden flex items-center justify-center min-h-[160px]">
              {/* Fallback image if username is missing, using a placeholder trick or CSS grid */}
              <div className="text-gray-500 flex flex-col items-center">
                <img
                  src="https://ghchart.rshah.org/2563eb/0Aakrisht"
                  alt="GitHub chart"
                  className="rounded-lg mix-blend-multiply opacity-80"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    if (target.nextElementSibling) {
                      target.nextElementSibling.classList.remove("hidden");
                    }
                  }}
                />
                <span className="hidden mt-2 text-sm text-text-muted">
                  Add your GitHub username to see the chart
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Card */}
        <motion.div
          variants={itemVariants}
          className="glass p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-between"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Star className="text-yellow-500 w-6 h-6" />
              <h3 className="text-xl font-semibold text-text-main">
                Key Stats
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-text-muted">
                  <GitPullRequest className="w-4 h-4" />
                  <span>Pull Requests</span>
                </div>
                <span className="font-mono font-semibold text-text-main min-w-[2rem] text-right">
                  {stats.prs === "..." ? (
                    <span className="inline-block w-4 h-4 rounded-full border-2 border-text-main border-t-transparent animate-spin"></span>
                  ) : (
                    stats.prs
                  )}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-text-muted">
                  <Star className="w-4 h-4" />
                  <span>Total Stars</span>
                </div>
                <span className="font-mono font-semibold text-text-main min-w-[2rem] text-right">
                  {stats.stars === "..." ? (
                    <span className="inline-block w-4 h-4 rounded-full border-2 border-text-main border-t-transparent animate-spin"></span>
                  ) : (
                    stats.stars
                  )}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-text-muted">
                  <Github className="w-4 h-4" />
                  <span>Repositories</span>
                </div>
                <span className="font-mono font-semibold text-text-main min-w-[2rem] text-right">
                  {stats.repos === "..." ? (
                    <span className="inline-block w-4 h-4 rounded-full border-2 border-text-main border-t-transparent animate-spin"></span>
                  ) : (
                    stats.repos
                  )}
                </span>
              </div>
            </div>
          </div>

          <a
            href="https://github.com/0Aakrisht"
            target="_blank"
            rel="noopener"
            className="mt-8 flex items-center justify-center gap-2 w-full py-3 bg-white/60 hover:bg-white border border-black/5 shadow-sm rounded-2xl transition-all duration-300 text-sm font-medium text-text-main relative z-20 pointer-events-auto"
          >
            <Github className="w-4 h-4" />
            {text.viewProfile}
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
