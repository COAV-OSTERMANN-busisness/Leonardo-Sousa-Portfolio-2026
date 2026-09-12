import {
    defaultLocale,
    locales,
    messages,
    type Locale,
  } from "./messages";
  
  export {
    defaultLocale,
    locales,
    messages,
  };
  
  export type { Locale };
  
  export function isLocale(value: string): value is Locale {
    return locales.includes(value as Locale);
  }
  
  export function getMessages(locale: Locale) {
    return messages[locale];
  }