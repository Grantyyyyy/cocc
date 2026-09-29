import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { primaryCta, siteConfig } from "@/data/site";
import baptism from "../../public/img/baptismal.webp";

export const metadata: Metadata = {
  title: "Page not found",
  description: `This page could not be found. Find service times, messages and events from ${siteConfig.name}.`,
  robots: { index: false, follow: true },
};

const destinations = [
  { label: "Watch online", href: "/watch", line: "Catch up on Sunday messages" },
  { label: "Ministries", href: "/ministries", line: "A place for your whole family" },
  { label: "Events", href: "/events", line: "What’s coming up at COCC" },
  { label: "About us", href: "/about", line: "What we believe and who leads us" },
];

export default function NotFound() {
  return (
    <>
      <section className="px-3 pt-2 sm:px-4 lg:px-6">
        <div className="unveil relative isolate mx-auto flex min-h-[32rem] max-w-[88rem] overflow-hidden rounded-2xl bg-violet-deep ring-1 ring-line lg:h-[62svh] lg:max-h-[40rem]">
          <Image
            src={baptism}
            alt="A line of people in white shirts holding hands in the sea during a COCC baptism"
            fill
            preload
            placeholder="blur"
            sizes="(min-width: 1408px) 88rem, 100vw"
            className="-z-10 object-cover"
          />
          <div
            className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(11,5,20,0.92)_0%,rgba(11,5,20,0.7)_45%,rgba(11,5,20,0.25)_85%),linear-gradient(to_right,rgba(11,5,20,0.65),transparent_65%)]"
            aria-hidden="true"
          />
          <p
            className="absolute right-6 top-4 font-display text-[clamp(5rem,16vw,14rem)] font-bold leading-none tracking-[-0.05em] text-text/25 numeric sm:right-10 sm:top-6 lg:right-14"
            aria-hidden="true"
          >
            404
          </p>
          <div className="mt-auto w-full p-6 sm:p-10 lg:p-14">
            <h1 className="rise max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-none tracking-[-0.035em] text-text">
              We couldn’t find that page.
            </h1>
            <p
              className="rise mt-5 max-w-[52ch] text-lg leading-8 text-text/85"
              style={{ animationDelay: "120ms" }}
            >
              The link may be old or mistyped. You’re still welcome here, so let’s get you
              somewhere useful.
            </p>
            <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
              <Link
                href={primaryCta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-on-gold transition-[background-color,gap] duration-300 hover:gap-3 hover:bg-gold-hover"
              >
                {primaryCta.label}
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-text/30 px-7 py-3.5 text-sm font-semibold text-text transition-colors duration-300 hover:border-text/60 hover:bg-text/10"
              >
                Go to the home page
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="next-title" className="py-14 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-4 sm:px-6">
          <h2
            id="next-title"
            className="font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-bold leading-[1.05] tracking-[-0.03em] text-text"
          >
            Where to next
          </h2>
          <ul className="mt-8 grid border-t border-line sm:grid-cols-2 sm:gap-x-10">
            {destinations.map((item) => (
              <li key={item.href} className="border-b border-line">
                <Link
                  href={item.href}
                  className="group flex items-center justify-between gap-6 py-6 sm:py-8"
                >
                  <span className="min-w-0">
                    <span className="block font-display text-2xl font-semibold tracking-[-0.025em] text-text sm:text-3xl">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-muted">{item.line}</span>
                  </span>
                  <Icon
                    name="arrow-right"
                    className="h-5 w-5 shrink-0 text-muted transition-[color,transform] duration-300 group-hover:translate-x-1 group-hover:text-gold"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
