import Image from "next/image";
import Icon from "@/components/Icon";
import { primaryCta, secondaryCta, siteConfig } from "@/data/site";
import { serviceTimes } from "@/data/content";

export default function Hero() {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-ink">
      <Image
        src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1920&q=75"
        alt="Congregation with hands raised during Sunday worship"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[60%_center] opacity-55"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(105deg,var(--ink)_16%,rgba(36,16,65,0.84)_52%,rgba(36,16,65,0.32)_100%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36 lg:px-8 lg:py-44">
        <div className="max-w-[46rem]">
          <h1 className="rise font-serif text-[clamp(2.5rem,6.5vw,4.5rem)] font-semibold leading-[1.03] tracking-[-0.03em] text-on-ink">
            You are welcome here, exactly as you are.
          </h1>

          <p
            className="rise mt-7 max-w-[54ch] text-lg leading-8 text-on-ink-muted"
            style={{ animationDelay: "90ms" }}
          >
            {siteConfig.name} is a family in {siteConfig.address.city} learning to follow
            Jesus together through honest teaching, real community and love for our
            city. Come as a guest, leave as a friend.
          </p>

          <div
            className="rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "180ms" }}
          >
            <a
              href={primaryCta.href}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-on-accent transition-[background-color,gap] duration-300 hover:gap-3 hover:bg-accent-hover"
            >
              {primaryCta.label}
              <Icon name="arrow-right" className="h-4 w-4" />
            </a>
            <a
              href={secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-on-ink/25 px-7 py-3.5 text-sm font-semibold text-on-ink transition-colors duration-300 hover:border-on-ink/50 hover:bg-on-ink/10"
            >
              <Icon name="play" className="h-4 w-4" />
              {secondaryCta.label}
            </a>
          </div>

          <dl
            className="rise mt-16 grid max-w-2xl gap-x-10 gap-y-6 border-t border-on-ink/15 pt-8 sm:grid-cols-3"
            style={{ animationDelay: "270ms" }}
          >
            {serviceTimes.map((service) => (
              <div key={`${service.day}-${service.time}`}>
                <dt className="font-serif text-2xl text-on-ink numeric">
                  {service.time}
                </dt>
                <dd className="mt-1 text-sm font-medium text-on-ink">{service.title}</dd>
                <dd className="text-sm text-on-ink-muted">{service.day}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
