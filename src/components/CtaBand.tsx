import Icon from "@/components/Icon";
import { primaryCta, secondaryCta } from "@/data/site";
import { serviceTimes } from "@/data/content";

const sundayTimes = serviceTimes
  .filter((service) => service.day === "Sunday")
  .map((service) => service.time)
  .join(" and ");

export default function CtaBand() {
  return (
    <section className="on-gold bg-accent">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-10 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold leading-[1.15] tracking-[-0.025em] text-on-accent sm:text-4xl">
            This Sunday, there is a seat saved for you.
          </h2>
          <p className="mt-5 max-w-[54ch] leading-8 text-on-accent-muted">
            <span className="numeric">{sundayTimes}</span>. Come a few minutes early,
            grab a coffee, and let a host show you around.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={primaryCta.href}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition-[background-color,gap] duration-300 hover:gap-3 hover:bg-ink-hover"
          >
            {primaryCta.label}
            <Icon name="arrow-right" className="h-4 w-4" />
          </a>
          <a
            href={secondaryCta.href}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-on-accent/35 px-7 py-3.5 text-sm font-semibold text-on-accent transition-colors duration-300 hover:border-on-accent hover:bg-on-accent/10"
          >
            <Icon name="play" className="h-4 w-4" />
            {secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
