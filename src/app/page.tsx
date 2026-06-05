"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import SplashScreen from "@/components/SplashScreen";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import ParticleBackground from "@/components/ParticleBackground";
import { useLanguage } from "@/context/LanguageContext";

const Page = () => {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen">
      <ParticleBackground />
      <ScrollProgress />
      <SplashScreen />
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      
      {/* Simple Footer */}
      <footer className="py-10 bg-[#0a0a0a] border-t border-white/10 text-center relative z-10">
        <p className="text-slate-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} Sheljin S G. {t("footer.rights")}
        </p>
      </footer>
    </main>
  );
};

export default Page;
