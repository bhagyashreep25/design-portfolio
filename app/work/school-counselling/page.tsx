import type { Metadata } from "next";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import BrowseOtherProjects from "@/components/BrowseOtherProjects";
import HandMark from "@/components/HandMark";
import HeroNotes, { type HeroNote } from "@/components/HeroNotes";
import LoopingVideo from "@/components/LoopingVideo";

export const metadata: Metadata = {
  title: "CounselSync",
  description:
    "Streamlining school counselling processes — one dashboard at a time.",
};

const summaryItems = [
  {
    label: "Context",
    value: "Agency project for a long-time school client",
  },
  {
    label: "My Role",
    value: [
      "Lead Product Designer:",
      "Strategy & Decision Making, Wireframing, Visual/UI Design",
    ],
  },
  { label: "Timeline", value: "3–4 months" },
  {
    label: "Outcome",
    value: "Shipped to production — currently rolling out to schools",
  },
];

// One handwritten note under the hero, in the image's pixel space
// (1920×1080), pointing up at the edge-case screens either side of it
const HERO_NOTES: HeroNote[] = [
  {
    text: "every edge case, designed",
    textAt: [1150, 1172],
    arrows: [
      {
        line: "M925 1150C840 1150 745 1135 722 1096",
        head: "M708 1110L721 1094L736 1108",
      },
      {
        line: "M1385 1150C1490 1150 1580 1135 1600 1096",
        head: "M1586 1108L1600 1094L1614 1110",
      },
    ],
    mobile: {
      textAt: [1160, 1185],
      arrows: [
        {
          line: "M780 1165C745 1160 725 1140 722 1100",
          head: "M700 1122L721 1094L744 1120",
        },
        {
          line: "M1540 1165C1580 1160 1598 1140 1600 1100",
          head: "M1578 1120L1600 1094L1622 1122",
        },
      ],
    },
  },
];

export default function SchoolCounsellingPage() {
  return (
    <article style={{ "--cs-accent": "#8C63D1" } as React.CSSProperties}>
      {/* Header */}
      <AnimateIn trigger="load" animation="fade-in" duration={500} delay={0}>
        <header className="max-w-5xl mx-auto px-6 py-12 sm:py-20">
          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#4c4c4c] mb-5">
            Streamlining school counselling processes — one dashboard at a time
          </h1>
          <p className="text-lg text-[#8f8f8f] leading-relaxed">
            CounselSync
          </p>
        </header>
      </AnimateIn>

      {/* Hero Image */}
      <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
        <div className="max-w-5xl mx-auto px-6 mb-10 sm:mb-16">
          <div className="relative">
            <Image
              src="/images/school-counselling/hero-image.svg"
              alt="CounselSync dashboard hero visual"
              width={1200}
              height={675}
              className="w-full h-auto rounded-xl"
              priority
            />
            <HeroNotes notes={HERO_NOTES} below={130} />
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
        {/* At a Glance */}
        <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
          <section className="mb-12 sm:mb-20">
            <p className="text-[18px] font-semibold text-[#6b6b6b] uppercase mb-4">
              TL;DR
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#4c4c4c] leading-tight mb-6">
              What I did and why it mattered
            </h2>
            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl">
              I inherited a stalled counselling platform with hundreds of screens
              and several incomplete flows, mapped the gaps across multiple user
              roles, designed critical missing flows from scratch, and stayed
              through two months of dev handoff until it shipped.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="#designs"
                className="inline-flex items-center gap-2 bg-[#D2B9FA] text-[#4c4c4c] font-normal text-[18px] p-[13px] hover:bg-[#c4a6f5] transition-[color,background-color,transform] duration-150 ease-out active:scale-[0.97]"
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
              Counsellors managing sensitive caseloads with spreadsheets and scattered files
            </h2>
            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl">
              School counsellors juggle sensitive, high-stakes caseloads every
              day &mdash; tracking sessions, coordinating with parents and teachers,
              managing consent and documentation &mdash; often with nothing more than
              spreadsheets and scattered files. There&rsquo;s no unified view of a
              student&rsquo;s journey, no structured way to flag who needs follow-up,
              and critical paperwork lives in inboxes and shared drives instead of
              one reliable place. CounselSync was being built to change that.
            </p>
          </section>
        </AnimateIn>

        {/* Where I Came In */}
        <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
          <section className="mb-12 sm:mb-20">
            <p className="text-[18px] font-semibold text-[#6b6b6b] uppercase mb-4">
              Where I Came In
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#4c4c4c] leading-tight mb-6">
              Hundreds of screens, stalled mid-design, and a dev team waiting to build
            </h2>
            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl">
              CounselSync had been in progress for a while &mdash; and then the
              previous designer left. Flows were incomplete, edge cases were
              unresolved, the designs sat on a slightly outdated version of the
              design system, and development couldn&rsquo;t move forward. I was
              brought in to make sense of what existed, identify what was missing,
              and get this across the finish line &mdash; auditing hundreds of
              screens, closing gaps, updating the design system, and driving toward
              dev handoff.
            </p>
          </section>
        </AnimateIn>

        {/* Making Sense of It All */}
        <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
          <section className="mb-12 sm:mb-20">
            <p className="text-[18px] font-semibold text-[#6b6b6b] uppercase mb-4">
              Making Sense of It All
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#4c4c4c] leading-tight mb-6">
              Auditing the existing designs, mapping data flows, and finding the gaps
            </h2>
            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl mb-10">
              CounselSync serves multiple roles &mdash; counsellors, students, parents,
              teachers &mdash; each interacting with the same data differently. With
              several incomplete flows and no designer to ask, I needed to see the
              full picture fast.
            </p>
            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl mb-10">
              I created flow diagrams mapping how data moves between roles &mdash;
              exposing incomplete flows, missing edge cases, and outdated design
              system inconsistencies along the way. I then annotated every flow with
              logic, gaps, and decisions &mdash; sharpening my own understanding while
              building ready-made documentation for the dev handoff.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                "Flow diagrams mapping data across all roles",
                "Detailed annotations for every flow",
                "A clear picture of what\u2019s broken and what\u2019s missing",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-[#f4ebff] rounded-lg px-5 py-4"
                >
                  <p className="text-base text-[#6b6b6b]">
                    &gt; {item}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </AnimateIn>
      </div>

      {/* Flow Diagrams Visuals */}
      <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
        <div className="px-4 sm:px-8 mb-12 sm:mb-20 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Image
              src="/images/school-counselling/flow-diagrams.svg"
              alt="Flow diagrams mapping data across all counselling roles"
              width={1200}
              height={800}
              className="w-full h-auto rounded-xl"
            />
            <Image
              src="/images/school-counselling/annotated-screens.svg"
              alt="Annotated screens with logic, gaps, and decisions"
              width={1200}
              height={800}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </AnimateIn>

      {/* Highlighted Quote */}
      <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
        <div className="max-w-5xl mx-auto px-6 mb-12 sm:mb-20">
          <blockquote className="text-center px-6 sm:px-16">
            <p className="font-serif text-2xl sm:text-3xl font-medium text-[#8f8f8f] leading-snug">
              &ldquo;The flows looked complete on the surface &mdash; but the moment
              you followed a real user through an edge case, they{" "}
              <strong className="font-bold text-[#8C63D1]">
                <HandMark variant="underline">fell apart</HandMark>
              </strong>.&rdquo;
            </p>
          </blockquote>
        </div>
      </AnimateIn>

      <div className="max-w-5xl mx-auto px-6">
        {/* Designing the Close Case Flow */}
        <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
          <section id="designs" className="mb-12 sm:mb-20 scroll-mt-24">
            <p className="text-[18px] font-semibold text-[#6b6b6b] uppercase mb-4">
              Designing the Close Case Flow
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#4c4c4c] leading-tight mb-6">
              A critical missing piece &mdash; ensuring cases reach a proper resolution
            </h2>
            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl">
              One of the biggest gaps I uncovered: there was no way to formally
              close a case. Cases could be opened and managed, but there was no
              defined end state &mdash; meaning cases lingered indefinitely with no
              way to tell what was resolved and what wasn&rsquo;t.
            </p>
            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl mt-4">
              I designed this flow from scratch. Closure isn&rsquo;t just a
              button &mdash; it&rsquo;s a checkpoint. All sessions must be complete,
              documents finalized, and the student must confirm their concerns were
              addressed. If any condition isn&rsquo;t met, the system blocks closure
              and surfaces exactly what&rsquo;s still pending. When a student
              doesn&rsquo;t give consent, the flow ensures their voice remains part
              of the resolution rather than letting the case close silently.
            </p>
          </section>
        </AnimateIn>
      </div>

      {/* Close Case Flow Visuals */}
      <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
        <div className="px-4 sm:px-8 mb-12 sm:mb-20 space-y-4">
          <LoopingVideo
            src="/images/school-counselling/closed-case-flow-counsellor.mp4"
            poster="/images/school-counselling/closed-case-flow-counsellor-poster.webp"
            label="Counsellor close case flow walkthrough"
            className="w-full h-auto rounded-xl"
          />
          <Image
            src="/images/school-counselling/closed-case-flow-student.svg"
            alt="Student close case flow screens"
            width={2400}
            height={800}
            className="w-full h-auto rounded-xl"
          />
        </div>
      </AnimateIn>

      <div className="max-w-5xl mx-auto px-6">
        {/* Tracking Case Requests */}
        <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
          <section className="mb-12 sm:mb-20">
            <p className="text-[18px] font-semibold text-[#6b6b6b] uppercase mb-4">
              Tracking Case Requests Across Roles
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#4c4c4c] leading-tight mb-6">
              Giving non-counsellor roles visibility into the cases they raise
            </h2>
            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl">
              Any non-counsellor role can raise a case request, but only the
              counsellor manager decides whether it becomes an actual case. I
              designed a mini dashboard with a table view of all submitted requests
              and their status &mdash; so requesters are never left wondering whether
              their concern was heard.
            </p>
          </section>
        </AnimateIn>
      </div>

      {/* Case Requests Visuals */}
      <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
        <div className="px-4 sm:px-8 mb-12 sm:mb-20">
          <LoopingVideo
            src="/images/school-counselling/case-requests.mp4"
            poster="/images/school-counselling/case-requests-poster.webp"
            label="Case request tracking dashboard with table view and status indicators"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </AnimateIn>

      <div className="max-w-5xl mx-auto px-6">
        {/* Getting It Out the Door */}
        <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
          <section className="mb-12 sm:mb-20">
            <p className="text-[18px] font-semibold text-[#6b6b6b] uppercase mb-4">
              Getting It Out the Door
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#4c4c4c] leading-tight mb-6">
              From Figma to production &mdash; and staying until it shipped right
            </h2>
            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl mb-10">
              Handoff wasn&rsquo;t a one-time event. I annotated every flow with
              logic and decisions, added all flows to Monday.com to give the dev
              team a structured build sequence, and walked them through the designs
              live.
            </p>
            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl mb-10">
              But designs don&rsquo;t survive first contact with code. I stayed on
              for two months post-handoff, conducting UI audits to catch where the
              design was getting lost in translation &mdash; and working directly
              with devs to course-correct before things shipped. The goal was
              simple: what we designed is what the counsellors get.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                "Annotated flows with logic and decisions",
                "Structured build sequence on Monday.com",
                "Two months of UI audits post-handoff",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-[#f4ebff] rounded-lg px-5 py-4"
                >
                  <p className="text-base text-[#6b6b6b]">
                    &gt; {item}
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
              By the Numbers
            </h2>
            <p className="text-base text-[#6b6b6b] leading-relaxed max-w-4xl">
              The impact of auditing, designing, and shipping
            </p>
          </div>

          <div className="bg-[#f4ebff] py-16">
            <div className="max-w-5xl mx-auto px-6">
              {/* Its own AnimateIn so the circle waits until the numbers are on screen */}
              <AnimateIn trigger="scroll" animation="fade-in" duration={300} threshold={0.6}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
                  {[
                    { label: "Flows documented & handed off", value: "150+" },
                    { label: "Missing flows identified & added", value: "15", circled: true },
                    { label: "Edge cases resolved", value: "25" },
                    { label: "UI audit issues caught before shipping", value: "90%" },
                  ].map((metric) => (
                    <div key={metric.label} className="flex flex-col justify-end">
                      <p className="text-base text-[#333333] mb-4">
                        {metric.label}
                      </p>
                      <p className="font-serif text-6xl sm:text-7xl font-bold text-[#8C63D1]">
                        {"circled" in metric ? <HandMark>{metric.value}</HandMark> : metric.value}
                      </p>
                    </div>
                  ))}
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
              CounselSync has shipped and is currently rolling out to schools.
              Here&rsquo;s what this project taught me:
            </p>

            <div className="space-y-6 max-w-4xl mb-12">
              {[
                {
                  title: "Ramping up is a skill in itself.",
                  body: "I learned to build understanding through action — creating flow diagrams and annotations instead of waiting for perfect context.",
                },
                {
                  title: "Documentation is a design tool.",
                  body: "What I created for my own understanding became the backbone of the dev handoff. Investing early paid off twice.",
                },
                {
                  title: "Real collaboration isn\u2019t recurring meetings.",
                  body: "Being embedded in the dev team\u2019s Google Chat space meant quick answers in minutes, not days. Shipping well meant being present, not adjacent.",
                },
              ].map((lesson) => (
                <div key={lesson.title} className="flex gap-3">
                  <span className="text-[#8C63D1] font-bold text-lg mt-0.5">&gt;</span>
                  <p className="text-base text-[#6b6b6b] leading-relaxed">
                    <strong className="text-[#4c4c4c] font-semibold">
                      {lesson.title}
                    </strong>{" "}
                    {lesson.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <blockquote className="text-center px-6 sm:px-16">
              <p className="font-serif text-2xl sm:text-3xl font-medium text-[#8f8f8f] leading-snug">
                &ldquo;Bhagyashree really went{" "}
                <strong className="font-bold text-[#8C63D1]">
                  all out
                </strong>{" "}
                to ship this module&rdquo;
              </p>
              <p className="text-base text-[#8f8f8f] mt-4">
                &mdash; Agency Lead
              </p>
            </blockquote>
          </section>
        </div>
      </AnimateIn>

      {/* Browse Other Projects */}
      <AnimateIn trigger="scroll" animation="fade-in" duration={500} threshold={0.1}>
        <BrowseOtherProjects currentSlug="school-counselling" />
      </AnimateIn>
    </article>
  );
}
