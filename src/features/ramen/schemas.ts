import {
  orvalGetRamenByIdQueryParams,
  orvalGetRamenByIdResponse,
  orvalGetRamensQueryParams,
  orvalGetRamensResponse,
} from "@/lib/orval/schemas/ramens/ramens.zod";
import { z } from "zod";

// タグスキーマは生成された型から抽出
export const ramenTagSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string(),
  revisedAt: z.string(),
  name: z.string(),
  category: z.array(z.enum(['type', 'area', 'feature', 'taste', 'price', 'atmosphere', 'service'])),
  description: z.string().nullish(),
});

export const ramenImageSchema = z.object({
  url: z.string(),
  height: z.number(),
  width: z.number(),
});

export const ramenListResponseSchema = orvalGetRamensResponse;
export const ramenSchema = orvalGetRamenByIdResponse;
export const getRamensParamsSchema = orvalGetRamensQueryParams;
export const getRamenByIdParamsSchema = orvalGetRamenByIdQueryParams;
