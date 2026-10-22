import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import DottedBackground from "@/components/DottedBackground";
import NoteRow from "@/components/NoteRow";
import NoteStamp from "@/components/NoteStamp";
import { getNotes, getNoteNumber, formatNoteDate } from "@/content/notes";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Notes by Bhagyashree Phadnis — thoughts on product design, craft, and process.",
};

export default function NotesPage() {
  const notes = getNotes();

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <DottedBackground />
      <header className="mb-16">
        <AnimateIn trigger="load" animation="fade-in" duration={500} delay={0} easing="ease-out">
          <h1 className="font-serif text-4xl sm:text-5xl tracking-tight text-[#4c4c4c] mb-5">
            Notes
          </h1>
        </AnimateIn>
        <AnimateIn trigger="load" animation="fade-in" duration={500} delay={0} easing="ease-out">
          <p className="text-lg text-[#8f8f8f] leading-relaxed">
            Thoughts on design, craft, and everything in between.
          </p>
        </AnimateIn>
      </header>

      <section aria-label="All notes">
        {notes.length === 0 ? (
          <p className="text-[#8f8f8f]">Nothing here yet &mdash; check back soon.</p>
        ) : (
          <ul role="list" className="border-t border-[#e5e5e5]">
            {notes.map(({ meta }, i) => (
              <li key={meta.slug} className="border-b border-[#e5e5e5]">
                <AnimateIn delay={i * 80} slideDistance={20}>
                  <NoteRow
                    href={`/notes/${meta.slug}`}
                    stamp={<NoteStamp art={meta.stamp} id={meta.slug} number={getNoteNumber(meta.slug)} />}
                    className="relative flex flex-col gap-3 py-12 sm:py-14 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10"
                  >
                    <div className="min-w-0 sm:max-w-xl">
                      <h2 className="font-serif text-2xl text-[#4c4c4c]">
                        {meta.title}
                      </h2>
                      <p className="mt-2 text-base text-[#8f8f8f] leading-relaxed">
                        {meta.subtitle}
                      </p>
                    </div>
                    <time
                      dateTime={meta.date}
                      className="order-first shrink-0 text-sm text-[#8f8f8f] sm:order-none"
                    >
                      {formatNoteDate(meta.date)}
                    </time>
                  </NoteRow>
                </AnimateIn>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
