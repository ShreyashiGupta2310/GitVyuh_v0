import { ScoreCardData } from "@/types";


export default function ScoreCard({ data }: { data: ScoreCardData }) {
  const scoreColor =
    data.score >= 70 ? "bg-green" : data.score >= 40 ? "bg-orange" : "bg-pink";

  return (
    <div className="bg-card border-2 border-foreground rounded-2xl p-5 flex items-center justify-between gap-4">
      <p className="opacity-70 text-sm">{data.verdict}</p>
      <div className={`${scoreColor} border-2 border-foreground rounded-xl px-4 py-2 text-center font-heading flex-shrink-0`}>
        <strong className="block text-lg leading-none">{data.score}</strong>
        <span className="text-[9px] font-bold uppercase tracking-wide">Score</span>
      </div>
    </div>
  );
}