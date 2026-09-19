import Link from "next/link";

import type { Locale } from "../../i18n";

interface NavigationProps {
  locale: Locale;
  messages: {
    header: {
      navigation: {
        home: string;
        about: string;
        skills: string;
        portfolio: string;
        resume: string;
        contact: string;
      };
    };
  };
}

const navigationItems = [
  {
    key: "home",
    href: "#home",
  },
  {
    key: "about",
    href: "#about",
  },
  {
    key: "skills",
    href: "#skills",
  },
  {
    key: "portfolio",
    href: "#portfolio",
  },
  {
    key: "resume",
    href: "#resume",
  },
  {
    key: "contact",
    href: "#contact",
  },
] as const;

export default function Navigation({ locale, messages }: NavigationProps) {
  return (
    <nav aria-label="Primary navigation" className="hidden">
      {navigationItems.map((item) => (
        <Link
          key={item.key}
          href={`/${locale}${item.href}`}
          className="text-sm text-[#9cbcd9] transition-colors hover:text-white"
        >
          {messages.header.navigation[item.key]}
        </Link>
      ))}
    </nav>
  );
}
