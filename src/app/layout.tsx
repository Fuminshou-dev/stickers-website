import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Prikleika Store",
  description: "ПриклейКаМеня",
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
