import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Магазин ПриклейКаМеня",
  description:
    "Магазин стикеров ПриклейКаМеня. Различные стикеры на любой вккус и цвет.",
  keywords: [
    "stickers",
    "стикеры",
    "Prikleika",
    "ПриклейКа",
    "sticker shop",
    "магазин стикеров",
    "custom stickers",
    "кастомные стикеры",
    "decals",
    "наклейки",
    "vinyl stickers",
    "виниловые стикеры",
    "decorative stickers",
    "декоративные наклейки",
    "laptop stickers",
    "стикеры для ноутбука",
    "phone stickers",
    "стикеры для телефона",
    "car stickers",
    "автомобильные наклейки",
    "wall decals",
    "настенные наклейки",
    "sticker design",
    "дизайн стикеров",
    "sticker printing",
    "печать стикеров",
    "sticker collection",
    "коллекция стикеров",
    "unique stickers",
    "уникальные стикеры",
    "sticker art",
    "стикер-арт",
    "Prikleika Store",
    "Магазин ПриклейКа",
    "ПриклейКа Меня",
    "Stick Me",
    "sticker accessories",
    "аксессуары со стикерами",
    "DIY stickers",
    "стикеры своими руками",
    "sticker packs",
    "наборы стикеров",
    "trendy stickers",
    "модные стикеры",
    "sticker customization",
    "кастомизация стикеров",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="h-screen">
        <ThemeProvider>
          <Header />
          {children}
          <GoogleAnalytics gaId="G-4W5SMYGRJE" />
        </ThemeProvider>
      </body>
    </html>
  );
}
