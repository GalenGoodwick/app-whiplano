// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("authToken")?.value;

  // Redirect to login if no token and trying to access private routes
  // if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  // Allow access to auth routes if not logged in
  // if (token && request.nextUrl.pathname.startsWith("/login")) {
  //   return NextResponse.redirect(new URL("/dashboard", request.url));
  // }

  return NextResponse.next();
}