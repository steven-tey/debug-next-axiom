import { withAxiom } from "next-axiom";
import { NextRequest, NextResponse } from "next/server";

export const POST = withAxiom(
  async (req: NextRequest) => {
    const { url } = await parseRequestBody(req);
    return NextResponse.json({ message: url }, { status: 200 });
  },
  {
    logRequestDetails: ["nextUrl", "body"],
  }
);

const parseRequestBody = async (req: Request) => {
  try {
    return await req.json();
  } catch (e) {
    console.error(e);
    throw new Error(
      `Invalid JSON format in request body. Please ensure the request body is a valid JSON object. ${e}`
    );
  }
};
