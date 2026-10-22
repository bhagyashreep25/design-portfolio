import type { ComponentType } from "react";
import type { StampArt } from "@/lib/stamp";

export interface NoteMeta {
  /** URL segment: /notes/<slug> */
  slug: string;
  title: string;
  subtitle: string;
  /** Publish date as YYYY-MM-DD */
  date: string;
  /** e.g. "4 min read" — optional, shown next to the date on the post */
  readingTime?: string;
  /** The note's postage-stamp art: list hover, post header, link preview */
  stamp: StampArt;
  /** Optional hero image shown under the title on the post */
  cover?: { src: string; alt: string; width: number; height: number };
}

export interface Note {
  meta: NoteMeta;
  /** The post body. Plain JSX; styled by .note-prose in globals.css */
  Body: ComponentType;
}
