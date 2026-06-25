"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Award, Calendar, Code, X } from "lucide-react";

const certificates = [
  {
    title: "HCIA-Big Data V3.5 Course",
    issuer: "Huawei ICT Academy",
    date: "Nov 2025",
    image: "/certificates/HCIA-Big Data V3.5 Course.png",
    icon: <Award size={18} />,
    skills: ["Big Data", "HCIA", "Data Analytics"],
  },
  {
    title: "Cloud Advanced: Architecture and Technologies",
    issuer: "Huawei ICT Academy",
    date: "Nov 2025",
    image: "/certificates/Cloud Advanced_ Architecture and Technologies.png",
    icon: <Code size={18} />,
    skills: ["Cloud Computing", "Architecture", "Infrastructure"],
  },
  {
    title: "Overview of AI",
    issuer: "Huawei ICT Academy",
    date: "Jun 2025",
    image: "/certificates/Overview of AI.png",
    icon: <Award size={18} />,
    skills: ["Artificial Intelligence", "AI Concepts", "Machine Learning"],
  },
  {
    title: "Data Management and Analytics",
    issuer: "Huawei ICT Academy",
    date: "Jun 2025",
    image: "/certificates/data-management.png",
    icon: <Award size={18} />,
    skills: ["Data Management", "Data Analytics", "Data Mining"],
  },
  {
    title: "Computer Network",
    issuer: "Huawei ICT Academy",
    date: "Jun 2025",
    image: "/certificates/Computer Network.png",
    icon: <Award size={18} />,
    skills: ["Computer Network", "Networking", "ICT"],
  },
  {
    title: "Development and Basic Concepts of Cloud Computing",
    issuer: "Huawei ICT Academy",
    date: "Nov 2025",
    image: "/certificates/Development and Basic Concepts of Cloud Computing.png",
    icon: <Code size={18} />,
    skills: ["Konfigurasi Jaringan Virtual"],
  },
];

export default function Certificates() {
  // State untuk menyimpan gambar sertifikat yang sedang dibuka
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="certificates" className="py-24 max-w-[1100px] mx-auto px-[5%] z-10 relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-accent font-mono text-sm tracking-[0.25em] uppercase mb-3">
            04 / CERTIFICATES
          </p>
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
            Certificates & <span className="text-accent">Experience</span>
          </h2>
          <div
            className="w-20 h-1 mt-6 rounded-full"
            style={{ background: "linear-gradient(90deg, var(--accent) 0%, transparent 100%)" }}
          />
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(cert.image)} // Memicu modal saat kartu diklik
              className="group overflow-hidden rounded-2xl flex flex-col h-full border bg-bg2/40 border-border card-hover cursor-pointer"
            >
              {/* Certificate Image Preview */}
              <div className="relative w-full h-48 overflow-hidden border-b border-border bg-bg">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out opacity-80 group-hover:opacity-100"
                />

                {/* Hover overlay hint (Muncul saat di-hover) */}
                <div className="absolute inset-0 bg-bg/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="text-xs font-semibold text-accent bg-bg/80 border border-border px-3 py-1.5 rounded-full shadow-lg">
                    Click to View
                  </span>
                </div>

                {/* Floating Badge Icon over Image */}
                <div className="absolute top-3 left-3 p-2 rounded-lg bg-bg/80 backdrop-blur-md text-accent border border-border z-10">
                  {cert.icon}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-1">
                {/* Title & Issuer */}
                <div className="flex-1">
                  <h3 className="font-poppins text-base font-bold text-text-primary group-hover:text-accent transition-colors mb-1.5 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-medium text-text-secondary mb-4">
                    {cert.issuer}
                  </p>
                </div>

                {/* Date & Tags */}
                <div className="mt-auto pt-4 border-t border-border">
                  <div className="flex items-center gap-1.5 text-[11px] text-text-secondary mb-3">
                    <Calendar size={12} />
                    <span>{cert.date}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono tracking-wide text-accent/80 bg-accent/5 px-2 py-0.5 rounded border border-accent/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* LIGHTBOX MODAL ANIMATION */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)} // Tutup modal jika area luar diklik
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg/90 backdrop-blur-md cursor-zoom-out"
          >
            {/* Tombol Close */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-bg2 text-text-primary border border-border hover:text-accent transition-colors cursor-pointer"
            >
              <X size={24} />
            </button>

            {/* Kontainer Gambar Full */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full h-[75vh] md:h-[85vh]"
              onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup jika gambar yang diklik
            >
              <Image
                src={activeImage}
                alt="Certificate Full View"
                fill
                priority
                className="object-contain drop-shadow-[0_0_50px_rgba(56,189,248,0.15)] rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}