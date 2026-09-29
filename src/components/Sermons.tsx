import Image from "next/image";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import { sermons } from "@/data/content";
import { siteConfig } from "@/data/site";

const formatDate = (value: string) =>
  new Date(`${value}T12:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

export default function Sermons() {
  return (
    <section id="watch" aria-labelledby="watch-title" className="scroll-mt-24 py-14 sm:py-20">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="watch-title"
            title="Missed a Sunday?"
            description="Messages go up on our Facebook page after every service. The titles below are samples until real messages are linked."
          />
          <a
            href={siteConfig.watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-text/30 px-6 py-3 text-sm font-semibold text-text transition-[border-color,gap] duration-300 hover:gap-3 hover:border-text/60"
          >
            Watch on Facebook
            <Icon name="arrow-right" className="h-4 w-4" />
          </a>
        </div>

        <ul className="mt-14 grid gap-x-6 gap-y-12 md:grid-cols-3">
          {sermons.map((sermon) => (
            <li key={sermon.title}>
              <a
                href={siteConfig.watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-video overflow-hidden rounded-xl bg-raised">
                  <Image
                    src={sermon.image}
                    alt={sermon.imageAlt}
                    fill
                    sizes="(min-width: 768px) 30vw, 92vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                  <span
                    className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-ground/75 text-text ring-1 ring-text/25 transition-colors duration-300 group-hover:bg-gold group-hover:text-on-gold group-hover:ring-gold"
                    aria-hidden="true"
                  >
                    <Icon name="play" className="ml-0.5 h-5 w-5" />
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-[-0.02em] text-text transition-colors duration-300 group-hover:text-gold">
                  {sermon.title}
                  <span className="sr-only">, watch on Facebook</span>
                </h3>
                <p className="mt-1.5 text-sm text-muted">
                  {sermon.series} · <time dateTime={sermon.date}>{formatDate(sermon.date)}</time>
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
