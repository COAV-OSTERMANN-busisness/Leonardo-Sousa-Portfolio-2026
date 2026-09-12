import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

interface WhatsAppCTAProps {
  messages: string;
}

export default function WhatsAppCTA({
  messages,
}: WhatsAppCTAProps) {
  return (
    <a
      href="https://api.whatsapp.com/message/N767K3D4E7TAG1"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-full max-w-sm items-center gap-4 rounded-xl border border-white/10 bg-[var(--color-surface)] p-5 transition-colors duration-200 hover:border-[var(--color-primary)] hover:bg-[var(--color-surface-light)]"
      aria-label={messages}
      data-aos="fade-up"
    >
      <span
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-accent)]"
        aria-hidden="true"
      >
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="h-6 w-6"
        />
      </span>

      <span className="text-sm font-semibold text-[var(--color-text-primary)]">
        {messages}
      </span>
    </a>
  );
}