import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Instagram, Map } from "lucide-react";
import type { RamenShop } from "../types/ramen-shop";

interface RamenCardProps {
  shop: RamenShop;
}

export function RamenCard({ shop }: RamenCardProps) {
  const {
    name,
    visitDate,
    imageUrl,
    googleMapsUrl,
    instagramUrl,
    taberoguUrl,
    notes,
    tags,
  } = shop;

  const formatDate = (dateString: string) => {
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
          src={imageUrl || "/placeholder.svg"}
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

        <p className="text-sm mb-3 line-clamp-2">{notes}</p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-white/20 hover:bg-white/30 text-white"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <div className="flex gap-2 mt-auto">
          {googleMapsUrl && (
            <Button
              variant="outline"
              size="icon"
              className="bg-black/30 border-white/30 text-white hover:bg-white hover:text-foreground transition-colors"
              asChild
            >
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Google Maps"
              >
                <Map className="h-4 w-4" />
              </a>
            </Button>
          )}

          {instagramUrl && (
            <Button
              variant="outline"
              size="icon"
              className="bg-black/30 border-white/30 text-white hover:bg-white hover:text-foreground transition-colors"
              asChild
            >
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </Button>
          )}

          {taberoguUrl && (
            <Button
              variant="outline"
              size="icon"
              className="bg-black/30 border-white/30 text-white hover:bg-white hover:text-foreground transition-colors"
              asChild
            >
              <a
                href={taberoguUrl}
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
