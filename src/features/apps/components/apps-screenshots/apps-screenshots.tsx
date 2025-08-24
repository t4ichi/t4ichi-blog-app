"use client";

import Image from "next/image";
import type React from "react";
import { useState } from "react";
import type { AppScreenshot } from "../../types/apps";

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
  const [selectedImage, setSelectedImage] = useState<AppScreenshot | null>(
    null,
  );

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <ScreenshotCard
              key={index}
              screenshot={screenshot}
              onClick={() => setSelectedImage(screenshot)}
            />
          ))}
        </div>
      </div>

      {/* ライトボックス */}
      {selectedImage && (
        <Lightbox
          screenshot={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
};

type ScreenshotCardProps = {
  screenshot: AppScreenshot;
  onClick: () => void;
};

const ScreenshotCard: React.FC<ScreenshotCardProps> = ({
  screenshot,
  onClick,
}) => {
  return (
    <div
      className="bg-card border border-border rounded-lg overflow-hidden cursor-pointer transition-colors hover:border-ring"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${screenshot.title}の詳細を見る`}
    >
      <div className="aspect-[9/16] relative bg-muted">
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

type LightboxProps = {
  screenshot: AppScreenshot;
  onClose: () => void;
};

const Lightbox: React.FC<LightboxProps> = ({ screenshot, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-label="スクリーンショットの拡大表示"
    >
      <div
        className="relative max-w-2xl max-h-[90vh] bg-card border border-border rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.stopPropagation();
          }
        }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
          aria-label="閉じる"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            role="img"
            aria-label="閉じる"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="aspect-[9/16] relative">
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-2">
            {screenshot.title}
          </h3>
          {screenshot.description && (
            <p className="text-muted-foreground leading-relaxed">
              {screenshot.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
