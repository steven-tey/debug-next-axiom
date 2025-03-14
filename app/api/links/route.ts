import { withAxiom } from "next-axiom";
import { NextRequest, NextResponse } from "next/server";

export const POST = withAxiom(
  async (req: NextRequest) => {
    try {
      const { url } = await req.json();
      return NextResponse.json({ message: url }, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: error }, { status: 500 });
    }
  },
  {
    logRequestDetails: ["nextUrl", "body"],
  }
);
