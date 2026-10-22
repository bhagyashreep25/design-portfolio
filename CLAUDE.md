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
  notes/           # /notes list + notes/[slug] post layout
  work/<slug>/     # Each case study is its own hand-built route (no data file)
  api/unlock/      # Password-gate cookie exchange (see lib/gate.ts)
  globals.css      # Base styles and accessibility defaults

components/        # Shared UI
  Navbar.tsx       # Client component (needs usePathname)
  Footer.tsx       # Server component
  BrowseOtherProjects.tsx  # "Browse Other Projects" rail, shared by every case study

content/notes/    # Note content + registry (see Adding a Note)

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

## Adding a Note

Notes (`/notes`, blog-style) are different from case studies: one shared layout, with content in `content/notes/`.

1. Create `content/notes/<slug>.tsx` exporting `meta: NoteMeta` (slug, title, subtitle, `YYYY-MM-DD` date, optional readingTime/cover) and a default `Body` component of plain JSX (`p`, `h2`, `h3`, `ul`/`ol`, `blockquote`, `figure`, `hr`, `a`). It's styled by `.note-prose` in `app/globals.css`, so it needs no classes
   - Its `stamp` (in `meta`) is the note's postage-stamp art: a pastel background plus a few shapes (`burst`, `bloom`, `circle`, `sparkle`) drawn by [lib/stamp.ts](lib/stamp.ts). Style is "cropped & loud": 2–3 large shapes bleeding off the frame, flat pastel fills, no blend modes. Pick shapes and palette to suit the note's theme. It's shown on list-row hover (always on phones), the post header, and the generated link preview (`app/notes/[slug]/opengraph-image.tsx`)
2. Register it in `NOTES` in [content/notes/index.ts](content/notes/index.ts). The list page, post page, prev/next links and sitemap all read from there
3. Put images in `public/images/notes/`

---

## Additional Documentation

Check these files when relevant:

- [.claude/docs/architectural_patterns.md](.claude/docs/architectural_patterns.md) — hand-built case study pages, password gate, server/client component split, layout container convention, accessibility baseline, path aliases
