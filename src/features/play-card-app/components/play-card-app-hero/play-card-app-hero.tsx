import { AppsDownloadButtons } from "@/features/apps/components/apps-download-buttons";
import { AppsHero } from "@/features/apps/components/apps-hero";
import type React from "react";
import { PLAY_CARD_APP_INFO } from "../../constants/play-card-app";

export type PlayCardAppHeroProps = {
  showDownloadButtons?: boolean;
  className?: string;
};

export const PlayCardAppHero: React.FC<PlayCardAppHeroProps> = ({
  showDownloadButtons = true,
  className = "",
}) => {
  return (
    <AppsHero
      name={PLAY_CARD_APP_INFO.name}
      subtitle={PLAY_CARD_APP_INFO.subtitle}
      description={PLAY_CARD_APP_INFO.description}
      iconImage="/images/apps/play-card-app/app-icon.png"
      className={className}
    >
      {showDownloadButtons && (
        <AppsDownloadButtons appStoreUrl={PLAY_CARD_APP_INFO.appStoreUrl} />
      )}
    </AppsHero>
  );
};
