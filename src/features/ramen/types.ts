import type z from "zod";
import type {
  getRamenByIdParamsSchema,
  getRamensParamsSchema,
  ramenImageSchema,
  ramenListResponseSchema,
  ramenSchema,
  ramenTagSchema,
} from "./schemas";

export type RamenTag = z.infer<typeof ramenTagSchema>;
export type RamenImage = z.infer<typeof ramenImageSchema>;
export type RamenListResponse = z.infer<typeof ramenListResponseSchema>;
export type Ramen = z.infer<typeof ramenSchema>;
export type GetRamensParams = z.infer<typeof getRamensParamsSchema>;
export type GetRamenByIdParams = z.infer<typeof getRamenByIdParamsSchema>;
