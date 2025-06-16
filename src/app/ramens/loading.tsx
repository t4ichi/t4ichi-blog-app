export default function Loading() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <header className="py-4 text-center border-b border-gray-100">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full animate-pulse" />
          </div>
        </header>

        <main className="py-8">
          {/* 検索フォーム */}
          <div className="space-y-6 mb-8">
            {/* 検索入力フィールド */}
            <div className="h-12 bg-gray-200 rounded-lg animate-pulse" />

            {/* タグセレクター */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <div
                    key={`category-skeleton-${index}`}
                    className="h-10 w-20 bg-gray-200 rounded-lg animate-pulse"
                  />
                ))}
              </div>
            </div>

            {/* ソートセレクター */}
            <div className="flex justify-end">
              <div className="h-10 w-32 bg-gray-200 rounded-lg animate-pulse" />
            </div>
          </div>

          {/* ラーメンリスト */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-4">
            {Array.from({ length: 12 }, (_, index) => (
              <div
                key={`loading-skeleton-${index}`}
                className="bg-white border border-gray-100 rounded-lg overflow-hidden animate-pulse"
              >
                {/* 画像エリア */}
                <div className="aspect-[4/3] bg-gray-200" />

                {/* タグエリア */}
                <div className="px-6 pt-6">
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 2 }, (_, tagIndex) => (
                      <div
                        key={`tag-skeleton-${tagIndex}`}
                        className="h-6 w-16 bg-gray-200 rounded-full"
                      />
                    ))}
                  </div>
                </div>

                {/* タイトルエリア */}
                <div className="px-6 pt-3">
                  <div className="h-6 bg-gray-200 rounded w-3/4" />
                </div>

                {/* 説明文エリア */}
                <div className="px-6 pt-3">
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded" />
                    <div className="h-4 bg-gray-200 rounded w-2/3" />
                  </div>
                </div>

                {/* 訪問日エリア */}
                <div className="px-6 pt-3 pb-6">
                  <div className="h-4 bg-gray-200 rounded w-24 ml-auto" />
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
