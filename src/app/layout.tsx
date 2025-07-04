import { SiteFooter } from "@/features/site/components/site-footer";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "taichi no heya",
  description: "Personal website of Ito Taichi. Web developer.",
  authors: [{ name: "Ito Taichi" }],
  keywords: [
    "Ito Taichi",
    "Web Developer",
    "Ramen",
    "個人サイト",
    "taichi no heya",
  ],
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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Google Tag Manager requires inline script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NJT2BNZT');
            `,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NJT2BNZT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>

        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
