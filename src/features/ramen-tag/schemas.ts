import {
  orvalGetRamenTagsQueryParams,
  orvalGetRamenTagsResponse,
} from "@/lib/orval/schemas/ramen-tags/ramen-tags.zod";
import { z } from "zod";

// Orval生成スキーマを再エクスポート
export const ramenTagListResponseSchema = orvalGetRamenTagsResponse;
export const getRamenTagsParamsSchema = orvalGetRamenTagsQueryParams;

// タグスキーマは生成された型から抽出
export const ramenTagSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string(),
  revisedAt: z.string(),
  name: z.string(),
  category: z.array(
    z.enum([
      "type",
      "area",
      "feature",
      "taste",
      "price",
      "atmosphere",
      "service",
    ]),
  ),
  description: z.string().nullish(),
});
