// Handwritten notes around a case study's hero image (.hand-note and
// .hero-notes in globals.css). Coordinates are in the image's own pixel
// space, with a band above and/or below the image for the note text; arrows
// should run down the gutters between mockups so they never cross the UI
// they point at.
//
// Below md the image is shown much smaller, so the text and strokes are drawn
// larger there (see .hero-notes) — and since bigger text takes more room, a
// note can give its own `mobile` text position and arrows for that size.

interface NoteLayout {
  textAt: [number, number];
  arrows: { line: string; head: string }[];
}

export interface HeroNote extends NoteLayout {
  text: string;
  mobile?: NoteLayout;
}

export default function HeroNotes({
  notes,
  width = 1920,
  height = 1080,
  above = 0,
  below = 0,
}: {
  notes: HeroNote[];
  width?: number;
  height?: number;
  /** height of the band above the image that holds note text, in image px */
  above?: number;
  /** same, below the image */
  below?: number;
}) {
  const layout = (note: HeroNote, l: NoteLayout, className: string, i: number) => (
    <g
      key={`${note.text}-${className}`}
      className={`hand-note ${className}`}
      style={{ "--d": `${0.3 + i * 0.8}s` } as React.CSSProperties}
    >
      <text x={l.textAt[0]} y={l.textAt[1]} textAnchor="middle">
        {note.text}
      </text>
      {l.arrows.map((arrow) => (
        <g key={arrow.line}>
          <path pathLength={1} d={arrow.line} />
          <path pathLength={1} d={arrow.head} className="hand-note-head" />
        </g>
      ))}
    </g>
  );

  return (
    <svg
      aria-hidden="true"
      viewBox={`0 ${-above} ${width} ${height + above + below}`}
      className="hero-notes absolute left-0 w-full overflow-visible pointer-events-none"
      style={{
        top: `${(-above / height) * 100}%`,
        height: `${((height + above + below) / height) * 100}%`,
      }}
    >
      {notes.map((note, i) =>
        note.mobile
          ? [layout(note, note, "hidden md:inline", i), layout(note, note.mobile, "md:hidden", i)]
          : layout(note, note, "", i)
      )}
    </svg>
  );
}
