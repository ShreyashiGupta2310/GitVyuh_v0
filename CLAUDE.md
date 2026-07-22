# [CLAUDE.md](http://CLAUDE.md)

## Project

GitHub Repo Analyzer — paste a public GitHub repo URL, get an AI-generated

quality report (README, commits, folder structure) rendered as interactive UI components.



## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS

- GitHub REST API + Gemini 2.5 Flash API

- Deployed on Vercel, no database, no auth


## Rules

1. Server Components by default. Only add `"use client"` when a component

   needs interactivity (state, event handlers, browser APIs).

2. Never call GitHub or Gemini APIs directly from client components —

   always route through `/app/api/*` server routes so API keys stay hidden.

3. All API keys live in `.env.local` (gitignored) locally, and in Vercel's

   Environment Variables for production. Never hardcode a key in any file.

4. Every component must handle 3 states explicitly: loading, error, success.

   No component should assume data is always present.

5. Use TypeScript types from `types/index.ts` for all shared data shapes —

   don't inline duplicate type definitions across files.