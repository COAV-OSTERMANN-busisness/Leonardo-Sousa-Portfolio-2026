import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Portfolio,
  Resume,
  Skills,
} from "@/components";

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
        <About locale={locale} />
        <Skills locale={locale} />
        <Portfolio locale={locale} />
        <Resume locale={locale} />
        <Contact locale={locale} />
      </main>

      <Footer locale={locale} />
    </>
  );
}
