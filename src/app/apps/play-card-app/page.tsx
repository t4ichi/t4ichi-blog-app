import { AppsContactSection } from "@/features/apps/components/apps-contact-section";
import { AppsScreenshotImages } from "@/features/apps/components/apps-screenshot-images";
import { AppsScreenshotVideo } from "@/features/apps/components/apps-screenshot-video";
import { CONTACT_FORMS } from "@/features/apps/constants/contact";
import { PlayCardAppFeatures } from "@/features/play-card-app/components/play-card-app-features";
import { PlayCardAppHero } from "@/features/play-card-app/components/play-card-app-hero";
import { PlayCardAppUseCases } from "@/features/play-card-app/components/play-card-app-use-cases";
import {
  PLAY_CARD_APP_FEATURES,
  PLAY_CARD_APP_INFO,
  PLAY_CARD_APP_USE_CASES,
} from "@/features/play-card-app/constants/play-card-app";
import type { Metadata } from "next";

// Cloudflare Pages対応設定
export const runtime = "edge";

const pageUrl = "https://t4ichi.dev/apps/play-card-app";
// TODO: OGイメージは最適なものに差し替える
const ogImageUrl =
  "https://t4ichi.dev/images/apps/play-card-app/01-before-draw.png";

export const metadata: Metadata = {
  title:
    "トランプ引くだけ | パーティー・罰ゲーム・決定支援に最適なカード抽選アプリ",
  description:
    "ワンタップでトランプを1枚引くシンプルなカード抽選アプリ。パーティー・飲み会・罰ゲーム決め・順番決めに最適。履歴機能付きで美しいアニメーション。iOS/無料アプリ",
  keywords: [
    "トランプ引くだけ",
    "カード抽選アプリ",
    "パーティーゲーム",
    "罰ゲーム決め",
    "順番決めアプリ",
    "飲み会ゲーム",
    "決定支援ツール",
    "シンプルトランプ",
    "カードめくり",
    "抽選アプリ",
    "カード引き",
    "ワンタップ",
    "履歴機能",
    "アニメーション",
    "iOS無料",
    "パーティー用",
    "簡単操作",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "トランプ引くだけ | パーティー・罰ゲーム・決定支援に最適なカード抽選アプリ",
    description:
      "ワンタップでトランプを1枚引くシンプルなカード抽選アプリ。パーティー・飲み会・罰ゲーム決め・順番決めに最適。履歴機能付き。",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 390,
        height: 844,
        alt: "トランプ引くだけアプリのメイン画面 - カード引きゲーム",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "トランプ引くだけ | パーティー・罰ゲーム・決定支援に最適なカード抽選アプリ",
    description:
      "ワンタップでトランプを1枚引くシンプルなカード抽選アプリ。パーティー・飲み会・罰ゲーム決め・順番決めに最適。",
    images: [ogImageUrl],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "トランプ引くだけ",
  description:
    "ワンタップでトランプを1枚引く、パーティー・飲み会・罰ゲーム決めで活躍するシンプルなアプリ。直感的な操作で誰でもすぐに楽しめます。",
  applicationCategory: "GameApplication",
  operatingSystem: "iOS",
  url: pageUrl,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "JPY",
  },
  image: ogImageUrl,
};

const videoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "トランプ引くだけアプリのデモ動画",
  description:
    "ワンタップでトランプを1枚引くシンプルなカード抽選アプリの使い方デモ",
  thumbnailUrl:
    "https://t4ichi.dev/images/apps/play-card-app/01-before-draw.png",
  uploadDate: "2024-08-24",
  duration: "PT30S",
  contentUrl: "https://t4ichi.dev/images/apps/play-card-app/app-demo.mp4",
  embedUrl: pageUrl,
  publisher: {
    "@type": "Person",
    name: "Ito Taichi",
  },
};

export default function PlayCardAppPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: The JSON-LD is generated from static data and is safe.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: The JSON-LD is generated from static data and is safe.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />
      {/* ヒーローセクション */}
      <PlayCardAppHero
        name={PLAY_CARD_APP_INFO.name}
        subtitle={PLAY_CARD_APP_INFO.subtitle}
        description={PLAY_CARD_APP_INFO.description}
        iconImage="/images/apps/play-card-app/app-icon.png"
        appStoreUrl={PLAY_CARD_APP_INFO.appStoreUrl}
      />

      {/* アプリのデモ動画 */}
      <AppsScreenshotVideo
        screenshots={PLAY_CARD_APP_INFO.screenshots}
        title=""
        className="py-20 bg-slate-50"
      />

      {/* アプリのスクリーンショット */}
      <AppsScreenshotImages
        screenshots={PLAY_CARD_APP_INFO.screenshots}
        title="アプリ画面"
        className="py-20 bg-white"
      />

      {/* 利用シーン */}
      <PlayCardAppUseCases
        useCases={PLAY_CARD_APP_USE_CASES}
        title="こんなシーンで活躍"
        className="py-20 bg-slate-50"
      />

      {/* アプリの特徴 */}
      <PlayCardAppFeatures
        features={PLAY_CARD_APP_FEATURES}
        title="アプリの特徴"
        className="py-20 bg-white"
      />

      {/* お問い合わせセクション */}
      <AppsContactSection contactUrl={CONTACT_FORMS.PLAY_CARD_APP} />
    </div>
  );
}
