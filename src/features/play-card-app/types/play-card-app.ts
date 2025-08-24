import type { AppInfo } from "@/features/apps/types/apps";

export type PlayCardAppInfo = AppInfo & {
  // カード引きアプリ固有のプロパティがあれば追加
};

export type PlayCardAppUseCase = {
  title: string;
  description: string;
  icon: string;
  examples: string[];
};

export type PlayCardAppFeature = {
  title: string;
  description: string;
  icon: string;
  details?: string[];
};
