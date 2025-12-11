import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Image as ImageIcon, Sparkles } from "lucide-react";

const aiProjects = [
  {
    title: "RAG PDF Chatbot",
    role: "LLM · RAG · Streamlit",
    description:
      "Upload PDFs and ask questions in natural language. Uses embeddings, vector search, and Groq Llama 3.x to answer with grounded context.",
    tags: ["RAG", "LLM", "Vector Search", "Streamlit"],
    link: "https://chatbotyg.streamlit.app/",
    repo: "https://github.com/YEAB-G/ChatBot-1",
    image: "/projects/rag-chatbot.png",
  },
  {
    title: "AI Email Styler",
    role: "Generative AI · UX",
    description:
      "Turns rough emails into clear, structured messages in different tones (formal, friendly, concise, apology, follow-up).",
    tags: ["LLM", "Prompt Engineering", "Streamlit"],
    link: "https://ai-email-styler.streamlit.app/",
    repo: "https://github.com/YEAB-G/AI-Email-Styler",
    image: "/projects/ai-email-styler.png",
  },
  {
    title: "Prompt Optimization Playground",
    role: "Prompt Engineering Lab",
    description:
      "Compares multiple prompts on the same task and input, measuring latency, estimated tokens, and similarity to a reference answer.",
    tags: ["LLM", "Prompt Testing", "Groq API"],
    link: "https://prompt-optimization-playground-yg.streamlit.app/",
    repo: "https://github.com/YEAB-G/Prompt-Optimization-Playground",
    image: "/projects/prompt-lab.png",
  },
  {
    title: "Solar Energy Analytics project",
    role: "Data Analytics · Visualization",
    description:
      "Explored solar energy production data, cleaned and analyzed trends, and built visual insights to understand patterns and potential optimization.",
    tags: ["Data Analytics", "Visualization", "Python", "Pandas"],
    link: "https://your-solar-project-report-or-app-link",
    repo: "https://github.com/YEAB-G/your-solar-project-repo",
    image: "/projects/solar-week0.png",
  },
];

const webProjects = [
  {
    title: "Full-stack MERN Application",
    role: "MERN · Auth · API Design",
    description:
      "A structured MERN project demonstrating REST APIs, authentication, and a responsive React UI. Built to show clean code and production-style structure.",
    tags: ["MongoDB", "Express", "React", "Node"],
    link: "https://my-notes-murex.vercel.app/",
    repo: "https://github.com/YEAB-G/my-notes",
    image: "/projects/mern-app.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.4, ease: "easeOut" },
  }),
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden flex flex-col hover:border-purple-400/60 hover:bg-white/10 transition-colors"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      custom={index}
    >
      {/* Image */}
      <div className="relative h-40 sm:h-44 bg-black/40 flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              const fallback =
                e.currentTarget.parentElement?.querySelector(".image-fallback");
              if (fallback) fallback.style.display = "flex";
            }}
          />
        ) : null}
        <div className="image-fallback hidden absolute inset-0 items-center justify-center bg-black/60">
          <ImageIcon className="w-6 h-6 text-gray-300" />
        </div>
        <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-black/60 text-[11px] text-gray-200">
          {project.role}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 gap-3">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm text-gray-300">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 rounded-full bg-black/40 text-gray-200 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center justify-between text-xs text-gray-400 pt-1">
          <div className="flex items-center gap-3">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-white"
              >
                <Github className="w-3 h-3" />
                <span>Code</span>
              </a>
            )}
          </div>
          {project.link && project.link.startsWith("http") && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-purple-300 hover:text-purple-100"
            >
              <span>Live demo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const PortofolioPage = () => {
  return (
    <div
      id="projects"
      className="min-h-screen bg-gradient-to-b from-[#241051] via-[#160531] to-[#050017] text-white pt-20 pb-12 px-6"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <header className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span className="text-xs text-gray-300 uppercase tracking-[0.2em]">
              Selected Work
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            AI projects &amp;  MERN highlight
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
            These projects represent my practical experience with LLMs, RAG,
            NLP, analytics, and one full-stack MERN application to show I can
            ship complete products end-to-end.
          </p>
        </header>

        {/* AI Projects */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">
            AI, ML &amp; NLP
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {aiProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* MERN Project */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">
            Web (MERN) Highlight
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {webProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PortofolioPage;
