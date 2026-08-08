import { ReadMEcardData } from "@/types";

export default function ReadmeCard({ data }: { data: ReadMEcardData }) {
  return (
    <div className="border rounded-lg p-6 shadow-sm">
      <h3 className="font-semibold text-lg mb-2">README Feedback</h3>
      <p className="text-gray-600 mb-4">{data.feedback}</p>

      {data.missingSections.length > 0 && (
        <div>
          <p className="font-medium text-sm mb-1">Missing sections:</p>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {data.missingSections.map((section) => (
              <li key={section}>{section}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}