import { Pagination } from "@/components/pagination";
import { RamenTagSelector } from "@/features/ramen-tag/components/ramen-tag-selector";
import { getRamenTags } from "@/features/ramen-tag/fetchers";
import { RamenList } from "@/features/ramen/components/ramen-list";
import { RamenSearchForm } from "@/features/ramen/components/ramen-search-form";
import { RamenSortSelector } from "@/features/ramen/components/ramen-sort-selector";
import { getRamens } from "@/features/ramen/fetchers";
import SteamingBowlColor from "@/icons/steaming_bowl_color.svg";
import type { Metadata } from "next";
import { z } from "zod";

// Cloudflare Pages対応設定
export const runtime = "edge";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Ramen | taichi no heya",
  description: "ラーメン食べ歩き記録。各店舗の記録と写真を掲載しています。",
  openGraph: {
    title: "Ramen | taichi no heya",
    description: "ラーメン食べ歩き記録。各店舗の記録と写真を掲載しています。",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ramen | taichi no heya",
    description:
      "ラーメン食べ歩き記録。各店舗の訪問記録と写真を掲載しています。",
  },
};

const searchParamsSchema = z.object({
  q: z.string().optional().catch(undefined), // 検索キーワード
  tags: z.string().optional().catch(undefined), // タグID（カンマ区切り文字列）
  page: z.coerce.number().int().positive().optional().catch(undefined), // ページ番号（正の整数、将来対応）
  sort: z.enum(["asc", "desc"]).optional().catch(undefined), // ソート順（asc: 古い順, desc: 新しい順）
});

type SearchParams = z.infer<typeof searchParamsSchema>;

type RamensPageProps = {
  searchParams: Promise<Partial<SearchParams>>;
};

export default async function RamensPage({ searchParams }: RamensPageProps) {
  // Edge Runtime用のエラーハンドリング付きでsearchParamsを解析
  let parsedParams: SearchParams;
  try {
    const awaitedSearchParams = await searchParams;
    parsedParams = searchParamsSchema.parse(awaitedSearchParams);
  } catch (error) {
    console.error("SearchParams parsing error:", error);
    parsedParams = { q: undefined, tags: undefined, page: undefined };
  }

  const { q, tags, page = 1, sort = "desc" } = parsedParams;

  const tagIds: string[] = tags ? tags.split(",").filter(Boolean) : [];

  const searchFilters = [];

  // タグによるフィルタリング（AND検索）
  if (tagIds.length > 0) {
    // AND検索：すべてのタグIDを含むもの
    const andConditions = tagIds.map((tagId) => `tags[contains]${tagId}`);
    searchFilters.push(andConditions.join("[and]"));
  }

  // ページネーション用の設定
  const limit = 12; // 1ページあたりの表示件数
  const offset = (page - 1) * limit;

  // ソート順の設定
  const orderBy = sort === "asc" ? "visitDate" : "-visitDate";

  const [ramenResult, tagsResult] = await Promise.all([
    getRamens({
      limit,
      offset,
      orders: orderBy,
      q: q?.trim() || undefined,
      filters: searchFilters.length > 0 ? searchFilters.join("&") : undefined,
    }),
    getRamenTags({ limit: 100 }),
  ]);

  // ページネーション情報の計算
  const totalCount = ramenResult.ok ? (ramenResult.value.totalCount ?? 0) : 0;
  const totalPages = Math.ceil(totalCount / limit);

  // 件数表示の計算
  const startItem = totalCount > 0 ? (page - 1) * limit + 1 : 0;
  const endItem = Math.min(page * limit, totalCount);

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
          <div className="flex justify-center">
            <SteamingBowlColor className="w-16 h-16 opacity-80" />
          </div>
        </header>

        <main className="py-8">
          {/* 検索フォーム */}
          <div className="space-y-6 mb-8">
            <RamenSearchForm />
            <RamenTagSelector
              tags={tagsResult.value.contents}
              selectedTagIds={tagIds}
            />
            <div className="flex justify-end">
              <RamenSortSelector />
            </div>

            {/* 表示件数*/}
            {totalPages > 1 && (
              <div className="text-center text-sm text-gray-600">
                {totalCount > 0
                  ? `${totalCount}件中 ${startItem}~${endItem}件を表示`
                  : "0件"}
              </div>
            )}
          </div>

          <RamenList ramens={ramenResult.value.contents} />

          {/* ページネーション */}
          {totalPages > 1 && (
            <div className="mt-12 space-y-4">
              {/* 表示件数*/}
              <div className="text-center text-sm text-gray-600">
                {totalCount > 0
                  ? `${totalCount}件中 ${startItem}~${endItem}件を表示`
                  : "0件"}
              </div>
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                totalCount={totalCount}
                limit={limit}
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
