import { TechStackBadgesData } from "@/types";

export default function TechStackBadges({ data }: { data: TechStackBadgesData }) {
  const colors = ["bg-green", "bg-blue", "bg-orange", "bg-pink", "bg-purple"];

  return (
    <div className="flex flex-wrap gap-2">
      {data.languages.map((language, index) => (
        <span
          key={language}
          className={`${colors[index % colors.length]} border-2 border-foreground rounded-lg px-2.5 py-1.5 text-xs font-bold`}
        >
          {language}
        </span>
      ))}
    </div>
  );
}