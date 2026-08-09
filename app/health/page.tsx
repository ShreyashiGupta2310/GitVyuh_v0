import { GetRepoInfo } from "@/lib/github";
import { GetRepoReadme } from "@/lib/github";
import { GetRepoCommits } from "@/lib/github";
import { GetCommitByDate } from "@/lib/github";
import {GetFolderStructure} from "@/lib/github";
import { buildFolderTree } from "@/lib/github";
import { analyzeRepo, } from "@/lib/ai";
import TechStackBadges from "@/components/TechStackBadges";
import ScoreCard from "@/components/ScoreCard";
import ReadmeCard from "@/components/ReadmeCard";
import ErrorState from "@/components/ErrorState";


// export default async function HealthPage() {
  // const data = await GetRepoInfo("ShreyashiGupta2310", "GitVyuh_v0");

  // return (
  //   <div>
      
  //     <h1>Health Check</h1>
  //     <p>Repo name: {data.name}</p>
  //     <p>Stars: {data.stargazers_count}</p>
  //     <p>Description: {data.description}</p>
  //   </div>
  // );

  // const readme = await  GetRepoReadme("ShreyashiGupta2310", "GitVyuh_v0");

  // return (
  //   <div>
  //     <h1>Health Check</h1>
  //     <pre>{readme}</pre>
  //   </div>
  // );



  // I should put some logic to get a clear and concise health check of commits
  // const commits = await GetRepoCommits("ShreyashiGupta2310", "GitVyuh_v0");
  // return (
  //   <div>
  //     <h1>Health Check</h1>
  //     <pre>{JSON.stringify(commits, null, 2)}</pre>
  //   </div>
  // );

  // const commits = await GetRepoCommits("ShreyashiGupta2310", "GitVyuh_v0");
  
  // const commitByDate = await  GetCommitByDate(commits);
  // return (
  //   <div>
  //     <h1>Health Check</h1>
  //     <pre>{JSON.stringify(commitByDate, null, 2)}</pre>
  //   </div>
  // );

//Testing the flat-fetch
  // const tree = await GetFolderStructure("ShreyashiGupta2310", "GitVyuh_v0");
  // return (
  //   <div>
  //     <h1>Health Check</h1>
  //     <pre>{JSON.stringify(tree, null, 2)}</pre>
  //   </div>
  // );



  //flat-list


    // const flatList = await GetFolderStructure("ShreyashiGupta2310", "GitVyuh_v0");
    // const tree = buildFolderTree(flatList);
  
    // return (
    //   <div>
    //     <h1>Health Check</h1>
    //     <pre>{JSON.stringify(tree, null, 2)}</pre>
    //   </div>
    // );

  //   const flatList = await GetFolderStructure("ShreyashiGupta2310", "GitVyuh_v0");

  // return (
  //   <div>
  //     <h1>Health Check</h1>
  //     <pre>{JSON.stringify(flatList, null, 2)}</pre>
  //   </div>
  // );




  //checking the ai
  // const text = await generateText("Hello, how are you?");
  // return (
  //   <div>
  //     <h1>Health Check</h1>
  //     <p>{text}</p>
  //   </div>
  // );
  // }



  // export default async function HealthPage() {
  //   const repoInfo = await GetRepoInfo("ShreyashiGupta2310", "GitVyuh_v0");
  //   const readme = await GetRepoReadme("ShreyashiGupta2310", "GitVyuh_v0");
  //   const commits = await GetRepoCommits("ShreyashiGupta2310", "GitVyuh_v0");
  //   const groupedCommits = GetCommitByDate(commits);
  //   const flatTree = await GetFolderStructure("ShreyashiGupta2310", "GitVyuh_v0");
  //   const folderTree = buildFolderTree(flatTree);
  
  //   const analysis = await analyzeRepo({
  //     repoInfo,
  //     readme,
  //     commits: groupedCommits,
  //     folderTree,
  //   });
  
  //   return (
  //     <div>
  //       <h1>Health Check</h1>
  //       <pre>{JSON.stringify(analysis, null, 2)}</pre>
  //     </div>
  //   );
  // }


  // testing the tech stack badges

  // export default function HealthPage() {
  //   const fakeData = {
  //     languages: ["TypeScript", "JavaScript", "CSS"],
  //   };
  
  //   return (
  //     <div>
  //       <h1>Health Check</h1>
  //       <TechStackBadges data={fakeData} />
  //     </div>
  //   );
  // }



  // testing the score card
  // export default function HealthPage() {
  //   const fakeData = {
  //     score: 25,
  //     verdict: "Well-organized repository with clear documentation.",
  //   };
  
  //   return (
  //     <div>
  //       <h1>Health Check</h1>
  //       <ScoreCard data={fakeData} />
  //     </div>
  //   );
  // }

  // testing the readme card
  // export default function HealthPage() {
  //   const fakeData = {
  //     feedback: "The README is minimal and could use more detail.",
  //     missingSections: ["Installation", "Usage Examples", "License"]
  //    // missingSections: [],
  //   };
  
  //   return (
  //     <div>
  //       <h1>Health Check</h1>
  //       <ReadmeCard data={fakeData} />
  //     </div>
  //   );
  // }
  
  //testing error state
  export default function HealthPage() {
    const fakeDataPrivate = {
      reason: "private" as const,
      message: "This repository is private. Please make it public to analyze it.",
    };
  
    const fakeDataEmpty = {
      reason: "empty" as const,
      message: "This repository has no files to analyze.",
    };
  
    const fakeDataRateLimited = {
      reason: "rate-limited" as const,
      message: "GitHub API rate limit reached. Please try again later.",
    };
  
    const fakeDataInvalid = {
      reason: "invalid" as const,
      message: "This doesn't appear to be a valid GitHub repository URL.",
    };
  
    return (
      <div className="p-6 space-y-4">
        <h1>Health Check</h1>
        <ErrorState data={fakeDataPrivate} />
        <ErrorState data={fakeDataEmpty} />
        <ErrorState data={fakeDataRateLimited} />
        <ErrorState data={fakeDataInvalid} />
      </div>
    );
  }