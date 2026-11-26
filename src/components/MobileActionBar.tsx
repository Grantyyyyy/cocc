"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { mapsUrl, primaryCta, telHref } from "@/data/site";

const button =
  "inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition-colors duration-300";

/** Thumb-reach actions on phones, shown once the hero has scrolled away. */
export default function MobileActionBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const onVisit = pathname === primaryCta.href;

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
      inert={!visible}
    >
      <div className="mx-auto flex max-w-md gap-2 rounded-full border border-text/15 bg-ground/85 p-1.5 shadow-[0_-10px_40px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${button} text-text hover:bg-text/10`}
        >
          <Icon name="pin" className="h-4 w-4" />
          Directions
        </a>
        {onVisit ? (
          <>
            <a href={telHref} className={`${button} text-text hover:bg-text/10`}>
              <Icon name="phone" className="h-4 w-4" />
              Call
            </a>
            <a href="#plan" className={`${button} bg-gold text-on-gold hover:bg-gold-hover`}>
              Save a seat
              <Icon name="arrow-right" className="h-4 w-4" />
            </a>
          </>
        ) : (
          <Link href={primaryCta.href} className={`${button} bg-gold text-on-gold hover:bg-gold-hover`}>
            {primaryCta.label}
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
