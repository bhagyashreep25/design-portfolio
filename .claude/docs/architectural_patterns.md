# Architectural Patterns

Patterns confirmed across multiple files in this codebase.

---

## 1. Hand-Built Case Study Pages, No Data File

Each shipped case study is its own route under `app/work/<slug>/page.tsx`, with content written directly in JSX — there is no central data file. This replaced an earlier `data/projects.ts` + dynamic `app/work/[slug]/page.tsx` setup, removed because every real case study had already grown into its own hand-built page, leaving the data file and dynamic route permanently shadowed and unreachable.

- [components/BrowseOtherProjects.tsx](../../components/BrowseOtherProjects.tsx) — the one place that still lists all live case studies, for the "Browse Other Projects" rail
- [app/page.tsx](../../app/page.tsx) — home page's own `workItems` array (separate list, same projects)

When adding a new project: create `app/work/<slug>/page.tsx`, then add it to both `workItems` in `app/page.tsx` and `LIVE_PROJECTS` in `components/BrowseOtherProjects.tsx`.

---

## 2. Password-Gated Case Studies

Protected case studies check `isUnlocked()` from `lib/gate.ts` (server-only) and render `<PasswordGate />` *instead of* their content when locked, so a locked visitor is never sent the content in the RSC payload.

- [lib/gate.ts](../../lib/gate.ts) — HMAC-signed cookie, reads `PORTFOLIO_PASSWORD` / `PORTFOLIO_GATE_SECRET`
- [app/api/unlock/route.ts](../../app/api/unlock/route.ts) — validates the password, sets the cookie
- [app/work/bbq-nation/page.tsx](../../app/work/bbq-nation/page.tsx) — `if (!(await isUnlocked())) return <PasswordGate />;`

A gated page's default export must be `async` to await `isUnlocked()`.

---

## 3. Server Components by Default; Client Only Where Needed

Page and layout files are React Server Components unless they need browser APIs or hooks. `Navbar`, `AnimateIn`, `DottedBackground`, `SparkleCursor`, `PasswordGate`, and `LoopingVideo` are `"use client"`; everything else, including every case study page, is a server component.

- [components/Navbar.tsx:1](../../components/Navbar.tsx#L1) — `"use client"` directive
- [app/layout.tsx](../../app/layout.tsx) — root layout, server component
- [app/work/bbq-nation/page.tsx](../../app/work/bbq-nation/page.tsx) — async server component (awaits `isUnlocked()`)

---

## 4. Consistent Layout Container

Every page section uses the same max-width/padding class string to maintain visual alignment:

```
max-w-5xl mx-auto px-6
```

Appears in [app/page.tsx:9](../../app/page.tsx#L9), [app/about/page.tsx](../../app/about/page.tsx), every `app/work/<slug>/page.tsx`, and [components/Navbar.tsx:16](../../components/Navbar.tsx#L16). Apply this to any new page sections.

---

## 5. Accessibility as a Base Layer

Accessibility concerns are handled globally in [app/globals.css](../../app/globals.css) rather than per-component:

- [app/globals.css:14-19](../../app/globals.css#L14-L19) — WCAG AA focus ring on `:focus-visible`
- [app/globals.css:22-32](../../app/globals.css#L22-L32) — `prefers-reduced-motion` strips all animation durations

Per-component: ARIA labels on links and images, `role="list"` on `<ul>` elements, semantic landmarks (`<header>`, `<nav>`, `<section>` with `aria-labelledby`). Follow these patterns in new components.

---

## 6. Path Alias

`@/` is configured in [tsconfig.json](../../tsconfig.json) to resolve from the repo root. Use `@/components/Navbar`, `@/lib/gate`, etc. — never use relative paths crossing directory boundaries.
