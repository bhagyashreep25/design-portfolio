import { stampSvg, type StampArt } from "@/lib/stamp";

interface NoteStampProps {
  art: StampArt;
  /** Unique per page (clip-path ids) — the note slug works */
  id: string;
  number?: number;
  className?: string;
}

/** A note's postage-stamp art. Decorative, so hidden from screen readers. */
export default function NoteStamp({ art, id, number, className = "" }: NoteStampProps) {
  return (
    <span
      aria-hidden="true"
      className={`note-stamp-art block ${className}`}
      // Markup is generated from our own static note data in lib/stamp.ts
      dangerouslySetInnerHTML={{ __html: stampSvg(art, { id: `stamp-${id}`, number }) }}
    />
  );
}
