import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("authToken")?.value;
  const hasOnboarded = request.cookies.get("hasOnboarded")?.value === "true";
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static")
  ) {
    return NextResponse.next();
  }

  if (
    !token &&
    (pathname.startsWith("/dashboard") || pathname.startsWith("/onboarding"))
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && !hasOnboarded && pathname !== "/onboarding") {
    return NextResponse.redirect(new URL("/onboarding", request.url));
  }

  if (token && hasOnboarded && pathname === "/onboarding") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  return NextResponse.next();
}

// ✅ Apply middleware only to relevant pages
export const config = {
  matcher: ["/dashboard/:path*", "/onboarding", "/login"],
};
