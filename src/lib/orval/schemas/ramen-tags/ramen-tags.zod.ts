/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * t4ichi blog API
 * t4ichi-blogのAPI
 * OpenAPI spec version: 1.0.0
 */
import {
  z as zod
} from 'zod';


/**
 * @summary ラーメンタグ一覧を取得
 */
export const orvalGetRamenTagsQueryLimitDefault = 10;
export const orvalGetRamenTagsQueryLimitMax = 100;
export const orvalGetRamenTagsQueryOffsetDefault = 0;
export const orvalGetRamenTagsQueryOffsetMin = 0;


export const orvalGetRamenTagsQueryParams = zod.object({
  "limit": zod.number().min(1).max(orvalGetRamenTagsQueryLimitMax).default(orvalGetRamenTagsQueryLimitDefault).describe('取得件数の上限'),
  "offset": zod.number().min(orvalGetRamenTagsQueryOffsetMin).optional().describe('取得開始位置'),
  "orders": zod.string().optional().describe('ソート順'),
  "q": zod.string().optional().describe('検索クエリ'),
  "fields": zod.string().optional().describe('取得するフィールドを指定'),
  "filters": zod.string().optional().describe('フィルター条件')
})

export const orvalGetRamenTagsResponse = zod.object({
  "contents": zod.array(zod.object({
  "id": zod.string().describe('タグID'),
  "createdAt": zod.string().datetime({}).describe('作成日時'),
  "updatedAt": zod.string().datetime({}).describe('更新日時'),
  "publishedAt": zod.string().datetime({}).describe('公開日時'),
  "revisedAt": zod.string().datetime({}).describe('改訂日時'),
  "name": zod.string().describe('タグ名'),
  "category": zod.array(zod.enum(['type', 'area', 'feature', 'taste', 'price', 'atmosphere', 'service'])).describe('タグカテゴリ（配列形式）'),
  "description": zod.string().nullish().describe('タグの説明')
})),
  "totalCount": zod.number().nullish().describe('総件数'),
  "offset": zod.number().describe('取得開始位置'),
  "limit": zod.number().describe('取得件数の上限')
})

