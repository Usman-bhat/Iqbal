import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";
/*
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});
*/
import localFont from 'next/font/local'  // Font files can be colocated inside of `pages`
//const jameel = localFont({ src: './jameel.ttf' })
export const metadata: Metadata = {
  metadataBase: new URL('https://alamaiqbal.vercel.app'),
  title: {
    default: "Iqbal's Poetry Collection",
    template: '%s | Iqbal'
  },
  description: "Explore the vision of the 'Iqbal' website, where you'll encounter the poetic legacy of Allama Iqbal...",
  keywords: [
    "Iqbal",
    "Allama Iqbal",
    "Poetry Collection",
    "Urdu Poems",
    "Farsi Persian",
    "Indo-Pak Poet",
    "Literary Heritage",
    "Multilingual Poetry",
    "Iqbal's Verses",
    "Digital Repository",
    "Cultural Legacy",
    "Poetic Masterpieces",
    "Urdu Literature",
    "Farsi Language",
    "Alama Iqbal's Works",
    "Poetic Exploration",
    "Poetry Archives",
    "Cultural Enrichment",
    "Iqbal's Philosophical Poems",
    "Mobile Poetry App",
    "اقبال",
    "علامہ اقبال",
    "شاعری کا مجموعہ",
    "اردو کی شاعری",
    "فارسی پارسی",
    "ہندوپاک شاعر",
    "ادبائی ورثہ",
    "متعدد زبان شاعری",
    "اقبال کے مصرعات",
    "ڈیجیٹل ریپوزیٹری",
    "ثقافتی ورثہ",
    "شاعرانہ شاہکار",
    "اردو ادب",
    "زبان فارسی",
    "علامہ اقبال کے کام",
    "شاعرانہ کا کہشاف",
    "شاعری کی آرکائیو",
    "ثقافتی بھرمار",
    "فلسفیانہ اقبال کی شاعری",
    "موبائل شاعری ایپ",
    "اقبال",
    "علامه اقبال",
    "مجموعه شعر",
    "شعر اردو",
    "فارسی پارسی",
    "شاعر هندوپاک",
    "ارث ادبی",
    "شعر چند زبانه",
    "مصرعات اقبال",
    "مخزن دیجیتال",
    "تاریخ فرهنگی",
    "شاعری مستند",
    "ادب اردو",
    "زبان فارسی",
    "آثار علامه اقبال",
    "کاوش شاعرانه",
    "آرشیو شعر",
    "امور ثقافتی",
    "شاعری فلسفی اقبال",
    "اپلیکیشن موبایل شعر",
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alamaiqbal.vercel.app',
    title: "Iqbal's Poetry Collection",
    description: "Explore Allama Iqbal's poetic legacy",
    siteName: "Iqbal's Poetry",
    images: [{
      url: '/images/og-image.jpg',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@QuranicHub',
    creator: '@QuranicHub',
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/manifest.json',
};

import { ThemeProvider } from './ThemeProvider';

// Main layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

