import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  const content = {
    title: "Get in Touch",
    subtitle:
      "Have a project in mind or just want to say hi? I'd love to hear from you.",
    button: "Send a Message",
  };

  return (
    <section id="contact" className="py-24 relative z-10 w-full">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-main tracking-tight">
          {content.title}
        </h2>
        <p className="text-text-muted text-lg font-medium mb-12">
          {content.subtitle}
        </p>

        <div className="bg-white/50 backdrop-blur-xl border border-black/10 p-8 md:p-12 rounded-[2rem] shadow-xl max-w-2xl mx-auto">
          <form
            className="flex flex-col gap-6 text-left"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-text-main ml-1">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="px-5 py-4 rounded-xl bg-white border border-black/10 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-text-main ml-1">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="px-5 py-4 rounded-xl bg-white border border-black/10 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-text-main ml-1">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Hello..."
                className="px-5 py-4 rounded-xl bg-white border border-black/10 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95"
            >
              <Mail size={20} />
              {content.button}
            </button>
          </form>

          <div className="mt-12 pt-12 border-t border-black/10 flex justify-center gap-6">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <button
                key={i}
                className="p-4 bg-white border border-black/10 rounded-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-text-main flex items-center justify-center"
              >
                <Icon size={24} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
