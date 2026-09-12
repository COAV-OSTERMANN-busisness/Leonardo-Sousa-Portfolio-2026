import Link from "next/link";

import { locales, type Locale } from "../../i18n";

interface LanguageSwitcherProps {
  locale: Locale;
  label: string;
}

export default function LanguageSwitcher({
  locale,
  label,
}: LanguageSwitcherProps) {
  return (
    <nav aria-label={label} className="flex items-center gap-1">
      {locales.map((item) => {
        const isActive = item === locale;

        return (
          <Link
            key={item}
            href={`/${item}`}
            hrefLang={item}
            aria-current={isActive ? "page" : undefined}
            className={[
              "rounded-md px-2 py-1 font-mono text-xs uppercase",
              "transition-colors duration-200",
              isActive
                ? "bg-[#1b65a6] text-white"
                : "text-[#9cbcd9] hover:bg-white/10 hover:text-white",
            ].join(" ")}
          >
            {item}
          </Link>
        );
      })}
    </nav>
  );
}
