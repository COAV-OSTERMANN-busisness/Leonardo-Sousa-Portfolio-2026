import { Header, Hero, Skills } from "@/components";

import { getMessages, type Locale } from "@/i18n";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  const messages = getMessages(locale);

  return (
    <>
      <Header />

      <main>
        <Hero messages={messages} />
        <Skills locale={locale} />
      </main>
    </>
  );
}
