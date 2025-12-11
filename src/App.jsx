import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import AboutPage from "./Pages/About";
import PortofolioPage from "./Pages/Portofolio";
import ContactPage from "./Pages/Contact";

const PageWrapper = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <div className="bg-gradient-to-b from-[#1b0b3a] via-[#12061f] to-[#050017] min-h-screen text-white">
      <Navbar />
      <div className="pt-16">
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portofolio" element={<PortofolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="*"
              element={
                <div className="min-h-[60vh] flex items-center justify-center text-xl text-gray-300">
                  404 – Page not found
                </div>
              }
            />
          </Routes>
        </PageWrapper>
      </div>
    </div>
  );
}

export default App;
