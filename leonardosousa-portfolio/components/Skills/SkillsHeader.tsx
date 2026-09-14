interface SkillsHeaderProps {
  eyebrow: string;
  title: string;
}

export default function SkillsHeader({
  eyebrow,
  title,
}: SkillsHeaderProps) {
  return (
    <header
      className="mx-auto mb-14 max-w-3xl text-center"
      data-aos="fade-up"
    >
      <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
        {eyebrow}
      </p>

      <h2
        id="skills-title"
        className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-[var(--color-text-primary)]"
      >
        {title}
      </h2>
    </header>
  );
}