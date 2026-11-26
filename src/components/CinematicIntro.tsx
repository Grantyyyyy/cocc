"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CoccMark from "@/components/CoccMark";
import { siteConfig } from "@/data/site";

export default function CinematicIntro() {
  const root = useRef<HTMLDivElement>(null);
  const skip = useRef<HTMLButtonElement>(null);
  const dismiss = useRef<() => void>(() => {});
  const pathname = usePathname();

  useLayoutEffect(() => {
    const overlay = root.current;
    const shell = document.getElementById("site-shell");
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!overlay || !shell) return;
    if (pathname !== "/" || window.location.hash || preference.matches) {
      overlay.hidden = true;
      return;
    }
    // The server paints the curtains first; JS takes over the fallback animation.
    overlay.style.animation = "none";

    gsap.registerPlugin(ScrollTrigger);
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;
    const wasInert = shell.inert;
    const previousFocus = overlay.contains(document.activeElement) ? null : document.activeElement;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    const padding = Number.parseFloat(getComputedStyle(document.body).paddingRight) || 0;
    let finished = false;
    let timeline: gsap.core.Timeline | undefined;

    const release = () => {
      overlay.hidden = true;
      shell.inert = wasInert;
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
      delete document.documentElement.dataset.coccIntro;
    };

    const finish = () => {
      if (finished) return;
      finished = true;
      timeline?.kill();
      const hadFocus = overlay.contains(document.activeElement);
      release();
      if (hadFocus) {
        if (previousFocus instanceof HTMLElement && previousFocus !== document.body && previousFocus.isConnected) {
          previousFocus.focus({ preventScroll: true });
        } else {
          const main = document.getElementById("main");
          main?.setAttribute("tabindex", "-1");
          main?.focus({ preventScroll: true });
        }
      }
      ScrollTrigger.refresh();
    };
    dismiss.current = finish;

    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${padding + scrollbar}px`;
    shell.inert = true;
    document.documentElement.dataset.coccIntro = "playing";

    // Schedule before animation setup so even a setup error releases the page.
    const timeout = window.setTimeout(finish, 7000);
    const context = gsap.context(() => {
      const strokes = gsap.utils.toArray<SVGPathElement>("[data-logo-stroke]", overlay);
      const lengths = strokes.map((stroke) => stroke.getTotalLength());
      strokes.forEach((stroke, index) => {
        stroke.style.removeProperty("stroke-dasharray");
        stroke.style.removeProperty("stroke-dashoffset");
        stroke.setAttribute("stroke-dasharray", `${lengths[index]} ${lengths[index]}`);
        stroke.setAttribute("stroke-dashoffset", String(lengths[index]));
        gsap.set(stroke, { autoAlpha: 0 });
      });
      gsap.set("[data-intro-copy]", { autoAlpha: 0 });
      gsap.set("[data-intro-composition]", { scale: 0.96 });
      overlay.hidden = false;
      skip.current?.focus({ preventScroll: true });

      timeline = gsap.timeline({ defaults: { ease: "power2.inOut" }, onComplete: finish });
      timeline.to("[data-intro-composition]", { scale: 1, duration: 3.2, ease: "power2.out" }, 0);
      const durations = [0.75, 1.05, 1.05, 0.75];
      let cursor = 0.15;
      strokes.forEach((stroke, index) => {
        const ink = { offset: lengths[index] };
        timeline!.set(stroke, { autoAlpha: 1 }, cursor);
        timeline!.to(ink, {
          offset: 0,
          duration: durations[index],
          ease: "none",
          onUpdate: () => stroke.setAttribute("stroke-dashoffset", String(ink.offset)),
        }, cursor);
        cursor += durations[index] + 0.05;
      });
      timeline.to("[data-intro-name]", { autoAlpha: 1, duration: 0.5 }, cursor + 0.15)
        .to("[data-intro-tagline]", { autoAlpha: 1, duration: 0.45 }, cursor + 0.4)
        .to("[data-intro-composition]", { autoAlpha: 0, duration: 0.35 }, cursor + 1)
        .to("[data-intro-curtain='top']", { yPercent: -101, duration: 0.8, ease: "power3.inOut" }, cursor + 1.2)
        .to("[data-intro-curtain='bottom']", { yPercent: 101, duration: 0.8, ease: "power3.inOut" }, cursor + 1.2);
      return () => {
        strokes.forEach((stroke) => {
          stroke.removeAttribute("stroke-dasharray");
          stroke.removeAttribute("stroke-dashoffset");
        });
      };
    }, overlay);

    // Fail open even if a timeline is interrupted or an animation frame stalls.
    const reduce = () => { if (preference.matches) finish(); };
    preference.addEventListener("change", reduce);

    return () => {
      window.clearTimeout(timeout);
      preference.removeEventListener("change", reduce);
      context.revert();
      release();
      dismiss.current = () => {};
    };
  }, [pathname]);

  if (pathname !== "/") return null;

  return (
    <>
    <noscript><style>{`.cocc-cinematic-intro { display: none !important; }`}</style></noscript>
    <div
      ref={root}
      role="dialog"
      aria-modal="true"
      aria-label={`Welcome to ${siteConfig.name}`}
      className="cocc-cinematic-intro fixed inset-0 z-[100] overflow-hidden"
      onKeyDown={(event) => {
        if (event.key === "Escape") dismiss.current();
        if (event.key === "Tab" && !event.ctrlKey && !event.metaKey) {
          event.preventDefault();
          skip.current?.focus({ preventScroll: true });
        }
      }}
    >
      <div data-intro-curtain="top" className="absolute inset-x-0 top-0 h-[50.1%] bg-ground" />
      <div data-intro-curtain="bottom" className="absolute inset-x-0 bottom-0 h-[50.1%] bg-ground" />
      <div data-intro-composition className="absolute inset-0 flex flex-col items-center justify-center px-6 pb-12 text-center">
        <CoccMark />
        <p data-intro-copy data-intro-name style={{ opacity: 0, visibility: "hidden" }} className="mt-6 max-w-[30ch] font-display text-xs font-medium uppercase leading-6 tracking-[0.18em] text-text sm:mt-8 sm:text-sm sm:tracking-[0.22em]">
          {siteConfig.name}
        </p>
        <p data-intro-copy data-intro-tagline style={{ opacity: 0, visibility: "hidden" }} className="mt-4 text-xs tracking-[0.04em] text-muted sm:text-sm">
          {siteConfig.tagline}
        </p>
      </div>
      <div data-intro-controls className="absolute inset-x-0 bottom-0 flex justify-end px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-10 sm:pb-8">
        <button ref={skip} type="button" onClick={() => dismiss.current()} className="min-h-11 px-3 text-xs font-medium text-muted underline decoration-text/25 underline-offset-4 hover:text-text">
          Skip intro
        </button>
      </div>
    </div>
    </>
  );
}
