import { getMessages, type Locale } from "@/i18n";

interface ResumeProps {
  locale: Locale;
}

export default function Resume({ locale }: ResumeProps) {
  const messages = getMessages(locale);
  const { resume } = messages;

  return (
    <section
      id="resume"
      className="relative overflow-hidden bg-[var(--color-background)] py-24 sm:py-28"
      aria-labelledby="resume-title"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(27,101,166,0.08),transparent_40%)]" />

      <div className="relative mx-auto w-full max-w-4xl px-6 text-center sm:px-8 lg:px-12">
        <header data-aos="fade-up">
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            {resume.eyebrow}
          </p>

          <h2
            id="resume-title"
            className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-[var(--color-text-primary)]"
          >
            {resume.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
            {resume.description}
          </p>
        </header>

        <div className="mt-10 flex justify-center" data-aos="fade-up">
          <a
            href="/documents/Profile.pdf"
            download
            className="group inline-flex items-center gap-3 rounded-lg bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-primary-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 focus:ring-offset-[var(--color-background)]"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5 transition-transform duration-200 group-hover:translate-y-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v12m0 0 4-4m-4 4-4-4"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 21h14" />
            </svg>

            {resume.download}
          </a>
        </div>
      </div>
    </section>
  );
}
