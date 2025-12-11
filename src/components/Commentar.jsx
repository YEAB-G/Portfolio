import React from "react";
import { MessageSquare, Mail, Send, Github, Linkedin } from "lucide-react";

const Komentar = () => {
  return (
    <section className="w-full bg-[#020617] text-white py-12 px-5 sm:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <MessageSquare className="w-4 h-4 text-purple-300" />
            <span className="text-xs text-gray-300 uppercase tracking-[0.2em]">
              Contact
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Let&apos;s collaborate or talk about AI projects
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
            This section used to be powered by Supabase comments in the original
            template. For this portfolio, I disabled the backend and kept a
            simple, clear way to reach me. Feel free to email me or ping me on
            Telegram for roles, projects, or questions about my work.
          </p>
        </div>

        {/* Contact options */}
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:yeabsiragirma5@gmail.com"
            className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 hover:bg-white/10 hover:border-purple-400/60 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
              <Mail className="w-5 h-5 text-purple-300" />
            </div>
            <div className="space-y-0.5">
              <p className="text-sm font-medium">Email</p>
              <p className="text-xs text-gray-300">
                yeabsiragirma5@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://t.me/Yeab_yg"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 hover:bg-white/10 hover:border-purple-400/60 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center">
              <Send className="w-5 h-5 text-sky-300" />
            </div>
            <div className="space-y-0.5">
              <p className="text-sm font-medium">Telegram</p>
              <p className="text-xs text-gray-300">@Yeab_yg</p>
            </div>
          </a>
        </div>

        {/* Note */}
        <div className="rounded-2xl border border-dashed border-white/15 bg-white/5 px-4 py-3 text-xs sm:text-sm text-gray-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>
            In the original template this area showed live comments from
            Supabase. For your portfolio, it&apos;s intentionally simplified so
            everything works without any backend setup.
          </span>
          <div className="flex items-center gap-3 text-[11px] sm:text-xs text-gray-400">
            <span className="inline-flex items-center gap-1">
              <Github className="w-3 h-3" />
              github.com/YEAB-G
            </span>
            <span className="inline-flex items-center gap-1">
              <Linkedin className="w-3 h-3" />
              /in/yeabsira-girma-hailegiorgis
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Komentar;
