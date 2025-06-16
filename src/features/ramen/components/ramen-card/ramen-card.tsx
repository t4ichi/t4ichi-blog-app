import MapPinIcon from "@/icons/round_pushpin_color.svg";
import TabelogIcon from "@/icons/tabelog.svg";
import type { Ramen } from "../../types";

export type RamenCardProps = {
  ramen: Ramen;
};

const formatVisitDate = (dateString?: string | null) => {
  if (!dateString) return null;
  return new Date(dateString).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const getRatingStars = (rating?: number | null) => {
  if (!rating) return null;
  return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
};

const formatPrice = (price?: number | null) => {
  if (!price) return null;
  return `¥${price.toLocaleString()}`;
};

export const RamenCard: React.FC<RamenCardProps> = ({ ramen }) => {
  const visitDate = formatVisitDate(ramen.visitDate);
  const ratingStars = getRatingStars(ramen.rating);
  const formattedPrice = formatPrice(ramen.price);

  return (
    <article className="grid [grid-template-rows:subgrid] [grid-row:span_5] bg-white border border-gray-100 rounded-lg overflow-hidden transition-all duration-200 group hover:border-gray-200 hover:shadow-sm">
      {/* 画像・タイトルエリア */}
      <div className="relative">
        {ramen.images?.[0] && (
          <div className="aspect-[4/3] w-full overflow-hidden bg-gray-50">
            <img
              src={`${ramen.images[0].url}?fit=crop&w=400&h=300`}
              alt={ramen.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6 pb-3">
          <h3 className="font-semibold text-xl leading-tight text-gray-900 line-clamp-2">
            {ramen.title}
          </h3>
        </div>
      </div>

      {/* 説明文エリア */}
      <div className="px-6 pb-3">
        {ramen.description && (
          <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
            {ramen.description}
          </p>
        )}
      </div>

      {/* 訪問日エリア */}
      <div className="px-6 pb-2">
        {visitDate && (
          <time className="text-sm text-gray-500 font-medium">{visitDate}</time>
        )}
      </div>

      {/* 評価・価格・タグエリア */}
      <div className="px-6 pb-4 space-y-3">
        {/* 評価・価格 */}
        {(ratingStars || formattedPrice) && (
          <div className="space-y-1">
            {ratingStars && (
              <div className="flex items-center gap-2">
                <span
                  className="text-amber-400 text-sm font-medium"
                  title={`${ramen.rating}/5`}
                >
                  {ratingStars}
                </span>
                <span className="text-xs text-gray-500">({ramen.rating})</span>
              </div>
            )}

            {formattedPrice && (
              <div className="text-sm text-gray-700 font-medium">
                {formattedPrice}
              </div>
            )}
          </div>
        )}

        {/* タグ */}
        {ramen.tags && ramen.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {ramen.tags.map((tag) => (
              <span
                key={tag.id}
                className="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-full border border-gray-100"
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* ボタンエリア */}
      {(ramen.googleMapUrl || ramen.tabelogUrl) && (
        <footer className="p-6 pt-4 border-t border-gray-50 mt-auto">
          <div className="flex gap-2">
            {ramen.googleMapUrl && (
              <a
                href={ramen.googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-3 text-sm font-medium text-blue-700 hover:text-blue-900 hover:bg-blue-50 bg-blue-50/50 rounded-lg transition-colors duration-200 border border-blue-200 min-h-[44px]"
              >
                <MapPinIcon className="w-5 h-5 flex-shrink-0" />
                <span>地図</span>
              </a>
            )}

            {ramen.tabelogUrl && (
              <a
                href={ramen.tabelogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-3 text-sm font-medium text-orange-700 hover:text-orange-900 hover:bg-orange-50 bg-orange-50/50 rounded-lg transition-colors duration-200 border border-orange-200 min-h-[44px]"
              >
                <TabelogIcon className="w-5 h-5 flex-shrink-0" />
                <span>食べログ</span>
              </a>
            )}
          </div>
        </footer>
      )}
    </article>
  );
};
