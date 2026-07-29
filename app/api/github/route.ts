import { error } from "console";
import { NextRequest,NextResponse } from "next/server";
import { GetRepoInfo ,GetRepoReadme,GetRepoCommits,GetFolderStructure, buildFolderTree ,GetCommitByDate} from "@/lib/github";
import next from "next";

export async function GET (request :NextRequest){
const SearchParams = request.nextUrl.searchParams;
const owner=SearchParams.get("owner");
const repo =SearchParams.get("repo");

if(!owner || !repo){
    return NextResponse.json( {error:"Missing owner or repo"},{status:400});
}

// const repoInfo = await GetRepoInfo(owner, repo);

// return NextResponse.json(repoInfo);

const [repoInfo , readme , commits , flodertree]= await Promise.all([
    GetRepoInfo(owner,repo),
    GetRepoReadme(owner, repo),
    GetRepoCommits(owner,repo),
    GetFolderStructure(owner,repo)
]);
const groupALLcommits= await GetCommitByDate(commits);
const folderTree=await buildFolderTree(flodertree);
return NextResponse.json({
    repoInfo ,
     readme , 
     commits:groupALLcommits ,
      folderTree
});
}