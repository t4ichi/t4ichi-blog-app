import type { z } from "zod";
import type {
  getRamenTagsParamsSchema,
  ramenTagListResponseSchema,
  ramenTagSchema,
} from "./schemas";

export type RamenTag = z.infer<typeof ramenTagSchema>;
export type RamenTagListResponse = z.infer<typeof ramenTagListResponseSchema>;
export type GetRamenTagsParams = z.infer<typeof getRamenTagsParamsSchema>;

// タグカテゴリの型定義
export type RamenTagCategory =
  | "type" // ラーメンの種類
  | "area" // エリア・場所
  | "feature" // 特徴・スタイル
  | "taste" // 味の特徴
  | "price" // 価格帯
  | "atmosphere" // 雰囲気
  | "service"; // サービス
