import Icon from "@/components/Icon";
import { primaryCta, secondaryCta, siteConfig } from "@/data/site";

export default function CtaBand() {
  return (
    <section aria-labelledby="cta-title" className="px-3 pb-3 sm:px-4 sm:pb-4 lg:px-6 lg:pb-6">
      <div className="mx-auto flex max-w-[88rem] flex-col items-start gap-10 rounded-2xl bg-violet px-6 py-16 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-14 lg:py-20">
        <div className="max-w-3xl">
          <h2
            id="cta-title"
            className="font-display text-[clamp(2.25rem,5vw,4.25rem)] font-bold leading-[1.02] tracking-[-0.035em] text-text"
          >
            This Sunday, there is a seat saved for you.
          </h2>
          <p className="mt-5 max-w-[50ch] text-lg leading-8 text-on-violet-muted">
            <span className="numeric">{siteConfig.service.time}</span> at{" "}
            {siteConfig.venue.name}, {siteConfig.venue.city}. Come a few minutes early and
            let a host show you around.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href={primaryCta.href}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-on-gold transition-[background-color,gap] duration-300 hover:gap-3 hover:bg-gold-hover"
          >
            {primaryCta.label}
            <Icon name="arrow-right" className="h-4 w-4" />
          </a>
          <a
            href={secondaryCta.href}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-text/40 px-7 py-3.5 text-sm font-semibold text-text transition-colors duration-300 hover:border-text hover:bg-text/10"
          >
            <Icon name="play" className="h-4 w-4" />
            {secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
