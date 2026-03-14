"use client";

import { useEffect, useRef, useState } from "react";

interface AnimateInProps {
  children: React.ReactNode;
  /** Animation variant */
  animation?: "fade-slide-up" | "fade-in";
  /** Slide distance in px (default 40) */
  slideDistance?: number;
  /** Duration in ms (default 500) */
  duration?: number;
  /** Delay in ms before animation starts (default 0) */
  delay?: number;
  /** Easing function (default "ease-in") */
  easing?: string;
  /** Trigger on scroll into view vs immediately on mount (default "scroll") */
  trigger?: "scroll" | "load";
  /** IntersectionObserver threshold (default 0.15) */
  threshold?: number;
  /** Additional className */
  className?: string;
}

export default function AnimateIn({
  children,
  animation = "fade-slide-up",
  slideDistance = 40,
  duration = 500,
  delay = 0,
  easing = "ease-out",
  trigger = "scroll",
  threshold = 0.15,
  className = "",
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    if (trigger === "load") {
      const timer = setTimeout(() => setVisible(true), delay);
      return () => clearTimeout(timer);
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setVisible(true), delay);
          } else {
            setVisible(true);
          }
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [trigger, delay, threshold]);

  const styles: React.CSSProperties = visible
    ? {
        opacity: 1,
        transform: "translateY(0)",
        transition: `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}`,
      }
    : {
        opacity: 0,
        transform:
          animation === "fade-slide-up"
            ? `translateY(${slideDistance}px)`
            : "translateY(0)",
        transition: `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}`,
      };

  return (
    <div ref={ref} className={className} style={styles}>
      {children}
    </div>
  );
}
