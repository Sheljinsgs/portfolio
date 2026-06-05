"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code2, Layers, CheckCircle, Globe, Server } from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: <Briefcase className="text-blue-500" />, label: t("about.stats.experience"), value: "2+ Years" },
    { icon: <CheckCircle className="text-green-500" />, label: t("about.stats.projects"), value: "10+" },
    { icon: <Layers className="text-amber-500" />, label: t("about.stats.tech"), value: "MERN / Next.js" },
    { icon: <Globe className="text-indigo-500" />, label: t("about.stats.flutter"), value: "Android / iOS" },
    { icon: <Code2 className="text-purple-500" />, label: t("about.stats.ai"), value: "LLMs / NLP" },
    { icon: <Server className="text-emerald-500" />, label: t("about.stats.github"), value: "Clean Architecture" },
  ];

  return (
    <section id="about" className="section-padding bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Profile Image with subtle decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-cyan-500/20 rounded-3xl blur-2xl group-hover:bg-cyan-500/30 transition-all duration-300"></div>
          <div className="relative aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden bg-[#0a0a0a] shadow-[0_0_30px_rgba(0,242,254,0.15)] p-2 glow-border">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover object-top rounded-2xl grayscale transition-all duration-500 group-hover:grayscale-0"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/400x400?text=Sheljin";
              }}
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="space-y-8 text-center lg:text-start">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-cyan-400 font-bold tracking-widest text-sm mb-4 uppercase">
              {t("about.heading")}
            </h2>
            <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
              {t("about.subheading")[0]}<span className="text-gradient tracking-tight">{t("about.subheading")[1]}</span>{t("about.subheading")[2]} <br />
              {t("about.subheading")[3]}<span className="text-gradient italic">{t("about.subheading")[4]}</span>
            </h3>
            
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              {t("about.bio1")}
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-10">
              {t("about.bio2")}
            </p>

            {/* Mobility & Preferences */}
            <div className="flex flex-wrap gap-4 mb-4">
               <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-cyan-400 font-bold text-xs uppercase tracking-wider">
                  <span className="text-sm">🇮🇳</span> {t("about.nationality")}
               </div>
               <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-400 font-bold text-xs uppercase tracking-wider">
                  {t("about.passport")}
               </div>
            </div>
            <p className="text-sm text-slate-500 font-semibold uppercase tracking-widest leading-relaxed mt-2 mb-10 flex items-center gap-2">
               <Globe size={16} className="text-cyan-400 animate-pulse" />
               {t("about.gcc")} <span className="text-slate-300">(UAE, Saudi Arabia, Qatar, etc.)</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 rounded-2xl glass-card hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="mb-3 p-2 bg-white/5 inline-block rounded-xl shadow-sm border border-white/10 ring-1 ring-white/5 group-hover:bg-cyan-500/10 transition-colors">
                  {stat.icon}
                </div>
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
