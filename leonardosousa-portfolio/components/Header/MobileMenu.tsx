"use client";

import { useEffect } from "react";
import Link from "next/link";

import type { Locale } from "../../i18n";

interface MobileMenuProps {
  locale: Locale;
  messages: {
    header: {
      close: string;
      language: string;
      navigation: {
        home: string;
        about: string;
        skills: string;
        portfolio: string;
        contact: string;
      };
    };
    accessibility: {
      closeMenu: string;
      changeLanguage: string;
    };
  };
  isOpen: boolean;
  onClose: () => void;
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
    key: "contact",
    href: "#contact",
  },
] as const;

export default function MobileMenu({
  locale,
  messages,
  isOpen,
  onClose,
}: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      id="mobile-navigation"
      className="fixed inset-0 z-[60]"
      role="dialog"
      aria-modal="true"
      aria-label={messages.header.close}
    >
      <button
        type="button"
        aria-label={messages.accessibility.closeMenu}
        onClick={onClose}
        className="absolute inset-0 h-full w-full bg-black/60 backdrop-blur-sm"
      />

      <aside
        className={[
          "absolute right-0 top-0 h-full w-[min(88vw,380px)]",
          "border-l border-white/10",
          "bg-[#07131c]",
          "shadow-2xl",
          "animate-[slide-in_250ms_ease-out]",
        ].join(" ")}
      >
        <div className="flex h-full flex-col p-6">
          <div className="mb-10 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9cbcd9]">
              {messages.header.close}
            </span>

            <button
              type="button"
              onClick={onClose}
              aria-label={messages.accessibility.closeMenu}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-[#9cbcd9] transition-colors hover:border-[#1b65a6] hover:text-white"
            >
              ×
            </button>
          </div>

          <nav
            aria-label={messages.header.close}
            className="flex flex-col"
          >
            {navigationItems.map((item, index) => (
              <Link
                key={item.key}
                href={`/${locale}${item.href}`}
                onClick={onClose}
                className={[
                  "border-b border-white/10 py-4",
                  "text-lg font-medium text-white",
                  "transition-colors hover:text-[#9cbcd9]",
                  index === 0 ? "border-t" : "",
                ].join(" ")}
              >
                {messages.header.navigation[item.key]}
              </Link>
            ))}
          </nav>

          <div className="mt-auto border-t border-white/10 pt-6">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#9cbcd9]">
              {messages.header.language}
            </p>

            <div className="grid grid-cols-4 gap-2">
              {(["pt", "en", "es", "ja"] as Locale[]).map(
                (item) => (
                  <Link
                    key={item}
                    href={`/${item}`}
                    hrefLang={item}
                    onClick={onClose}
                    className={[
                      "flex h-10 items-center justify-center rounded-md",
                      "border border-white/10",
                      "font-mono text-xs uppercase",
                      "transition-colors",
                      item === locale
                        ? "border-[#1b65a6] bg-[#1b65a6] text-white"
                        : "text-[#9cbcd9] hover:border-[#1b65a6] hover:text-white",
                    ].join(" ")}
                  >
                    {item}
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}