import Image from "next/image";

const SHOT_SRC = "/images/bbq-nation/old-flow-audit.webp";
const SHOT_W = 812;
const SHOT_H = 1460;

/**
 * The annotated area is a fixed width so the screenshot renders at a known
 * size — that keeps it exactly as tall as the phone in the panel beside it.
 */
const BOX_W = 482;
/** Fraction of that width taken by the screenshot, and where labels start. */
const SHOT_SPAN = 50.3;
const LABEL_X = SHOT_SPAN + 4;

const LINE = "#8a8a8a";

interface Annotation {
  /** anchor on the screenshot, as a % of its own width and height */
  ax: number;
  ay: number;
  /** vertical position of the label, as a % of the panel height */
  ly: number;
  text: string;
}

const ANNOTATIONS: Annotation[] = [
  { ax: 38, ay: 21.8, ly: 10, text: "Three decisions, one screen" },
  { ax: 32, ay: 64, ly: 42, text: "Price changes with the slot" },
  { ax: 45, ay: 89.5, ly: 68, text: "The offer sets your guest count" },
  // Anchored at the bottom edge: the plain booking is below the fold.
  { ax: 50, ay: 97, ly: 92, text: "Regular booking sits below all this" },
];

/** Anchor point converted from screenshot space into panel space. */
const anchorX = (a: Annotation) => (a.ax * SHOT_SPAN) / 100;

/** Elbow into the label, so the leader meets the text horizontally. */
const leader = (a: Annotation) =>
  `M ${anchorX(a)} ${a.ay} L ${LABEL_X - 3} ${a.ly} L ${LABEL_X} ${a.ly}`;

export default function OldFlowAudit({ className = "" }: { className?: string }) {
  return (
    <figure
      className={`flex h-full flex-col justify-center rounded-xl bg-[#f2f2f2] px-5 py-6 sm:px-7 sm:py-8 ${className}`}
    >
      <figcaption
        className="mx-auto mb-5 w-full text-[11px] uppercase tracking-[0.08em] text-[#9a9a9a]"
        style={{ maxWidth: BOX_W }}
      >
        Audit &mdash; the original reservation screen
      </figcaption>

      {/* The screenshot is in flow, so it sets the height everything else maps onto. */}
      <div className="relative mx-auto w-full" style={{ maxWidth: BOX_W }}>
        <Image
          src={SHOT_SRC}
          alt="The original Barbeque Nation reservation screen, with date, time, guest count and offers all on one scrolling page"
          width={SHOT_W}
          height={SHOT_H}
          sizes="250px"
          className="block w-[50.3%] rounded-md shadow-[0_8px_24px_-10px_rgba(43,17,11,0.3)] ring-1 ring-black/5"
        />

        {/* Leader lines. preserveAspectRatio="none" makes the 0–100 box map to
            panel percentages on both axes; the strokes resist the distortion.
            Each is drawn twice — a light halo first so the line stays legible
            where it crosses the screenshot. */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {ANNOTATIONS.map((a) => (
            <path
              key={`halo-${a.text}`}
              d={leader(a)}
              fill="none"
              stroke="#ffffff"
              strokeOpacity={0.92}
              strokeWidth={3.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          ))}
          {ANNOTATIONS.map((a) => (
            <path
              key={`line-${a.text}`}
              d={leader(a)}
              fill="none"
              stroke={LINE}
              strokeWidth={1.25}
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        {/* Anchor dots, as elements so they stay circular. */}
        {ANNOTATIONS.map((a) => (
          <span
            key={`dot-${a.text}`}
            aria-hidden="true"
            className="absolute h-[13px] w-[13px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6b6b6b] shadow-[0_1px_4px_rgba(43,17,11,0.3)] ring-[3px] ring-white"
            style={{ left: `${anchorX(a)}%`, top: `${a.ay}%` }}
          />
        ))}

        <ul className="contents">
          {ANNOTATIONS.map((a) => (
            <li
              key={a.text}
              className="absolute -translate-y-1/2 pl-2.5 text-[12px] font-medium leading-snug text-[#4c4c4c] sm:text-[13px]"
              style={{
                left: `${LABEL_X}%`,
                top: `${a.ly}%`,
                width: `${100 - LABEL_X}%`,
              }}
            >
              {a.text}
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}
