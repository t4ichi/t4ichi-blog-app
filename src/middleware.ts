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

  // /apps/play-card-app へのアクセスを play-card-app.t4ichi.dev にリダイレクト
  if (pathname.startsWith("/apps/play-card-app")) {
    const newPath = pathname.replace("/apps/play-card-app", "");
    return NextResponse.redirect(
      new URL(`${newPath}${search}`, "https://play-card-app.t4ichi.dev"),
      { status: 301 },
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/ramens/:path*", "/apps/play-card-app/:path*"],
};
