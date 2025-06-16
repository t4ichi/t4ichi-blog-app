import MapPinIcon from "@/icons/round_pushpin_color.svg";
import TabelogIcon from "@/icons/tabelog.svg";
import Image from "next/image";
import type { Ramen } from "../../types";
import { RamenCardTag } from "../ramen-card-tag";

export type RamenCardProps = {
  ramen: Ramen;
  priority?: boolean;
};

const formatVisitDate = (dateString?: string | null) => {
  if (!dateString) return null;
  return new Date(dateString).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "numeric",
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

export const RamenCard: React.FC<RamenCardProps> = ({ ramen, priority = false }) => {
  const visitDate = formatVisitDate(ramen.visitDate);
  const ratingStars = getRatingStars(ramen.rating);
  const formattedPrice = formatPrice(ramen.price);

  return (
    <article className="grid [grid-template-rows:subgrid] [grid-row:span_5] bg-white border border-gray-100 rounded-lg overflow-hidden transition-all duration-200 group hover:border-gray-200 hover:shadow-sm">
      {/* 画像エリア */}
      <div className="relative">
        {ramen.images?.[0] && (
          <div className="aspect-[4/3] w-full overflow-hidden bg-gray-50">
            <Image
              src={`${ramen.images[0].url}?fit=crop&w=400&h=300`}
              alt={ramen.title}
              width={400}
              height={300}
              priority={priority}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* 訪問日オーバーレイ */}
            {visitDate && (
              <div className="absolute top-2 right-2 bg-black/70 rounded-md px-2 py-1">
                <div className="flex items-center gap-1">
                  <svg
                    className="w-3 h-3 text-white/80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="訪問日"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <time className="text-xs text-white font-medium">
                    {visitDate}
                  </time>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* タグエリア */}
      <div className="px-6">
        <RamenCardTag tags={ramen.tags || []} />
      </div>

      {/* タイトルエリア */}
      <div className="px-6">
        <h3 className="font-semibold text-xl leading-tight text-gray-900 line-clamp-2">
          {ramen.title}
        </h3>
      </div>

      {/* 説明文エリア */}
      <div className="px-6">
        {ramen.description && (
          <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
            {ramen.description}
          </p>
        )}
      </div>

      {/* スペーサー */}
      <div />

      {/* ボタンエリア */}
      {(ramen.googleMapUrl || ramen.tabelogUrl) && (
        <footer className="p-4 border-t border-gray-50 mt-auto">
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
