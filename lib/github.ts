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

export async function GetRepoReadme(owner:string, repo:string) {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`,{
        headers: {
            'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
        },
     
    });
    const data = await response.json();
    const decodedContent = Buffer.from(data.content, "base64").toString("utf-8");
  
    return decodedContent;
}