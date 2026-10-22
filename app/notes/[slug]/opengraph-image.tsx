import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getNote, getNoteNumber, getNotes } from "@/content/notes";
import { stampSvg, STAMP_WIDTH, STAMP_HEIGHT } from "@/lib/stamp";

// Link preview for a note: title and subtitle beside the note's stamp

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Note by Bhagyashree Phadnis";

// Render every preview at build time, so the fonts are only read from disk
// during the build and never by a serverless function
export function generateStaticParams() {
  return getNotes().map(({ meta }) => ({ slug: meta.slug }));
}

const fontPath = (file: string) => join(process.cwd(), "public/fonts", file);

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return new Response("Not found", { status: 404 });
  const { meta } = note;

  const [regular, medium] = await Promise.all([
    readFile(fontPath("Recoleta-Regular.ttf")),
    readFile(fontPath("Recoleta-Medium.ttf")),
  ]);

  // The issue number is set as real text below, since text inside an
  // embedded SVG has no fonts to render with here
  const stamp = `data:image/svg+xml;base64,${Buffer.from(
    stampSvg(meta.stamp, { id: "og" })
  ).toString("base64")}`;
  const stampWidth = 330;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 96px",
          backgroundColor: "#ffffff",
          backgroundImage: "radial-gradient(circle, #d6d6d6 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          fontFamily: "Recoleta",
          color: "#4c4c4c",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 620 }}>
          <div style={{ display: "flex", fontSize: 26, color: "#8c63d1" }}>
            {`Notes · No. ${String(getNoteNumber(slug)).padStart(2, "0")}`}
          </div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 72, fontWeight: 500, lineHeight: 1.1 }}>
            {meta.title}
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 32, lineHeight: 1.4, color: "#8f8f8f" }}>
            {meta.subtitle}
          </div>
          <div style={{ display: "flex", marginTop: 48, fontSize: 24, color: "#6b6b6b" }}>
            Bhagyashree Phadnis
          </div>
        </div>
        <img
          src={stamp}
          width={stampWidth}
          height={(stampWidth * STAMP_HEIGHT) / STAMP_WIDTH}
          alt=""
          style={{ transform: "rotate(4deg)" }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Recoleta", data: regular, weight: 400, style: "normal" },
        { name: "Recoleta", data: medium, weight: 500, style: "normal" },
      ],
    }
  );
}
