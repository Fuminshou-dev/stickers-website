import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" suppressHydrationWarning className="no-scrollbar">
      <body className={`antialiased`}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
