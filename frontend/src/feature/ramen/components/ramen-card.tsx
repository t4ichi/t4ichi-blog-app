import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Instagram, Map } from "lucide-react";
import type { Ramen } from "../types/ramen";

type RamenCardProps = {
  ramen: Ramen;
};

export function RamenCard({ ramen }: RamenCardProps) {
  const { name, visitDate, images, googleMapLink, tabelogLink, note } = ramen;

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card className="overflow-hidden h-full relative group">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={images?.[0]?.url || "/placeholder.svg"}
          alt=""
          className="object-cover transition-transform duration-300 group-hover:scale-105 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative h-full flex flex-col justify-end p-4 text-white z-10">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        {visitDate && (
          <p className="text-sm text-white/80 mb-2">{formatDate(visitDate)}</p>
        )}

        <p className="text-sm mb-3 line-clamp-2">{note}</p>

        <div className="flex gap-2 mt-auto">
          {googleMapLink && (
            <Button
              variant="outline"
              size="icon"
              className="bg-black/30 border-white/30 text-white hover:bg-white hover:text-foreground transition-colors"
              asChild
            >
              <a
                href={googleMapLink}
                target="_blank"
                rel="noopener noreferrer"
                title="Google Maps"
              >
                <Map className="h-4 w-4" />
              </a>
            </Button>
          )}

          {tabelogLink && (
            <Button
              variant="outline"
              size="icon"
              className="bg-black/30 border-white/30 text-white hover:bg-white hover:text-foreground transition-colors"
              asChild
            >
              <a
                href={tabelogLink}
                target="_blank"
                rel="noopener noreferrer"
                title="食べログ"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
