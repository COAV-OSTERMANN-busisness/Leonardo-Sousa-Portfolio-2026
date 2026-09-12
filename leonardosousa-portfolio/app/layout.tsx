import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import AOSProvider from "@/components/providers/AOSProvider";
import GrafanaProvider from "@/components/providers/GrafanaProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://leonardosousa.dev.br";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#leonardo-sousa`,
  name: "Leonardo Sousa",
  url: siteUrl,
  jobTitle: "Software Developer",
  description:
    "Software Developer especializado em desenvolvimento web e mobile, aplicações mobile, JavaScript, TypeScript, React, Next.js e Node.js.",
  telephone: "+55 71 99618-7965",
  email: "contato@leonardosousa.dev.br",
  sameAs: [
    "https://www.linkedin.com/in/leonardo-dos-santos-sousa-238651173/",
    "https://github.com/LeonardoSousa89",
    "https://www.instagram.com/leodev1989/",
    "https://www.facebook.com/people/Leonardo-Sousa/61575797716028/",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Leonardo Sousa | Software Developer",
    template: "%s | Leonardo Sousa",
  },

  description:
    "Leonardo Sousa — Software Developer especializado em desenvolvimento web, mobile e soluções digitais com JavaScript, TypeScript, React, Next.js e Node.js.",

  applicationName: "Leonardo Sousa",

  authors: [
    {
      name: "Leonardo Sousa",
      url: siteUrl,
    },
  ],

  creator: "Leonardo Sousa",
  publisher: "Leonardo Sousa",

  category: "technology",

  keywords: [
    "Leonardo Sousa",
    "Software Developer",
    "Desenvolvedor de Software",
    "Desenvolvedor Full Stack",
    "Full Stack Developer",
    "Desenvolvedor JavaScript",
    "JavaScript Developer",
    "TypeScript Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "React Native Developer",
    "Web Developer",
    "Mobile Developer",
    "Software Engineering",
  ],

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Leonardo Sousa",
    title: "Leonardo Sousa | Software Developer",
    description:
      "Portfólio profissional de Leonardo Sousa — Software Developer especializado em desenvolvimento web, mobile e soluções digitais.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Leonardo Sousa | Software Developer",
    description:
      "Portfólio profissional de Leonardo Sousa — Software Developer especializado em desenvolvimento web, mobile e soluções digitais.",
  },

  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
      </head>

      <body
        className={`${inter.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <AOSProvider>
          <GrafanaProvider>{children}</GrafanaProvider>
        </AOSProvider>
      </body>
    </html>
  );
}
