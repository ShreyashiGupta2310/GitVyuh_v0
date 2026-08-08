import { TechStackBadgesData } from "@/types";

export default function TechStackBadges({ data }: { data: TechStackBadgesData }) {
    return (
        <div className="flex flex-wrap gap-2">
          {data.languages.map((language) => (
            <span
              key={language}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
            >
              {language}
            </span>
          ))}
        </div>
      );
}