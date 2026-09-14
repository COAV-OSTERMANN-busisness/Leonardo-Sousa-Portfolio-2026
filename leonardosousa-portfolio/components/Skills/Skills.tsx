import { getMessages, type Locale } from "@/i18n";
import { skills } from "@/config";
import SkillsCategory from "./SkillsCategory";
import SkillsHeader from "./SkillsHeader";

interface SkillsProps {
  locale: Locale;
}

export default function Skills({ locale }: SkillsProps) {
  const messages = getMessages(locale);
  const skillsMessages = messages.skills;

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[var(--color-background)] py-24 sm:py-28"
      aria-labelledby="skills-title"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(27,101,166,0.08),transparent_35%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <SkillsHeader
          eyebrow={skillsMessages.eyebrow}
          title={skillsMessages.title}
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {skills.map((category) => (
            <SkillsCategory
              key={category.key}
              category={category}
              title={skillsMessages.categories[category.key]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}