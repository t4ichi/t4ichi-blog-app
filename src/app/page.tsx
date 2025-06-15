import { getRamens } from "@/features/ramen/fetchers";
import SteamingBowlColor from "@/icons/steaming_bowl_color.svg";

export default async function Home() {
  const result = await getRamens();

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <SteamingBowlColor className="w-20 h-20" />

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">ラーメンデータ</h2>
        {result.ok ? (
          <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm">
            {JSON.stringify(result.value, null, 2)}
          </pre>
        ) : (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            エラー: {result.error.message}
          </div>
        )}
      </div>
    </>
  );
}
