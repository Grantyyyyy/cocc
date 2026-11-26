"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** One scroll score: six pillars ink in as a continuous frame is drawn. */
export default function PillarsMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    let disposed = false;

    // Measure after the display font settles so pin dimensions match the page.
    void document.fonts.ready.then(() => {
      if (disposed) return;
      media.add({
        standard: "(prefers-reduced-motion: no-preference)",
        desktop: "(min-width: 1024px) and (min-height: 850px)",
      }, (context) => {
        if (!context.conditions?.standard) return;
        const scene = element.querySelector<HTMLElement>("[data-pillar-scene]");
        const words = gsap.utils.toArray<HTMLElement>("[data-pillar-ink]", element);
        const bases = gsap.utils.toArray<HTMLElement>("[data-pillar-base]", element);
        const frame = element.querySelector<SVGRectElement>("[data-pillar-frame]");
        const wordList = element.querySelector<HTMLElement>("[data-pillar-words]");
        if (!scene || !words.length || !frame || !wordList) return;
        const pin = Boolean(context.conditions.desktop)
          && scene.getBoundingClientRect().height <= window.innerHeight - 140;

        gsap.set(bases, { color: "var(--muted)" });
        const score = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: pin ? scene : wordList,
            start: pin ? "top 108px" : "top 80%",
            end: pin ? () => `+=${Math.round(window.innerHeight * 1.1)}` : "bottom 45%",
            pin: pin ? scene : false,
            scrub: pin ? 0.4 : true,
            invalidateOnRefresh: true,
          },
        });

        // A shared timeline makes the ink and the frame reverse together.
        words.forEach((word, index) => {
          score.fromTo(word,
            { clipPath: "inset(0 100% 0 0)" },
            { clipPath: "inset(0 0% 0 0)", duration: 0.85 },
            index * 0.85,
          );
        });
        score.fromTo(frame,
          { strokeDashoffset: 1 },
          { strokeDashoffset: 0, duration: words.length * 0.85 },
          0,
        );
      }, element);
    });

    return () => {
      disposed = true;
      media.revert();
    };
  }, []);

  return <div ref={root}>{children}</div>;
}
