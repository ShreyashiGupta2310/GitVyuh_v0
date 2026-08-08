import { ScoreCardData } from "@/types";
export default function ScoreCard({ data }: { data: ScoreCardData }) {
    // const scoreColor =
    //   data.score >= 70 ? "text-green-600" : data.score >= 40 ? "text-yellow-600" : "text-red-600";
  
let scoreColor;
if (data.score >= 70) {
  scoreColor = "text-green-600";
} else if (data.score >= 40) {
  scoreColor = "text-yellow-600";
} else {
  scoreColor = "text-red-600";
}
    return (
      <div className="border rounded-lg p-6 shadow-sm">
        <div className={`text-4xl font-bold ${scoreColor}`}>{data.score}</div>
        <p className="text-gray-600 mt-2">{data.verdict}</p>
      </div>
    );
  }