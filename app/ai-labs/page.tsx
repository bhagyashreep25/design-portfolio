import type { Metadata } from "next";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import DottedBackground from "@/components/DottedBackground";
import LoopingVideo from "@/components/LoopingVideo";

export const metadata: Metadata = {
  title: "AI Labs",
  description:
    "AI-powered tools built from scratch by Bhagyashree Phadnis — a cozy habits app, Figma plugins, karaoke tracks, coffee tracking, and meal planning.",
};

type LabMedia =
  | { kind: "image"; src: string; alt: string }
  | {
      kind: "video";
      src: string;
      poster: string;
      label: string;
      width: number;
      height: number;
    };

/** Where each project is on the road to being published. */
type LabStatus = "building" | "under-review" | "beta-review" | "live";

const STATUS: Record<LabStatus, { label: string; className: string }> = {
  building: { label: "Building", className: "text-[#94590b] bg-[#fdf1dc]" },
  "under-review": { label: "Under review", className: "text-[#2c64a3] bg-[#e6f0fb]" },
  "beta-review": { label: "Beta review", className: "text-[#9a3f8f] bg-[#fbeaf8]" },
  live: { label: "Live", className: "text-[#2a7140] bg-[#e4f4e8]" },
};

/** 14px line icon for a status; the live dot gets a soft pulse instead. */
function StatusIcon({ status }: { status: LabStatus }) {
  if (status === "live") {
    return (
      <span aria-hidden="true" className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#3fae5f] opacity-60 motion-safe:animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3fae5f]" />
      </span>
    );
  }
  const paths: Record<Exclude<LabStatus, "live">, string[]> = {
    // hammer
    building: ["M2.5 13.5l6-6", "M7 4l2.5-2.5 5 5L12 9z"],
    // hourglass
    "under-review": ["M4 1.75h8", "M4 14.25h8", "M5 1.75c0 3.5 6 3.5 6 6.25s-6 2.75-6 6.25", "M11 1.75c0 3.5-6 3.5-6 6.25s6 2.75 6 6.25"],
    // flask (a beta build out for testing)
    "beta-review": ["M6 1.75h4", "M7 1.75v4.5L3.2 12.6a1.1 1.1 0 0 0 .95 1.65h7.7a1.1 1.1 0 0 0 .95-1.65L9 6.25v-4.5", "M4.6 10.25h6.8"],
  };
  return (
    <svg aria-hidden="true" width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      {paths[status].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

interface LabItem {
  name: string;
  subtitle: string;
  /** small pen doodle drawn above the title, in a 40×40 box */
  doodle: string[];
  oneLiner: string;
  description: string;
  status: LabStatus;
  tags: string[];
  mediaType: "phone" | "image";
  media: LabMedia;
  tryItUrl: string | null;
  /** link text; defaults to "Try it out" */
  tryItLabel?: string;
}

const labItems: LabItem[] = [
  {
    name: "kani",
    subtitle: "Habits & Focus",
    doodle: [
      "M6 31c0-13 8-23 19-23 6 0 10 5 10 11 0 7-6 12-15 12z",
      "M26 23c-3 0-5-2-5-5s3-4 5-3 2 4 0 4",
      "M10 31v-6",
      "M15 31v-5",
    ],
    oneLiner: "Cozy habits with a hermit crab",
    description:
      "Kani is a hermit crab living on a hand-drawn beach. Each small daily ritual you keep (the kind things you do for yourself) brings in a trinket from the sea for its shell. Focus mode blocks the apps you choose through Screen Time while you work under moonlight, and you can leave notes in bottles. And no guilt: no streaks, no punishments, no red badges. Miss a day and Kani is just as happy to see you.",
    status: "beta-review",
    tags: ["iOS App"],
    mediaType: "phone",
    media: {
      kind: "video",
      src: "/images/ai-labs/kani.mp4",
      poster: "/images/ai-labs/kani-poster.webp",
      label: "kani habits and focus app demo",
      width: 640,
      height: 1392,
    },
    tryItUrl: "https://testflight.apple.com/join/XR22KxqZ",
    tryItLabel: "Join the beta",
  },
  {
    name: "link buddy",
    subtitle: "Figma Prototype Link Grabber",
    doodle: [
      "M17 25l-4 4a5 5 0 0 1-7-7l6-6a5 5 0 0 1 7 0",
      "M23 15l4-4a5 5 0 0 1 7 7l-6 6a5 5 0 0 1-7 0",
      "M16 24l8-8",
    ],
    oneLiner: "Skip the click-hunt",
    description:
      "A Figma plugin that scans every section and prototype flow on a page and surfaces all shareable links in one place. No more selecting each frame, hitting share, copying, repeating. Just open, grab, go.",
    status: "under-review",
    tags: ["Plugin"],
    mediaType: "image" as const,
    media: {
      kind: "video" as const,
      src: "/images/ai-labs/linkd.mp4",
      poster: "/images/ai-labs/linkd-poster.webp",
      label: "Link Buddy Figma plugin demo",
      width: 1000,
      height: 1280,
    },
    tryItUrl: null,
  },
  {
    name: "strippd",
    subtitle: "Karaoke Track Generator",
    doodle: [
      "M14 31a5 4 0 1 1-1-4V9l17-4v20",
      "M30 25a5 4 0 1 1-1-4",
      "M13 15l17-4",
    ],
    oneLiner: "Sing it your way",
    description:
      "A web tool that generates karaoke tracks from any song. Free karaoke tracks online sound terrible — and bad backing tracks make even good singers sound off. So I built one that doesn't compromise the performance.",
    status: "live",
    tags: ["Website"],
    mediaType: "image",
    media: {
      kind: "image",
      src: "/images/ai-labs/strippd.png",
      alt: "strippd karaoke track generator",
    },
    tryItUrl: "https://bagsphadnis-strippd.hf.space/",
  },
  {
    name: "brew\u2019d",
    subtitle: "Coffee Tracker",
    doodle: [
      "M8 19h21v8a8 8 0 0 1-8 8h-5a8 8 0 0 1-8-8z",
      "M29 21h3a4 4 0 0 1 0 8h-3",
      "M14 14c-3-3 3-5 0-9",
      "M21 14c-3-3 3-5 0-9",
    ],
    oneLiner: "Every blend, remembered",
    description:
      "A minimal coffee tracker for logging every blend I try across roasters all over the country. My notes app was chaos. This just feels right — cute, hands-free, and built for someone who treats coffee like a quiet obsession.",
    status: "building",
    tags: ["iOS App"],
    mediaType: "phone" as const,
    media: {
      kind: "video" as const,
      src: "/images/ai-labs/coffee-tracker.mp4",
      poster: "/images/ai-labs/coffee-tracker-poster.webp",
      label: "brew'd coffee tracker app demo",
      width: 640,
      height: 1392,
    },
    tryItUrl: null,
  },
  {
    name: "sage",
    subtitle: "Meal Planner",
    doodle: [
      "M7 34C7 18 17 8 34 6c0 17-9 28-27 28z",
      "M7 34L24 17",
    ],
    oneLiner: "My life, my kitchen, my rules",
    description:
      "A meal planner that thinks the way I do — start with the day, then layer in lunch and dinner around it. Keeps my go-to recipes in one spot, builds shopping lists without friction. Not another meal app that tries to plan my whole life — just one that fits mine.",
    status: "building",
    tags: ["iOS App"],
    mediaType: "phone" as const,
    media: {
      kind: "video" as const,
      src: "/images/ai-labs/meal-planner.mp4",
      poster: "/images/ai-labs/meal-planner-poster.webp",
      label: "Sage meal planner app demo",
      width: 640,
      height: 1392,
    },
    tryItUrl: null,
  },
];

export default function AILabs() {
  return (
    <div style={{ "--cs-accent": "#8C63D1" } as React.CSSProperties}>
      <DottedBackground />

      {/* Hero */}
      <header className="max-w-5xl mx-auto px-6 pt-20 pb-10">
        <AnimateIn trigger="load" animation="fade-in" duration={500} delay={0}>
          <h1 className="font-serif text-4xl sm:text-5xl tracking-tight text-[#4c4c4c] mb-5">
            If it doesn&rsquo;t exist, vibe-code it
          </h1>
        </AnimateIn>

        <AnimateIn trigger="load" animation="fade-in" duration={500} delay={0}>
          <p className="text-lg text-[#8f8f8f] leading-relaxed">
            AI-powered tools I&rsquo;ve built from scratch to fit the way I
            actually work — because the right tool is the one that works how I
            work.
          </p>
        </AnimateIn>
      </header>

      {/* Experiments */}
      {labItems.map((item, index) => {
        const isEven = index % 2 === 0;

        return (
          <AnimateIn
            key={index}
            trigger="scroll"
            animation="fade-in"
            duration={500}
            threshold={0.1}
          >
            <section className={`flex items-center ${index === 0 ? "py-10" : "py-16 md:py-28"}`}>
              <div className="max-w-5xl mx-auto px-6 w-full">
                <div
                  className={`flex flex-col ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-10 md:gap-16 items-center`}
                >
                  {/* Media */}
                  <div className={`w-full flex justify-center ${item.mediaType === "image" ? "md:w-[55%]" : "md:w-1/2"}`}>
                    {item.mediaType === "phone" ? (
                      /* iPhone mockup */
                      <div
                        className={`phone-tilt relative w-[240px] sm:w-[270px] ${isEven ? "phone-tilt-left" : "phone-tilt-right"}`}
                      >
                        <div className="relative bg-[#1a1a1a] rounded-[50px] p-[10px] shadow-2xl">
                          <div
                            className="phone-glare relative rounded-[40px] overflow-hidden bg-black"
                            style={{ aspectRatio: "9/19.5" }}
                          >
                            {item.media.kind === "video" ? (
                              <LoopingVideo
                                src={item.media.src}
                                poster={item.media.poster}
                                label={item.media.label}
                                className="absolute inset-0 h-full w-full object-cover"
                              />
                            ) : (
                              <Image
                                src={item.media.src}
                                alt={item.media.alt}
                                width={390}
                                height={844}
                                className="w-full h-full object-cover"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    ) : item.media.kind === "video" ? (
                      /* Regular video, aspect reserved to match the source so it doesn't jump on load */
                      <div
                        className="w-full max-w-[420px] rounded-2xl overflow-hidden shadow-lg"
                        style={{ aspectRatio: `${item.media.width} / ${item.media.height}` }}
                      >
                        <LoopingVideo
                          src={item.media.src}
                          poster={item.media.poster}
                          label={item.media.label}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      /* Regular image */
                      <div className="w-full rounded-2xl overflow-hidden shadow-lg">
                        <Image
                          src={item.media.src}
                          alt={item.media.alt}
                          width={800}
                          height={500}
                          className="w-full h-auto"
                        />
                      </div>
                    )}
                  </div>

                  {/* Text content */}
                  <div className={`w-full ${item.mediaType === "image" ? "md:w-[45%]" : "md:w-1/2"}`}>
                    {/* Pen doodle that draws itself as the section comes in */}
                    <svg
                      aria-hidden="true"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      className="hand-note mb-2 overflow-visible"
                      style={{ "--sw": 1.75, "--d": "0.1s" } as React.CSSProperties}
                    >
                      {item.doodle.map((d) => (
                        <path key={d} pathLength={1} d={d} />
                      ))}
                    </svg>
                    <h2 className="font-serif text-[28px] font-medium text-[#4c4c4c] leading-tight mb-4">
                      <span className="font-light">{item.name}</span>{" "}
                      &mdash; {item.subtitle}
                    </h2>

                    {/* Tagline with the type + stage pills on the same line; pills wrap below when it's tight */}
                    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 mb-4">
                      <p className="font-serif text-lg text-[#4c4c4c]">
                        {item.oneLiner}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium tracking-wide text-[#8C63D1] bg-[#f4ebff] px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        <span
                          className={`inline-flex items-center gap-1.5 text-xs font-medium tracking-wide px-3 py-1 rounded-full ${STATUS[item.status].className}`}
                        >
                          <StatusIcon status={item.status} />
                          <span className="sr-only">Status: </span>
                          {STATUS[item.status].label}
                        </span>
                      </div>
                    </div>

                    <p className="text-[15px] text-[#8f8f8f] leading-[1.7]">
                      {item.description}
                    </p>

                    {item.tryItUrl && (
                      <a
                        href={item.tryItUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 text-[#8C63D1] hover:text-[#6b45b0] transition-colors mt-5 text-[15px] font-medium"
                      >
                        {item.tryItLabel ?? "Try it out"}
                        <span className="sr-only"> (opens in a new tab)</span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5">
                          <path d="M3.5 1.75H12.25V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M12.25 1.75L1.75 12.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </AnimateIn>
        );
      })}
    </div>
  );
}
