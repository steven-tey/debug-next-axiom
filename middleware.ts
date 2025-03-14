import { NextRequest, NextFetchEvent, NextResponse } from "next/server";
import { Logger } from "next-axiom";

export const config = {
  matcher: "/api/:path*",
};

export default function middleware(req: NextRequest, ev: NextFetchEvent) {
  console.log("middleware running...");

  const logger = new Logger({ source: "middleware" }); // traffic, request
  logger.middleware(req);
  ev.waitUntil(logger.flush());
  console.log("logged request");

  const url = new URL("/api/links", req.url);
  console.log("rewriting to", url);

  return NextResponse.rewrite(url);
}
