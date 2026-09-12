import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { locales, type Locale } from "../i18n";

function detectLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) {
    return "en";
  }

  const languages = acceptLanguage
    .split(",")
    .map((entry) => entry.split(";")[0].trim().toLowerCase());

  for (const language of languages) {
    const languageCode = language.split("-")[0];

    if (locales.includes(languageCode as Locale)) {
      return languageCode as Locale;
    }
  }

  return "en";
}

export default async function Home() {
  const requestHeaders = await headers();
  const acceptLanguage = requestHeaders.get("accept-language");

  const locale = detectLocale(acceptLanguage);

  redirect(`/${locale}`);
}