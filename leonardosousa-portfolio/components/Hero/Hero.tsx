import { getMessages } from "@/i18n";
import HeroActions from "./HeroActions";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroTags from "./HeroTags";

type HeroMessages = ReturnType<typeof getMessages>;

interface HeroProps {
  messages: HeroMessages;
}

export default function Hero({ messages }: HeroProps) {
  const { hero } = messages;

  const tags = Object.values(hero.tags);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[var(--color-background)]"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(27,101,166,0.18),transparent_38%)]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-28 sm:px-8 lg:flex-row lg:items-center lg:gap-16 lg:px-12">
        <HeroContent
          eyebrow={hero.eyebrow}
          title={hero.title}
          dataAos="fade-right"
        >
          <HeroActions
            projectsLabel={hero.actions.projects}
            contactLabel={hero.actions.contact}
          />
        </HeroContent>

        <HeroImage
          alt={hero.imageAlt}
          dataAos="fade-left"
        />
      </div>

      <HeroTags tags={tags} />
    </section>
  );
}