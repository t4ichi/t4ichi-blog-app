import { SiteFooter } from "@/features/site/components/site-footer";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "taichi no heya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
