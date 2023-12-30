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
const jameel = localFont({ src: './jameel.ttf' })
export const metadata: Metadata = {
  title: "Iqbal Poems",
description: "Explore the vision of the 'Iqbal' website, where you'll encounter the poetic legacy of Allama Iqbal, a distinguished poet of the Indo-Pak region. Immerse yourself in the treasure trove of Iqbal's verses, all conveniently accessible in both Urdu and Farsi Persian. Discover the profound beauty of his poetry encapsulated in this digital haven named after the luminary poet.Urdu:آئیے 'اقبال' کے ویب سائٹ کا خواب دیکھیں، جہاں آپ کو علامہ اقبال کی شاعری ملے گی، ایک عظیم شاعر جو ہندوپاک علاقے کا اراج ہے۔ یہاں آپ کو اقبال کی کلام کی چھوٹی چھوٹی مصرعوں کا چیسٹ کرنے کا موقع ملے گا، اور یہ تمام مصرعے اردو اور فارسی پارسی میں دستیاب ہیں۔",
  keywords:["Iqbal",
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
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={jameel.className}>
        <Layout>
          {children}
          <FixedPlugin />
        </Layout>
      </body>
    </html>
  );
}
