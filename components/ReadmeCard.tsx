import { ReadMEcardData } from "@/types";

export default function ReadmeCard({ data }: { data: ReadMEcardData }) {
  return (
    <div className="bg-card border-2 border-foreground rounded-2xl p-5">
      <h3 className="font-heading font-bold text-base mb-2">README Feedback</h3>
      <p className="opacity-70 text-sm mb-3">{data.feedback}</p>

      {data.missingSections.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {data.missingSections.map((section) => (
            <span
              key={section}
              className="bg-background border-2 border-foreground rounded-lg px-2.5 py-1 text-xs font-bold"
            >
              {section}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}