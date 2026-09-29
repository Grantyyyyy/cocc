import Link from "next/link";
import Icon from "@/components/Icon";
import { navigation, primaryCta } from "@/data/site";

export default function NotFound() {
  return (
    <section className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-[88rem]">
        <p className="font-display text-sm font-semibold text-gold">404</p>
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-none tracking-[-0.035em] text-text">
          We could not find that page.
        </h1>
        <p className="mt-6 max-w-[48ch] text-lg leading-8 text-muted">
          The link may be old or mistyped. You are still welcome here, so try one of these instead.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href={primaryCta.href}
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-on-gold transition-[background-color,gap] duration-300 hover:gap-3 hover:bg-gold-hover"
          >
            {primaryCta.label}
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-text/30 px-7 py-3.5 text-sm font-semibold text-text transition-colors duration-300 hover:border-text/60 hover:bg-text/10"
          >
            Go to the home page
          </Link>
        </div>
        <ul className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-8 text-sm">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-muted transition-colors duration-300 hover:text-text">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
