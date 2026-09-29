import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import AccordionGallery from "@/components/react-bits/AccordionGallery";
import { ministries } from "@/data/content";

type Ministry = (typeof ministries)[number];

function Poster({ ministry, sizes, className }: { ministry: Ministry; sizes: string; className: string }) {
  return (
    <li className={`group relative aspect-[4/3] overflow-hidden rounded-xl bg-raised sm:aspect-[3/4] ${className}`}>
      <Image
        src={ministry.image}
        alt={ministry.imageAlt}
        fill
        sizes={sizes}
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
  );
}

const sampleNote = "These ministries and photos are examples for now. Our full list is coming soon.";

export default function Ministries({ variant = "rail" }: { variant?: "rail" | "grid" }) {
  if (variant === "grid") {
    return (
      <section aria-label="Ministries" className="py-14 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-4 sm:px-6">
          <p className="text-sm text-muted">{sampleNote}</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ministries.map((ministry) => (
              <Poster
                key={ministry.name}
                ministry={ministry}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 92vw"
                className=""
              />
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby="ministries-title" className="py-14 sm:py-20">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6">
        <div>
          <h2
            id="ministries-title"
            className="font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-bold leading-[1.05] tracking-[-0.03em] text-text"
          >
            Find your place
          </h2>
          <p className="mt-2 text-sm text-muted">{sampleNote}</p>
          <Link
            href="/ministries"
            className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-text underline decoration-text/30 underline-offset-4 transition-[text-decoration-color,gap] duration-300 hover:gap-3 hover:decoration-gold"
          >
            All ministries
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8">
          <AccordionGallery
            items={ministries.map((ministry) => ({
              image: ministry.image,
              label: ministry.name,
              alt: ministry.imageAlt,
              link: "/ministries",
            }))}
            defaultIndex={0}
            accentColor="#fcdc58"
            overlayColor="#0b0514"
            height={520}
            gap={12}
            radius={16}
            expandRatio={0.4}
          />
        </div>
      </div>
    </section>
  );
}
