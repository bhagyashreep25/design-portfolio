# Architectural Patterns

Patterns confirmed across multiple files in this codebase.

---

## 1. Data-Driven Content

All case study content lives in [data/projects.ts](../../data/projects.ts) as typed TypeScript objects — no hardcoded content in page components. Pages consume this data via `getProjectBySlug()` or by iterating the exported `projects` array.

- [data/projects.ts:47](../../data/projects.ts#L47) — `projects` array export
- [app/page.tsx:2](../../app/page.tsx#L2) — home page imports and maps `projects`
- [app/work/[slug]/page.tsx:4](../../app/work/[slug]/page.tsx#L4) — case study page uses `getProjectBySlug()`

When adding a new project, add its data object to `data/projects.ts` — no other files need editing for the page to exist.

---

## 2. Discriminated Union for Polymorphic Sections

`CaseStudySection` is a discriminated union typed on a `type` string field. The case study page renders sections with an if/else chain that narrows the type for each branch.

- [data/projects.ts:7-30](../../data/projects.ts#L7-L30) — union type definition
- [app/work/[slug]/page.tsx:151-220](../../app/work/[slug]/page.tsx#L151-L220) — rendering switch

When adding a new section kind, add a new member to the union in `data/projects.ts` and a corresponding branch in the render function.

---

## 3. Server Components by Default; Client Only Where Needed

All page and layout files are React Server Components (no directive). The only client component is `Navbar`, which needs `usePathname()` for the context-aware Work link.

- [components/Navbar.tsx:1](../../components/Navbar.tsx#L1) — `"use client"` directive
- [app/layout.tsx](../../app/layout.tsx) — root layout, server component
- [app/work/[slug]/page.tsx:49](../../app/work/[slug]/page.tsx#L49) — async server component with awaited params

Do not add `"use client"` unless the component genuinely needs browser APIs or React hooks.

---

## 4. Static Generation Pattern for Dynamic Routes

Dynamic route `/work/[slug]` uses the Next.js 15 pattern of paired `generateStaticParams` + `generateMetadata` exports alongside an async default export that awaits `params`.

- [app/work/[slug]/page.tsx:7-9](../../app/work/[slug]/page.tsx#L7-L9) — `generateStaticParams`
- [app/work/[slug]/page.tsx:11-23](../../app/work/[slug]/page.tsx#L11-L23) — `generateMetadata`
- [app/work/[slug]/page.tsx:49-50](../../app/work/[slug]/page.tsx#L49-L50) — async params (Next.js 15: params is a Promise)

---

## 5. Consistent Layout Container

Every page section uses the same max-width/padding class string to maintain visual alignment:

```
max-w-5xl mx-auto px-6
```

Appears in [app/page.tsx:9](../../app/page.tsx#L9), [app/about/page.tsx](../../app/about/page.tsx), [app/work/[slug]/page.tsx](../../app/work/[slug]/page.tsx), and [components/Navbar.tsx:16](../../components/Navbar.tsx#L16). Apply this to any new page sections.

---

## 6. Accessibility as a Base Layer

Accessibility concerns are handled globally in [app/globals.css](../../app/globals.css) rather than per-component:

- [app/globals.css:14-19](../../app/globals.css#L14-L19) — WCAG AA focus ring on `:focus-visible`
- [app/globals.css:22-32](../../app/globals.css#L22-L32) — `prefers-reduced-motion` strips all animation durations

Per-component: ARIA labels on links and images, `role="list"` on `<ul>` elements, semantic landmarks (`<header>`, `<nav>`, `<section>` with `aria-labelledby`). Follow these patterns in new components.

---

## 7. Path Alias

`@/` is configured in [tsconfig.json](../../tsconfig.json) to resolve from the repo root. Use `@/data/projects`, `@/components/Navbar`, etc. — never use relative paths crossing directory boundaries.
