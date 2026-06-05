"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { ChevronDown, FileText, Briefcase } from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { t, language } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-transparent section-padding pt-32 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-start space-y-8"
          >
            <div>
              <span className="inline-block py-2 px-5 rounded-full bg-cyan-500/10 text-cyan-400 font-bold text-xs mb-6 tracking-widest uppercase border border-cyan-500/20 shadow-[0_0_15px_rgba(0,242,254,0.2)]">
                {t("hero.badge")}
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
                {t("hero.hi")} <span className="text-gradient italic relative">
                  Sheljin
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-cyan-500/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </div>
            
            <div className="text-xl md:text-2xl text-slate-300 h-10 font-medium">
              <span className="text-white">{t("hero.role_prefix")} </span>
              <span className="font-semibold text-gradient underline underline-offset-8 decoration-cyan-500/30" key={language}>
                <Typewriter
                  words={t("hero.roles")}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </div>

            <p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              {t("hero.bio")}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl flex items-center gap-2 group transition-all shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_30px_rgba(0,242,254,0.5)] border border-white/10"
              >
                <Briefcase size={20} className="group-hover:rotate-12 transition-transform" />
                {t("hero.view_work")}
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="/resume.pdf"
                download
                className="px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 flex items-center gap-2 hover:bg-white/10 transition-all glass-card"
              >
                <FileText size={20} />
                {t("hero.download_resume")}
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Img / Professional Profile Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto aspect-[3/4] rounded-[3rem] overflow-hidden bg-[#0a0a0a] shadow-[0_0_40px_rgba(0,242,254,0.2)] p-2 glow-border group">
              <img
                src="/images/profile.jpg"
                alt="Professional Profile"
                className="w-full h-full object-cover object-top rounded-[2.5rem] grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/600x800?text=Profile+Photo";
                }}
              />
              
              {/* Overlay Badge for Recruiters */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-4/5 glass-card p-4 rounded-2xl border border-white/10 shadow-2xl flex items-center justify-between">
                <div>
                    <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest leading-none mb-1">Status</div>
                    <div className="text-sm font-bold text-white">Verified Developer</div>
                </div>
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></div>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-cyan-500 rounded-full blur-[80px] opacity-30 animate-pulse"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-60 h-60 bg-purple-600 rounded-full blur-[100px] opacity-20"></div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="animate-bounce text-slate-500 hover:text-white transition-colors cursor-pointer" size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
