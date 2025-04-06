import type { Ramen } from "../types/ramen";
import { RamenCard } from "./ramen-card";

interface RamenListProps {
  items: Ramen[];
}

export function RamenList({ items }: RamenListProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
        {items.map((ramen) => (
          <div key={ramen.id} className="aspect-[4/5]">
            <RamenCard ramen={ramen} />
          </div>
        ))}
      </div>
    </>
  );
}
