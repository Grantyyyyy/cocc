import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import { serviceTimes } from "@/data/content";
import { primaryCta, siteConfig } from "@/data/site";

export default function ServiceTimes() {
  return (
    <section id="services" className="scroll-mt-28 bg-surface-muted py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            title="Join us this week"
            description="Every service runs about 75 minutes, with coffee before and people who would genuinely like to meet you after."
          />
          <a
            href={primaryCta.href}
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-[background-color,gap] duration-300 hover:gap-3 hover:bg-ink-hover"
          >
            {primaryCta.label}
            <Icon name="arrow-right" className="h-4 w-4" />
          </a>
        </div>

        <dl className="mt-16 border-t border-line">
          {serviceTimes.map((service) => (
            <div
              key={`${service.day}-${service.time}`}
              className="grid gap-x-10 gap-y-3 border-b border-line py-10 sm:grid-cols-[13rem_minmax(0,1fr)] lg:grid-cols-[16rem_18rem_minmax(0,1fr)]"
            >
              <dt className="font-serif text-4xl font-semibold tracking-[-0.03em] text-ink numeric">
                {service.time}
                <span className="mt-1 block font-sans text-sm font-medium tracking-normal text-accent-strong">
                  {service.day}
                </span>
              </dt>
              <dd className="font-serif text-xl font-semibold tracking-[-0.02em] text-ink">
                {service.title}
              </dd>
              <dd className="max-w-[56ch] leading-7 text-muted">{service.detail}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
          <Icon name="pin" className="h-4 w-4 text-accent-strong" />
          {siteConfig.address.street}, {siteConfig.address.city},{" "}
          {siteConfig.address.region} {siteConfig.address.postalCode}
          <span aria-hidden="true" className="text-line">
            ·
          </span>
          parking available, wheelchair accessible
        </p>
      </div>
    </section>
  );
}
