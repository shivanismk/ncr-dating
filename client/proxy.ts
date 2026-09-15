import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Admin login page ko public rakho
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  // Sirf /admin/* routes protect karo
  if (pathname.startsWith("/admin")) {
    const adminToken = request.cookies.get("adminToken")?.value;

    // Token nahi hai → login page
    if (!adminToken) {
      const loginUrl = new URL("/admin/login", request.url);

      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};