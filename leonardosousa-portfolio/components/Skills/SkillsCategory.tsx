import type { SkillCategory as SkillCategoryType } from "@/types/skills";
import SkillItem from "./SkillItem";

interface SkillsCategoryProps {
  category: SkillCategoryType;
  title: string;
}

export default function SkillsCategory({
  category,
  title,
}: SkillsCategoryProps) {
  return (
    <article
      className="rounded-2xl border border-white/10 bg-[var(--color-surface)] p-5 sm:p-6"
      data-aos="fade-up"
    >
      <header className="mb-5 flex items-center gap-3">
        <span className="h-8 w-1 rounded-full bg-[var(--color-primary)]" />

        <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
          {title}
        </h3>
      </header>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {category.skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </ul>
    </article>
  );
}
