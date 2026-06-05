"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Twitter, Mail, MapPin, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

/**
 * Contact Section with Form and Social Links
 */
import { useLanguage } from "../context/LanguageContext";

/**
 * Contact Section with Form and Social Links
 */
const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call for demo purposes
    // Integrate with EmailJS or Formspree here
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset status after a few seconds
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  const socials = [
    { icon: <Github size={22} />, href: "https://github.com/sheljin", label: "Github" },
    { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/sheljinsg/", label: "Linkedin" },
    { icon: <Mail size={22} />, href: "mailto:sheljinsg2003@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="section-padding bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Column: Info */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-cyan-400 font-bold tracking-widest text-sm mb-4 uppercase">
              {t("contact.heading")}
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
              {t("contact.subheading")[0]} <span className="text-gradient italic underline underline-offset-8 decoration-cyan-500/30 decoration-8 underline-offset-[-2px] decoration-solid">{t("contact.subheading")[1]}</span> <br />
              {t("contact.subheading")[2]}
            </h3>
            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-md">
                {t("contact.cta_text")}
            </p>

            <div className="flex items-center gap-4 py-4 px-6 glass-card border border-white/10 rounded-3xl w-fit mb-10 group hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(0,242,254,0.1)] transition-all">
              <div className="p-3 bg-white/5 border border-white/10 rounded-2xl shadow-sm text-cyan-400">
                <MapPin size={24} className="group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-widest leading-none mb-1">{t("contact.location")}</span>
                  <span className="text-lg font-bold text-slate-100 leading-none">Bengaluru, India 📍</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4, backgroundColor: "rgba(0,242,254,0.1)", color: "#00f2fe", borderColor: "rgba(0,242,254,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-white/5 text-slate-400 rounded-2xl border border-white/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,242,254,0.2)]"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-10 glass-card rounded-[2rem] border border-white/10 shadow-black/50"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-slate-400 uppercase tracking-widest italic ml-2">{t("contact.form.name")}</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-[#0a0a0a]/50 border border-white/10 rounded-2xl focus:outline-none focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all text-white placeholder-slate-600"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-slate-400 uppercase tracking-widest italic ml-2">{t("contact.form.email")}</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 bg-[#0a0a0a]/50 border border-white/10 rounded-2xl focus:outline-none focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all text-white placeholder-slate-600"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-slate-400 uppercase tracking-widest italic ml-2">{t("contact.form.message")}</label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="..."
                className="w-full px-6 py-4 bg-[#0a0a0a]/50 border border-white/10 rounded-2xl focus:outline-none focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all text-white placeholder-slate-600 resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <motion.button
              type="submit"
              disabled={status !== "idle"}
              whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
              whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
              className={`w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all ${
                status === "idle" 
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-[0_0_20px_rgba(0,242,254,0.4)]" 
                  : status === "loading"
                    ? "bg-white/5 text-slate-500 border border-white/10 cursor-not-allowed"
                    : status === "success"
                      ? "bg-emerald-500 text-white"
                      : "bg-rose-500 text-white"
              }`}
            >
              {status === "idle" && (
                <>
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  {t("contact.form.send")}
                </>
              )}
              {status === "loading" && (
                <>
                  <Loader2 size={24} className="animate-spin" />
                  {t("contact.form.sending")}
                </>
              )}
              {status === "success" && (
                <>
                  <CheckCircle size={24} />
                  {t("contact.form.sent")}
                </>
              )}
              {status === "error" && (
                <>
                  <AlertCircle size={24} />
                  {t("contact.form.error")}
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
