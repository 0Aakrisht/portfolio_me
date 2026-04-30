import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black text-text-main tracking-tighter">
            Let's connect.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <h2 className="text-xl md:text-2xl font-medium text-gray-500 leading-snug tracking-tight max-w-md">
              <span className="text-black font-semibold">
                Ideas need space to breathe.
              </span>{" "}
              Whether you have a question, a project in mind, or just want to
              connect—my inbox is open.
            </h2>

            <div className="flex flex-col gap-6 mt-4">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-text-main group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <a
                    href="mailto:paakrisht123@gmail.com"
                    className="text-text-main font-medium hover:opacity-70 transition-opacity tracking-tight"
                  >
                    paakrisht123@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-text-main transition-all duration-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-text-main font-medium tracking-tight">
                    Kathmandu, Nepal
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-black/5">
                <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">
                  Socials
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/0Aakrisht"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-text-main hover:bg-black hover:text-white transition-all hover:scale-105 duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aakrisht-pachhai-a81614300/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-text-main hover:bg-[#0A66C2] hover:text-white transition-all hover:scale-105 duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://x.com/allaboutaakrish"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-text-main hover:bg-[#1DA1F2] hover:text-white transition-all hover:scale-105 duration-300"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/aakristricted/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-text-main hover:bg-[#E1306C] hover:text-white transition-all hover:scale-105 duration-300"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="px-6 py-4 rounded-full bg-black/5 border-none focus:outline-none focus:ring-2 focus:ring-black/20 transition-all font-medium text-sm placeholder:text-gray-400"
                />
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="px-6 py-4 rounded-full bg-black/5 border-none focus:outline-none focus:ring-2 focus:ring-black/20 transition-all font-medium text-sm placeholder:text-gray-400"
                />
              </div>
              <textarea
                id="message"
                rows={5}
                placeholder="What's on your mind?"
                className="px-6 py-5 rounded-3xl bg-black/5 border-none focus:outline-none focus:ring-2 focus:ring-black/20 transition-all resize-none font-medium text-sm placeholder:text-gray-400"
              ></textarea>
              <button
                type="submit"
                className="mt-2 group flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-full font-semibold tracking-tight hover:bg-gray-800 transition-all active:scale-95 w-max"
              >
                Send
                <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
