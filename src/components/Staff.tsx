import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { staff } from "@/data/content";

export default function Staff() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="People you can actually reach"
          description="Our pastors answer their own email. If you have a question before you visit, ask one of them."
        />

        <ul className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {staff.map((person) => (
            <li key={person.name}>
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface-muted">
                <Image
                  src={person.image}
                  alt={`${person.name}, ${person.role}`}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-6 font-serif text-xl font-semibold tracking-[-0.02em] text-ink">
                {person.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent-strong">{person.role}</p>
              <p className="mt-3 max-w-[46ch] text-sm leading-7 text-muted">
                {person.bio}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
