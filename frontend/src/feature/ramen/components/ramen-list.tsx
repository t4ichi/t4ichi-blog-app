import type { RamenShop } from "../types/ramen-shop";
import { RamenCard } from "./ramen-card";

interface RamenListProps {
  shops: RamenShop[];
}

export function RamenList({ shops }: RamenListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
      {shops.map((shop) => (
        <div key={shop.id} className="aspect-[4/5]">
          <RamenCard shop={shop} />
        </div>
      ))}
    </div>
  );
}
