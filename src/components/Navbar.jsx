import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", route: "/" },
    { label: "About", route: "/about" },
    { label: "Projects", route: "/portofolio" },
    { label: "Contact", route: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#080021]/85 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center shadow-lg shadow-purple-500/50">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-orange-200">
              Yeabsira AI
            </p>
            <p className="text-[11px] text-gray-400">LLM &amp; NLP Engineer</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          {navItems.map((item) => {
            const isActive = location.pathname === item.route;
            return (
              <button
                key={item.route}
                onClick={() => navigate(item.route)}
                className={`px-3 py-1.5 rounded-full transition-all border
                  ${
                    isActive
                      ? "bg-purple-500/25 text-purple-200 border-purple-400/60 shadow-sm shadow-purple-500/40"
                      : "bg-transparent text-gray-300 border-transparent hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
