import type { MetadataRoute } from "next";

const siteUrl = "https://leonardosousa.dev.br";

const locales = ["pt", "en", "es", "ja"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "en" ? 1 : 0.9,
  }));
}