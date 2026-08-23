"use client";

import { useState } from "react";
import ComponentRenderer from "./ComponentRenderer";

export default function InputBar() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);
    setResult(null);

    const parts = url.replace("https://github.com/", "").split("/");
    const owner = parts[0];
    const repo = parts[1];

    const githubResponse = await fetch(`/api/github?owner=${owner}&repo=${repo}`);
    const githubData = await githubResponse.json();

    const analyzeResponse = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(githubData),
    });
    const analyzeData = await analyzeResponse.json();

    setResult(analyzeData);
    setLoading(false);
  }

  return (
    <div>
      <div className="flex gap-2.5 max-w-lg mx-auto mb-8">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste GitHub repo link, e.g. github.com/user/repo"
          className="flex-1 text-sm px-4 py-3.5 border-2 border-foreground rounded-xl bg-card outline-none"
        />
        <button
          onClick={handleSubmit}
          className="font-heading font-bold text-sm bg-foreground text-background border-2 border-foreground rounded-xl px-5 whitespace-nowrap"
        >
          Analyze →
        </button>
      </div>

      {loading && (
        <div className="bg-purple border-[3px] border-foreground rounded-3xl p-4 mb-8">
          <div className="relative bg-background border-2 border-foreground rounded-2xl min-h-[220px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 blur-3xl opacity-50">
              <div className="absolute w-44 h-44 rounded-full bg-purple -top-10 -left-8" />
              <div className="absolute w-36 h-36 rounded-full bg-green -bottom-8 -right-5" />
              <div className="absolute w-32 h-32 rounded-full bg-orange bottom-5 left-1/3" />
            </div>
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-foreground border-t-transparent rounded-full animate-spin" />
              <p className="font-heading font-bold text-sm bg-card border-2 border-foreground rounded-full px-4 py-2">
                GitVyuh is analyzing...
              </p>
            </div>
          </div>
        </div>
      )}

      {result && <ComponentRenderer blocks={result.blocks} />}
    </div>
  );
}