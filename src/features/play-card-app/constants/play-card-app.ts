import BackhandIndexPointingUpColorDefault from "@/icons/backhand_index_pointing_up_color_default.svg";
import BarChartColor from "@/icons/bar_chart_color.svg";
import BeerMugColor from "@/icons/beer_mug_color.svg";
import GearColor from "@/icons/gear_color.svg";
import JokerColor from "@/icons/joker_color.svg";
import PartyPopperColor from "@/icons/party_popper_color.svg";
import SparklesColor from "@/icons/sparkles_color.svg";
import ThinkingFaceColor from "@/icons/thinking_face_color.svg";
import type {
  PlayCardAppFeature,
  PlayCardAppUseCase,
} from "../types/play-card-app";

export const PLAY_CARD_APP_INFO = {
  name: "トランプ引くだけ",
  subtitle: "パーティーで盛り上がる！シンプルなカード引きアプリ",
  description:
    "ワンタップでトランプを1枚引く、パーティー・飲み会・罰ゲーム決めで活躍するシンプルなアプリ。",
  // App Store URLは実際のURLに変更してください
  appStoreUrl: "https://apps.apple.com/app/card-play",
  screenshots: [
    {
      src: "/images/apps/play-card-app/app-demo.mp4",
      alt: "アプリ操作デモ動画",
      type: "video" as const,
    },
  ],
};

export const PLAY_CARD_APP_USE_CASES: PlayCardAppUseCase[] = [
  {
    title: "カードゲーム",
    description: "ハイローゲームやインディアンポーカーに",
    icon: JokerColor,
    examples: ["ハイローゲーム", "インディアンポーカー", "運試し"],
  },
  {
    title: "パーティーゲーム",
    description: "友人同士の集まりで順番決めや役割決定に",
    icon: PartyPopperColor,
    examples: ["順番決め", "チーム分け", "司会者決め"],
  },
  {
    title: "飲み会・宴会",
    description: "罰ゲームや余興の抽選に最適",
    icon: BeerMugColor,
    examples: ["罰ゲーム抽選", "乾杯の順番", "一発芸担当決め"],
  },
  {
    title: "決定支援",
    description: "迷った時の決定支援ツールとして",
    icon: ThinkingFaceColor,
    examples: ["二択の決定", "アイスブレイク", "話のきっかけ"],
  },
];

export const PLAY_CARD_APP_FEATURES: PlayCardAppFeature[] = [
  {
    title: "シンプル操作",
    description: "ワンタップでカードを引ける直感的な操作",
    icon: BackhandIndexPointingUpColorDefault,
    details: ["複雑な設定不要", "誰でもすぐに使える", "スムーズな操作感"],
  },
  {
    title: "アニメーション",
    description: "リアルなカードフリップアニメーション",
    icon: SparklesColor,
    details: ["滑らかなカード表示", "本物のカードを引く感覚", "視覚的に楽しい"],
  },
  {
    title: "便利な機能",
    description: "履歴やリセットが可能",
    icon: BarChartColor,
    details: ["引いたカードの履歴", "ワンタップリセット"],
  },
  {
    title: "カスタマイズ",
    description: "ジョーカーの有無や振動の設定",
    icon: GearColor,
    details: ["52枚/54枚デッキ", "バイブレーション設定"],
  },
];
