import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sheljin S G | Full Stack Developer - Portfolio",
  description: "Senior Full Stack Developer specializing in Next.js, React, and Node.js. Open to working in GCC countries (UAE, Saudi Arabia). Based in Bengaluru, India.",
  keywords: ["Full Stack Developer", "Next.js", "React", "Node.js", "GCC Jobs", "Software Engineer Portfolio"],
  authors: [{ name: "Sheljin S G" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

import { LanguageProvider } from "../context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth dark`}>
      <body className="antialiased text-slate-200 bg-[#050505] selection:bg-cyan-500/30 selection:text-cyan-200">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
