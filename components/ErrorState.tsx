import { ErrorStateData } from "@/types";
import { Lock, Inbox, Clock, AlertTriangle } from "lucide-react";

export default function ErrorState({ data }: { data: ErrorStateData }) {
  const icons = {
    private: Lock,
    empty: Inbox,
    "rate-limited": Clock,
    invalid: AlertTriangle,
  };

  const Icon = icons[data.reason];

  return (
    <div className="bg-pink border-2 border-foreground rounded-2xl p-6 text-center">
      <Icon className="w-8 h-8 mx-auto mb-2" />
      <p className="font-bold text-sm">{data.message}</p>
    </div>
  );
}