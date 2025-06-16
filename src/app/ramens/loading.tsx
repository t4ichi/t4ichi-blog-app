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
            <div className="max-w-2xl mx-auto">
              <div className="h-10 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="h-20 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>

          {/* ラーメンリスト */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }, (_, index) => (
              <div
                key={`loading-skeleton-${index}`}
                className="bg-gray-200 rounded-lg h-80 animate-pulse"
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
