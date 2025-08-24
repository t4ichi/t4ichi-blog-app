import type {
  PlayCardAppFeature,
  PlayCardAppUseCase,
} from "../types/play-card-app";

export const PLAY_CARD_APP_INFO = {
  name: "カードを引くだけ",
  subtitle: "パーティーで盛り上がる！シンプルなカード引きアプリ",
  description:
    "ワンタップでトランプを1枚引く、パーティー・飲み会・罰ゲーム決めで活躍するシンプルなアプリ。",
  // App Store URLは実際のURLに変更してください
  appStoreUrl: "https://apps.apple.com/app/card-play",
  screenshots: [
    {
      src: "/images/apps/play-card-app/main-screen.png",
      alt: "メイン画面",
      title: "シンプルなカード引き画面",
      description: "ワンタップでカードを引ける直感的なインターフェース",
    },
    {
      src: "/images/apps/play-card-app/card-drawn.png",
      alt: "カード表示画面",
      title: "引いたカードの表示",
      description: "美しいアニメーションでカードが表示されます",
    },
    {
      src: "/images/apps/play-card-app/settings.png",
      alt: "設定画面",
      title: "カスタマイズ設定",
      description: "ジョーカーの有無や効果音の設定が可能",
    },
  ],
} as const;

export const PLAY_CARD_APP_USE_CASES: PlayCardAppUseCase[] = [
  {
    title: "パーティーゲーム",
    description: "友人同士の集まりで順番決めや役割決定に",
    icon: "🎉",
    examples: ["順番決め", "チーム分け", "司会者決め"],
  },
  {
    title: "飲み会・宴会",
    description: "罰ゲームや余興の抽選に最適",
    icon: "🍻",
    examples: ["罰ゲーム抽選", "乾杯の順番", "一発芸担当決め"],
  },
  {
    title: "カードゲーム",
    description: "ハイローゲームやインディアンポーカーに",
    icon: "🃏",
    examples: ["ハイローゲーム", "インディアンポーカー", "運試し"],
  },
  {
    title: "決定支援",
    description: "迷った時の決定支援ツールとして",
    icon: "🤔",
    examples: ["二択の決定", "アイスブレイク", "話のきっかけ"],
  },
];

export const PLAY_CARD_APP_FEATURES: PlayCardAppFeature[] = [
  {
    title: "シンプル操作",
    description: "ワンタップでカードを引ける直感的な操作",
    icon: "👆",
    details: ["複雑な設定不要", "誰でもすぐに使える", "スムーズな操作感"],
  },
  {
    title: "美しいアニメーション",
    description: "リアルなカードフリップアニメーション",
    icon: "✨",
    details: ["滑らかなカード表示", "本物のカードを引く感覚", "視覚的に楽しい"],
  },
  {
    title: "便利な機能",
    description: "履歴や残りカードの確認が可能",
    icon: "📊",
    details: ["引いたカードの履歴", "残りカードの確認", "ワンタップリセット"],
  },
  {
    title: "カスタマイズ",
    description: "ジョーカーの有無や効果音の設定",
    icon: "⚙️",
    details: ["52枚/54枚デッキ", "効果音ON/OFF", "バイブレーション設定"],
  },
];
