"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

type Scene = "sermons" | "book" | "events" | "verse" | "invitation" | "leaders" | "visit";

/** Section-specific scroll scores with readable static and reduced-motion fallbacks. */
export default function ContentMotion({ scene, children }: { scene: Scene; children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    gsap.registerPlugin(ScrollTrigger, SplitText);
    const media = gsap.matchMedia();
    let disposed = false;

    void document.fonts.ready.then(() => {
      if (disposed) return;
      media.add({
        standard: "(prefers-reduced-motion: no-preference)",
        wide: "(min-width: 768px)",
      }, (context) => {
        if (!context.conditions?.standard) return;
        const wide = Boolean(context.conditions.wide);
        const query = (selector: string) => gsap.utils.toArray<HTMLElement>(selector, element);
        const range = (trigger: Element, end = "center 60%") => ({
          trigger, start: "top 92%", end, scrub: true, invalidateOnRefresh: true,
        });

        if (scene === "sermons") {
          query("[data-motion-poster]").forEach((poster, index) => {
            // Each message is its own panel. Titles and links never move.
            gsap.fromTo(poster, {
              rotation: (index - 1) * (wide ? 2.5 : 1.25),
              y: wide ? Math.abs(index - 1) * 24 : 12,
              transformOrigin: "50% 100%",
            }, { rotation: 0, y: 0, ease: "none", scrollTrigger: range(poster.parentElement ?? poster) });
          });
        }

        if (scene === "book") {
          query("[data-motion-book]").forEach((cover) => {
            // The physical cover turns toward the reader; no crop or image swap.
            gsap.fromTo(cover, {
              rotationY: wide ? -16 : -7,
              rotation: wide ? -2 : -1,
              transformPerspective: 1100,
              transformOrigin: "0% 50%",
            }, { rotationY: 0, rotation: 0, ease: "none", scrollTrigger: range(cover.closest("figure") ?? cover, "center 55%") });
          });
        }

        if (scene === "events") {
          query("[data-motion-event-rule]").forEach((rule) => {
            gsap.fromTo(rule, { scaleX: 0.08, transformOrigin: "left center" }, {
              scaleX: 1, ease: "none", scrollTrigger: range(rule, "top 55%"),
            });
          });
          query("[data-motion-date]").forEach((date) => {
            gsap.fromTo(date, { rotationX: 35, transformPerspective: 800, transformOrigin: "50% 0%" }, {
              rotationX: 0, ease: "none", scrollTrigger: range(date.parentElement ?? date),
            });
          });
        }

        if (scene === "verse") {
          query("[data-motion-verse-text]").forEach((passage) => {
            // Work on the browser's real lines, including after responsive wraps.
            SplitText.create(passage, {
              type: "lines",
              mask: "lines",
              autoSplit: true,
              aria: "auto",
              onSplit(split) {
                return gsap.fromTo(split.lines, {
                  yPercent: wide ? 105 : 70,
                  rotationX: wide ? -12 : 0,
                  transformPerspective: 900,
                  transformOrigin: "50% 100%",
                }, {
                  yPercent: 0,
                  rotationX: 0,
                  duration: 1,
                  stagger: 0.18,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: passage.closest("figure") ?? passage,
                    start: "top 95%",
                    end: "top 62%",
                    scrub: 0.3,
                    invalidateOnRefresh: true,
                  },
                });
              },
            });
          });
        }

        if (scene === "invitation") {
          query("[data-motion-invitation-fill]").forEach((field) => {
            gsap.fromTo(field, { scaleX: wide ? 0.88 : 0.94, transformOrigin: "50% 50%" }, {
              scaleX: 1, ease: "none", scrollTrigger: range(field),
            });
          });
        }

        if (scene === "leaders") {
          query("[data-motion-portrait]").forEach((portrait, index) => {
            gsap.fromTo(portrait, {
              rotationY: (index % 2 ? 1 : -1) * (wide ? 10 : 4),
              transformPerspective: 1200,
              transformOrigin: index % 2 ? "100% 50%" : "0% 50%",
            }, { rotationY: 0, ease: "none", scrollTrigger: range(portrait.parentElement ?? portrait) });
          });
        }

        if (scene === "visit") {
          query("[data-motion-visit-guide]").forEach((guide) => {
            gsap.fromTo(guide, { scaleY: 0, transformOrigin: "center top" }, {
              scaleY: 1, ease: "none", scrollTrigger: {
                ...range(guide.closest("ol") ?? guide, "bottom 65%"), start: "top 75%",
              },
            });
          });
        }
      }, element);
    });

    return () => {
      disposed = true;
      media.revert();
    };
  }, [scene]);

  return <div ref={root}>{children}</div>;
}
