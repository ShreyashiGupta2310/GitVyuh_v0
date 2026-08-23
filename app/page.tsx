// export default function HomePage() {
//   return (
//     <div>
//       <h1>GitHub Repo Analyzer</h1>
//       <p>Paste a public GitHub repo URL to get a quality report.</p>
//       <p>[Input bar goes here]</p>
//       <p>[Dashboard with analysis results goes here]</p>
//     </div>
//   );
// }

import InputBar from "@/components/InputBar";
import ThemeToggle from "@/components/ThemeToggle";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-between px-10 py-5 border-b-[3px] border-foreground">
        <ThemeToggle />
        <div className="flex items-center gap-2">
          <span className="font-heading font-bold text-lg">Git Vyuh</span>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 py-16 text-center">
        <div className="inline-flex items-center gap-2 bg-blue border-2 border-foreground rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide mb-7">
          Analyze smarter
        </div>

        <h1 className="font-heading font-bold text-5xl md:text-6xl leading-tight mb-2">
          GitHub repo
          <span className="block text-purple">analyzer</span>
        </h1>

        <p className="max-w-md mx-auto my-6 text-base leading-relaxed opacity-70">
          Drop in any public repo and get a clean breakdown of its structure, languages, activity, and health.
        </p>

        <InputBar />
      </main>
    </div>
  );
}