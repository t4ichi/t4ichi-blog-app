import FishCakeWithSwirlColor from "@/icons/fish_cake_with_swirl_color.svg";
import SteamingBowlColor from "@/icons/steaming_bowl_color.svg";
import Link from "next/link";
import type { Ramen } from "../../types";
import { RamenCard } from "../ramen-card";

export type RamenListProps = {
  ramens: Ramen[];
};

export const RamenList: React.FC<RamenListProps> = ({ ramens }) => {
  if (ramens.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="space-y-6">
          {/* Icon */}
          <div className="flex justify-center">
            <FishCakeWithSwirlColor className="w-20 h-20 opacity-80" />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-gray-900">
              条件に合うラーメンが見つかりませんでした。
            </h3>
            <p className="text-sm text-gray-500 max-w-md mx-auto">
              検索条件やタグの選択を変更して、再度お試しください。
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-4 [grid-template-rows:repeat(auto-fit,auto_auto_min-content_min-content_auto)] items-start">
      {ramens.map((ramen, index) => (
        <RamenCard key={ramen.id} ramen={ramen} priority={index < 3} />
      ))}
    </div>
  );
};
