import { NextRequest, NextResponse } from "next/server";
import { analyzeRepo } from "@/lib/ai";
import { isRateLimited } from "@/lib/rateLimit";

export async function POST(request: NextRequest) {

    const ip = request.headers.get("x-forwarded-for") || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a minute and try again." },
      { status: 429 }
    );
  }

    const body = await request.json();

    if(!body.repoInfo || !body.readme) {
        return NextResponse.json(
            { error: "Missing repo data " },
            { status: 400 });
        
        }

        const analysis = await analyzeRepo(body)

        return NextResponse.json({ blocks:analysis});
}

