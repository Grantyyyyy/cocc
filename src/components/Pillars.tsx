import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { pillars } from "@/data/content";
import { siteConfig } from "@/data/site";

export default function Pillars({ linkToAbout = false }: { linkToAbout?: boolean }) {
  return (
    <section aria-labelledby="pillars-title" className="py-14 sm:py-20">
      <div className="mx-auto grid max-w-[88rem] items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 id="pillars-title" className="max-w-[26ch] text-lg leading-8 text-muted">
            {siteConfig.tagline} Everything we do comes back to these.
          </h2>
          <ul className="mt-10 space-y-1">
            {pillars.map((pillar) => (
              <li
                key={pillar}
                className="font-display text-[clamp(2.5rem,5.4vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-text"
              >
                {pillar}
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

        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-raised">
          <Image
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=75"
            alt="Friends laughing together around a table"
            fill
            sizes="(min-width: 1024px) 44vw, 92vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
