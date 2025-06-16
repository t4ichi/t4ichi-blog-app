"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { RamenTag } from "../../types";

export type RamenCardTagProps = {
  tags: RamenTag[];
};

export const RamenCardTag: React.FC<RamenCardTagProps> = ({ tags }) => {
  const searchParams = useSearchParams();

  const handleTagClick = (tagId: string) => {
    const currentTags = searchParams.get("tags");
    const currentTagIds = currentTags ? currentTags.split(",") : [];

    // タグIDが既に選択されている場合は除外、そうでなければ追加
    let newTagIds: string[];
    if (currentTagIds.includes(tagId)) {
      newTagIds = currentTagIds.filter((id) => id !== tagId);
    } else {
      newTagIds = [...currentTagIds, tagId];
    }

    // 新しいURLパラメータを構築
    const newParams = new URLSearchParams(searchParams);
    if (newTagIds.length > 0) {
      newParams.set("tags", newTagIds.join(","));
    } else {
      newParams.delete("tags");
    }

    return `/ramens?${newParams.toString()}`;
  };

  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        const currentTags = searchParams.get("tags");
        const currentTagIds = currentTags ? currentTags.split(",") : [];
        const isSelected = currentTagIds.includes(tag.id);

        return (
          <Link
            key={tag.id}
            href={handleTagClick(tag.id)}
            className={`px-3 py-1 text-xs font-medium rounded-full border transition-all duration-200 ${
              isSelected
                ? "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200 hover:border-blue-300"
                : "bg-gray-50 text-gray-700 border-gray-100 hover:bg-gray-100 hover:border-gray-200"
            }`}
          >
            {tag.name}
          </Link>
        );
      })}
    </div>
  );
};
