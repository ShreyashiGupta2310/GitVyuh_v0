import { GetRepoInfo } from "@/lib/github";
import { GetRepoReadme } from "@/lib/github";

export default async function HealthPage() {
  // const data = await GetRepoInfo("ShreyashiGupta2310", "GitVyuh_v0");

  // return (
  //   <div>
      
  //     <h1>Health Check</h1>
  //     <p>Repo name: {data.name}</p>
  //     <p>Stars: {data.stargazers_count}</p>
  //     <p>Description: {data.description}</p>
  //   </div>
  // );

  const readme = await  GetRepoReadme("ShreyashiGupta2310", "GitVyuh_v0");

  return (
    <div>
      <h1>Health Check</h1>
      <pre>{readme}</pre>
    </div>
  );
}