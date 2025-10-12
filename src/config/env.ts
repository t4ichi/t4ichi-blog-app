import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * サーバーサイドの環境変数
   */
  server: {
    MICROCMS_API_KEY: z
      .string()
      .min(1, "MicroCMS API キーが設定されていません"),
    MICROCMS_SERVICE_DOMAIN: z
      .string()
      .min(1, "MicroCMS サービスドメインが設定されていません"),
    SITE_URL: z.string().url().default("https://t4ichi.dev"),
  },

  /**
   * クライアントサイドの環境変数
   * NEXT_PUBLIC_ プレフィックスが必要
   */
  client: {
    // 現在はクライアントサイドで使用する環境変数はありません
  },

  /**
   * 実行時の環境変数を指定
   * これにより、process.env の値が検証されます
   */
  runtimeEnv: {
    MICROCMS_API_KEY: process.env.MICROCMS_API_KEY,
    MICROCMS_SERVICE_DOMAIN: process.env.MICROCMS_SERVICE_DOMAIN,
    SITE_URL: process.env.SITE_URL,
  },

  /**
   * 本番環境以外で未設定の変数をスキップ
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
