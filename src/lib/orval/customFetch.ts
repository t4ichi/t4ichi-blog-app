import { env } from "@/config/env";

// NOTE: Supports cases where `content-type` is other than `json`
const getBody = <T>(c: Response | Request): Promise<T> => {
  const contentType = c.headers.get("content-type");

  if (contentType?.includes("application/json")) {
    return c.json();
  }

  if (contentType?.includes("application/pdf")) {
    return c.blob() as Promise<T>;
  }

  return c.text() as Promise<T>;
};

// NOTE: Update just base url
const getUrl = (contextUrl: string): string => {
  // MicroCMSのAPIベースURL
  const baseUrl = `https://${env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1`;

  // contextUrlが相対パスの場合はそのまま使用、絶対URLの場合はパスのみ抽出
  if (contextUrl.startsWith("/")) {
    return `${baseUrl}${contextUrl}`;
  }

  try {
    const url = new URL(contextUrl);
    return `${baseUrl}${url.pathname}${url.search}`;
  } catch {
    // URLのパースに失敗した場合は相対パスとして扱う
    return `${baseUrl}/${contextUrl}`;
  }
};

// NOTE: Add headers
const getHeaders = (headers?: HeadersInit): HeadersInit => {
  return {
    ...headers,
    "X-MICROCMS-API-KEY": env.MICROCMS_API_KEY,
    "Content-Type": "application/json",
  };
};

export const customFetch = async <T>(
  url: string,
  options: RequestInit,
): Promise<T> => {
  const requestUrl = getUrl(url);
  const requestHeaders = getHeaders(options.headers);

  const requestInit: RequestInit = {
    ...options,
    headers: requestHeaders,
  };

  const response = await fetch(requestUrl, requestInit);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await getBody<T>(response);

  return data;
};
