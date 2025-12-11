import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import {
  Sparkles,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowUp,
} from "lucide-react";

const WORDS = [
  "AI Engineer",
  "LLM & NLP Engineer",
  "Generative AI ",
  "Prompt Engineer",
];

const SOCIAL = [
  { icon: Github, link: "https://github.com/YEAB-G" },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/yeabsira-girma-hailegiorgis",
  },
  { icon: ExternalLink, link: "https://t.me/Yeab_yg" },
  { icon: Mail, link: "mailto:yeabsiragirma5@gmail.com" },
];

const scrollToTop = () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

const Home = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 160);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#241051] via-[#160531] to-[#050017] text-white pt-24 pb-16 px-6">
      <motion.div
        className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        {/* Left: text */}
        <div className="space-y-6">
          {/* AI badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-xs text-gray-200 tracking-[0.22em] uppercase">
              Yeabsira AI • LLM • NLP
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Yeabsira{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300">
              Girma
            </span>
          </h1>

          {/* Role */}
          <p className="text-base sm:text-lg text-purple-200 font-semibold">
            <Typewriter
              options={{
                strings: WORDS,
                autoStart: true,
                loop: true,
                delay: 55,
                deleteSpeed: 35,
              }}
            />
          </p>

          {/* Summary */}
          <p className="text-sm sm:text-base text-gray-300 max-w-xl">
            AI-focused engineer working with LLMs, RAG, NLP, and prompt
            engineering. I turn messy text, PDFs, and data into clear, useful
            tools – like chatbots, email stylers, prompt playgrounds, and
            analytics dashboards.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/portofolio"
              className="px-5 py-3 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 text-sm font-medium shadow-lg shadow-purple-500/40 hover:shadow-purple-500/70 hover:-translate-y-0.5 transition-transform"
            >
              View Projects
            </a>

            <a
              href="/Yeabsira_Girma_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-full border border-purple-400/70 text-sm font-medium hover:bg-purple-500/15 transition-colors"
            >
              Download CV
            </a>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 pt-3">
            {SOCIAL.map(({ icon: Icon, link }) => (
              <a
                key={link}
                href={link}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/10 hover:border-purple-400/80 hover:bg-purple-600/25 transition-colors"
              >
                <Icon className="w-4 h-4 text-gray-200" />
              </a>
            ))}
          </div>
        </div>

        {/* Right: profile image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 22 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
        >
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400 p-[3px] shadow-[0_0_55px_rgba(168,85,247,0.75)]">
            <div className="w-full h-full rounded-full bg-[#050017] overflow-hidden flex items-center justify-center">
              <img
                src="/profile.jpg"
                alt="Yeabsira Girma"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Back to top button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 flex items-center justify-center shadow-xl shadow-purple-500/60 hover:scale-110 transition-transform"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </button>
      )}
    </div>
  );
};

export default Home;
