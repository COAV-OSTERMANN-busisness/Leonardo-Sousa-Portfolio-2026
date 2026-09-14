import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type SkillIcon = IconDefinition | string;

export type SkillCategoryKey =
  | "frontend"
  | "backend"
  | "mobile"
  | "database"
  | "cloud"
  | "devops"
  | "testing"
  | "tools"
  | "design"
  | "cms"
  | "documentation"
  | "operatingSystems";

export interface Skill {
  name: string;
  icon: SkillIcon;
}

export interface SkillCategory {
  key: SkillCategoryKey;
  titleKey: SkillCategoryKey;
  skills: Skill[];
}