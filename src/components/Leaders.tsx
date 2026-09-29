import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { leaders } from "@/data/content";

export default function Leaders() {
  return (
    <section id="leaders" aria-labelledby="leaders-title" className="scroll-mt-24 py-14 sm:py-20">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6">
        <SectionHeading
          id="leaders-title"
          title="Meet our leaders"
          description="The people who lead COCC, and who would love to meet you on Sunday."
        />

        <ul className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2">
          {leaders.map((leader) => (
            <li key={leader.name}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-raised">
                <Image
                  src={leader.image}
                  alt={leader.imageAlt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1408px) 43rem, (min-width: 640px) 48vw, 92vw"
                  className={`object-cover ${leader.focus}`}
                />
              </div>
              <h3 className="mt-5 font-display text-[clamp(1.375rem,2.2vw,1.75rem)] font-bold leading-tight tracking-[-0.025em] text-text">
                {leader.name}
              </h3>
              {leader.role && <p className="mt-1 text-muted">{leader.role}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
