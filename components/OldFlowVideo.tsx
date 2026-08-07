"use client";

import { useEffect, useRef } from "react";
import PhoneFrame from "@/components/PhoneFrame";

interface OldFlowVideoProps {
  src: string;
  poster: string;
  /** Describes the recording for screen readers. */
  label: string;
  className?: string;
}

/**
 * A silent screen recording that loops like a GIF inside the phone frame.
 * Plays only while on screen, and holds on the poster under reduced motion.
 */
export default function OldFlowVideo({
  src,
  poster,
  label,
  className = "",
}: OldFlowVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Autoplay can still be refused; the poster stays up if so.
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <PhoneFrame className={className}>
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={src}
        poster={poster}
        aria-label={label}
        muted
        loop
        playsInline
        preload="metadata"
      />
    </PhoneFrame>
  );
}
