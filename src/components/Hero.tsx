import Image from "next/image";
import Icon from "@/components/Icon";
import leaders from "../../public/brand/sunday-leaders.jpg";
import worship from "../../public/img/worhsip.png";
import { mapsUrl, primaryCta, secondaryCta, siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section className="px-3 pt-2 sm:px-4 lg:px-6">
      <div className="relative mx-auto max-w-[88rem]">
        <div className="unveil relative isolate flex h-[78svh] min-h-[34rem] max-h-[56rem] overflow-hidden rounded-2xl bg-violet-deep ring-1 ring-line lg:h-[calc(100svh-6rem)] lg:min-h-[40rem]">
          <div className="parallax-hero absolute inset-x-0 -inset-y-[12%] -z-10">
            <Image
              src={worship}
              alt="The COCC worship team leading the congregation, hands raised, during a Sunday service"
              fill
              preload
              placeholder="blur"
              sizes="(min-width: 1408px) 88rem, 100vw"
              className="object-cover object-[40%_30%]"
            />
          </div>
          <div
            className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(11,5,20,0.82)_0%,rgba(11,5,20,0.66)_38%,rgba(11,5,20,0.1)_75%),linear-gradient(to_right,rgba(11,5,20,0.65),transparent_60%)]"
            aria-hidden="true"
          />

          <div className="mt-auto w-full p-6 sm:p-10 lg:p-14 lg:pr-[28rem]">
            <h1 className="rise font-display text-[clamp(2.75rem,7vw,6rem)] font-bold leading-[0.98] tracking-[-0.035em] text-text lg:text-[clamp(3.5rem,5.4vw,6rem)]">
              Building lives.
              <br />
              Glorifying God.
            </h1>
            <p
              className="rise mt-6 max-w-[44ch] text-lg leading-8 text-text/85"
              style={{ animationDelay: "120ms" }}
            >
              <span lang="ceb" className="font-medium text-text">
                {siteConfig.welcome.ceb}
              </span>{" "}
              Join us {siteConfig.service.day}s,{" "}
              <span className="numeric">{siteConfig.service.time}</span>, at{" "}
              {siteConfig.venue.name}, {siteConfig.venue.city}.
            </p>
            <div
              className="rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "240ms" }}
            >
              <a
                href={primaryCta.href}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-on-gold transition-[background-color,gap] duration-300 hover:gap-3 hover:bg-gold-hover"
              >
                {primaryCta.label}
                <Icon name="arrow-right" className="h-4 w-4" />
              </a>
              <a
                href={secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-text/30 px-7 py-3.5 text-sm font-semibold text-text transition-colors duration-300 hover:border-text/60 hover:bg-text/10"
              >
                <Icon name="play" className="h-4 w-4" />
                {secondaryCta.label}
              </a>
            </div>
          </div>
        </div>

        <aside
          aria-labelledby="this-sunday"
          className="rise mt-3 rounded-xl bg-raised p-3 ring-1 ring-line lg:absolute lg:bottom-14 lg:right-14 lg:mt-0 lg:w-[23rem] lg:bg-ground"
          style={{ animationDelay: "360ms" }}
        >
          <div className="flex items-center justify-between px-1 pb-3 pt-1">
            <h2
              id="this-sunday"
              className="font-display text-sm font-semibold text-gold"
            >
              This Sunday
            </h2>
            <span className="text-xs text-muted numeric">{siteConfig.service.time}</span>
          </div>
          <Image
            src={leaders}
            alt="Two COCC church leaders preaching on a Sunday, beside Psalm 65:11"
            placeholder="blur"
            sizes="(min-width: 1024px) 23rem, 100vw"
            className="w-full rounded-lg"
          />
          <div className="flex items-center justify-between gap-4 px-1 pb-1 pt-3">
            <p className="text-sm leading-5 text-text">
              {siteConfig.venue.name}
              <span className="block text-muted">{siteConfig.venue.city}</span>
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-text/10 px-4 py-2 text-xs font-semibold text-text transition-colors duration-300 hover:bg-text/20"
            >
              Get directions
              <Icon name="arrow-right" className="h-3.5 w-3.5" />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
