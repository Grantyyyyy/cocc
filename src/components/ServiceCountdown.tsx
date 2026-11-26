"use client";

import { useSyncExternalStore } from "react";
import { serviceCountdown } from "@/lib/service";

// Re-read the clock every 30 seconds; the label is a plain string, so React
// only re-renders when the wording actually changes.
const subscribe = (onChange: () => void) => {
  const id = window.setInterval(onChange, 30_000);
  return () => window.clearInterval(id);
};

/** "In 3 days", "Tomorrow at 9AM", "Happening now"... Renders the fallback on the server. */
export default function ServiceCountdown({ fallback = "Every Sunday" }: { fallback?: string }) {
  const label = useSyncExternalStore(subscribe, () => serviceCountdown(), () => null);
  return <>{label ?? fallback}</>;
}
