import React from "react";
import { Github, Linkedin, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "LinkedIn",
    subText: "AI / LLM profile",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/yeabsira-girma-hailegiorgis",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true,
  },
  {
    name: "GitHub",
    displayName: "GitHub",
    subText: "@YEAB-G",
    icon: Github,
    url: "https://github.com/YEAB-G",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
  },
  {
    name: "Telegram",
    displayName: "Telegram",
    subText: "@Yeab_yg",
    icon: ExternalLink,
    url: "https://t.me/Yeab_yg",
    color: "#229ED9",
    gradient: "from-[#0ea5e9] to-[#38bdf8]",
  },
];

const SocialLinks = () => {
  return (
    <section className="py-10 px-5 sm:px-10 lg:px-20 bg-[#020617] text-white">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Let&apos;s stay connected
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl">
          You can find my latest projects, thoughts, and updates on these
          platforms. I&apos;m always open to collaborating on AI, LLM, and
          data-driven projects.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className={`rounded-2xl p-4 border border-white/10 bg-gradient-to-br ${link.gradient} bg-opacity-10 hover:bg-opacity-20 transition-transform transform hover:-translate-y-1 shadow-lg shadow-black/30`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-black/30 flex items-center justify-center">
                  <link.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{link.displayName}</p>
                  <p className="text-xs text-gray-200">{link.subText}</p>
                </div>
              </div>
              <p className="text-[10px] text-gray-100 break-all">{link.url}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
