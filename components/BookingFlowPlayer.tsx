"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw } from "react-feather";
import PhoneFrame, { SCREEN_W } from "@/components/PhoneFrame";

/** A simulated tap, positioned in the screen's own design coordinates. */
interface Tap {
  /** x in design px (0–404) */
  x: number;
  /** y in design px (0–screen height) */
  y: number;
  /** ms into the screen when the tap fires */
  at: number;
}

/** One exported screen. Several may make up a single step of the flow. */
interface Frame {
  src: string;
  /** intrinsic height at a 404px design width */
  height: number;
  alt: string;
  /** vertical pan for screens taller than the phone viewport */
  scroll?: { to: number; start: number; end: number };
  /** the last tap advances the flow; the frame ends RESPONSE_MS after it */
  taps: Tap[];
  /** stage time for frames with no tap to advance them */
  hold?: number;
}

/** A step of the booking flow, as shown in the progress indicator. */
interface Step {
  /** short label for the progress indicator */
  short: string;
  /** full title shown above the caption */
  label: string;
  /** number alongside the title — matches the steps in "The Reframe" */
  number?: string;
  caption: string;
  frames: Frame[];
}

const TAP_MS = 900;
const FADE_MS = 220;
/** How soon the screen reacts to a tap. The ripple carries on over the fade. */
const RESPONSE_MS = 260;

const STEPS: Step[] = [
  {
    short: "Start",
    label: "Start",
    caption:
      "Booking starts from the home screen — one primary action, always in reach.",
    frames: [
      {
        src: "/images/bbq-nation/screen-1.webp",
        height: 874,
        alt: "Barbeque Nation app home screen with a Book Table button pinned above the tab bar",
        taps: [{ x: 234, y: 742, at: 1530 }], // Book Table
      },
    ],
  },
  {
    short: "Guests",
    label: "Guest count",
    number: "01",
    caption:
      "Start with who's coming. One clean input, decoupled from offers — so the count never fights with the deal.",
    frames: [
      {
        src: "/images/bbq-nation/screen-2.webp",
        height: 874,
        alt: "Reservation sheet asking for the number of guests, with nothing selected and Next disabled",
        taps: [{ x: 230, y: 734, at: 2040 }], // guest tile "4"
      },
      {
        src: "/images/bbq-nation/screen-3.webp",
        height: 874,
        alt: "The same sheet with 4 guests selected, which enables the Next button",
        taps: [{ x: 202, y: 813, at: 2040 }], // Next
      },
    ],
  },
  {
    short: "Date",
    label: "Date & time",
    number: "02",
    caption:
      "Availability reflects the guest count, so users never pick a slot that can't hold their group.",
    frames: [
      {
        src: "/images/bbq-nation/screen-4.webp",
        height: 874,
        alt: "Date and time selection with no slot chosen yet and Proceed to Book disabled",
        taps: [{ x: 73, y: 660, at: 2130 }], // 12:00 PM slot
      },
      {
        src: "/images/bbq-nation/screen-5.webp",
        height: 874,
        alt: "The 12:00 PM slot selected, which enables Proceed to Book",
        taps: [{ x: 202, y: 813, at: 2130 }], // Proceed to Book
      },
    ],
  },
  {
    short: "Offers",
    label: "Offers",
    number: "03",
    caption:
      "The screen with the most to prove. The best offer is obvious at a glance, and a plain regular booking never gets buried.",
    frames: [
      {
        src: "/images/bbq-nation/screen-6.webp",
        height: 1134,
        alt: "Offers screen with a highlighted best offer, personalised, corporate and student offers, and a regular booking option",
        // The best offer is already shown selected in the export, so it
        // takes no tap — we dwell on it, pan down, then advance.
        scroll: { to: 260, start: 1700, end: 3400 },
        taps: [{ x: 297, y: 1088, at: 4760 }], // Next, in the bottom bar
      },
    ],
  },
  {
    short: "Review",
    label: "Review",
    number: "04",
    caption:
      "The final bill, loyalty points, and details — the exact things customers used to call to confirm.",
    frames: [
      {
        src: "/images/bbq-nation/screen-7.webp",
        height: 854,
        alt: "Review screen showing smile points, estimated total, booking fee and cover charge before payment",
        taps: [{ x: 297, y: 808, at: 2890 }], // Pay ₹300
      },
    ],
  },
  {
    short: "Done",
    label: "Pay & confirm",
    number: "05",
    caption: "A confirmation that actually feels confirmed.",
    frames: [
      {
        src: "/images/bbq-nation/screen-8.webp",
        height: 1599,
        alt: "Confirmation screen with booking details, outlet information, coupon applied and loyalty tier upgrade",
        scroll: { to: 725, start: 1360, end: 5440 },
        taps: [],
        hold: 6290,
      },
    ],
  },
];

/**
 * A tapped screen cuts to the next one RESPONSE_MS after the tap lands, so the
 * flow reacts like a real app instead of idling out the rest of the ripple.
 */
const frameDuration = (f: Frame) =>
  f.taps.length
    ? Math.max(...f.taps.map((t) => t.at)) + RESPONSE_MS
    : (f.hold ?? 0);

/** Total stage time per step, used to fill its progress segment. */
const STEP_DURATIONS = STEPS.map((s) =>
  s.frames.reduce((sum, f) => sum + frameDuration(f), 0)
);

/** Every frame flattened into playback order, tagged with its step. */
const FRAMES = STEPS.flatMap((step, stepIndex) => {
  let priorInStep = 0;
  return step.frames.map((frame) => {
    const entry = {
      ...frame,
      duration: frameDuration(frame),
      stepIndex,
      priorInStep,
    };
    priorInStep += entry.duration;
    return entry;
  });
});

/** Index of the first frame of each step, for the jump-to buttons. */
const STEP_ENTRY = STEPS.map((_, i) => FRAMES.findIndex((f) => f.stepIndex === i));

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const clamp01 = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t);

export default function BookingFlowPlayer() {
  const [frame, setFrame] = useState(0);
  const [playing, setPlaying] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const scrollerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tapRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressRefs = useRef<(HTMLSpanElement | null)[]>([]);

  /** ms already played of the current screen, frozen while paused */
  const elapsedRef = useRef(0);
  /** performance.now() the current run started from */
  const originRef = useRef(0);
  /** set once the viewer presses pause, so scrolling back in doesn't restart */
  const userPausedRef = useRef(false);

  /** Paints the active screen at `t` ms into it. */
  const paint = useCallback(
    (t: number) => {
      const screen = FRAMES[frame];

      const scroller = scrollerRefs.current[frame];
      if (scroller) {
        let offset = 0;
        if (screen.scroll) {
          const { to, start, end } = screen.scroll;
          offset = to * easeInOutCubic(clamp01((t - start) / (end - start)));
        }
        scroller.style.transform = `translate3d(0, ${
          (-offset / screen.height) * 100
        }%, 0)`;
      }

      const taps = tapRefs.current[frame];
      if (taps) {
        screen.taps.forEach((tap, i) => {
          const node = taps.children[i] as HTMLElement | undefined;
          if (!node) return;
          const p = (t - tap.at) / TAP_MS;
          if (p < 0 || p > 1) {
            node.style.opacity = "0";
            return;
          }
          node.style.opacity = "1";

          const ring = node.children[0] as HTMLElement;
          ring.style.transform = `scale(${0.55 + 1.55 * easeOutCubic(p)})`;
          ring.style.opacity = `${0.9 * Math.pow(1 - p, 1.6)}`;

          // Pop in, dip as if pressed, settle, then fade.
          const core = node.children[1] as HTMLElement;
          const press =
            p > 0.14 && p < 0.4
              ? 1 - 0.16 * Math.sin(((p - 0.14) / 0.26) * Math.PI)
              : 1;
          core.style.transform = `scale(${
            (0.55 + 0.45 * easeOutCubic(clamp01(p / 0.14))) * press
          })`;
          core.style.opacity = `${
            p < 0.1 ? p / 0.1 : 1 - clamp01((p - 0.62) / 0.38)
          }`;
        });
      }

      // A step's segment fills across all of its frames, not just this one.
      const bar = progressRefs.current[screen.stepIndex];
      if (bar) {
        bar.style.transform = `scaleX(${clamp01(
          (screen.priorInStep + t) / STEP_DURATIONS[screen.stepIndex]
        )})`;
      }
    },
    [frame]
  );

  // Reset the timeline whenever the active screen changes. Declared before the
  // rAF effect so its body runs first and clears the elapsed time on a change.
  useEffect(() => {
    elapsedRef.current = 0;
    originRef.current = performance.now();

    const current = FRAMES[frame].stepIndex;
    STEPS.forEach((_, i) => {
      const bar = progressRefs.current[i];
      if (bar && i !== current) {
        bar.style.transform = `scaleX(${i < current ? 1 : 0})`;
      }
    });

    // The outgoing screen keeps its last painted state so its ripple fades out
    // with the cross-fade; paint(0) below clears the incoming one's taps.
    paint(0);
  }, [frame, paint]);

  useEffect(() => {
    if (!playing) return;

    originRef.current = performance.now() - elapsedRef.current;

    let raf = 0;
    const tick = (now: number) => {
      const t = now - originRef.current;
      if (t >= FRAMES[frame].duration) {
        paint(FRAMES[frame].duration);
        elapsedRef.current = 0;
        setFrame((f) => (f + 1) % FRAMES.length);
        return;
      }
      paint(t);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      elapsedRef.current = performance.now() - originRef.current;
    };
  }, [playing, frame, paint]);

  // Autoplay while in view, unless the viewer paused or prefers reduced motion.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!userPausedRef.current) setPlaying(true);
        } else {
          setPlaying(false);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggle = () => {
    userPausedRef.current = playing;
    setPlaying((p) => !p);
  };

  /** Jump to the first frame of a step. */
  const jumpTo = (stepIndex: number) => {
    userPausedRef.current = false;
    elapsedRef.current = 0;
    // Re-selecting the active frame is a no-op state update, so rewind the
    // clock here — the reset effect won't run to do it for us.
    originRef.current = performance.now();
    const target = STEP_ENTRY[stepIndex];
    if (target === frame) paint(0);
    setFrame(target);
    setPlaying(true);
  };

  const restart = () => jumpTo(0);

  const activeStep = FRAMES[frame].stepIndex;
  const active = STEPS[activeStep];

  return (
    <div
      ref={rootRef}
      className="flex flex-col items-center gap-12 sm:flex-row sm:items-center sm:justify-center sm:gap-16"
      role="group"
      aria-label="Interactive walkthrough of the redesigned booking flow"
    >
      {/* Phone */}
      <PhoneFrame className="w-[300px] shrink-0 sm:w-[360px]">
        {FRAMES.map((screen, i) => (
          <div
            key={screen.src}
            className="absolute inset-0"
            style={{
              opacity: i === frame ? 1 : 0,
              transition: `opacity ${FADE_MS}ms ease-out`,
            }}
            aria-hidden={i !== frame}
          >
            <div
              ref={(node) => {
                scrollerRefs.current[i] = node;
              }}
              className="absolute inset-x-0 top-0 will-change-transform"
            >
              <Image
                src={screen.src}
                alt={screen.alt}
                width={SCREEN_W}
                height={screen.height}
                priority={i === 0}
                unoptimized
                className="block w-full"
              />

              <div
                ref={(node) => {
                  tapRefs.current[i] = node;
                }}
                className="absolute inset-0"
                aria-hidden="true"
              >
                {screen.taps.map((tap, t) => (
                  <span
                    key={t}
                    className="absolute block h-12 w-12 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${(tap.x / SCREEN_W) * 100}%`,
                      top: `${(tap.y / screen.height) * 100}%`,
                      opacity: 0,
                    }}
                  >
                    <span
                      className="absolute inset-0 rounded-full border border-white/75"
                      style={{ boxShadow: "0 0 0 1px rgba(43,17,11,0.16)" }}
                    />
                    <span
                      className="absolute inset-[28%] rounded-full"
                      style={{
                        background:
                          "radial-gradient(circle at 34% 28%, rgba(255,255,255,0.95), rgba(255,255,255,0.5) 48%, rgba(255,255,255,0.22) 100%)",
                        backdropFilter: "blur(1.5px)",
                        WebkitBackdropFilter: "blur(1.5px)",
                        boxShadow:
                          "0 0 0 1px rgba(43,17,11,0.2), 0 2px 10px rgba(43,17,11,0.3)",
                      }}
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

      </PhoneFrame>

      {/* Progress + caption */}
      <div className="w-full max-w-md">
        {/* Stories-style progress indicator */}
        <ol className="flex gap-1.5">
          {STEPS.map((step, i) => (
            <li key={step.short} className="flex-1">
              <button
                type="button"
                onClick={() => jumpTo(i)}
                aria-label={`Go to ${step.label}`}
                aria-current={i === activeStep ? "step" : undefined}
                className="group block w-full"
              >
                <span className="block h-[3px] overflow-hidden rounded-full bg-[#EBD5C6]">
                  <span
                    ref={(node) => {
                      progressRefs.current[i] = node;
                    }}
                    className="block h-full w-full origin-left rounded-full bg-[#EA5B1E]"
                    style={{ transform: "scaleX(0)" }}
                  />
                </span>
                <span
                  className={`mt-2 block text-center text-[11px] uppercase tracking-wide transition-colors ${
                    i === activeStep
                      ? "font-semibold text-[#4c4c4c]"
                      : "text-[#b09b8e] group-hover:text-[#6b6b6b]"
                  }`}
                >
                  {step.short}
                </span>
              </button>
            </li>
          ))}
        </ol>

        <div className="mt-8 min-h-[150px] sm:min-h-[128px]">
          <p className="mb-2 font-serif text-2xl font-medium text-[#4c4c4c]">
            {active.number && (
              <span className="text-[#EA5B1E]">{active.number} </span>
            )}
            {active.label}
          </p>
          <p className="text-base leading-relaxed text-[#6b6b6b]">
            {active.caption}
          </p>
        </div>

        <div className="mt-2 flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pause the walkthrough" : "Play the walkthrough"}
            className="inline-flex items-center gap-2 bg-[#FFD1B8] px-4 py-2 text-[16px] text-[#4c4c4c] transition-colors hover:bg-[#FFBE9B]"
          >
            {playing ? <Pause size={16} /> : <Play size={16} />}
            {playing ? "Pause" : "Play"}
          </button>
          <button
            type="button"
            onClick={restart}
            aria-label="Restart the walkthrough"
            className="inline-flex items-center gap-2 px-2 py-2 text-[16px] text-[#8f8f8f] transition-colors hover:text-[#4c4c4c]"
          >
            <RotateCcw size={16} />
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}
