"use client"
import { CommitChartData } from "@/types";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function CommitChart({data}:{data:CommitChartData}){
    return (
        <div className="border rounded-lg p-6 shadow-sm">
          <h3 className="font-semibold text-lg mb-4">Commit Activity</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data.commits}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="#2563eb" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        );
}