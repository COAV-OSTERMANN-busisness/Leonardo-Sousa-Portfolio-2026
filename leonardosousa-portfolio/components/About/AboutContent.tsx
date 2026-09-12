import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import { siteConfig } from "@/config";
import type { AboutMessages } from "@/types/about";

interface AboutContentProps {
  messages: AboutMessages;
}

export default function AboutContent({
  messages,
}: AboutContentProps) {
  return (
    <div
      className="flex flex-col"
      data-aos="fade-right"
    >
      <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
        {messages.eyebrow}
      </p>

      <h2
        id="about-title"
        className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-[var(--color-text-primary)]"
      >
        {messages.title}
      </h2>

      <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--color-text-secondary)]">
        {messages.description}
      </p>

      <div className="mt-8 border-l-2 border-[var(--color-primary)] pl-5">
        <p className="text-base font-medium text-[var(--color-text-primary)]">
          {messages.specialization}
        </p>
      </div>

      <a
        href={siteConfig.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex w-fit items-center gap-3 rounded-lg border border-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-[var(--color-text-primary)] transition-colors duration-200 hover:bg-[var(--color-primary)]"
      >
        <FontAwesomeIcon
          icon={faLinkedinIn}
          className="h-4 w-4"
          aria-hidden="true"
        />

        {messages.linkedin}
      </a>
    </div>
  );
}