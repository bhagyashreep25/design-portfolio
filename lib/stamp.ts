// Builds a note's stamp (scalloped postage stamp with abstract pastel art) as
// an SVG string. Plain string output so the same art renders inline on the
// site (components/NoteStamp.tsx) and inside the link-preview image
// (app/notes/[slug]/opengraph-image.tsx).

/** Shape positions (x, y) are fractions of the art area; sizes are in stamp units (stamp is 220×270). */
export type StampShape =
  | { kind: "burst"; x: number; y: number; r: number; points: number; depth: number; seed: number; rotate?: number; color: string }
  | { kind: "bloom"; x: number; y: number; r: number; lobes: number; amp: number; rotate?: number; color: string }
  | { kind: "circle"; x: number; y: number; r: number; color: string }
  | { kind: "sparkle"; x: number; y: number; size: number; color: string };

export interface StampArt {
  background: string;
  shapes: StampShape[];
}

export const STAMP_WIDTH = 220;
export const STAMP_HEIGHT = 270;

const PAPER = "#fffdf7";
const INK = "#5b4a86";
const INSET = 16;
const ART = { x: INSET, y: INSET, w: STAMP_WIDTH - 2 * INSET, h: STAMP_HEIGHT - 2 * INSET };

// Seeded so a stamp looks identical on every render
function rng(seed: number) {
  return () => (seed = (seed * 16807) % 2147483647) / 2147483647;
}

const f = (n: number) => n.toFixed(1);

function burstPath(cx: number, cy: number, r: number, points: number, depth: number, seed: number, rot: number) {
  const rand = rng(seed);
  let d = "";
  for (let i = 0; i < points * 2; i++) {
    const a = rot + (i / (points * 2)) * Math.PI * 2;
    const rr = (i % 2 ? r * (1 - depth) : r) * (0.92 + rand() * 0.14);
    d += `${i ? "L" : "M"}${f(cx + rr * Math.cos(a))} ${f(cy + rr * Math.sin(a))}`;
  }
  return `${d}Z`;
}

function bloomPath(cx: number, cy: number, r: number, lobes: number, amp: number, rot: number) {
  const n = 180;
  let d = "";
  for (let i = 0; i <= n; i++) {
    const a = (i / n) * Math.PI * 2;
    const rr = r * (1 + amp * Math.sin(lobes * (a + rot)));
    d += `${i ? "L" : "M"}${f(cx + rr * Math.cos(a))} ${f(cy + rr * Math.sin(a))}`;
  }
  return `${d}Z`;
}

function sparklePath(cx: number, cy: number, s: number) {
  return `M${cx} ${cy - s}Q${cx} ${cy} ${cx + s} ${cy}Q${cx} ${cy} ${cx} ${cy + s}Q${cx} ${cy} ${cx - s} ${cy}Q${cx} ${cy} ${cx} ${cy - s}Z`;
}

function shapeSvg(shape: StampShape) {
  const cx = ART.x + ART.w * shape.x;
  const cy = ART.y + ART.h * shape.y;
  switch (shape.kind) {
    case "burst":
      return `<path d="${burstPath(cx, cy, shape.r, shape.points, shape.depth, shape.seed, shape.rotate ?? 0)}" fill="${shape.color}"/>`;
    case "bloom":
      return `<path d="${bloomPath(cx, cy, shape.r, shape.lobes, shape.amp, shape.rotate ?? 0)}" fill="${shape.color}"/>`;
    case "circle":
      return `<circle cx="${f(cx)}" cy="${f(cy)}" r="${shape.r}" fill="${shape.color}"/>`;
    case "sparkle":
      return `<path d="${sparklePath(cx, cy, shape.size)}" fill="${shape.color}"/>`;
  }
}

/** Scalloped outline: an inset rectangle with a circle bulging out every 14 units along each edge */
function scallopClip(id: string) {
  const r = 7;
  const step = 14;
  const w = STAMP_WIDTH - 2 * r;
  const h = STAMP_HEIGHT - 2 * r;
  const nx = Math.round(w / step);
  const ny = Math.round(h / step);
  let c = `<rect x="${r}" y="${r}" width="${w}" height="${h}"/>`;
  for (let i = 0; i <= nx; i++) {
    const x = f(r + (i * w) / nx);
    c += `<circle cx="${x}" cy="${r}" r="${r}"/><circle cx="${x}" cy="${STAMP_HEIGHT - r}" r="${r}"/>`;
  }
  for (let j = 1; j < ny; j++) {
    const y = f(r + (j * h) / ny);
    c += `<circle cx="${r}" cy="${y}" r="${r}"/><circle cx="${STAMP_WIDTH - r}" cy="${y}" r="${r}"/>`;
  }
  return `<clipPath id="${id}">${c}</clipPath>`;
}

export function stampSvg(
  art: StampArt,
  {
    id,
    number,
    numberFont = "var(--font-caveat), cursive",
  }: {
    /** Unique per page, so clip paths of several stamps don't collide */
    id: string;
    /** Issue number printed in the corner ("No. 01"); omitted when undefined */
    number?: number;
    numberFont?: string;
  }
) {
  const label =
    number === undefined
      ? ""
      : `<text x="${ART.x + 10}" y="${ART.y + ART.h - 12}" style="font-family: ${numberFont}" font-weight="700" font-size="24" fill="${INK}">No. ${String(number).padStart(2, "0")}</text>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${STAMP_WIDTH} ${STAMP_HEIGHT}" width="${STAMP_WIDTH}" height="${STAMP_HEIGHT}">
<defs>${scallopClip(`${id}-edge`)}<clipPath id="${id}-art"><rect x="${ART.x}" y="${ART.y}" width="${ART.w}" height="${ART.h}" rx="2"/></clipPath></defs>
<g clip-path="url(#${id}-edge)">
<rect width="${STAMP_WIDTH}" height="${STAMP_HEIGHT}" fill="${PAPER}"/>
<g clip-path="url(#${id}-art)">
<rect x="${ART.x}" y="${ART.y}" width="${ART.w}" height="${ART.h}" fill="${art.background}"/>
${art.shapes.map(shapeSvg).join("")}
${label}
</g>
</g>
</svg>`;
}
