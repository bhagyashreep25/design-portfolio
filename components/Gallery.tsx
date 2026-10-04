"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import AnimateIn from "@/components/AnimateIn";
import LoopingVideo from "@/components/LoopingVideo";

export interface Piece {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** shown under the enlarged piece */
  caption: string;
  /** animated pieces play as a looping video; `src` is then the poster */
  video?: string;
}

const OPEN_MS = 450;
const EASE = "cubic-bezier(0.2, 0.8, 0.2, 1)";

interface Lightbox {
  piece: Piece;
  /** the grid tile it grew out of, to shrink back into and refocus */
  source: HTMLButtonElement;
  from: DOMRect;
  phase: "from" | "open" | "closing";
}

/** Largest box with the piece's aspect that fits the viewport, centred —
 *  never past the piece's own size, so small pieces don't go soft. */
function fitToViewport(piece: Piece) {
  const scale = Math.min(
    (window.innerWidth * 0.9) / piece.width,
    (window.innerHeight * 0.8) / piece.height,
    1
  );
  const width = piece.width * scale;
  const height = piece.height * scale;
  return {
    left: (window.innerWidth - width) / 2,
    // nudged up to leave room for the caption
    top: (window.innerHeight - height) / 2 - 16,
    width,
    height,
  };
}

/**
 * The illustrations grid: pieces stagger in down each column, lift and tilt
 * on hover (.gallery-piece in globals.css), and open larger on click —
 * growing out of the tile and shrinking back into it on close.
 */
export default function Gallery({ columns }: { columns: Piece[][] }) {
  const [box, setBox] = useState<Lightbox | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const reducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const open = (piece: Piece, source: HTMLButtonElement) => {
    setBox({
      piece,
      source,
      from: source.getBoundingClientRect(),
      phase: reducedMotion() ? "open" : "from",
    });
  };

  const boxRef = useRef(box);
  boxRef.current = box;

  const close = useCallback(() => {
    const current = boxRef.current;
    if (!current || current.phase === "closing") return;
    current.source.focus({ preventScroll: true });
    setBox(
      reducedMotion()
        ? null
        : // re-measure: the page may have moved under the overlay
          { ...current, from: current.source.getBoundingClientRect(), phase: "closing" }
    );
  }, []);

  // Play the open: render at the tile's position, then release to the centre
  useEffect(() => {
    if (box?.phase !== "from") return;
    const frame = requestAnimationFrame(() =>
      requestAnimationFrame(() => setBox((b) => (b ? { ...b, phase: "open" } : b)))
    );
    return () => cancelAnimationFrame(frame);
  }, [box?.phase]);

  // Unmount once the close has shrunk back into the tile
  useEffect(() => {
    if (box?.phase !== "closing") return;
    const timer = setTimeout(() => setBox(null), OPEN_MS);
    return () => clearTimeout(timer);
  }, [box?.phase]);

  // While open: lock scroll, focus the close button, Esc closes, Tab stays put
  const isOpen = box !== null;
  useEffect(() => {
    if (!isOpen) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    closeRef.current?.focus({ preventScroll: true });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "Tab") {
        e.preventDefault();
        closeRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  const target = box ? fitToViewport(box.piece) : null;
  const atTile = box && target && box.phase !== "open";

  return (
    <>
      <div className="flex gap-4">
        {columns.map((column, colIdx) => (
          <div key={colIdx} className="flex-1 flex flex-col gap-4">
            {column.map((piece, i) => (
              <AnimateIn
                key={piece.src}
                trigger="scroll"
                animation="fade-slide-up"
                slideDistance={24}
                duration={600}
                delay={i * 120 + colIdx * 60}
                threshold={0.1}
              >
                <button
                  type="button"
                  onClick={(e) => open(piece, e.currentTarget)}
                  aria-label={`Enlarge: ${piece.alt}`}
                  className="gallery-piece block w-full rounded-lg"
                  style={{ "--tilt": (i + colIdx) % 2 ? "1.5deg" : "-1.5deg" } as React.CSSProperties}
                >
                  {piece.video ? (
                    <LoopingVideo
                      src={piece.video}
                      poster={piece.src}
                      label={piece.alt}
                      className="block w-full h-auto rounded-lg"
                    />
                  ) : (
                    <Image
                      src={piece.src}
                      alt={piece.alt}
                      width={piece.width}
                      height={piece.height}
                      sizes="(min-width: 1024px) 480px, 50vw"
                      className="block w-full h-auto rounded-lg"
                    />
                  )}
                </button>
              </AnimateIn>
            ))}
          </div>
        ))}
      </div>

      {box && target && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={box.piece.caption}
          className="fixed inset-0 z-[70]"
          onClick={close}
        >
          <div
            className="absolute inset-0 bg-[#1f1a26]/90 backdrop-blur-sm"
            style={{
              opacity: atTile ? 0 : 1,
              transition: `opacity ${OPEN_MS}ms ease-out`,
            }}
          />

          <div
            className="fixed overflow-hidden rounded-lg shadow-2xl"
            style={{
              left: target.left,
              top: target.top,
              width: target.width,
              height: target.height,
              transformOrigin: "top left",
              transform: atTile
                ? `translate(${box.from.left - target.left}px, ${box.from.top - target.top}px) scale(${box.from.width / target.width}, ${box.from.height / target.height})`
                : "none",
              transition: box.phase === "from" ? "none" : `transform ${OPEN_MS}ms ${EASE}`,
            }}
          >
            {box.piece.video ? (
              <video
                src={box.piece.video}
                poster={box.piece.src}
                aria-label={box.piece.alt}
                className="h-full w-full"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <Image
                src={box.piece.src}
                alt={box.piece.alt}
                width={box.piece.width}
                height={box.piece.height}
                sizes="90vw"
                className="h-full w-full"
              />
            )}
          </div>

          <p
            className="fixed inset-x-0 text-center font-serif text-lg text-white/90"
            style={{
              top: target.top + target.height + 14,
              opacity: box.phase === "open" ? 1 : 0,
              transition: `opacity 250ms ease-out ${box.phase === "open" ? 200 : 0}ms`,
            }}
          >
            {box.piece.caption}
          </p>

          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close"
            className="fixed right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            style={{
              opacity: box.phase === "open" ? 1 : 0,
              transition: "opacity 200ms ease-out",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M3 3L15 15M15 3L3 15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
