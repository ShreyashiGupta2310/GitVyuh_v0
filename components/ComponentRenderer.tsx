import { ComponentBlock } from "@/types";
import ReadmeCard from "./ReadmeCard";
import CommitChart from "./CommitChart";
import ScoreCard from "./ScoreCard";
import TechStackBadges from "./TechStackBadges";
import FolderTree from "./FolderTree";
import ErrorState from "./ErrorState";

export default function ComponenetRenderer({blocks}:{blocks:ComponentBlock[]}){
    return(
        <div className="space-y-4">
      {blocks.map((block, index) => {
        switch (block.component) {
          case "ScoreCard":
            return <ScoreCard key={index} data={block.data} />;
          case "ReadmeCard":
            return <ReadmeCard key={index} data={block.data} />;
          case "CommitChart":
            return <CommitChart key={index} data={block.data} />;
          case "FolderTree":
            return <FolderTree key={index} data={block.data} />;
          case "TechStackBadges":
            return <TechStackBadges key={index} data={block.data} />;
          case "ErrorState":
            return <ErrorState key={index} data={block.data} />;
          default:
            return null;  }
        })}
      </div>
    );
}