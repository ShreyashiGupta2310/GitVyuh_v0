import { error } from "console";
import { NextRequest,NextResponse } from "next/server";
import { GetRepoInfo } from "@/lib/github";

export async function GET (request :NextRequest){
const SearchParams = request.nextUrl.searchParams;
const owner=SearchParams.get("owner");
const repo =SearchParams.get("repo");

if(!owner || !repo){
    return NextResponse.json( {error:"Missing owner or repo"},{status:400});
}

const repoInfo = await GetRepoInfo(owner, repo);

return NextResponse.json(repoInfo);
}