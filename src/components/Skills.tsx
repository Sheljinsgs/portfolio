"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, Server, Database, Settings, Smartphone, BrainCircuit } from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t("skills.categories.frontend"),
      icon: <Layout className="text-blue-500" />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript (ES6+)"],
    },
    {
      title: t("skills.categories.mobile"),
      icon: <Smartphone className="text-indigo-500" />,
      skills: ["Flutter", "Dart", "Firebase", "State Management", "REST Integration", "Play / App Store"],
    },
    {
      title: t("skills.categories.backend"),
      icon: <Server className="text-emerald-500" />,
      skills: ["Node.js", "Express", "REST APIs", "GraphQL", "Socket.io", "Authentication (JWT/OAuth)"],
    },
    {
      title: t("skills.categories.database"),
      icon: <Database className="text-amber-500" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma ORM", "Mongoose"],
    },
    {
      title: t("skills.categories.tools"),
      icon: <Settings className="text-slate-500" />,
      skills: ["Git", "GitHub", "Docker", "AWS", "Postman", "Figma", "Vercel", "CI/CD Platforms"],
    },
    {
      title: t("skills.categories.ai"),
      icon: <BrainCircuit className="text-pink-500" />,
      skills: ["Python", "TensorFlow", "PyTorch", "LangChain", "OpenAI API", "Pandas", "Scikit-Learn", "NLP"],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-cyan-400 font-bold tracking-widest text-sm mb-4 uppercase"
          >
            {t("skills.heading")}
          </motion.h2>
          <h3 className="text-4xl font-bold text-white leading-tight">
            {t("skills.subheading")[0]}<br />
            {t("skills.subheading")[1]} <span className="text-gradient italic underline decoration-cyan-500/30 decoration-8 underline-offset-[-2px] decoration-solid">{t("skills.subheading")[2]}</span>{t("skills.subheading")[3]}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              className="glass-card hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(0,242,254,0.1)] p-8 rounded-3xl transition-all duration-300 group"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                    {category.icon}
                </div>
                <h4 className="font-bold text-slate-100 text-lg leading-tight">
                  {category.title}
                </h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(0,242,254,0.1)", color: "#00f2fe", borderColor: "rgba(0,242,254,0.3)" }}
                    className="px-3 py-1.5 bg-white/5 text-slate-400 border border-white/10 rounded-lg text-xs font-semibold tracking-wide"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
