"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import type { RamenTag, RamenTagWithCount } from "../../types";

export type RamenTagSelectorProps = {
  tags: RamenTagWithCount[];
  selectedTagIds?: string[];
  className?: string;
};

export const RamenTagSelector: React.FC<RamenTagSelectorProps> = ({
  tags,
  selectedTagIds = [],
  className = "",
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // selectedTagIdsから実際のタグオブジェクトを取得
  const selectedTags = tags.filter((tag) => selectedTagIds.includes(tag.id));

  // カテゴリ別にタグをグループ化（参照数でソート）
  const groupedTags = tags.reduce(
    (acc, tag) => {
      for (const cat of tag.category) {
        if (!acc[cat]) acc[cat] = [];
        if (!acc[cat].some((t) => t.id === tag.id)) {
          acc[cat].push(tag);
        }
      }
      return acc;
    },
    {} as Record<string, RamenTagWithCount[]>,
  );

  // 各カテゴリ内でタグを参照数順にソート
  Object.keys(groupedTags).forEach((category) => {
    groupedTags[category] = groupedTags[category].sort((a, b) => b.count - a.count);
  });

  const categoryLabels: Record<string, string> = {
    type: "種類",
    area: "エリア",
    feature: "特徴",
    taste: "味",
    price: "価格",
    atmosphere: "雰囲気",
    service: "サービス",
  };

  const categories = Object.keys(groupedTags);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const handleTagClick = (tag: RamenTag) => {
    const params = new URLSearchParams(searchParams.toString());
    const currentTags = params.get("tags")?.split(",").filter(Boolean) || [];

    const isSelected = currentTags.includes(tag.id);
    let newTags: string[];

    if (isSelected) {
      // タグを削除
      newTags = currentTags.filter((id) => id !== tag.id);
    } else {
      // タグを追加
      newTags = [...currentTags, tag.id];
    }

    // パラメータを更新
    if (newTags.length > 0) {
      params.set("tags", newTags.join(","));
    } else {
      params.delete("tags");
    }

    // ページをリセット
    params.delete("page");

    router.push(`?${params.toString()}`);
  };

  const isTagSelected = (tag: RamenTag) => {
    return selectedTags.some((t) => t.id === tag.id);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* カテゴリタブ */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          const tagCount = groupedTags[category].length;

          return (
            <button
              type="button"
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`
                px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200
                ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-gray-300"
                }
              `}
            >
              <span>{categoryLabels[category] || category}</span>
              <span className={`
                ml-2 px-2 py-0.5 text-xs rounded-full font-medium
                ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-gray-200 text-gray-600"
                }
              `}>
                {tagCount}
              </span>
            </button>
          );
        })}
      </div>

      {/* 選択されたタグ表示 */}
      {selectedTags.length > 0 && (
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
          <h4 className="text-sm font-medium text-blue-900 mb-2">
            選択中のタグ
          </h4>
          <div className="flex flex-wrap gap-2">
            {selectedTags.map((tag) => (
              <button
                type="button"
                key={tag.id}
                onClick={() => handleTagClick(tag)}
                className="px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm rounded-full border border-blue-200 transition-colors duration-200"
              >
                {tag.name} ×
              </button>
            ))}
          </div>
        </div>
      )}

      {/* タグ一覧 */}
      {selectedCategory && (
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-700">
            {categoryLabels[selectedCategory] || selectedCategory}
          </h3>
          <div className="flex flex-wrap gap-2">
            {groupedTags[selectedCategory].map((tag) => {
              const isSelected = isTagSelected(tag);

              return (
                <button
                  type="button"
                  key={tag.id}
                  onClick={() => handleTagClick(tag)}
                  className={`
                    px-3 py-2 text-sm rounded-lg transition-colors duration-200 border
                    ${
                      isSelected
                        ? "bg-gray-900 text-white border-gray-900"
                        : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    }
                  `}
                >
                  <span>{tag.name}</span>
                  {tag.count > 0 && (
                    <span className={`
                      ml-2 px-2 py-0.5 text-xs rounded-full font-medium
                      ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-gray-100 text-gray-600"
                      }
                    `}>
                      {tag.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
