"use client";

import { useState } from "react";

export default function InputBar() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);

    const parts = url.replace("https://github.com/", "").split("/");
    const owner = parts[0];
    const repo = parts[1];

    const response = await fetch(`/api/github?owner=${owner}&repo=${repo}`);
    const data = await response.json();

    setResult(data);
    setLoading(false);
  }

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://github.com/owner/repo"
      />
      <button onClick={handleSubmit}>Analyze</button>

      {loading && <p>Loading...</p>}
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}