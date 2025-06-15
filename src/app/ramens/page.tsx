import { RamenTagSelector } from "@/features/ramen-tag/components/ramen-tag-selector";
import { getRamenTags } from "@/features/ramen-tag/fetchers";
import { RamenList } from "@/features/ramen/components/ramen-list";
import { RamenSearchForm } from "@/features/ramen/components/ramen-search-form";
import { getRamens } from "@/features/ramen/fetchers";
import SteamingBowlColor from "@/icons/steaming_bowl_color.svg";
import { z } from "zod";

const searchParamsSchema = z.object({
  q: z.string().optional().catch(undefined), // 検索キーワード
  tags: z.string().optional().catch(undefined), // タグID（カンマ区切り文字列）
  page: z.coerce.number().int().positive().optional().catch(undefined), // ページ番号（正の整数、将来対応）
});

type SearchParams = z.infer<typeof searchParamsSchema>;

type RamensPageProps = {
  searchParams: Promise<Partial<SearchParams>>;
};

export default async function RamensPage({ searchParams }: RamensPageProps) {
  const { q, tags, page = 1 } = searchParamsSchema.parse(await searchParams);

  const tagIds = tags ? tags.split(",").filter(Boolean) : [];

  const searchFilters = [];

  // タグによるフィルタリング
  if (tagIds.length > 0) {
    searchFilters.push(`tags[contains]${tagIds.join(",")}`);
  }

  const [ramenResult, tagsResult] = await Promise.all([
    getRamens({
      limit: 30,
      orders: "-visitDate",
      ...(q && { q }), // 検索キーワード
      ...(searchFilters.length > 0 && { filters: searchFilters.join("[and]") }), // フィルター条件
    }),
    getRamenTags({ limit: 100 }),
  ]);

  // エラーハンドリング
  if (!ramenResult.ok) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center">
            <div className="text-gray-900 text-lg mb-3">
              ラーメンデータの取得でエラーが発生しました
            </div>
            <p className="text-gray-600 text-sm">{ramenResult.error.message}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!tagsResult.ok) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center">
            <div className="text-gray-900 text-lg mb-3">
              タグデータの取得でエラーが発生しました
            </div>
            <p className="text-gray-600 text-sm">{tagsResult.error.message}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <header className="py-4 text-center border-b border-gray-100">
          <div className="flex justify-center ">
            <SteamingBowlColor className="w-16 h-16 opacity-80" />
          </div>
        </header>

        <main className="py-8">
          {/* 検索フォーム */}
          <div className="space-y-6 mb-8">
            <RamenSearchForm defaultValue={q} className="max-w-2xl mx-auto" />

            <RamenTagSelector
              tags={tagsResult.value.contents}
              selectedTagIds={tagIds}
            />
          </div>

          {/* 検索結果表示 */}
          {(q || tagIds.length > 0) && (
            <div className="mb-6 text-center">
              <div className="text-sm text-gray-600">
                {q && <span>キーワード: 「{q}」</span>}
                {q && tagIds.length > 0 && <span className="mx-2">•</span>}
                {tagIds.length > 0 && (
                  <span>選択中のタグ: {tagIds.length}個</span>
                )}
              </div>
            </div>
          )}

          <RamenList ramens={ramenResult.value.contents} />
        </main>
      </div>
    </div>
  );
}
