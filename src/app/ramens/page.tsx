import { RamenList } from "@/features/ramen/components/ramen-list";
import { getRamens } from "@/features/ramen/fetchers";
import SteamingBowlColor from "@/icons/steaming_bowl_color.svg";

export default async function RamensPage() {
  const result = await getRamens({
    limit: 30,
    orders: "-visitDate",
  });

  if (!result.ok) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center">
            <div className="text-gray-900 text-lg mb-3">
              エラーが発生しました
            </div>
            <p className="text-gray-600 text-sm">{result.error.message}</p>
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
          <RamenList ramens={result.value.contents} />
        </main>
      </div>
    </div>
  );
}
