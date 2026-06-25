"use client";

import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";
import { skills } from "@/data";

function SkillTag({ icon, name }: { icon: string; name: string }) {
  return (
    <div
      className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-text-primary border cursor-default transition-all duration-200 hover:-translate-y-0.5 hover:text-accent group"
      style={{
        background: "rgba(56,189,248,0.04)",
        borderColor: "rgba(56,189,248,0.14)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "rgba(56,189,248,0.1)";
        el.style.borderColor = "#38BDF8";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "rgba(56,189,248,0.04)";
        el.style.borderColor = "rgba(56,189,248,0.14)";
      }}
    >
      <span className="text-base">{icon}</span>
      {name}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-24 px-[5%]">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeader label="02 / skills" title="Tech" accent="Stack" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Programming Languages */}
          <FadeIn>
            <div
              className="rounded-2xl p-8 border h-full"
              style={{
                background: "var(--bg2)",
                borderColor: "rgba(255,255,255,0.07)",
              }}
            >
              <p className="font-mono text-xs tracking-[2px] uppercase text-accent mb-6 pb-3 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                Programming Languages
              </p>
              <div className="flex flex-wrap gap-3">
                {skills.languages.map((s) => (
                  <SkillTag key={s.name} {...s} />
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Frameworks & Tools */}
          <FadeIn delay={0.1}>
            <div
              className="rounded-2xl p-8 border h-full"
              style={{
                background: "var(--bg2)",
                borderColor: "rgba(255,255,255,0.07)",
              }}
            >
              <p className="font-mono text-xs tracking-[2px] uppercase text-accent mb-6 pb-3 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                Frameworks &amp; Tools
              </p>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((s) => (
                  <SkillTag key={s.name} {...s} />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
