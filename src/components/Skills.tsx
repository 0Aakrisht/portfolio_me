import React from "react";
import { motion } from "framer-motion";

interface SkillItem {
  id: number;
  name: string;
  icon: string;
}

// Updated to use high-quality SVG logos from Devicon
const skillsData: SkillItem[] = [
  {
    id: 1,
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: 2,
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    id: 3,
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    id: 4,
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: 5,
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    id: 6,
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    id: 7,
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    id: 8,
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    id: 9,
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
  },
  {
    id: 10,
    name: "Framer",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
  },
  {
    id: 11,
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    id: 12,
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
];

export default function Skills() {
  const topRow = skillsData.slice(0, 6);
  const bottomRow = skillsData.slice(6, 12);

  // Duplicate items to ensure a seamless infinite loop
  const duplicatedTopRow = [...topRow, ...topRow, ...topRow, ...topRow];
  const duplicatedBottomRow = [
    ...bottomRow,
    ...bottomRow,
    ...bottomRow,
    ...bottomRow,
  ];

  return (
    <section
      id="skills"
      className="py-24 relative z-10 w-full mb-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-main tracking-tight">
            My Skills
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-14">
        {/* Top Row: Moves Left to Right */}
        <div className="flex w-full overflow-hidden mask-edges">
          <motion.div
            className="flex flex-nowrap gap-32 items-center shrink-0 pr-32 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {duplicatedTopRow.map((skill, index) => (
              <div
                key={`top-${skill.id}-${index}`}
                className="flex flex-row items-center gap-3 shrink-0 hover:scale-110 transition-transform cursor-default"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-md"
                />
                <h3 className="text-base md:text-lg font-bold text-text-main">
                  {skill.name}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Row: Moves Right to Left */}
        <div className="flex w-full overflow-hidden mask-edges">
          <motion.div
            className="flex flex-nowrap gap-32 items-center shrink-0 pr-32 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {duplicatedBottomRow.map((skill, index) => (
              <div
                key={`bottom-${skill.id}-${index}`}
                className="flex flex-row items-center gap-3 shrink-0 hover:scale-110 transition-transform cursor-default"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-md"
                />
                <h3 className="text-base md:text-lg font-bold text-text-main">
                  {skill.name}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
