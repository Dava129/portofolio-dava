"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";
import { projects } from "@/data";

type LinkVariant = "primary" | "outline";

interface ProjectLink {
  label: string;
  href: string;
  variant: LinkVariant;
}

function LinkButton({ label, href, variant }: ProjectLink) {
  const baseClass =
    "inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 no-underline";
  const primary =
    "bg-accent text-bg-primary hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(56,189,248,0.3)] hover:bg-accent-light";
  const outline =
    "text-accent border hover:-translate-y-0.5 hover:bg-accent/10";

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} ${variant === "primary" ? primary : outline}`}
        style={variant === "outline" ? { borderColor: "rgba(56,189,248,0.3)" } : undefined}
      >
        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
        {label}
      </a>
    );
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <FadeIn delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl border overflow-hidden relative group"
        style={{
          background: project.featured
            ? "linear-gradient(135deg, var(--bg2), rgba(56,189,248,0.03))"
            : "var(--bg2)",
          borderColor: project.featured
            ? "rgba(56,189,248,0.25)"
            : "rgba(255,255,255,0.07)",
        }}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          style={{ background: "linear-gradient(90deg, #38BDF8, #818CF8)" }}
        />

        {/* Visual side */}
        <div
          className={`flex items-center justify-center min-h-[220px] md:min-h-[260px] relative ${isEven ? "md:order-first" : "md:order-last"}`}
          style={{
            background: project.featured ? "rgba(56,189,248,0.05)" : "rgba(255,255,255,0.02)",
            borderRight: isEven ? "1px solid rgba(255,255,255,0.06)" : "none",
            borderLeft: !isEven ? "1px solid rgba(255,255,255,0.06)" : "none",
          }}
        >
          <span
            className="absolute font-poppins font-extrabold select-none pointer-events-none"
            style={{ fontSize: "clamp(80px, 12vw, 140px)", color: "rgba(56,189,248,0.06)", lineHeight: 1 }}
          >
            {project.id}
          </span>

          <div className="relative z-10 flex flex-col items-center gap-3 p-6">
            {project.featured && (
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-accent border mb-1"
                style={{ background: "rgba(56,189,248,0.08)", borderColor: "rgba(56,189,248,0.25)" }}
              >
                ⭐ Featured Project
              </div>
            )}
            <div className="flex flex-wrap justify-center gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded-md font-mono text-xs text-text-secondary border"
                  style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.1)" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content side */}
        <div className={`flex flex-col p-7 ${isEven ? "md:order-last" : "md:order-first"}`}>
          <span className="font-mono text-xs text-text-muted block mb-3">{project.id}</span>
          <h3 className="font-poppins text-xl font-bold text-text-primary mb-3">{project.title}</h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">{project.description}</p>
          <ul className="space-y-1.5 mb-6">
            {project.features.map((f) => (
              <li key={f} className="text-text-secondary text-xs flex items-center gap-2">
                <span className="text-accent">▸</span> {f}
              </li>
            ))}
          </ul>
          <div className="flex gap-2.5 flex-wrap mt-auto">
            {project.links.map((link) => (
              <LinkButton key={link.label} {...link} />
            ))}
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24 px-[5%]">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeader label="03 / projects" title="Featured" accent="Projects" />
        <div className="flex flex-col gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}