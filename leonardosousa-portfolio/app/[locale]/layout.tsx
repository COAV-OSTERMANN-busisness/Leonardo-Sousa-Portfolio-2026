import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getMessages,
  isLocale,
  locales,
  type Locale,
} from "../../i18n";

const siteUrl = "https://leonardosousa.dev.br";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const messages = getMessages(locale);

  const metadataByLocale: Record<
    Locale,
    {
      title: string;
      description: string;
      ogLocale: string;
    }
  > = {
    pt: {
      title: "Leonardo Sousa | Desenvolvedor de Software",
      description:
        "Portfólio profissional de Leonardo Sousa, Desenvolvedor de Software especializado em soluções web, mobile e desenvolvimento full stack.",
      ogLocale: "pt_BR",
    },

    en: {
      title: "Leonardo Sousa | Software Developer",
      description:
        "Professional portfolio of Leonardo Sousa, Software Developer specialized in web, mobile and full stack development.",
      ogLocale: "en_US",
    },

    es: {
      title: "Leonardo Sousa | Desarrollador de Software",
      description:
        "Portafolio profesional de Leonardo Sousa, Desarrollador de Software especializado en soluciones web, mobile y desarrollo full stack.",
      ogLocale: "es_ES",
    },

    ja: {
      title: "Leonardo Sousa | ソフトウェア開発者",
      description:
        "Leonardo Sousaのポートフォリオ。Web、モバイル、フルスタック開発を専門とするソフトウェア開発者です。",
      ogLocale: "ja_JP",
    },
  };

  const metadata = metadataByLocale[locale];

  return {
    title: metadata.title,

    description: metadata.description,

    alternates: {
      canonical: `${siteUrl}/${locale}`,

      languages: {
        "pt-BR": `${siteUrl}/pt`,
        en: `${siteUrl}/en`,
        es: `${siteUrl}/es`,
        ja: `${siteUrl}/ja`,
        "x-default": `${siteUrl}/en`,
      },
    },

    openGraph: {
      type: "website",
      url: `${siteUrl}/${locale}`,
      siteName: "Leonardo Sousa",
      locale: metadata.ogLocale,
      title: metadata.title,
      description: metadata.description,
    },

    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
    },

    other: {
      "content-language": locale,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div lang={locale as Locale} data-locale={locale}>
      {children}
    </div>
  );
}