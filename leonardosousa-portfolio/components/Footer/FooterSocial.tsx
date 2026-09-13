import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { siteConfig } from "@/config";

interface FooterSocialMessages {
  linkedin: string;
  github: string;
  whatsapp: string;
}

interface FooterSocialProps {
  messages: FooterSocialMessages;
}

const socialItems = [
  {
    key: "linkedin",
    icon: faLinkedinIn,
    href: siteConfig.social.linkedin,
  },
  {
    key: "github",
    icon: faGithub,
    href: siteConfig.social.github,
  },
  {
    key: "whatsapp",
    icon: faWhatsapp,
    href: siteConfig.social.whatsapp,
  },
] as const;

export default function FooterSocial({
  messages,
}: FooterSocialProps) {
  return (
    <nav aria-label="Social media">
      <ul className="flex items-center gap-3">
        {socialItems.map((item) => (
          <li key={item.key}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={messages[item.key]}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[var(--color-background)] text-[var(--color-text-secondary)] transition-colors duration-200 hover:border-[var(--color-primary)] hover:text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="h-4 w-4"
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}