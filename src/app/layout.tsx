import { SiteFooter } from "@/features/site/components/site-footer";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "taichi no heya",
  description: "Personal website of Ito Taichi. Web developer.",
  authors: [{ name: "Ito Taichi" }],
  keywords: ["Ito Taichi", "Web Developer", "Ramen", "個人サイト", "taichi no heya"],
  openGraph: {
    title: "taichi no heya",
    description: "Personal website of Ito Taichi. Web developer.",
    type: "website",
    locale: "ja_JP",
    siteName: "taichi no heya",
  },
  twitter: {
    card: "summary",
    title: "taichi no heya",
    description: "Personal website of Ito Taichi. Web developer.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://t4ichi-blog-app.pages.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
