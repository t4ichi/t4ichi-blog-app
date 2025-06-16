// import "server-only"; // Cloudflare Pages Edge Runtime対応のため無効化

import { orvalGetRamenTags } from "@/lib/orval/fetchers/ramen-tags/ramen-tags.fetcher";
import { orvalGetRamens } from "@/lib/orval/fetchers/ramens/ramens.fetcher";
import { orvalGetRamenTagsResponse } from "@/lib/orval/schemas/ramen-tags/ramen-tags.zod";
import { orvalGetRamensResponse } from "@/lib/orval/schemas/ramens/ramens.zod";
import type { ApiError } from "@/types/api";
import { parseApiError } from "@/utils/api";
import type { Result } from "@/utils/result";
import type {
  GetRamenTagsParams,
  RamenTagListResponse,
  RamenTagWithCount,
} from "./types";

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

/**
 * ラーメンタグ一覧を参照数付きで取得
 */
export const getRamenTagsWithCount = async (
  params?: GetRamenTagsParams,
): Promise<Result<RamenTagWithCount[], ApiError>> => {
  try {
    // まずタグ一覧を取得
    const tagsResult = await getRamenTags(params);
    if (!tagsResult.ok) {
      return tagsResult;
    }

    // 各タグの参照数を並行して取得
    const tagsWithCount = await Promise.all(
      tagsResult.value.contents.map(async (tag) => {
        try {
          // そのタグを含むラーメンの数を取得（limitを1にして高速化）
          const response = await orvalGetRamens({
            filters: `tags[contains]${tag.id}`,
            limit: 1,
          });

          const result = orvalGetRamensResponse.safeParse(response);
          const count = result.success ? result.data.totalCount || 0 : 0;

          return {
            ...tag,
            count,
          } as RamenTagWithCount;
        } catch {
          // エラーの場合は0として扱う
          return {
            ...tag,
            count: 0,
          } as RamenTagWithCount;
        }
      }),
    );

    // 参照数の多い順でソート
    const sortedTags = tagsWithCount.sort((a, b) => b.count - a.count);

    return { ok: true, value: sortedTags };
  } catch (error) {
    return {
      ok: false,
      error: parseApiError(error),
    };
  }
};
