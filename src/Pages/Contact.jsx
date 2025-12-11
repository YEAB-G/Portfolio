import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  MapPin,
  Globe,
} from "lucide-react";

const contactItems = [
  {
    label: "Email",
    value: "yeabsiragirma5@gmail.com",
    href: "mailto:yeabsiragirma5@gmail.com",
    icon: Mail,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    label: "LinkedIn",
    value: "yeabsira-girma-hailegiorgis",
    href: "https://www.linkedin.com/in/yeabsira-girma-hailegiorgis",
    icon: Linkedin,
    gradient: "from-blue-500 to-sky-500",
  },
  {
    label: "GitHub",
    value: "github.com/YEAB-G",
    href: "https://github.com/YEAB-G",
    icon: Github,
    gradient: "from-gray-600 to-gray-800",
  },
  {
    label: "Telegram",
    value: "@Yeab_yg",
    href: "https://t.me/Yeab_yg",
    icon: Send,
    gradient: "from-sky-400 to-cyan-400",
  },
];

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#241051] via-[#160531] to-[#050017] text-white pt-20 pb-12 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
            Contact
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Get in touch with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300">
              Yeabsira Girma
            </span>
          </h1>

          <p className="text-gray-400 max-w-xl text-sm sm:text-base">
            Reach out for AI Engineering, LLM/NLP projects, collaborations,
            freelance work, or any questions about my portfolio and projects.
          </p>
        </motion.div>

        {/* CONTACT CARDS */}
        <motion.div
          className="grid gap-5 sm:grid-cols-2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-400/50 transition-all"
            >
              {/* Icon circle */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br ${item.gradient} shadow-lg shadow-black/30`}
              >
                <item.icon className="w-5 h-5 text-white" />
              </div>

              {/* Text */}
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-white underline decoration-gray-500 underline-offset-2 group-hover:text-purple-200">
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* EXTRA INFO */}
        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {/* Location */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-purple-300" />
              <h2 className="text-sm font-semibold">Location</h2>
            </div>
            <p className="text-xs text-gray-400">
              Ethiopia — available for remote roles worldwide.
            </p>
          </div>

          {/* What I do */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-orange-300" />
              <h2 className="text-sm font-semibold">Work Focus</h2>
            </div>
            <p className="text-xs text-gray-400">
              • AI / LLM Engineer, NLP, Prompt Engineering
              <br />
              • RAG systems &amp; practical AI tools
              <br />
              • MERN-based apps when full-stack is needed
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
