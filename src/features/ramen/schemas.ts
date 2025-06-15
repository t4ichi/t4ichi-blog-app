import {
  orvalGetRamenByIdQueryParams,
  orvalGetRamenByIdResponse,
  orvalGetRamensQueryParams,
  orvalGetRamensResponse,
} from "@/lib/orval/schemas/ramens/ramens.zod";
import { z } from "zod";

export const ramenTagSchema = z.enum([
  "ラーメン",
  "油そば",
  "つけ麺",
  "家系",
  "パスタ",
  "二郎系",
  "担々麺",
  "味噌",
  "醤油",
  "塩",
  "豚骨",
]);

export const ramenImageSchema = z.object({
  url: z.string(),
  height: z.number(),
  width: z.number(),
});

export const ramenListResponseSchema = orvalGetRamensResponse;
export const ramenSchema = orvalGetRamenByIdResponse;
export const getRamensParamsSchema = orvalGetRamensQueryParams;
export const getRamenByIdParamsSchema = orvalGetRamenByIdQueryParams;
