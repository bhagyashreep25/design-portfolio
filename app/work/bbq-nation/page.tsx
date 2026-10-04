import type { Metadata } from "next";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import BookingFlowPlayer from "@/components/BookingFlowPlayer";
import BrowseOtherProjects from "@/components/BrowseOtherProjects";
import HandMark from "@/components/HandMark";
import HeroNotes, { type HeroNote } from "@/components/HeroNotes";
import OldFlowAudit from "@/components/OldFlowAudit";
import OldFlowVideo from "@/components/OldFlowVideo";
import PasswordGate from "@/components/PasswordGate";
import { isUnlocked } from "@/lib/gate";

export const metadata: Metadata = {
  title: "Barbeque Nation",
  description:
    "Redesigning table booking for India's favourite barbecue chain — one decision per screen.",
};

const summaryItems = [
  { label: "Client", value: "Barbeque Nation" },
  {
    label: "My Role",
    value: [
      "UX Designer:",
      "Research Synthesis, UX Design, Wireframing, Prototyping",
    ],
  },
  {
    label: "Team",
    value: [
      "1 Product Manager,",
      "2 UX Designers, 2 UI Designers,",
      "Engineering team",
    ],
  },
  { label: "Timeline", value: "1 month" },
];

const auditFindings = [
  "Running total buried below the fold — users doing mental math",
  "Savings & offers low-contrast and easy to miss",
  "Booking fee shown with no explanation",
];

const steps = [
  {
    number: "01",
    title: "Guest count",
    body: "Start with who’s coming. One clean input, decoupled from offers — so the count never fights with the deal.",
  },
  {
    number: "02",
    title: "Date & time",
    body: "Availability reflects the guest count, so users never pick a slot that can’t hold their group.",
  },
  {
    number: "03",
    title: "Offers",
    body: "Group buffets, corporate and student offers, coupons and gift cards each carry different cover charges and rules — yet the best option has to be obvious at a glance, and a plain regular booking can never get buried. Where the old app lost people, hierarchy does the work.",
    note: "the screen with the most to prove",
  },
  {
    number: "04",
    title: "Review",
    body: "The final bill, loyalty points, and details — the exact things customers used to call to confirm.",
  },
  {
    number: "05",
    title: "Pay & confirm",
    body: "A confirmation that actually feels confirmed.",
  },
];

const whyItWorks = [
  {
    before: "Pricing was invisible",
    after: "now it’s legible at every step, with no mental math",
  },
  {
    before: "Bookings didn’t feel confirmed",
    after: "now confirmation is a clear, deliberate moment",
  },
  {
    before: "Offers were buried and confusing",
    after: "now they’re one considered decision, not a scavenger hunt",
  },
  {
    before: "Guest count fought with the deal",
    after: "now each choice stands on its own",
  },
];

const lessons = [
  {
    title: "The sharpest lessons weren’t about screens.",
    body: "They came from a Barbeque Nation outlet — talking to the staff who seat guests and the customers waiting for a table. That’s context you can’t get from a Figma file.",
  },
  {
    title: "Reading client feedback is its own skill.",
    body: "This flow went through three or four rounds with the client. Learning to tell a hard constraint from a preference — and both from an unspoken worry about something else — shaped the final design as much as any usability principle did.",
  },
  {
    title: "Support calls are free research.",
    body: "The people fielding the calls knew exactly where the product was failing. Most calls weren’t complaints — they were customers filling gaps the app left open.",
  },
];

// Handwritten notes over the hero, in the image's pixel space (1920×1080)
const HERO_NOTES: HeroNote[] = [
  {
    text: "finally feels booked!",
    textAt: [330, -62],
    arrows: [
      {
        line: "M470 -38C490 -10 505 30 504 120C503 300 501 500 500 560C500 580 506 592 522 594",
        head: "M507 581L524 594L508 607",
      },
    ],
    mobile: {
      textAt: [360, -48],
      arrows: [
        {
          line: "M470 -15C490 30 505 80 504 150C503 320 501 500 500 560C500 580 506 592 522 594",
          head: "M498 570L526 594L500 618",
        },
      ],
    },
  },
  {
    text: "the best deal, at a glance",
    textAt: [1560, -62],
    arrows: [
      {
        line: "M1420 -38C1418 0 1416 60 1416 150C1416 190 1410 210 1386 216",
        head: "M1402 203L1384 216L1403 228",
      },
    ],
    mobile: {
      textAt: [1500, -48],
      arrows: [
        {
          line: "M1420 -15C1418 20 1416 70 1416 150C1416 190 1410 210 1386 216",
          head: "M1410 194L1382 216L1412 236",
        },
      ],
    },
  },
];

export default async function BbqNationPage() {
  // Gate on the server: a locked visitor is never sent the case study at all.
  if (!(await isUnlocked())) return <PasswordGate />;

  return (
    <article style={{ "--cs-accent": "#EA5B1E" } as React.CSSProperties}>
      {/* Header */}
      <AnimateIn trigger="load" animation="fade-in" duration={500} delay={0} easing="ease-out">
        <header className="max-w-5xl mx-auto px-6 py-12 sm:py-20">
          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#4c4c4c] mb-5">
            I redesigned table booking for India&rsquo;s favourite barbecue chain
          </h1>
          <p className="text-lg text-[#8f8f8f] leading-relaxed">
            Barbeque Nation
          </p>
        </header>
      </AnimateIn>

      {/* Hero Image */}
      <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
        <div className="max-w-5xl mx-auto px-6 mb-10 sm:mb-16">
          <div className="relative">
            <Image
              src="/images/bbq-nation/hero-image.webp"
              alt="Barbeque Nation table booking flow hero visual"
              width={1920}
              height={1080}
              quality={90}
              className="w-full h-auto rounded-xl"
              priority
            />
            <HeroNotes notes={HERO_NOTES} above={120} />
          </div>
        </div>
      </AnimateIn>

      {/* Summary Table */}
      <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
        <div className="max-w-5xl mx-auto px-6 mb-12 sm:mb-20">
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-12 py-8">
            {summaryItems.map((item) => (
              <div key={item.label}>
                <dt className="text-[16px] font-semibold text-[#6b6b6b] uppercase mb-2">
                  {item.label}
                </dt>
                {Array.isArray(item.value) ? (
                  <dd className="text-[18px] text-[#4c4c4c]">
                    <ul className="space-y-1">
                      {item.value.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </dd>
                ) : (
                  <dd className="text-[18px] text-[#4c4c4c]">{item.value}</dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </AnimateIn>

      {/* Case Study Sections */}
      <div className="max-w-5xl mx-auto px-6">
        {/* TL;DR */}
        <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
          <section className="mb-12 sm:mb-20">
            <p className="text-[18px] font-semibold text-[#6b6b6b] uppercase mb-4">
              TL;DR
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#4c4c4c] leading-tight mb-6">
              What I did and why it mattered
            </h2>
            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl">
              Customers were completing bookings in the app &mdash; and then
              calling the restaurant to ask whether it had actually gone
              through. I traced those calls back to the screens that caused
              them, then rebuilt the flow around one decision per screen, in
              the order people actually think. The goal it was designed
              against: lift digital bookings from 26% to 50%.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="#designs"
                className="inline-flex items-center gap-2 bg-[#D2B9FA] text-[#4c4c4c] font-normal text-[18px] p-[13px] hover:bg-[#c4a6f5] transition-colors"
              >
                Jump to the Designs
              </a>
            </div>
          </section>
        </AnimateIn>

        {/* The Problem */}
        <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
          <section className="mb-12 sm:mb-20">
            <p className="text-[18px] font-semibold text-[#6b6b6b] uppercase mb-4">
              The Problem
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#4c4c4c] leading-tight mb-6">
              An app that trained its most loyal customers to pick up the phone
            </h2>
            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl">
              Barbeque Nation&rsquo;s app had a booking flow. Technically, it
              worked. But customers didn&rsquo;t behave like it did. They&rsquo;d
              complete a booking on the app &mdash; then call the restaurant to
              ask if it actually went through. The support team heard it daily.
              For a brand where 80% of customers are repeat visitors, the app
              had somehow taught its most loyal users to reach for the phone
              instead.
            </p>
            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl mt-4">
              Pricing made things worse &mdash; rates shift by day, time slot,
              and location, but none of that was clear in the app. The goal was
              to take digital bookings from 26% to 50%. But first, the app had
              to earn something it hadn&rsquo;t yet: trust.
            </p>
          </section>
        </AnimateIn>

        {/* Listening to the support team */}
        <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
          <section className="mb-12 sm:mb-20">
            <p className="text-[18px] font-semibold text-[#6b6b6b] uppercase mb-4">
              Understanding the Problem
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#4c4c4c] leading-tight mb-6">
              The first real insight came from the people fielding the calls
            </h2>
            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl">
              In a discovery call with the client and a separate interview with
              Manoj P., the DGM of Customer Support, a pattern became clear:
              most calls weren&rsquo;t complaints. They were customers trying to
              fill gaps the app left open. Price inquiries, offer availability,
              booking reconfirmations &mdash; questions with straightforward
              answers that the app simply wasn&rsquo;t surfacing at the right
              moment.
            </p>
          </section>
        </AnimateIn>
      </div>

      {/* Support Quote */}
      <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
        <div className="max-w-5xl mx-auto px-6 mb-12 sm:mb-20">
          <blockquote className="text-center px-6 sm:px-16">
            <p className="font-serif text-2xl sm:text-3xl font-medium text-[#8f8f8f] leading-snug">
              &ldquo;Customers book through the online channel &mdash; they call
              and ask if their booking is{" "}
              <strong className="font-bold text-[#EA5B1E]">
                <HandMark variant="underline">confirmed</HandMark>
              </strong>{" "}
              or
              not.&rdquo;
            </p>
            <p className="text-base text-[#8f8f8f] mt-4">
              &mdash; Manoj P., DGM Customer Support
            </p>
          </blockquote>
        </div>
      </AnimateIn>

      <div className="max-w-5xl mx-auto px-6">
        {/* Auditing the existing flow */}
        <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
          <section className="mb-12 sm:mb-20">
            <p className="text-[18px] font-semibold text-[#6b6b6b] uppercase mb-4">
              Auditing the Existing Flow
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#4c4c4c] leading-tight mb-6">
              One screen, three tangled decisions
            </h2>
            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl mb-6">
              Guest count, date and time, and offers were all resolved on a
              single screen, knotted together in ways that made each one
              harder. Guest count was never a clean input &mdash; the offer set
              it. Choose &ldquo;Sizzling 8&rdquo; and your party locked to
              eight. Want a plain booking, and you set the count yourself with
              a stepper that sat below every deal. Corporate offers lived in a
              section of their own, past everything else.
            </p>
            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl mb-10">
              Pricing was no easier to read, and the confirmation screen that
              followed &mdash; the moment that should make a booking feel{" "}
              <em>real</em> &mdash; had no clear success state and no
              acknowledgement of the points just earned.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {auditFindings.map((item) => (
                <div key={item} className="bg-[#FFF1E8] rounded-lg px-5 py-4">
                  <p className="text-base text-[#6b6b6b]">&gt; {item}</p>
                </div>
              ))}
            </div>
          </section>
        </AnimateIn>
      </div>

      {/* Old Flow Visuals */}
      <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
        <div className="px-4 sm:px-8 mb-12 sm:mb-20">
          {/* Side by side only from xl — below that a two-column cell is too narrow
              for the annotated area, which would break the matched heights */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 items-stretch">
            <figure className="flex h-full flex-col rounded-xl bg-[#f2f2f2] px-5 py-6 sm:px-7 sm:py-8">
              <figcaption className="mb-5 text-[11px] uppercase tracking-[0.08em] text-[#9a9a9a]">
                Booking a table in the old app
              </figcaption>
              <div className="flex flex-1 items-center justify-center">
                <OldFlowVideo
                  src="/images/bbq-nation/old-flow-recording.mp4"
                  poster="/images/bbq-nation/old-flow-poster.webp"
                  label="Screen recording of the original Barbeque Nation app, walking through the old booking flow"
                  className="w-[209px]"
                />
              </div>
            </figure>
            <OldFlowAudit />
          </div>
        </div>
      </AnimateIn>

      <div className="max-w-5xl mx-auto px-6">
        {/* The Reframe */}
        <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
          <section id="designs" className="mb-12 sm:mb-20 scroll-mt-24">
            <p className="text-[18px] font-semibold text-[#6b6b6b] uppercase mb-4">
              The Reframe
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#4c4c4c] leading-tight mb-6">
              One decision per screen, in the order people actually think
            </h2>
            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl mb-10">
              Not more features &mdash; fewer collisions. Each decision got its
              own step, sequenced so every choice cleanly set up the next.
            </p>

            <div className="space-y-8 max-w-4xl">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-5">
                  <span className="font-serif text-2xl font-medium text-[#EA5B1E] shrink-0 pt-0.5">
                    {step.number}
                  </span>
                  <div>
                    <p className="font-serif text-2xl font-medium text-[#4c4c4c] mb-2">
                      {step.title}
                      {step.note && (
                        <span className="font-sans text-base font-normal text-[#8f8f8f]">
                          {" "}
                          &mdash; {step.note}
                        </span>
                      )}
                    </p>
                    <p className="text-base text-[#6b6b6b] leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </AnimateIn>
      </div>

      {/* Interactive Flow Walkthrough */}
      <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
        <div className="bg-[#FFF1E8] py-14 sm:py-20 mb-12 sm:mb-20">
          <div className="max-w-5xl mx-auto px-6">
            <BookingFlowPlayer />
          </div>
        </div>
      </AnimateIn>

      {/* Where It Stands */}
      <div className="max-w-5xl mx-auto px-6">
        <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
          <section className="mb-12 sm:mb-20">
            <p className="text-[18px] font-semibold text-[#6b6b6b] uppercase mb-4">
              Where It Stands
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#4c4c4c] leading-tight mb-6">
              Every decision traces back to a reason customers used to call
            </h2>
            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl mb-10">
              The redesign went through several rounds of iteration and review
              with the client. It hasn&rsquo;t launched yet &mdash; the real test
              comes after release &mdash; but the target it was built against is
              clear, and it isn&rsquo;t arbitrary.
            </p>

            <div className="space-y-6 max-w-4xl">
              {whyItWorks.map((item) => (
                <div key={item.before} className="flex gap-3">
                  <span className="text-[#EA5B1E] font-bold text-lg mt-0.5">
                    &gt;
                  </span>
                  <p className="text-base text-[#6b6b6b] leading-relaxed">
                    <strong className="text-[#4c4c4c] font-semibold">
                      {item.before}
                    </strong>{" "}
                    &rarr; {item.after}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </AnimateIn>
      </div>

      {/* By the Numbers */}
      <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
        <section className="mb-12 mt-12 sm:mb-20 sm:mt-20">
          <div className="max-w-5xl mx-auto px-6 mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#4c4c4c] leading-tight mb-6">
              What It&rsquo;s Built Against
            </h2>
            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl">
              The numbers that framed every decision in this project
            </p>
          </div>

          <div className="bg-[#FFF1E8] pt-16 pb-16 sm:pb-28">
            <div className="max-w-5xl mx-auto px-6">
              {/* Its own AnimateIn so the circle waits until the numbers are on screen */}
              <AnimateIn trigger="scroll" animation="fade-in" duration={300} threshold={0.6}>
                <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                  {[
                    { label: "Digital booking share today", value: "26%" },
                    { label: "Target after the redesign", value: "50%", circled: true },
                    { label: "Customers who are repeat visitors", value: "80%" },
                  ].map((metric) => (
                    <div key={metric.label} className="flex flex-col justify-end">
                      <p className="text-base text-[#333333] mb-4">
                        {metric.label}
                      </p>
                      <p className="font-serif text-6xl sm:text-7xl font-bold text-[#EA5B1E]">
                        {metric.circled ? <HandMark>{metric.value}</HandMark> : metric.value}
                      </p>
                    </div>
                  ))}
                  {/* Arrow from today's share to the target, from the first
                      column's centre to the second's */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 300 76"
                    className="hand-note hidden sm:block absolute top-full mt-1 overflow-visible"
                    style={{
                      left: "calc((100% - 4rem) / 6)",
                      width: "calc(100% / 3 + 2rem / 3)",
                      aspectRatio: "300 / 76",
                      "--d": "1.3s",
                      "--sw": 2,
                    } as React.CSSProperties}
                  >
                    <path pathLength={1} d="M8 4C70 48 214 50 274 8" />
                    <path pathLength={1} d="M255 8L275 6L270 25" className="hand-note-head" />
                    <text x="142" y="70" textAnchor="middle" style={{ fontSize: 26 }}>
                      nearly double
                    </text>
                  </svg>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>
      </AnimateIn>

      {/* What I Took Away */}
      <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
        <div className="max-w-5xl mx-auto px-6 mb-12 sm:mb-20">
          <section>
            <p className="text-[18px] font-semibold text-[#6b6b6b] uppercase mb-4">
              What I Took Away
            </p>
            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl mb-8">
              The bet is simple: when the app answers the questions people used
              to phone in, they stop phoning in. They just book. Here&rsquo;s
              what getting there taught me:
            </p>

            <div className="space-y-6 max-w-4xl">
              {lessons.map((lesson) => (
                <div key={lesson.title} className="flex gap-3">
                  <span className="text-[#EA5B1E] font-bold text-lg mt-0.5">
                    &gt;
                  </span>
                  <p className="text-base text-[#6b6b6b] leading-relaxed">
                    <strong className="text-[#4c4c4c] font-semibold">
                      {lesson.title}
                    </strong>{" "}
                    {lesson.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </AnimateIn>

      {/* Browse Other Projects */}
      <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
        <BrowseOtherProjects currentSlug="bbq-nation" />
      </AnimateIn>
    </article>
  );
}
