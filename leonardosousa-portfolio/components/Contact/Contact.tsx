import { getMessages, type Locale } from "@/i18n";

import ContactContent from "./ContactContent";
import ContactForm from "./ContactForm";
import WhatsAppCTA from "./WhatsAppCTA";

interface ContactProps {
  locale: Locale;
}

export default function Contact({ locale }: ContactProps) {
  const messages = getMessages(locale);
  const { contact, legal } = messages;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--color-background)] py-24 sm:py-28"
      aria-labelledby="contact-title"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(27,101,166,0.08),transparent_35%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <header
          className="mx-auto mb-14 max-w-3xl text-center"
          data-aos="fade-up"
        >
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            {contact.eyebrow}
          </p>

          <h2
            id="contact-title"
            className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-[var(--color-text-primary)]"
          >
            {contact.title}
          </h2>
        </header>

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
          <ContactContent description={contact.description}>
            <WhatsAppCTA messages={contact.whatsapp} />
          </ContactContent>

          <ContactForm
            messages={contact.form}
            terms={legal.terms}
          />
        </div>
      </div>
    </section>
  );
}