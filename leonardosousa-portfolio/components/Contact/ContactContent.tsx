import type { ReactNode } from "react";

interface ContactContentProps {
  description: string;
  children: ReactNode;
}

export default function ContactContent({
  description,
  children,
}: ContactContentProps) {
  return (
    <div data-aos="fade-right">
      <p className="max-w-xl text-base leading-7 text-[var(--color-text-secondary)]">
        {description}
      </p>

      <div className="mt-8">{children}</div>
    </div>
  );
}
