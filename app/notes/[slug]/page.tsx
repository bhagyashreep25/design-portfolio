import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "react-feather";
import AnimateIn from "@/components/AnimateIn";
import NoteStamp from "@/components/NoteStamp";
import { getNote, getNotes, getNoteNumber, formatNoteDate } from "@/content/notes";

type Params = Promise<{ slug: string }>;

// Only the notes in content/notes exist; anything else 404s
export const dynamicParams = false;

export function generateStaticParams() {
  return getNotes().map(({ meta }) => ({ slug: meta.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return {};
  const { title, subtitle, date } = note.meta;
  // The preview image comes from ./opengraph-image.tsx. twitter is set here
  // so the site-wide twitter image from the root layout doesn't override it.
  return {
    title,
    description: subtitle,
    openGraph: {
      type: "article",
      title,
      description: subtitle,
      publishedTime: date,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: subtitle,
    },
  };
}

export default async function NotePage({ params }: { params: Params }) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  const { meta, Body } = note;

  // Newer / older neighbours for the footer nav (list is newest first)
  const all = getNotes();
  const index = all.findIndex((n) => n.meta.slug === slug);
  const newer = all[index - 1]?.meta;
  const older = all[index + 1]?.meta;

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
      <article className="mx-auto max-w-2xl">
        <AnimateIn trigger="load" animation="fade-in" duration={500}>
          <Link
            href="/notes"
            className="group inline-flex items-center gap-1 text-sm text-[#8f8f8f] transition-colors duration-200 hover:text-[#4c4c4c]"
          >
            <ChevronLeft
              size={16}
              strokeWidth={1.75}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-x-0.5"
            />
            All notes
          </Link>
        </AnimateIn>

        <header className="mt-10 mb-12 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
          <AnimateIn trigger="load" animation="fade-in" duration={500} className="min-w-0 sm:order-last sm:shrink-0">
            <NoteStamp
              art={meta.stamp}
              id={meta.slug}
              number={getNoteNumber(meta.slug)}
              className="note-post-stamp w-24 sm:w-36"
            />
          </AnimateIn>
          <AnimateIn trigger="load" animation="fade-in" duration={500} className="min-w-0">
            <p className="text-sm text-[#8f8f8f]">
              <time dateTime={meta.date}>{formatNoteDate(meta.date)}</time>
              {meta.readingTime && (
                <>
                  <span aria-hidden="true" className="mx-2">&middot;</span>
                  {meta.readingTime}
                </>
              )}
            </p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl leading-tight tracking-tight text-[#4c4c4c]">
              {meta.title}
            </h1>
            <p className="mt-5 text-xl text-[#8f8f8f] leading-relaxed">
              {meta.subtitle}
            </p>
          </AnimateIn>
        </header>

        {meta.cover && (
          <AnimateIn trigger="load" delay={150} slideDistance={20} className="mb-12">
            <Image
              src={meta.cover.src}
              alt={meta.cover.alt}
              width={meta.cover.width}
              height={meta.cover.height}
              sizes="(min-width: 768px) 672px, 100vw"
              className="w-full h-auto rounded-xl"
              priority
            />
          </AnimateIn>
        )}

        <AnimateIn trigger="load" delay={150} slideDistance={20}>
          <div className="note-prose">
            <Body />
          </div>
        </AnimateIn>

        {(newer || older) && (
          <nav
            aria-label="More notes"
            className="mt-20 grid gap-6 border-t border-[#e5e5e5] pt-10 sm:grid-cols-2"
          >
            {older ? (
              <Link href={`/notes/${older.slug}`} className="group block">
                <span className="text-sm text-[#8f8f8f]">&larr; Previous</span>
                <span className="mt-1 block font-serif text-xl text-[#4c4c4c] transition-colors duration-200 group-hover:text-[#8c63d1]">
                  {older.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {newer && (
              <Link href={`/notes/${newer.slug}`} className="group block sm:text-right">
                <span className="text-sm text-[#8f8f8f]">Next &rarr;</span>
                <span className="mt-1 block font-serif text-xl text-[#4c4c4c] transition-colors duration-200 group-hover:text-[#8c63d1]">
                  {newer.title}
                </span>
              </Link>
            )}
          </nav>
        )}
      </article>
    </div>
  );
}
