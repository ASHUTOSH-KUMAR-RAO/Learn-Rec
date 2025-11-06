import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import aj, { createMiddleware, detectBot, shield } from "./lib/arcjet";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Root route ko handle karo
  if (pathname === "/") {
    if (!session) {
      // Logged out hai toh sign-in pe bhejo
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
    // Agar logged in hai toh / pe hi rehne do
    return NextResponse.next();
  }

  // Baaki protected routes ke liye - agar session nahi hai toh sign-in pe bhejo
  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

const validate = aj
  .withRule(
    shield({
      mode: "LIVE",
    })
  )
  .withRule(
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE", "G00G1E_CRAWLER"],
    })
  );

export default createMiddleware(validate);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sign-in|assets).*)"],
};
