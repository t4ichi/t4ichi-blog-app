import type React from "react";
import type { AppScreenshot } from "../../types/apps";
import { AppsScreenshotCard } from "../apps-screenshot-card";

export type AppsScreenshotsProps = {
  screenshots: AppScreenshot[];
  title?: string;
  className?: string;
};

export const AppsScreenshots: React.FC<AppsScreenshotsProps> = ({
  screenshots,
  title = "アプリの画面",
  className = "",
}) => {
  if (screenshots.length === 0) {
    return null;
  }

  return (
    <section className={`py-16 bg-muted ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            アプリの主な機能をスクリーンショットでご紹介します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
          {screenshots.map((screenshot, index) => (
            <AppsScreenshotCard key={index} screenshot={screenshot} />
          ))}
        </div>
      </div>
    </section>
  );
};
