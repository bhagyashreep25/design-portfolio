"use client";

import { useEffect, useRef } from "react";

interface LoopingVideoProps {
  src: string;
  poster: string;
  /** Describes the recording for screen readers. */
  label: string;
  className?: string;
}

/**
 * A silent screen recording that loops like a GIF. Plays only while on
 * screen, and holds on the poster under reduced motion — the same behavior
 * as OldFlowVideo, without that component's PhoneFrame wrapper baked in.
 */
export default function LoopingVideo({
  src,
  poster,
  label,
  className = "",
}: LoopingVideoProps) {
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
    <video
      ref={videoRef}
      className={className}
      src={src}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      preload="metadata"
    />
  );
}
