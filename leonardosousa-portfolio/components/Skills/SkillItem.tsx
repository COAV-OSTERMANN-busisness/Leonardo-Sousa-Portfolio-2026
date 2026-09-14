import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { Skill } from "@/types/skills";

interface SkillItemProps {
  skill: Skill;
}

export default function SkillItem({ skill }: SkillItemProps) {
  return (
    <li className="flex items-center gap-3 rounded-lg border border-white/10 bg-[var(--color-surface)] px-4 py-3 transition-colors duration-200 hover:border-[var(--color-primary)] hover:bg-[var(--color-surface-light)]">
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center text-[var(--color-accent)]"
        aria-hidden="true"
      >
        {typeof skill.icon === "string" ? (
          <Image
            src={skill.icon}
            alt=""
            width={24}
            height={24}
            className="h-6 w-6 object-contain"
          />
        ) : (
          <FontAwesomeIcon
            icon={skill.icon}
            className="h-6 w-6"
          />
        )}
      </span>

      <span className="text-sm font-medium text-[var(--color-text-primary)]">
        {skill.name}
      </span>
    </li>
  );
}