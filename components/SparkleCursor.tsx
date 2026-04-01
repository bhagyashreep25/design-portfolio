"use client";

import { useEffect } from "react";

export default function SparkleCursor() {
  useEffect(() => {
    document.body.classList.add("sparkle-cursor");
    return () => document.body.classList.remove("sparkle-cursor");
  }, []);
  return null;
}
