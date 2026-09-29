import Image from "next/image";
import Icon from "@/components/Icon";
import baptism from "../../public/img/baptismal.png";
import { primaryCta, siteConfig } from "@/data/site";

export default function WelcomeBand() {
  return (
    <section
      aria-labelledby="welcome-title"
      className="relative isolate flex min-h-[34rem] items-center justify-center overflow-hidden px-4 py-24 text-center sm:min-h-[40rem]"
    >
      <Image
        src={baptism}
        alt="A line of people in white shirts holding hands in the sea during a COCC baptism"
        fill
        placeholder="blur"
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-ground/60" aria-hidden="true" />

      <div className="max-w-4xl">
        <h2
          id="welcome-title"
          lang="ceb"
          className="font-script text-[clamp(2.75rem,7.5vw,6.5rem)] leading-[1.08] text-text"
        >
          {siteConfig.welcome.ceb.split(", ").map((phrase, index, all) => (
            <span key={phrase} className="block">
              {index < all.length - 1 ? `${phrase},` : phrase}
            </span>
          ))}
        </h2>
        <p className="mx-auto mt-6 max-w-[40ch] font-display text-[clamp(1.125rem,2vw,1.5rem)] font-medium leading-snug text-text/90">
          {siteConfig.welcome.en}
        </p>
        <a
          href={primaryCta.href}
          className="group mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-on-gold transition-[background-color,gap] duration-300 hover:gap-3 hover:bg-gold-hover"
        >
          {primaryCta.label}
          <Icon name="arrow-right" className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
