export default async function HealthPage() {
  const response = await fetch("https://api.github.com/users/octocat");
  const data = await response.json();

  return (
    <div>
      <h1>Health Check</h1>
      <p>Fetched user: {data.login}</p>
      <p>Public repos: {data.public_repos}</p>
    </div>
  );
}