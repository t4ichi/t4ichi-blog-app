"use client";

import { ChevronDown } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export const RamenSortSelector: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") || "desc";

  const handleSortChange = (newSort: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (newSort === "desc") {
      newParams.delete("sort"); // デフォルト値の場合はパラメータを削除
    } else {
      newParams.set("sort", newSort);
    }

    router.push(`/ramens?${newParams.toString()}`);
  };

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <select
          id="sort-select"
          value={currentSort}
          onChange={(e) => handleSortChange(e.target.value)}
          className="px-3 py-2 pr-8 text-sm border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none"
        >
          <option value="desc">新しい順</option>
          <option value="asc">古い順</option>
        </select>
        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
};
