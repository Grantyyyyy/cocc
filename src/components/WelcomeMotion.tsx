"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

/**
 * "Welcome ka!" scroll score: the waters part. A gold seam draws down the
 * middle, two doors slide apart carrying "Welcome" and "ka!", and the baptism
 * photo comes into focus behind them. Light crosses the water and the Cebuano
 * welcome writes itself in. Without motion the band is simply open and readable.
 */
export default function WelcomeMotion({ children }: { children: ReactNode }) {
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
        fine: "(pointer: fine)",
      }, (context) => {
        if (!context.conditions?.standard) return;
        const wide = Boolean(context.conditions.wide);
        const one = (selector: string) => element.querySelector<HTMLElement>(selector);

        const stage = one("[data-welcome-stage]");
        const photo = one("[data-welcome-media]");
        const scrim = one("[data-welcome-scrim]");
        const sheen = one("[data-welcome-sheen]");
        const seam = one("[data-welcome-seam]");
        const left = one('[data-welcome-door="left"]');
        const right = one('[data-welcome-door="right"]');
        const hint = one("[data-welcome-hint]");
        const english = one("[data-welcome-en]");
        const cta = one("[data-welcome-cta]");
        const lines = gsap.utils.toArray<HTMLElement>("[data-welcome-line]", element);
        if (!stage || !photo || !scrim || !sheen || !seam || !left || !right || !english || !cta) return;

        const words = SplitText.create(english, { type: "words", mask: "words" }).words;

        // Closed: doors meet in the middle, photo soft and dim behind them.
        gsap.set([left, right], { autoAlpha: 1, xPercent: 0 });
        gsap.set(seam, { autoAlpha: 1, scaleY: 0, transformOrigin: "50% 0%" });
        gsap.set(photo, { filter: "blur(14px) brightness(0.55)" });
        gsap.set(scrim, { opacity: 0 });
        gsap.set(sheen, { xPercent: 0, opacity: 0 });
        gsap.set(hint ?? [], { opacity: 1 });
        gsap.set(words, { yPercent: 110 });
        gsap.set(cta, { autoAlpha: 0, y: 18, scale: 0.96 });

        // Clip paths are written out whole from plain numbers: browsers shorten
        // "inset(a b a b)" when read back, which breaks string interpolation.
        const wipes = lines.map((line) => {
          const wipe = { right: 100 };
          const paint = () => {
            line.style.clipPath = `inset(-25% ${wipe.right}% -25% -6%)`;
          };
          paint();
          return { wipe, paint };
        });

        const score = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: stage,
            start: "top top",
            end: () => `+=${Math.round(window.innerHeight * (wide ? 2.2 : 1.6))}`,
            pin: stage,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        score
          .to(hint ?? {}, { opacity: 0, y: 10, duration: 0.6 }, 0)
          // A gold seam draws down the middle...
          .to(seam, { scaleY: 1, duration: 1, ease: "power2.inOut" }, 0)
          // ...then the waters part, carrying the two words away.
          .to(left, { xPercent: -101, duration: 3, ease: "power3.inOut" }, 1)
          .to(right, { xPercent: 101, duration: 3, ease: "power3.inOut" }, 1)
          .to(seam, { autoAlpha: 0, scaleX: 6, duration: 0.8, ease: "power2.out" }, 1.1)
          .to(photo, { filter: "blur(0px) brightness(1)", duration: 3, ease: "power2.out" }, 1.2)
          .to(scrim, { opacity: 1, duration: 2.2 }, 3.4)
          // A band of light crosses the water once.
          .to(sheen, { xPercent: 270, duration: 3.2, ease: "power1.inOut" }, 3.6)
          .to(sheen, { opacity: 1, duration: 0.8, yoyo: true, repeat: 1, repeatDelay: 1.6 }, 3.6);

        // The script writes itself in, line by line.
        const scriptAt = 4.6;
        wipes.forEach(({ wipe, paint }, index) => {
          score.to(wipe, {
            right: -6,
            duration: 1.3,
            ease: "power1.inOut",
            onUpdate: paint,
          }, scriptAt + index * 0.9);
        });

        const afterScript = scriptAt + lines.length * 0.9 + 0.3;
        score
          .to(words, { yPercent: 0, duration: 1, ease: "power3.out", stagger: 0.05 }, afterScript)
          .to(cta, { autoAlpha: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out" }, afterScript + 0.9)
          .to({}, { duration: 1.4 }); // hold the finished frame before releasing the pin

        // Desktop: the photo leans gently toward the pointer.
        let onMove: ((event: PointerEvent) => void) | null = null;
        if (context.conditions.fine) {
          const toX = gsap.quickTo(photo, "x", { duration: 1.2, ease: "power3.out" });
          const toY = gsap.quickTo(photo, "y", { duration: 1.2, ease: "power3.out" });
          onMove = (event: PointerEvent) => {
            const bounds = stage.getBoundingClientRect();
            toX(((event.clientX - bounds.left) / bounds.width - 0.5) * -24);
            toY(((event.clientY - bounds.top) / bounds.height - 0.5) * -16);
          };
          stage.addEventListener("pointermove", onMove);
        }

        // GSAP reverts what it tweened; the hand-written clip paths are ours to clear.
        return () => {
          if (onMove) stage.removeEventListener("pointermove", onMove);
          lines.forEach((line) => {
            line.style.clipPath = "";
          });
        };
      }, element);
    });

    return () => {
      disposed = true;
      media.revert();
    };
  }, []);

  return <div ref={root}>{children}</div>;
}
