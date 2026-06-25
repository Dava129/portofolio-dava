"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const roles = [
  "Informatics Engineering Student",
  "Mobile Developer",
  "AI Enthusiast",
  "Flutter Developer",
];

function TypingText() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[textIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setCharIndex((c) => c + 1);
          if (charIndex === current.length) {
            setTimeout(() => setDeleting(true), 2000);
          }
        } else {
          setCharIndex((c) => c - 1);
          if (charIndex === 0) {
            setDeleting(false);
            setTextIndex((i) => (i + 1) % roles.length);
          }
        }
      },
      deleting ? 60 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex]);

  return (
    <span className="text-accent font-poppins font-semibold text-xl md:text-2xl">
      {roles[textIndex].slice(0, charIndex)}
      <span className="inline-block w-0.5 h-6 bg-accent ml-0.5 align-text-bottom animate-blink" />
    </span>
  );
}

function Avatar() {
  return (
    <div className="relative flex items-center justify-center w-[280px] h-[280px] md:w-[340px] md:h-[340px] mx-auto">
      {/* Outer dashed ring */}
      <div
        className="absolute inset-[-50px] rounded-full border border-dashed animate-spin-reverse"
        style={{ borderColor: "rgba(56,189,248,0.15)" }}
      />
      {/* Inner solid ring with dot */}
      <div
        className="absolute inset-[-20px] rounded-full border animate-spin-slow"
        style={{ borderColor: "rgba(56,189,248,0.3)" }}
      >
        <span
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent"
          style={{ boxShadow: "0 0 10px #38BDF8" }}
        />
      </div>
      
      {/* Avatar Image (MENGGANTIKAN SVG SEBELUMNYA) */}
      <div
        className="relative w-full h-full rounded-full flex items-center justify-center border-2 overflow-hidden bg-[var(--bg2)]"
        style={{
          borderColor: "rgba(56,189,248,0.3)",
        }}
      >
        <Image
          src="/foto.png"
          alt="Dava Adi Avatar"
          fill
          priority
          className="object-cover scale-105" 
        />
      </div>

      {/* Floating badges */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10px] left-[-10px] flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-text-primary border"
        style={{ background: "var(--bg2)", borderColor: "rgba(56,189,248,0.2)" }}
      >
        <span>📱</span> Mobile Dev
      </motion.div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[10px] right-[-10px] flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-text-primary border"
        style={{ background: "var(--bg2)", borderColor: "rgba(56,189,248,0.2)" }}
      >
        <span>🤖</span> AI Enthusiast
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-[70px] px-[5%] z-10"
    >
      <div className="max-w-[1100px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium text-accent border mb-6"
              style={{ background: "rgba(56,189,248,0.08)", borderColor: "rgba(56,189,248,0.2)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
              Available for Internship
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-poppins text-5xl md:text-7xl font-extrabold text-text-primary leading-[1.05] tracking-tight mb-3"
            >
              Dava Adi<br />Prasetya
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="min-h-8 mb-6"
            >
              <TypingText />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-text-secondary text-base leading-relaxed max-w-[500px] mb-10"
            >
              Mahasiswa Teknik Informatika yang fokus pada pengembangan aplikasi
              mobile, machine learning, dan software engineering untuk membangun
              solusi digital yang modern dan bermanfaat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4 flex-wrap"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold bg-accent text-bg-primary transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(56,189,248,0.3)] hover:bg-accent-light"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
                View Projects
              </a>
              <a
                href="/CV_Bayu_Rahmat_Nurhidayanto.pdf"
                download
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-accent border transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/10"
                style={{ borderColor: "rgba(56,189,248,0.3)" }}
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" />
                </svg>
                Download CV
              </a>
            </motion.div>
          </div>

          {/* Right: avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center order-first md:order-last"
          >
            <Avatar />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted text-xs cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, #38BDF8, transparent)" }} />
        <span>scroll</span>
      </motion.div>
    </section>
  );
}