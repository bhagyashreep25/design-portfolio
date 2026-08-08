# Portfolio — CLAUDE.md

Personal portfolio site for Bhagyashree Phadnis, Product Designer. Showcases case studies and an illustrations gallery. Fully static — no backend, no auth, no external APIs.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS 3 + custom CSS |
| Fonts | `next/font/google` (Inter) |
| Runtime | Node.js / React 18 |

No UI component library. No state management library.

---

## Project Structure

```
app/               # All routes and root layout
  layout.tsx       # Root layout: Navbar, fonts, metadata
  page.tsx         # Home (hero + project grid)
  about/           # /about page
  play/            # /play gallery page
  ai-labs/         # /ai-labs page
  work/<slug>/     # Each case study is its own hand-built route (no data file)
  api/unlock/      # Password-gate cookie exchange (see lib/gate.ts)
  globals.css      # Base styles and accessibility defaults

components/        # Shared UI
  Navbar.tsx       # Client component (needs usePathname)
  Footer.tsx       # Server component
  BrowseOtherProjects.tsx  # "Browse Other Projects" rail, shared by every case study

lib/
  gate.ts          # Server-only password-gate logic (never import from a client component)

public/            # Static assets (images, resume.pdf)
```

Key config files: [tsconfig.json](tsconfig.json) · [tailwind.config.ts](tailwind.config.ts) · [next.config.ts](next.config.ts)

---

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint via Next.js
```

No test suite currently.

---

## Adding a Project

There's no data file — each case study is a hand-built route.

1. Create `app/work/<slug>/page.tsx`, following the structure of an existing one (e.g. `app/work/walletwize/page.tsx`)
2. Add the project to `workItems` in [app/page.tsx](app/page.tsx) so it appears on the home page
3. Add it to `LIVE_PROJECTS` in [components/BrowseOtherProjects.tsx](components/BrowseOtherProjects.tsx) so the other case studies link to it
4. If it should require a password, wrap the page in `PasswordGate` and gate on `isUnlocked()` from `lib/gate.ts` — see `app/work/bbq-nation/page.tsx` for the pattern

---

## Additional Documentation

Check these files when relevant:

- [.claude/docs/architectural_patterns.md](.claude/docs/architectural_patterns.md) — hand-built case study pages, password gate, server/client component split, layout container convention, accessibility baseline, path aliases
