import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";
import aj, { detectBot, shield } from "./lib/arcjet";


// Runtime specify karo - Edge (default) ya nodejs
// Edge: Fast but limited features
// Node.js: Full features but slightly slower
export const runtime = 'nodejs'; // ✅ Better Auth ke liye nodejs chahiye
// Arcjet validation rules
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

async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Sign-in page aur auth API routes ko completely bypass karo
  if (pathname === "/sign-in" || pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  // Non-API routes pe Arcjet protection
  if (!pathname.startsWith("/api")) {
    try {
      const decision = await validate.protect(request);

      if (decision.isDenied()) {
        return NextResponse.json(
          { error: "Forbidden", reason: decision.reason },
          { status: 403 }
        );
      }
    } catch (error) {
      console.error("Arcjet error:", error);
      // Arcjet fail ho to bhi continue karo
    }
  }

  // Auth check - sab protected routes ke liye
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    // No session - redirect to sign-in
    if (!session) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    // Session valid hai - continue
    return NextResponse.next();
  } catch (error) {
    console.error("Session error:", error);

    // Error - stale cookies clear karo aur redirect
    const response = NextResponse.redirect(new URL("/sign-in", request.url));
    response.cookies.delete("better-auth.session_token");
    response.cookies.delete("better-auth.session");

    return response;
  }
}

export default middleware;

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|assets).*)"],
};
