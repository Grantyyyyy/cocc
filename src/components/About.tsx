import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { beliefs } from "@/data/content";
import { siteConfig } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
          <figure className="lg:sticky lg:top-28">
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-surface-muted">
              <Image
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1000&q=75"
                alt="Friends talking together around a table after a Sunday gathering"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 max-w-[38ch] text-sm leading-6 text-muted">
              Sunday lingers long after the last song. Most people are still here half an
              hour later.
            </figcaption>
          </figure>

          <div>
            <SectionHeading
              title="An ordinary church for ordinary people following an extraordinary Savior"
              description={`${siteConfig.name} started with a handful of people praying in a living room. Today COCC is a multi-generational family in ${siteConfig.address.city} that still cares most about the same three things.`}
            />

            <dl className="mt-14 divide-y divide-line border-t border-line">
              {beliefs.map((item) => (
                <div
                  key={item.title}
                  className="grid gap-2 py-8 sm:grid-cols-[13rem_minmax(0,1fr)]"
                >
                  <dt className="font-serif text-xl font-semibold tracking-[-0.02em] text-ink">
                    {item.title}
                  </dt>
                  <dd className="max-w-[58ch] leading-8 text-muted">{item.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
