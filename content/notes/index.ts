import type { Note } from "./types";
import MeMyselfAndAi, { meta as meMyselfAndAiMeta } from "./me-myself-and-ai";

export type { Note, NoteMeta } from "./types";

// Every published note. Order doesn't matter — getNotes() sorts newest first.
const NOTES: Note[] = [
  { meta: meMyselfAndAiMeta, Body: MeMyselfAndAi },
];

export function getNotes(): Note[] {
  return [...NOTES].sort((a, b) => b.meta.date.localeCompare(a.meta.date));
}

export function getNote(slug: string): Note | undefined {
  return NOTES.find((note) => note.meta.slug === slug);
}

/** Issue number printed on the stamp: the oldest note is No. 01 */
export function getNoteNumber(slug: string): number {
  const oldestFirst = [...NOTES].sort((a, b) => a.meta.date.localeCompare(b.meta.date));
  return oldestFirst.findIndex((note) => note.meta.slug === slug) + 1;
}

/** "2026-10-22" → "Oct 22, 2026". UTC so the day never shifts by timezone. */
export function formatNoteDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
