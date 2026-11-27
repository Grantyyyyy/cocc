"use client";

import Icon from "@/components/Icon";

const step =
  "flex h-full w-11 items-center justify-center text-text transition-colors duration-200 hover:bg-text/10 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent";

/** A compact − 1 + control. */
export default function QtyStepper({
  value,
  onChange,
  min = 0,
  max,
  label,
  size = "md",
}: {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max: number;
  label: string;
  size?: "sm" | "md";
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className={`inline-flex items-stretch overflow-hidden rounded-full border border-text/30 ${size === "sm" ? "h-9" : "h-12"}`}
    >
      <button
        type="button"
        onClick={() => onChange(value - 1)}
        disabled={value <= min}
        aria-label="Decrease quantity"
        className={step}
      >
        <Icon name={value <= 1 && min === 0 ? "trash" : "minus"} className="h-4 w-4" />
      </button>
      <output aria-live="polite" className="flex min-w-8 items-center justify-center text-sm font-semibold text-text numeric">
        {value}
      </output>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
        aria-label="Increase quantity"
        className={step}
      >
        <Icon name="plus" className="h-4 w-4" />
      </button>
    </div>
  );
}
