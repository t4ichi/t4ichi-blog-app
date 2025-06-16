// import "server-only"; // Cloudflare Pages Edge Runtime対応のため無効化

import { orvalGetRamenTags } from "@/lib/orval/fetchers/ramen-tags/ramen-tags.fetcher";
import { orvalGetRamenTagsResponse } from "@/lib/orval/schemas/ramen-tags/ramen-tags.zod";
import type { ApiError } from "@/types/api";
import { parseApiError } from "@/utils/api";
import type { Result } from "@/utils/result";
import type { GetRamenTagsParams, RamenTagListResponse } from "./types";

/**
 * ラーメンタグ一覧を取得
 */
export const getRamenTags = async (
  params?: GetRamenTagsParams,
): Promise<Result<RamenTagListResponse, ApiError>> => {
  try {
    const response = await orvalGetRamenTags(params);

    // Orval生成スキーマでバリデーション
    const result = orvalGetRamenTagsResponse.safeParse(response);
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
