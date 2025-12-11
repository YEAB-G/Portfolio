import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Brain, Code, Cloud, FileDown } from "lucide-react";

const skills = [
  "LLMs (Llama, GPT-style)",
  "Prompt Engineering",
  "RAG / Vector Search",
  "NLP (classification, sentiment)",
  "Python · FastAPI · Streamlit",
  "PostgreSQL · MongoDB",
  "React (MERN basics)",
  "Azure & AWS foundations",
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#241051] via-[#160531] to-[#050017] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr,0.8fr] gap-10 items-start">
        {/* Left – text */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span className="text-xs text-gray-300 uppercase tracking-[0.2em]">
              About Me
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold">
            AI Engineer focused on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300">
              LLMs, NLP &amp; Generative AI
            </span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            I&apos;m <span className="font-semibold">Yeabsira Girma</span>, an
            AI-focused engineer who enjoys working with large language models,
            RAG systems, and NLP on real-world data. I like building things that
            are both technically interesting and actually useful — such as PDF
            chatbots, AI email stylers, prompt experimentation tools, and
            analytics dashboards.
          </p>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            My journey includes hands-on projects and structured learning:
            working on LLM apps, review analytics, and data stories while
            participating in programs like <span className="font-medium">10 Academy</span>. I also have
            foundational certifications and experience with cloud platforms like{" "}
            <span className="font-medium">Microsoft Azure</span> and{" "}
            <span className="font-medium">AWS</span>, plus some MERN experience
            to tie the backend and frontend together.
          </p>

          {/* Highlight cards */}
          <div className="grid gap-4 sm:grid-cols-3 mt-4">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-3 space-y-1.5">
              <Brain className="w-4 h-4 text-purple-300" />
              <p className="text-sm font-semibold">LLMs &amp; NLP</p>
              <p className="text-xs text-gray-400">
                RAG, few-shot prompts, sentiment analysis and text
                classification on real tasks.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-3 space-y-1.5">
              <Code className="w-4 h-4 text-pink-300" />
              <p className="text-sm font-semibold">Practical Projects</p>
              <p className="text-xs text-gray-400">
                RAG over PDFs, AI email styler, prompt playground, solar
                analytics, and one MERN app.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-3 space-y-1.5">
              <Cloud className="w-4 h-4 text-orange-300" />
              <p className="text-sm font-semibold">Cloud &amp; Data</p>
              <p className="text-xs text-gray-400">
                Familiar with Azure, AWS, SQL/NoSQL, and experiment tracking for
                AI workflows.
              </p>
            </div>
          </div>

          {/* CV + note */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="/Yeabsira_Girma_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-sm font-medium shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 hover:-translate-y-0.5 transition-transform"
            >
              <FileDown className="w-4 h-4" />
              Download CV
            </a>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xs">
              Open to roles in AI Engineering, LLM apps, NLP, prompt
              engineering, and related areas.
            </p>
          </div>
        </motion.div>

        {/* Right – skills list */}
        <motion.div
          className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <p className="text-sm font-semibold mb-1">Core Skills</p>
          <div className="grid grid-cols-1 gap-2">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill}
                className="text-xs sm:text-sm px-3 py-2 rounded-full bg-black/30 border border-white/10 text-gray-200"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04, duration: 0.25 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
