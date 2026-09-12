import { getMessages, type Locale } from "@/i18n";

import AboutContent from "./AboutContent";
import AboutHighlights from "./AboutHighlights";

interface AboutProps {
  locale: Locale;
}

export default function About({ locale }: AboutProps) {
  const messages = getMessages(locale);
  const aboutMessages = messages.about;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[var(--color-background)] py-24 sm:py-28"
      aria-labelledby="about-title"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(27,101,166,0.08),transparent_35%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20 lg:px-12">
        <AboutContent messages={aboutMessages} />

        <AboutHighlights highlights={aboutMessages.highlights} />
      </div>
    </section>
  );
}