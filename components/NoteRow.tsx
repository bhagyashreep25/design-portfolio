"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

interface NoteRowProps {
  href: string;
  /** The note's stamp, rendered on the server */
  stamp: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

// Stamp width on desktop (matches .note-row-stamp in globals.css), and how
// far right of the cursor it sits so it never covers the pointer
const STAMP_W = 112;
const GAP = 24;

/**
 * A row on the notes list. With a mouse, the note's stamp is stamped down
 * beside the cursor and trails it around the row, leaning into the motion.
 * On touch screens it just sits at the row's right edge (CSS only).
 */
export default function NoteRow({ href, stamp, className = "", children }: NoteRowProps) {
  const rowRef = useRef<HTMLAnchorElement>(null);
  const stampRef = useRef<HTMLSpanElement>(null);
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0, raf: 0 });

  useEffect(() => () => cancelAnimationFrame(pos.current.raf), []);

  const followMode = () =>
    window.matchMedia("(hover: hover) and (min-width: 640px)").matches;

  const apply = (tilt: number) => {
    const { x, y } = pos.current;
    stampRef.current!.style.transform = `translate3d(${x}px, ${y}px, 0) translate(0, -50%) rotate(${tilt}deg)`;
  };

  // Keep the whole stamp inside the row horizontally
  const target = (clientX: number, clientY: number) => {
    const rect = rowRef.current!.getBoundingClientRect();
    const p = pos.current;
    p.tx = Math.min(clientX - rect.left + GAP, rect.width - STAMP_W);
    p.ty = Math.max(0, Math.min(clientY - rect.top, rect.height));
  };

  const snap = () => {
    const p = pos.current;
    p.x = p.tx;
    p.y = p.ty;
    apply(0);
  };

  const tick = () => {
    const p = pos.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const k = reduce ? 1 : 0.45;
    const dx = p.tx - p.x;
    p.x += dx * k;
    p.y += (p.ty - p.y) * k;
    apply(reduce ? 0 : Math.max(-8, Math.min(8, dx * 0.3)));
    p.raf =
      Math.abs(p.tx - p.x) > 0.3 || Math.abs(p.ty - p.y) > 0.3
        ? requestAnimationFrame(tick)
        : 0;
  };

  const onPointerEnter = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !followMode()) return;
    target(e.clientX, e.clientY);
    snap();
    rowRef.current!.dataset.active = "true";
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !followMode()) return;
    target(e.clientX, e.clientY);
    if (!pos.current.raf) pos.current.raf = requestAnimationFrame(tick);
  };

  const onPointerLeave = () => {
    delete rowRef.current!.dataset.active;
  };

  // Keyboard focus with no mouse in the row: park the stamp at the right
  const onFocus = () => {
    if (!followMode() || rowRef.current!.dataset.active) return;
    const rect = rowRef.current!.getBoundingClientRect();
    target(rect.right - 200, rect.top + rect.height / 2);
    snap();
  };

  return (
    <Link
      ref={rowRef}
      href={href}
      className={`note-row ${className}`}
      onPointerEnter={onPointerEnter}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onFocus={onFocus}
    >
      {children}
      <span ref={stampRef} className="note-row-stamp" aria-hidden="true">
        <span className="note-row-stamp-inner block">{stamp}</span>
      </span>
    </Link>
  );
}
