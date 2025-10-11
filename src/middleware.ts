import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // /ramens へのアクセスを ramens.t4ichi.dev にリダイレクト
  if (pathname.startsWith("/ramens")) {
    return NextResponse.redirect(
      new URL(`${pathname}${search}`, "https://ramens.t4ichi.dev"),
      { status: 301 },
    );
  }

  // /apps へのアクセスを apps.t4ichi.dev にリダイレクト
  // /apps/play-card-app → /play-card-app
  if (pathname.startsWith("/apps")) {
    const newPath = pathname.replace("/apps", "");
    return NextResponse.redirect(
      new URL(`${newPath}${search}`, "https://apps.t4ichi.dev"),
      { status: 301 },
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/ramens/:path*", "/apps/:path*"],
};
