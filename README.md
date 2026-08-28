<div align="center">

# 🔮 Git Vyuh

**An AI-powered GitHub repo quality analyzer**

Paste a public repo → get an honest, AI-generated quality report rendered as live, interactive UI components — not a wall of chat text.

[**🚀 Live App**](https://git-vyuh-v0.vercel.app) &nbsp;·&nbsp; [**📦 Repository**](https://github.com/ShreyashiGupta2310/GitVyuh_v0)

`Next.js` `TypeScript` `Tailwind CSS` `Gemini AI` `GitHub API` `Vercel`

</div>

---

## 📖 The problem

Students and early-career developers often can't tell if their GitHub repo actually looks professional enough for a recruiter to take seriously. Generic advice like "write a good README" doesn't say what's actually missing from *this specific repo*.

**Git Vyuh solves that:** paste any public repo, get a fast, structured, honest self-check — README completeness, commit activity patterns, folder organization, and tech stack — with real, specific feedback instead of a vague "looks good!"

**Built for:** students building portfolio-worthy repos, and developers who want an honest outside perspective before sharing a project publicly.

---

## ✨ Features

- 🔗 **Paste any public repo URL** — no cloning, no setup on the user's end
- 🧠 **AI decides what to show** — the dashboard isn't a fixed template; Gemini analyzes the actual repo and chooses which insights are relevant
- 📊 **Six dynamic components** — score, README feedback, commit activity chart, folder structure tree, tech stack badges, and graceful error states
- 🌓 **Light / dark mode** — a distinct visual identity for each
- ⚡ **Fast, parallel data fetching** — all GitHub API calls run simultaneously
- 🛡️ **Fails gracefully** — private repos, missing READMEs, and AI service hiccups all show a designed error state instead of a crash

---

## 🖼️ Preview

> *Add a screenshot or short GIF of the app here before final submission — a live demo image goes a long way for recruiters skimming quickly.*

---

## 🛠️ Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js (App Router) | Server + client components in one project, easy Vercel deploy |
| Language | TypeScript | Strict typing catches AI-response mismatches before runtime |
| Styling | Tailwind CSS | Fast, consistent utility-based design system |
| AI | Gemini 3.6 Flash | Free tier, fast, reliable structured output with the right prompt |
| Data | GitHub REST API | Repo metadata, README, commits, folder structure |
| Hosting | Vercel | Zero-config deploys, auto-redeploy on push |

**No database.** Every analysis is a fresh request-response cycle — nothing is persisted between visits.

---

## 🚀 Getting started

```bash
git clone https://github.com/ShreyashiGupta2310/GitVyuh_v0.git
cd GitVyuh_v0
npm install
npm run dev
```

Open **http://localhost:3000**.

### Environment variables

Create a `.env.local` file in the project root:

```env
GITHUB_TOKEN=your_github_token_here
GEMINI_API_KEY=your_gemini_key_here
```

| Variable | Get it from | Scope needed |
|---|---|---|
| `GITHUB_TOKEN` | GitHub → Settings → Developer settings → Personal access tokens | Public repositories, read-only |
| `GEMINI_API_KEY` | [aistudio.google.com](https://aistudio.google.com) → Get API Key | — |

Both are required — the app won't run without them.

---

## 🏗️ How it works

```
User pastes a repo URL
         │
         ▼
  InputBar.tsx  (Client Component)
         │
         ▼
  /api/github  ──►  fetches repo info, README, commits, folder tree
         │           (all 4 GitHub calls run in parallel)
         ▼
  /api/analyze  ──►  sends the data + a strict prompt to Gemini
         │
         ▼
  Gemini responds with structured JSON,
         │           matching the app's own TypeScript types exactly
         ▼
  ComponentRenderer.tsx
         │
         ▼
  Renders the right component:
  ScoreCard · ReadmeCard · CommitChart ·
  FolderTree · TechStackBadges · ErrorState
```

### Key files

| File | Role |
|---|---|
| `types/index.ts` | The shared data contract — a discriminated union lets the dispatcher safely match each AI response to the correct component |
| `lib/github.ts` | GitHub integration: repo metadata, README decoding, commit grouping, and a recursive flat-list-to-tree converter for folder structure |
| `lib/ai.ts` | Gemini integration and prompt engineering |
| `app/api/*/route.ts` | Server routes that keep both API keys hidden from the browser |
| `components/ComponentRenderer.tsx` | The dispatcher that makes Generative UI actually work |

---

## 🤖 The AI integration

Gemini (3.6 Flash) receives the combined repo data plus a prompt that does two things:

1. **Decides which of the 6 components are relevant** — e.g. skips the commit chart if there are fewer than 3 commits
2. **Forces the response into strict JSON** matching the app's own types exactly — a `component` field naming which UI piece to render, paired with `data` in that component's exact shape

This is the actual mechanism behind the app's "Generative UI" — the AI genuinely chooses what to show based on the real state of the repo, and the frontend trusts that structured output to drive rendering. No fixed template.

> **Why the prompt is strict, not conversational:** early testing showed the model would occasionally return `"ScoreCardData"` instead of `"ScoreCard"`, or subtly different capitalization — even with correct reasoning underneath. Explicitly listing the exact allowed strings and warning against added suffixes fixed this reliably.

**Failure handling:** the AI call is wrapped in a try/catch covering both network failures and malformed JSON responses. Either case returns a proper `ErrorState` block instead of crashing — the same component used for genuinely bad input (private repos, empty repos), so there's one consistent failure path regardless of cause.

---

## 🚧 Known limitations & what's next

- No caching — every analysis is a fresh API call, even for a repeat repo
- No "ideal repo" reference example alongside feedback (a natural next feature)
- Uses a single well-engineered prompt rather than a formal AI SDK tool-calling pattern
- Automated test coverage is still thin

---

## 📦 Deployment

Hosted on **Vercel**, auto-deploying from `main` on every push. Environment variables are configured separately in Vercel's project settings — `.env.local` is never committed.

**Rollback plan:** revert the problematic commit on `main` and push. Vercel automatically redeploys from the new HEAD — no manual steps beyond a standard git revert.

---

<div align="center">

Built by **Shreyashi Gupta**

</div>