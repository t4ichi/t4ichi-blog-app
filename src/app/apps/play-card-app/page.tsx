import { AppsScreenshots } from "@/features/apps/components/apps-screenshots";
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

export const metadata: Metadata = {
  title: "カードを引くだけ | パーティーで盛り上がるカード引きアプリ",
  description:
    "ワンタップでトランプを1枚引く、パーティー・飲み会・罰ゲーム決めで活躍するシンプルなアプリ。直感的な操作で誰でもすぐに楽しめます。",
  openGraph: {
    title: "カードを引くだけ | パーティーで盛り上がるカード引きアプリ",
    description:
      "ワンタップでトランプを1枚引く、パーティー・飲み会・罰ゲーム決めで活躍するシンプルなアプリ。",
    type: "website",
    images: [
      {
        url: "/images/apps/play-card-app/main-screen.png",
        width: 390,
        height: 844,
        alt: "カードを引くだけアプリのメイン画面",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "カードを引くだけ | パーティーで盛り上がるカード引きアプリ",
    description:
      "ワンタップでトランプを1枚引く、パーティー・飲み会・罰ゲーム決めで活躍するシンプルなアプリ。",
    images: ["/images/apps/play-card-app/main-screen.png"],
  },
  keywords: [
    "カード引き",
    "パーティーゲーム",
    "飲み会",
    "罰ゲーム",
    "アプリ",
    "トランプ",
    "抽選",
    "決定支援",
  ],
};

export default function PlayCardAppPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ヒーローセクション */}
      <PlayCardAppHero
        name={PLAY_CARD_APP_INFO.name}
        subtitle={PLAY_CARD_APP_INFO.subtitle}
        description={PLAY_CARD_APP_INFO.description}
        iconImage="/images/apps/play-card-app/app-icon.png"
        appStoreUrl={PLAY_CARD_APP_INFO.appStoreUrl}
      />

      {/* スクリーンショット */}
      <AppsScreenshots
        screenshots={PLAY_CARD_APP_INFO.screenshots}
        title="アプリ画面"
        className="py-16 bg-muted/30"
      />

      {/* 利用シーン */}
      <PlayCardAppUseCases
        useCases={PLAY_CARD_APP_USE_CASES}
        title="こんなシーンで活躍"
        className="py-16 bg-background"
      />

      {/* アプリの特徴 */}
      <PlayCardAppFeatures
        features={PLAY_CARD_APP_FEATURES}
        title="アプリの特徴"
        className="py-16 bg-muted/30"
      />
    </div>
  );
}
