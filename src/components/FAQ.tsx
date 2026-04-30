import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, ChevronRight } from "lucide-react";

type IconStyle = "chevron" | "plus" | "caret";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ({
  allowMultiple = false,
  iconStyle = "plus" as IconStyle,
}) {
  const content = {
    title: "Frequently Asked Questions",
    subtitle: "Answers to some common questions about my work and process.",
    faqs: [
      {
        q: "What is your main tech stack?",
        a: "I primarily work with React, Next.js, TypeScript, and Node.js for building scalable web applications.",
      },
      {
        q: "Are you available for freelance work?",
        a: "Yes, I am currently open to freelance opportunities and contract work. Feel free to reach out!",
      },
      {
        q: "How do you approach a new project?",
        a: "I start by understanding the requirements and user needs, followed by wireframing, architecture planning, and then agile development.",
      },
    ] as FAQItem[],
  };

  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index],
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  const renderIcon = (isOpen: boolean) => {
    switch (iconStyle) {
      case "plus":
        return (
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Plus className="text-text-muted" size={20} />
          </motion.div>
        );
      case "caret":
        return (
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight
              className="text-text-muted"
              size={20}
              fill={isOpen ? "currentColor" : "none"}
            />
          </motion.div>
        );
      case "chevron":
      default:
        return (
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="text-text-muted" size={20} />
          </motion.div>
        );
    }
  };

  return (
    <section id="faq" className="py-24 relative w-full mb-10">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-main tracking-tight">
            {content.title}
          </h2>
          <p className="text-text-muted text-lg font-medium">
            {content.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {content.faqs.map((faq, index) => {
            const isOpen = openIndices.includes(index);

            return (
              <div
                key={index}
                className="border-b border-black/10 overflow-hidden transition-all duration-300 last:border-none"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex justify-between items-center py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="font-semibold text-lg text-text-main pr-8">
                    {faq.q}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors">
                    {renderIcon(isOpen)}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="pb-6 text-text-muted text-base leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
