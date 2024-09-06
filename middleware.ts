import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname === "/ec-report/student" ||
    pathname === "/ec-report/counselor"
  ) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/ec-report/student", request.url));
}

export const config = {
  matcher: ["/"],
};
