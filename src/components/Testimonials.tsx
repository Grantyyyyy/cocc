import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="bg-surface-muted py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Stories from people who walked in as guests"
          align="center"
        />

        <div className="mt-16 grid gap-x-10 gap-y-12 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.name} className="border-t border-line pt-8">
              <blockquote className="font-serif text-xl leading-9 tracking-[-0.015em] text-ink">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-semibold text-ink">{item.name}</span>
                <span className="mt-0.5 block text-muted">{item.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
