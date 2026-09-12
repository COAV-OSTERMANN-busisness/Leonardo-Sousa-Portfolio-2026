interface HeroTagsProps {
  tags: readonly string[];
}

export default function HeroTags({ tags }: HeroTagsProps) {
  return (
    <div className="absolute bottom-6 left-0 w-full px-6 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-wrap gap-2 sm:gap-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[var(--color-secondary)] bg-[var(--color-surface)]/80 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-wider text-[var(--color-accent)] backdrop-blur-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}