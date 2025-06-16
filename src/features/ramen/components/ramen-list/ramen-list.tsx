import type { Ramen } from "../../types";
import { RamenCard } from "../ramen-card";

export type RamenListProps = {
  ramens: Ramen[];
};

export const RamenList: React.FC<RamenListProps> = ({ ramens }) => {
  if (ramens.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-gray-500 text-lg leading-relaxed">
          まだラーメンの記録がありません
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-4 [grid-template-rows:repeat(auto-fit,auto_auto_min-content_min-content_auto)] items-start">
      {ramens.map((ramen) => (
        <RamenCard key={ramen.id} ramen={ramen} />
      ))}
    </div>
  );
};
