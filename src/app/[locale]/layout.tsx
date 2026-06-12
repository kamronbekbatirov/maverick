import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../test-styles.css";
import Script from "next/script";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales, type Locale } from '@/i18n/request';
import { notFound } from 'next/navigation';

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Maverick - Ваш надежный партнер в мире услуг",
  description: "Maverick Detailing - профессиональная выездная автомойка. Игровые клубы и рестораны скоро!",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.variable} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Script src="https://stats.kama.uz/script.js" data-website-id="d72346b8-6c5f-4c1d-8bcf-3e6d20919468" data-domains="maverick.uz" strategy="afterInteractive" />
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
