/**
 * 画像URL最適化ユーティリティ
 * MicroCMSの画像URLにWebP/AVIFフォーマットパラメータを追加
 */

export type ImageFormat = 'webp' | 'avif' | 'auto';

export type ImageOptimizationOptions = {
  width?: number;
  height?: number;
  fit?: 'crop' | 'fill' | 'scale' | 'crop-top' | 'crop-bottom';
  format?: ImageFormat;
  quality?: number;
};

/**
 * MicroCMS画像URLを最適化
 */
export function optimizeMicroCMSImage(
  url: string,
  options: ImageOptimizationOptions = {}
): string {
  const {
    width,
    height,
    fit = 'crop',
    format = 'webp',
    quality = 80,
  } = options;

  const params = new URLSearchParams();
  
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  params.set('fit', fit);
  params.set('fm', format);
  params.set('q', quality.toString());

  return `${url}?${params.toString()}`;
}

/**
 * レスポンシブ画像のsrcSetを生成
 */
export function generateSrcSet(
  url: string,
  widths: number[],
  options: Omit<ImageOptimizationOptions, 'width'> = {}
): string {
  return widths
    .map(width => {
      const optimizedUrl = optimizeMicroCMSImage(url, {
        ...options,
        width,
      });
      return `${optimizedUrl} ${width}w`;
    })
    .join(', ');
}