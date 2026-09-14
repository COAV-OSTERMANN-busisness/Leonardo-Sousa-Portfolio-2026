interface LegalSectionProps {
    title: string;
    content: string;
  }
  
  export default function LegalSection({
    title,
    content,
  }: LegalSectionProps) {
    return (
      <section>
        <h3 className="mb-2 text-sm font-semibold text-[var(--color-text-primary)]">
          {title}
        </h3>
  
        <p className="whitespace-pre-line text-sm leading-6 text-[var(--color-text-secondary)]">
          {content}
        </p>
      </section>
    );
  }