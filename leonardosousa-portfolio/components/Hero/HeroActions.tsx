interface HeroActionsProps {
  projectsLabel: string;
  contactLabel: string;
}

export default function HeroActions({
  projectsLabel,
  contactLabel,
}: HeroActionsProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href="#portfolio"
        className="inline-flex min-h-12 items-center justify-center rounded-md bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-secondary)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-4"
      >
        {projectsLabel}
      </a>

      <a
        href="#contact"
        className="inline-flex min-h-12 items-center justify-center rounded-md border border-[var(--color-secondary)] bg-[var(--color-surface)] px-6 py-3 text-sm font-semibold text-white transition hover:border-[var(--color-primary)] hover:bg-[var(--color-surface-light)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-4"
      >
        {contactLabel}
      </a>
    </div>
  );
}
