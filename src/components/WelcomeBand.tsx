import Link from "next/link";
import Icon from "@/components/Icon";
import ScrollExpand from "@/components/react-bits/ScrollExpand";
import baptism from "../../public/img/baptismal.webp";
import { primaryCta, siteConfig } from "@/data/site";

export default function WelcomeBand() {
  return (
    <section aria-labelledby="welcome-title">
      <ScrollExpand
        useWindowScroll
        src={baptism.src}
        alt="A line of people in white shirts holding hands in the sea during a COCC baptism"
        title="Welcome ka!"
        scrollHint="Scroll"
        startWidth={52}
        startHeight={56}
        startRadius={24}
        scrollDistance={0.9}
        holdDistance={0.25}
        overlayScrim={0.6}
        className="font-display"
      >
        <h2
          id="welcome-title"
          lang="ceb"
          className="font-script text-[clamp(2.75rem,7.5vw,6.5rem)] font-normal leading-[1.08] tracking-normal text-text"
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
        <Link
          href={primaryCta.href}
          className="group mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-on-gold transition-[background-color,gap] duration-300 hover:gap-3 hover:bg-gold-hover"
        >
          {primaryCta.label}
          <Icon name="arrow-right" className="h-4 w-4" />
        </Link>
      </ScrollExpand>
    </section>
  );
}
