import { getMessages, type Locale } from "@/i18n";

import FooterBrand from "./FooterBrand";
import FooterNavigation from "./FooterNavigation";
import FooterSocial from "./FooterSocial";
import FooterBottom from "./FooterBottom";

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const messages = getMessages(locale);
  const { footer } = messages;

  return (
    <footer className="border-t border-white/10 bg-[var(--color-surface)]">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto_auto] lg:items-start lg:gap-x-24">
          <FooterBrand />

          <FooterNavigation messages={footer.navigation} />

          <FooterSocial
            messages={{
              linkedin: footer.linkedin,
              github: footer.github,
              whatsapp: footer.whatsapp,
            }}
          />
        </div>

        <FooterBottom
          locale={locale}
          messages={{
            copyright: footer.rights,
            languages: footer.languages,
          }}
        />
      </div>
    </footer>
  );
}
