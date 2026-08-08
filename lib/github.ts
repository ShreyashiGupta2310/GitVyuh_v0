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
    if(!data.content) {
        return "No README file found in this repository.";
    }
    const decodedContent = Buffer.from(data.content, "base64").toString("utf-8");
  
    return decodedContent;
}
export async function GetRepoCommits(owner:string, repo:string) {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits`,{
        headers: {
            'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
        },
    
    });
    const data = await response.json();
    return data;

}
//Logic 
export async function GetCommitByDate(commits : any[]) {
    const count :Record<string, number> = {};
    for (const commit of commits) {
       const date = new Date(commit.commit.author.date).toISOString().split('T')[0];
       count[date] = (count[date] || 0) + 1;
    }
    return Object.entries(count).map(([date, count]) => ({ date, count }));

}

export async function GetFolderStructure(owner:string, repo:string) {
    const response = await fetch(
        //`https://api.github.com/repos/${owner}/${repo}/contents`
        `https://api.github.com/repos/${owner}/${repo}/git/trees/main?recursive=1`,{
        headers: {
            'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
        },
    });
    const data = await response.json();
    return data.tree;
}

// Logic is in project copy (I described on paper how to come up with this logic)
export function buildFolderTree(flatList: any[]) {
    const root: any = { name: "root", type: "folder", children: [] };
  
    for (const item of flatList) {
      const parts = item.path.split("/");
      let current = root;
  
      for (const part of parts) {
        let existing = current.children.find((child: any) => child.name === part);
  
        if (!existing) {
          existing = {
            name: part,
            type: item.type === "blob" && part === parts[parts.length - 1] ? "file" : "folder",
            children: [],
          };
          current.children.push(existing);
        }
  
        current = existing;
      }
    }
  
    return root;
  }

  