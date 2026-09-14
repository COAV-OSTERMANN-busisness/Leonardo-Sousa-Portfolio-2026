import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface PortfolioCardProps {
  year: string;
  title: string;
  actionLabel: string;
  onOpen: () => void;
}

export default function PortfolioCard({
  year,
  title,
  actionLabel,
  onOpen,
}: PortfolioCardProps) {
  return (
    <article className="rounded-xl border border-white/10 bg-[var(--color-surface)] p-6 transition-colors duration-200 hover:border-[var(--color-primary)] hover:bg-[var(--color-surface-light)]">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]">
        {year}
      </p>

      <h3 className="mt-4 text-xl font-semibold text-[var(--color-text-primary)]">
        {title}
      </h3>

      <button
        type="button"
        onClick={onOpen}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] transition-colors hover:text-[var(--color-text-primary)]"
      >
        {actionLabel}

        <FontAwesomeIcon
          icon={faArrowRight}
          className="h-3.5 w-3.5"
          aria-hidden="true"
        />
      </button>
    </article>
  );
}
