"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import InputBar from "@/components/InputBar";
import ThemeToggle from "@/components/ThemeToggle";

export default function HomePage() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen">
     <header className="flex items-center justify-between px-10 py-5 border-b-[3px] border-foreground">
        <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
        <div className="flex items-center gap-2">
          <Image
            src={isDark ? "/dark-logo.png" : "/light-logo.png"}
            alt="Git Vyuh logo"
            width={100}
            height={100}
          />
          
          {/* <span className="font-heading font-bold text-lg">Git Vyuh</span> */}
        </div>
      </header>

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