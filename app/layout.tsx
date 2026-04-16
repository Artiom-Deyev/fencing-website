import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({subsets:['latin', 'cyrillic'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://fencing-moscow.vercel.app/'),
  title: {
    default: 'Секция фехтования в Москве | Фехтование для всех уровней - Фехтование Северо-Запада',
    template: '%s | Фехтование Северо-Запада',
  },
  description: "Детская и взрослая секция фехтования в Москве. Тренировки на рапирах. Пробные занятия. Удобные залы в СЗАО. Профессиональные тренеры.",
  keywords: ['Фехтование Москва', 'Секция фехтования', 'Детская секция фехтования', 'Взрослая секция фехтования', 'Тренировки на рапирах', 'Пробные занятия фехтование', 'Залы для фехтования в Москве', 'Тренеры по фехтованию', 'Тренировки фехтования'],
  authors: [{ name: 'Фехтование Северо-Запад' }],
  creator: 'Фехтование Северо-Запад',
  openGraph: {
    url: "https://твой-сайт.ru", // Замени на реальный URL вашего сайта
    siteName: 'Фехтование Северо-Запад',
    images: [
    {
      url: '/og-image.jpg', // Замени на реальный путь к изображению
      width: 1200,
      height: 630,
      alt: 'Фехтование Северо-Запад - Секция фехтования в Москве',
    },
  ],
  locale: 'ru_RU',
  type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Секция фехтования в Москве',
    description: 'Детская и взрослая секция фехтования.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Яндекс Метрика */}
        {/* <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();k=e.getElementsByTagName(t)[0],a=e.createElement(t),a.async=1,a.src=r,k.parentNode.insertBefore(a,k)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "08330842");`,
          }}
        /> */}
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
