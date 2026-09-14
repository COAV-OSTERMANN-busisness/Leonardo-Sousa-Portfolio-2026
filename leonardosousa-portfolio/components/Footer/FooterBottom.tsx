import Link from "next/link";

import { locales, type Locale } from "@/i18n";

interface FooterBottomMessages {
  copyright: string;
  languages: string;
}

interface FooterBottomProps {
  locale: Locale;
  messages: FooterBottomMessages;
}

export default function FooterBottom({ locale, messages }: FooterBottomProps) {
  return (
    <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-xs text-[var(--color-text-secondary)]">
        © {new Date().getFullYear()} Leonardo Sousa. {messages.copyright}
      </p>

      <nav aria-label={messages.languages}>
        <ul className="flex items-center gap-4">
          {locales.map((item) => (
            <li key={item}>
              <Link
                href={`/${item}`}
                aria-current={item === locale ? "page" : undefined}
                className={`font-mono text-xs font-semibold uppercase tracking-[0.12em] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
                  item === locale
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
