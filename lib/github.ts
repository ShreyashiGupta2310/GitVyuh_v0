export async function GetRepoInfo(owner:string, repo:string) {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`,{
        headers: {
            'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
        },
        method: 'GET'
    });
    
    const data= await response.json();
    return data;
}
