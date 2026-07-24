export interface ScoreCardData {
    score: number;
    verdict: string;

}
export interface ReadMEcardData {

    Feedback: string;
    missingSections: string[];
  
}
//data for single commit entry
export interface CommitEntry {
date: string;
count: number;
}
//data for commit chart
export interface CommitChartData {
    commits: CommitEntry[];
}



// This describes ONE file or folder (can contain itself = recursion)
export interface FolderNode {
    name: string;
    type: "file" | "folder";
    children?: FolderNode[];
  }
// This describes the data for the FolderTree component
export interface FolderTreeData {
    root: FolderNode;
    organizationRating: string;
  }
  
  
  export interface TechStackBadgesData {
    languages: string[];
  }


  //reasons an error could happen when fetching data
  export interface ErrorStateData {
    reason: "private" | "empty" | "rate-limited" | "invalid";
    message: string;
  }






  export interface ScoreCardBlock {
    component: "ScoreCard";
    data: ScoreCardData;
  }
  
  export interface ReadmeCardBlock {
    component: "ReadmeCard";
    data: ReadMEcardData;
  }
  
  export interface CommitChartBlock {
    component: "CommitChart";
    data: CommitChartData;
  }
  
  export interface FolderTreeBlock {
    component: "FolderTree";
    data: FolderTreeData;
  }
  
  export interface TechStackBadgesBlock {
    component: "TechStackBadges";
    data: TechStackBadgesData;
  }
  
  export interface ErrorStateBlock {
    component: "ErrorState";
    data: ErrorStateData;
  }



  export type ComponentBlock =
  | ScoreCardBlock
  | ReadmeCardBlock
  | CommitChartBlock
  | FolderTreeBlock
  | TechStackBadgesBlock
  | ErrorStateBlock;

  export interface AnalysisResponse {
    blocks: ComponentBlock[];
  }