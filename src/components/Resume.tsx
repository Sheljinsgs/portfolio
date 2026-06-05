"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, FileText, CheckCircle2, Award, BookOpen } from "lucide-react";

/**
 * Resume Section with Experience and Education overview
 */
import { useLanguage } from "../context/LanguageContext";

/**
 * Resume Section with Experience and Education overview
 */
const Resume = () => {
  const { t } = useLanguage();

  return (
    <section id="resume" className="section-padding bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column: Education/Exp */}
        <div className="space-y-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-2xl shadow-sm border border-cyan-500/20">
                <Award size={24} />
              </div>
              <h3 className="text-3xl font-bold text-white tracking-tight italic">
                {t("resume.experience")}
              </h3>
            </div>

            <div className="space-y-10 border-l border-cyan-500/30 ml-6 pl-10 relative">
              {t("resume.exp_list").map((item: any, idx: number) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[54px] top-1 w-6 h-6 bg-[#0a0a0a] border-4 border-cyan-500 shadow-[0_0_10px_rgba(0,242,254,0.5)] rounded-full z-10 group-hover:scale-125 transition-transform"></div>
                  <div className="glass-card p-8 rounded-3xl border border-white/5 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(0,242,254,0.15)] transition-all">
                    <span className="text-sm font-bold text-cyan-400 italic mb-2 block tracking-widest uppercase">
                      {item.period}
                    </span>
                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{item.role}</h4>
                    <p className="text-slate-400 font-medium mb-4">{item.company}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Download & Preview Callout */}
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-10 rounded-[2rem] border border-white/10 shadow-black/50 flex flex-col items-center text-center relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 [mask-image:radial-gradient(circle_at_center,white,transparent)] -z-10 rounded-[2rem]"></div>
            
            <div className="mb-8 p-6 bg-white/5 rounded-full border border-white/10">
                <FileText size={48} className="text-cyan-400 italic" />
            </div>

            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
              {t("resume.deep_dive")[0]} <span className="text-gradient italic">{t("resume.deep_dive")[1]}</span>
            </h3>
            <p className="text-slate-400 mb-10 max-w-sm mx-auto leading-relaxed">
              {t("resume.cta_text")}
            </p>

            <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download
                className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] border border-white/10"
            >
                <Download size={22} className="animate-bounce" />
                {t("resume.download_cv")}
            </motion.a>

            <div className="mt-12 w-full grid grid-cols-2 gap-4">
               {["Clean Code", "Optimized", "Modern UI", "Scalable"].map((tag) => (
                   <div key={tag} className="flex items-center gap-2 text-slate-400 font-semibold text-xs uppercase tracking-widest">
                       <CheckCircle2 size={14} className="text-cyan-400" />
                       {tag}
                   </div>
               ))}
            </div>
          </motion.div>

          {/* Education Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-10 rounded-[2rem] border border-white/10 text-white relative overflow-hidden group hover:border-cyan-500/30 transition-all"
          >
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                <BookOpen size={120} />
            </div>
            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 italic">
                    <BookOpen size={24} className="text-cyan-400" />
                    {t("resume.education")}
                </h3>
                <h4 className="text-xl font-bold mb-1">{t("resume.edu.title")}</h4>
                <p className="text-slate-300 font-medium mb-4">{t("resume.edu.school")}</p>
                <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                    {t("resume.edu.desc")}
                </p>
            </div>
          </motion.div>

          {/* Certifications Highlight */}
          {Array.isArray(t("resume.certifications.list")) && t("resume.certifications.list").length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-10 rounded-[2rem] border border-white/10 text-white relative overflow-hidden group hover:border-cyan-500/30 transition-all"
            >
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                  <Award size={120} />
              </div>
              <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 italic">
                      <Award size={24} className="text-cyan-400" />
                      {t("resume.certifications.title") || "Certifications"}
                  </h3>
                  <ul className="space-y-4">
                    {t("resume.certifications.list").map((cert: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 shrink-0 animate-pulse shadow-[0_0_8px_#00f2fe]" />
                        <span className="text-slate-300 text-sm font-medium leading-relaxed">{cert}</span>
                      </li>
                    ))}
                  </ul>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;
