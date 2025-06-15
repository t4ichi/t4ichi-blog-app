import "server-only";

import {
  orvalGetRamenById,
  orvalGetRamens,
} from "@/lib/orval/fetchers/ramens/ramens.fetcher";
import {
  orvalGetRamenByIdResponse,
  orvalGetRamensResponse,
} from "@/lib/orval/schemas/ramens/ramens.zod";
import type { ApiError } from "@/types/api";
import { parseApiError } from "@/utils/api";
import type { Result } from "@/utils/result";
import type {
  GetRamenByIdParams,
  GetRamensParams,
  Ramen,
  RamenListResponse,
} from "./schemas";

/**
 * ラーメン一覧を取得
 */
export const getRamens = async (
  params?: GetRamensParams,
): Promise<Result<RamenListResponse, ApiError>> => {
  try {
    const response = await orvalGetRamens(params);

    // Orval生成スキーマでバリデーション
    const result = orvalGetRamensResponse.safeParse(response);
    if (!result.success) {
      return {
        ok: false,
        error: parseApiError(result.error),
      };
    }

    return { ok: true, value: result.data };
  } catch (error) {
    return {
      ok: false,
      error: parseApiError(error),
    };
  }
};

/**
 * 特定のラーメン情報を取得
 */
export const getRamenById = async (
  id: string,
  params?: GetRamenByIdParams,
): Promise<Result<Ramen, ApiError>> => {
  try {
    const response = await orvalGetRamenById(id, params);

    const result = orvalGetRamenByIdResponse.safeParse(response);
    if (!result.success) {
      return {
        ok: false,
        error: parseApiError(result.error),
      };
    }

    return { ok: true, value: result.data };
  } catch (error) {
    return {
      ok: false,
      error: parseApiError(error),
    };
  }
};
