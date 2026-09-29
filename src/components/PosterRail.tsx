"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";

export default function PosterRail({
  label,
  heading,
  children,
}: {
  label: string;
  heading: React.ReactNode;
  children: React.ReactNode;
}) {
  const rail = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const measure = useCallback(() => {
    const el = rail.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    measure();
    el.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      el.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const step = (direction: 1 | -1) => {
    const el = rail.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: reduce ? "auto" : "smooth" });
  };

  const button =
    "inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-text transition-colors duration-300 hover:border-text/50 hover:bg-raised disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-line disabled:hover:bg-transparent";

  return (
    <div>
      <div className="mx-auto flex max-w-[88rem] items-end justify-between gap-6 px-4 sm:px-6">
        {heading}
        <div className="flex shrink-0 gap-2">
        <button
          type="button"
          onClick={() => step(-1)}
          disabled={edges.start}
          className={button}
          aria-label={`Previous ${label}`}
        >
          <Icon name="chevron-left" />
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          disabled={edges.end}
          className={button}
          aria-label={`Next ${label}`}
        >
          <Icon name="chevron-right" />
        </button>
        </div>
      </div>
      <ul
        ref={rail}
        aria-label={label}
        className="rail mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-4 pb-2 scroll-px-4 sm:px-6 sm:scroll-px-6 xl:px-[max(1.5rem,calc((100vw-88rem)/2+1.5rem))] xl:scroll-px-[max(1.5rem,calc((100vw-88rem)/2+1.5rem))]"
      >
        {children}
      </ul>
    </div>
  );
}
