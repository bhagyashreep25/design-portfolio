"use client";

import { useEffect } from "react";

export default function DottedBackground() {
  useEffect(() => {
    document.body.classList.add("dotted-grid");
    return () => document.body.classList.remove("dotted-grid");
  }, []);
  return null;
}
