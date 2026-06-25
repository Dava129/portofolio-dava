"use client";

import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

const cards = [
  { icon: "📍", label: "Location", value: "Indonesia" },
  { icon: "🎓", label: "Major", value: "Informatics Eng." },
  { icon: "💼", label: "Status", value: "Open to Internship" },
  { icon: "📚", label: "Learning", value: "AI & System Design" },
];

const stats = [
  { number: "4+", label: "Projects Built" },
  { number: "3+", label: "Tech Stacks" },
  { number: "2025", label: "Expected Graduate" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 py-24 px-[5%]"
      style={{
        background:
          "linear-gradient(180deg, transparent, rgba(30,41,59,0.3), transparent)",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <SectionHeader label="01 / about" title="About" accent="Me" />

            <FadeIn delay={0.15}>
              <p className="text-text-secondary text-base leading-relaxed mb-4">
                Saya adalah mahasiswa Teknik Informatika yang memiliki minat
                besar pada{" "}
                <strong className="text-text-primary font-semibold">
                  Mobile Development
                </strong>
                ,{" "}
                <strong className="text-text-primary font-semibold">
                  Artificial Intelligence
                </strong>
                , dan pengembangan sistem modern.
              </p>
              <p className="text-text-secondary text-base leading-relaxed mb-8">
                Saya senang membangun aplikasi yang dapat menyelesaikan masalah
                nyata dengan memanfaatkan teknologi seperti{" "}
                <span className="text-accent font-semibold">Flutter</span>,{" "}
                <span className="text-accent font-semibold">Python</span>, dan
                Database Management System.
              </p>
            </FadeIn>

            <div className="grid grid-cols-2 gap-3">
              {cards.map((card, i) => (
                <FadeIn key={card.label} delay={0.2 + i * 0.05}>
                  <div
                    className="rounded-xl p-4 border transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(56,189,248,0.08)]"
                    style={{
                      background: "var(--bg2)",
                      borderColor: "rgba(255,255,255,0.07)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        "rgba(56,189,248,0.25)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        "rgba(255,255,255,0.07)";
                    }}
                  >
                    <div className="text-2xl mb-2">{card.icon}</div>
                    <div className="text-xs font-medium text-text-secondary mb-1">
                      {card.label}
                    </div>
                    <div className="text-sm text-accent font-mono">
                      {card.value}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right: info cards */}
          <div className="flex flex-col gap-4">
            {/* Bio card */}
            <FadeIn direction="right" delay={0.1}>
              <div
                className="rounded-2xl p-6 border"
                style={{
                  background: "var(--bg2)",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                    style={{ background: "rgba(56,189,248,0.1)" }}
                  >
                    👨‍💻
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text-primary">
                      Dava Adi Prasetya
                    </div>
                    <div className="text-xs text-text-secondary">
                      Informatics Engineering Student
                    </div>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Passionate developer yang fokus membangun solusi digital
                  inovatif menggunakan teknologi mobile dan AI.
                </p>
              </div>
            </FadeIn>

            {/* Stats card */}
            <FadeIn direction="right" delay={0.2}>
              <div
                className="rounded-2xl p-6 border"
                style={{
                  background: "var(--bg2)",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
              >
                <div className="text-xs font-mono tracking-widest uppercase text-text-muted mb-4">
                  Stats
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="text-2xl font-bold font-poppins text-accent mb-1">
                        {s.number}
                      </div>
                      <div className="text-xs text-text-secondary leading-tight">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Currently card */}
            <FadeIn direction="right" delay={0.3}>
              <div
                className="rounded-2xl p-6 border"
                style={{
                  background: "var(--bg2)",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
              >
                <div className="text-xs font-mono tracking-widest uppercase text-text-muted mb-3">
                  Currently
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    { icon: "🎯", text: "Belajar AI & System Design" },
                    { icon: "📱", text: "Membangun aplikasi Flutter" },
                    { icon: "🔍", text: "Mencari peluang internship" },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className="flex items-center gap-2 text-sm text-text-secondary"
                    >
                      <span>{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}