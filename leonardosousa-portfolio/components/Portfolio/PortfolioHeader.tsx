interface PortfolioHeaderProps {
  eyebrow: string;
  title: string;
}

export default function PortfolioHeader({
  eyebrow,
  title,
}: PortfolioHeaderProps) {
  return (
    <header className="mx-auto mb-16 max-w-3xl text-center" data-aos="fade-up">
      <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
        {eyebrow}
      </p>

      <h2
        id="portfolio-title"
        className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-[var(--color-text-primary)]"
      >
        {title}
      </h2>
    </header>
  );
}
