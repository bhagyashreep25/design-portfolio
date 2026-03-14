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
  illustrations/   # /illustrations gallery page
  work/[slug]/     # Dynamic case study pages
  globals.css      # Base styles and accessibility defaults

components/        # Shared UI
  Navbar.tsx       # Only client component (needs usePathname)
  Footer.tsx       # Server component

data/
  projects.ts      # All project content + TypeScript types
                   # Single source of truth — edit here to add/change projects

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

1. Add a `Project` object to [data/projects.ts:47](data/projects.ts#L47)
2. The new `/work/[slug]` page is generated automatically via `generateStaticParams`

---

## Additional Documentation

Check these files when relevant:

- [.claude/docs/architectural_patterns.md](.claude/docs/architectural_patterns.md) — discriminated union sections, server/client component split, static generation pattern, layout container convention, accessibility baseline, path aliases
