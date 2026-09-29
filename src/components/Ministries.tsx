import Image from "next/image";
import PosterRail from "@/components/PosterRail";
import { ministries } from "@/data/content";

export default function Ministries() {
  return (
    <section id="ministries" aria-labelledby="ministries-title" className="scroll-mt-24 py-14 sm:py-20">
      <PosterRail
        label="ministries"
        heading={
          <div>
            <h2
              id="ministries-title"
              className="font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-bold leading-[1.05] tracking-[-0.03em] text-text"
            >
              Find your place
            </h2>
            <p className="mt-2 text-sm text-muted">
              Sample ministries and photos until the church confirms them.
            </p>
          </div>
        }
      >
        {ministries.map((ministry) => (
          <li
            key={ministry.name}
            className="group relative aspect-[3/4] w-[72%] shrink-0 snap-start overflow-hidden rounded-xl bg-raised sm:w-[42%] md:w-[31%] lg:w-[23%] xl:w-[19%]"
          >
            <Image
              src={ministry.image}
              alt={ministry.imageAlt}
              fill
              sizes="(min-width: 1280px) 19vw, (min-width: 1024px) 23vw, (min-width: 768px) 31vw, (min-width: 640px) 42vw, 72vw"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(to_top,rgba(11,5,20,0.92)_8%,rgba(11,5,20,0.25)_55%,transparent)]"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 p-5 text-center">
              <h3 className="font-display text-[clamp(1.5rem,2.2vw,2rem)] font-bold uppercase leading-none tracking-[-0.01em] text-text">
                {ministry.name}
              </h3>
              <p className="mt-2 min-h-10 text-sm leading-5 text-text/80">{ministry.line}</p>
            </div>
          </li>
        ))}
      </PosterRail>
    </section>
  );
}
