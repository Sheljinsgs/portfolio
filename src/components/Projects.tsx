"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

const projectImages: Record<number, string> = {
  1: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
  2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
  3: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
  4: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop"
};

const Projects = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  const projectList = Array.isArray(t("projects.list")) ? t("projects.list") : [];
  
  const categories = ["all", "frontend", "fullstack", "mobile", "backend"];

  const filteredProjects = activeCategory === "all"
    ? projectList
    : projectList.filter((project: any) => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-cyan-400 font-bold tracking-widest text-sm mb-4 uppercase"
            >
              {t("projects.heading")}
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold text-white"
            >
              {t("projects.subheading")[0]}<span className="text-gradient italic">{t("projects.subheading")[1]}</span>
            </motion.h3>
          </div>

          {/* Dynamic Filter Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 relative border cursor-pointer ${
                    isActive
                      ? "border-cyan-500/50 text-cyan-400 shadow-[0_0_15px_rgba(0,242,254,0.15)] bg-cyan-500/5"
                      : "border-white/10 text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/5"
                  }`}
                >
                  {t(`projects.categories.${cat}`)}
                  {isActive && (
                    <motion.span
                      layoutId="activeCategoryBorder"
                      className="absolute -inset-px rounded-full border border-cyan-400 pointer-events-none"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: any) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(0,242,254,0.15)] transition-all duration-500 flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={projectImages[project.id] || "https://via.placeholder.com/600x400?text=Project"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/600x400?text=Project";
                    }}
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#0a0a0a]/80 backdrop-blur-md text-cyan-400 border border-white/10 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                      {t(`projects.categories.${project.category}`)}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t: string) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-cyan-500/10 text-cyan-400 rounded-lg text-xs font-bold border border-cyan-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all cursor-pointer"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.repo !== "#" && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/5 text-white border border-white/10 rounded-xl hover:bg-white/10 transition-all shadow-lg shadow-black/20 cursor-pointer"
                        title="Source Code"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
