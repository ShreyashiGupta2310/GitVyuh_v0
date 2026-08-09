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
      <div className="border border-red-200 bg-red-50 rounded-lg p-6 text-center">
        <Icon className="w-10 h-10 mx-auto mb-2 text-red-600" />
        <p className="text-red-800 font-medium">{data.message}</p>
      </div>
    );
  }