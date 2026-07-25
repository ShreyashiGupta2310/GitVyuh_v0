import { GetRepoInfo } from "@/lib/github";

export default async function HealthPage() {
  const data = await GetRepoInfo("ShreyashiGupta2310", "GitVyuh_v0");

  return (
    <div>
      
      <h1>Health Check</h1>
      <p>Repo name: {data.name}</p>
      <p>Stars: {data.stargazers_count}</p>
      <p>Description: {data.description}</p>
    </div>
  );
}