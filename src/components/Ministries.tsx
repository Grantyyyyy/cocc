import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { ministries } from "@/data/content";

const [featuredOne, featuredTwo, ...rest] = ministries;

function Ministry({
  ministry,
  featured = false,
}: {
  ministry: (typeof ministries)[number];
  featured?: boolean;
}) {
  return (
    <article className="group">
      <div
        className={`relative overflow-hidden rounded-2xl bg-surface-muted ${
          featured ? "aspect-4/3" : "aspect-5/4"
        }`}
      >
        <Image
          src={ministry.image}
          alt={ministry.imageAlt}
          fill
          sizes={
            featured
              ? "(min-width: 1024px) 45vw, 90vw"
              : "(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
          }
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
        />
      </div>
      <h3
        className={`mt-6 font-serif font-semibold tracking-[-0.02em] text-ink ${
          featured ? "text-2xl" : "text-xl"
        }`}
      >
        {ministry.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-accent-strong">{ministry.ages}</p>
      <p
        className={`mt-3 max-w-[52ch] leading-7 text-muted ${
          featured ? "text-base" : "text-sm"
        }`}
      >
        {ministry.description}
      </p>
    </article>
  );
}

export default function Ministries() {
  return (
    <section id="ministries" className="scroll-mt-28 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="There is a place here for your whole family"
          description="From the nursery to the prayer room, every ministry exists to help people take their next step with Jesus."
          align="center"
        />

        <div className="mt-16 grid gap-x-8 gap-y-14 lg:grid-cols-2">
          <Ministry ministry={featuredOne} featured />
          <Ministry ministry={featuredTwo} featured />
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((ministry) => (
            <Ministry key={ministry.name} ministry={ministry} />
          ))}
        </div>
      </div>
    </section>
  );
}
