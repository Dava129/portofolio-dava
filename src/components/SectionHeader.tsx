import FadeIn from "./FadeIn";

interface SectionHeaderProps {
  label: string;
  title: string;
  accent: string;
  center?: boolean;
}

export default function SectionHeader({
  label,
  title,
  accent,
  center = false,
}: SectionHeaderProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <FadeIn>
        <span className="font-mono text-xs tracking-[3px] uppercase text-accent block mb-3">
          {label}
        </span>
      </FadeIn>
      <FadeIn delay={0.05}>
        <h2 className="font-poppins text-4xl md:text-5xl font-bold text-text-primary mb-4">
          {title} <span className="text-accent">{accent}</span>
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div
          className={`h-[3px] w-12 rounded-full mb-12 ${
            center ? "mx-auto" : ""
          }`}
          style={{
            background: "linear-gradient(90deg, #38BDF8, transparent)",
          }}
        />
      </FadeIn>
    </div>
  );
}
