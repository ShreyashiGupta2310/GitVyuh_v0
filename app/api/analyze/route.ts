import { NextRequest, NextResponse } from "next/server";
import { analyzeRepo } from "@/lib/ai";

export async function POST(request: NextRequest) {
    const body = await request.json();

    if(!body.repoInfo || !body.readme) {
        return NextResponse.json(
            { error: "Missing repo data " },
            { status: 400 });
        
        }

        const analysis = await analyzeRepo(body)

        return NextResponse.json({ blocks:analysis});
}