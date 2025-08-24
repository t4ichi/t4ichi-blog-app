import Image from "next/image";
import type React from "react";
import type { AppScreenshot } from "../../types/apps";

export type AppsScreenshotCardProps = {
  screenshot: AppScreenshot;
};

export const AppsScreenshotCard: React.FC<AppsScreenshotCardProps> = ({
  screenshot,
}) => {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="aspect-[9/16] relative bg-muted flex items-center justify-center">
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {screenshot.title}
        </h3>
        {screenshot.description && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {screenshot.description}
          </p>
        )}
      </div>
    </div>
  );
};