import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";

import type { AboutHighlightMessage } from "@/types/about";

interface AboutHighlightProps {
  highlight: AboutHighlightMessage;
}

export default function AboutHighlight({
  highlight,
}: AboutHighlightProps) {
  return (
    <article className="group rounded-xl border border-white/10 bg-[var(--color-surface)] p-5 transition-colors duration-200 hover:border-[var(--color-primary)] hover:bg-[var(--color-surface-light)]">
      <div
        className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-accent)]"
        aria-hidden="true"
      >
        <FontAwesomeIcon
          icon={faArrowTrendUp}
          className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5"
        />
      </div>

      <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-text-primary)]">
        {highlight.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
        {highlight.description}
      </p>
    </article>
  );
}