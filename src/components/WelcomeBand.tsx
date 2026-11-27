import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import WelcomeMotion from "@/components/WelcomeMotion";
import baptism from "../../public/img/baptismal.webp";
import { primaryCta, siteConfig } from "@/data/site";

const doorWord =
  "font-display text-[clamp(2.25rem,8.5vw,10rem)] font-bold leading-none tracking-[-0.04em] text-text [text-shadow:0_8px_40px_rgba(11,5,20,0.45)]";

/** A gold hairline along a door's inner edge, like light catching a wall of water. */
const DoorEdge = ({ side }: { side: "left" | "right" }) => (
  <span
    aria-hidden="true"
    className={`absolute inset-y-0 ${side === "left" ? "left-0" : "right-0"} w-px bg-[linear-gradient(to_bottom,transparent,rgba(247,228,165,0.75)_30%,rgba(247,228,165,0.75)_70%,transparent)]`}
  />
);

export default function WelcomeBand() {
  const phrases = siteConfig.welcome.ceb.split(", ");

  return (
    <section aria-labelledby="welcome-title">
      <WelcomeMotion>
        <div
          data-welcome-stage
          className="relative isolate h-[100svh] min-h-[36rem] overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 overflow-hidden bg-violet-deep">
            <div data-welcome-media className="absolute -inset-[3%] will-change-[transform,filter]">
              <Image
                src={baptism}
                alt="A line of people in white shirts holding hands in the sea during a COCC baptism"
                fill
                placeholder="blur"
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div
              data-welcome-scrim
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,5,20,0.55)_0%,rgba(11,5,20,0.78)_70%),linear-gradient(to_bottom,rgba(106,15,179,0.25),transparent_40%,rgba(11,5,20,0.6))]"
            />
            <div
              data-welcome-sheen
              aria-hidden="true"
              className="absolute -inset-y-[10%] -left-[60%] w-[60%] bg-[linear-gradient(105deg,transparent_0%,rgba(247,228,165,0.06)_30%,rgba(247,228,165,0.2)_50%,rgba(247,228,165,0.06)_70%,transparent_100%)] opacity-0 blur-2xl mix-blend-screen"
            />
          </div>

          {/* The doors only exist in motion; without it the band is already open. */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20">
            {/* Each door carries the whole phrase centred on the stage and shows only
                its own half, so the seam splits "Welcome ka!" down the middle. */}
            <div
              data-welcome-door="left"
              className="invisible absolute inset-y-0 left-0 w-1/2 overflow-hidden bg-[linear-gradient(to_right,var(--ground),#160b29)]"
            >
              <span className={`absolute inset-y-0 left-0 flex w-[200%] items-center justify-center whitespace-nowrap ${doorWord}`}>
                Welcome ka!
              </span>
              <DoorEdge side="right" />
            </div>
            <div
              data-welcome-door="right"
              className="invisible absolute inset-y-0 right-0 w-1/2 overflow-hidden bg-[linear-gradient(to_left,var(--ground),#160b29)]"
            >
              <span className={`absolute inset-y-0 right-0 flex w-[200%] items-center justify-center whitespace-nowrap ${doorWord}`}>
                Welcome ka!
              </span>
              <DoorEdge side="left" />
            </div>
            <span
              data-welcome-seam
              className="invisible absolute bottom-28 top-0 left-1/2 w-px -translate-x-1/2 bg-[linear-gradient(to_bottom,transparent,#f7e4a5_20%,#fff0bc_50%,#f7e4a5_80%,transparent)] shadow-[0_0_24px_2px_rgba(247,228,165,0.45)]"
            />
          </div>

          <div className="flex h-full flex-col items-center justify-center px-6 text-center">
            <h2
              id="welcome-title"
              lang="ceb"
              className="font-script text-[clamp(2.75rem,7.5vw,6.5rem)] font-normal leading-[1.08] tracking-normal text-text"
            >
              {phrases.map((phrase, index) => (
                <span key={phrase} data-welcome-line className="mx-auto block w-fit">
                  {index < phrases.length - 1 ? `${phrase},` : phrase}
                </span>
              ))}
            </h2>
            <p
              data-welcome-en
              className="mx-auto mt-6 max-w-[40ch] font-display text-[clamp(1.125rem,2vw,1.5rem)] font-medium leading-snug text-text/90"
            >
              {siteConfig.welcome.en}
            </p>
            <Link
              data-welcome-cta
              href={primaryCta.href}
              className="group mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-on-gold transition-[background-color,gap] duration-300 hover:gap-3 hover:bg-gold-hover"
            >
              {primaryCta.label}
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>

          <div
            data-welcome-hint
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-8 z-30 flex flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-text/70 opacity-0"
          >
            Scroll
            <span className="h-8 w-px bg-gradient-to-b from-text/70 to-transparent" />
          </div>
        </div>
      </WelcomeMotion>
    </section>
  );
}
