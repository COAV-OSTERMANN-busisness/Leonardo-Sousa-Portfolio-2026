"use client";

import { useCallback, useState } from "react";

import { usePathname } from "next/navigation";

import LanguageSwitcher from "./LanguageSwitcher";

import Logo from "./Logo";

import MenuButton from "./MenuButton";

import MobileMenu from "./MobileMenu";

import Navigation from "./Navigation";

import {
  getMessages,
  isLocale,
  type Locale,
} from "../../i18n";

export default function Header() {
  const pathname = usePathname();

  const pathnameLocale = pathname.split("/")[1];

  const locale: Locale = isLocale(pathnameLocale)
    ? pathnameLocale
    : "en";

  const messages = getMessages(locale);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen((current) => !current);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--color-text-secondary)]/10 bg-[var(--color-background)]/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo locale={locale} />

          <Navigation
            locale={locale}
            messages={messages}
          />

          <div className="flex items-center gap-2">
            <LanguageSwitcher
              locale={locale}
              label={messages.header.language}
            />

            <MenuButton
              isOpen={isMenuOpen}
              onClick={handleToggleMenu}
              label={
                isMenuOpen
                  ? messages.accessibility.closeMenu
                  : messages.accessibility.openMenu
              }
            />
          </div>
        </div>
      </header>

      <MobileMenu
        locale={locale}
        messages={messages}
        isOpen={isMenuOpen}
        onClose={handleCloseMenu}
      />
    </>
  );
}