import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import PillarsMotion from "@/components/PillarsMotion";
import { pillars } from "@/data/content";
import { siteConfig } from "@/data/site";

export default function Pillars({ linkToAbout = false }: { linkToAbout?: boolean }) {
  return (
    <section id="our-pillars" aria-labelledby="pillars-title" className="py-14 sm:py-20">
      <PillarsMotion>
        <div data-pillar-scene className="mx-auto grid max-w-[88rem] items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 id="pillars-title" className="max-w-[26ch] text-lg leading-8 text-muted">
              {siteConfig.tagline} Everything we do comes back to these.
            </h2>
            <ul data-pillar-words className="mt-10 space-y-1">
              {pillars.map((pillar) => (
                <li
                  key={pillar}
                  className="relative w-fit max-w-full font-display text-[clamp(2.5rem,min(5.4vw,7.4svh),4.75rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-text"
                >
                  <span data-pillar-base>{pillar}</span>
                  <span
                    data-pillar-ink
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 whitespace-nowrap text-text"
                    style={{ clipPath: "inset(0 100% 0 0)" }}
                  >
                    {pillar}
                  </span>
                </li>
              ))}
            </ul>
            {linkToAbout && (
              <Link
                href="/about"
                className="group mt-10 inline-flex items-center gap-2 rounded-full border border-text/30 px-6 py-3 text-sm font-semibold text-text transition-[border-color,gap] duration-300 hover:gap-3 hover:border-text/60"
              >
                More about us
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            )}
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-raised lg:max-h-[calc(100svh-12rem)]">
            <Image
              src="/img/church-pillars.png"
              alt="A man worshipping with his arms raised among the congregation under violet lighting"
              fill
              sizes="(min-width: 1024px) 44vw, 92vw"
              className="object-cover"
            />
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] overflow-visible text-gold sm:inset-5 sm:h-[calc(100%-2.5rem)] sm:w-[calc(100%-2.5rem)]"
            >
              <rect
                data-pillar-frame
                x="0" y="0" width="100" height="100" rx="1.5"
                pathLength="1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="1"
                strokeDashoffset="1"
              />
            </svg>
          </div>
        </div>
      </PillarsMotion>
    </section>
  );
}
