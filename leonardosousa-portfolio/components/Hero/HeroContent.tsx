import type { ReactNode } from "react";

interface HeroContentProps {
  eyebrow: string;
  title: string;
  dataAos?: string;
  children: ReactNode;
}

export default function HeroContent({
  eyebrow,
  title,
  dataAos,
  children,
}: HeroContentProps) {
  return (
    <div className="flex-1" data-aos={dataAos}>
      <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-accent)] sm:text-sm">
        {eyebrow}
      </p>

      <h1
        id="hero-title"
        className="max-w-3xl text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.98] tracking-tight text-[var(--color-text-primary)]"
      >
        Leonardo Sousa
      </h1>

      <p className="mt-6 max-w-2xl text-xl font-medium leading-relaxed text-[var(--color-text-secondary)] sm:text-2xl">
        {title}
      </p>

      <div className="mt-8">{children}</div>
    </div>
  );
}
