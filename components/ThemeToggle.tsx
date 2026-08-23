"use client";

export default function ThemeToggle({
  isDark,
  setIsDark,
}: {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}) {
  return (
    <div
      onClick={() => setIsDark(!isDark)}
      className="inline-flex items-center gap-2.5 bg-card border-2 border-foreground rounded-full pl-1.5 pr-4 py-1.5 cursor-pointer"
    >
      <div
        className={`w-9 h-5.5 border-2 border-foreground rounded-full relative flex-shrink-0 transition-colors ${
          isDark ? "bg-purple" : "bg-green"
        }`}
      >
        <div
          className={`absolute top-0.5 w-3.5 h-3.5 rounded-full bg-foreground transition-transform ${
            isDark ? "translate-x-4" : "translate-x-0.5"
          }`}
        />
      </div>
      <span className="text-xs font-bold uppercase tracking-wide">
        {isDark ? "Dev mode" : "Switch to dev mode"}
      </span>
    </div>
  );
}