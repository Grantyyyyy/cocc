"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import logo from "../../public/brand/cocc-logo.webp";
import { navigation, primaryCta, siteConfig } from "@/data/site";

type Pill = { left: number; width: number };

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [pill, setPill] = useState<Pill | null>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const active = navigation.find((item) => isActive(item.href))?.href ?? null;
  const target = hovered ?? active;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Slide the highlight under the hovered link, or the current page when idle.
  useEffect(() => {
    const measure = () => {
      const el = target
        ? listRef.current?.querySelector<HTMLElement>(`[data-href="${target}"]`)
        : null;
      setPill(el ? { left: el.offsetLeft, width: el.offsetWidth } : null);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [target]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="pointer-events-none sticky top-0 z-50 px-3 pt-3 sm:px-4 lg:px-6">
      <div
        className={`pointer-events-auto mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 rounded-full border py-2 pl-3 pr-2 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-[background-color,border-color] duration-500 lg:h-16 lg:pl-4 ${
          scrolled || open
            ? "border-text/15 bg-ground/80"
            : "border-text/10 bg-raised/60"
        }`}
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-full pr-2"
          aria-label={`${siteConfig.name} home`}
        >
          <Image src={logo} alt="" width={36} height={36} className="h-9 w-9 rounded-full" />
          <span className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-text sm:text-[0.8125rem]">
            {siteConfig.shortName}
            <span className="hidden text-muted sm:inline"> · Iligan</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul
            ref={listRef}
            onMouseLeave={() => setHovered(null)}
            className="relative flex items-center"
          >
            <li
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 rounded-full bg-text/10 ring-1 ring-text/10 transition-[left,width,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                left: pill?.left ?? 0,
                width: pill?.width ?? 0,
                opacity: pill ? 1 : 0,
              }}
            />
            {navigation.map((item) => (
              <li key={item.href} data-href={item.href} className="relative">
                <Link
                  href={item.href}
                  onMouseEnter={() => setHovered(item.href)}
                  onFocus={() => setHovered(item.href)}
                  onBlur={() => setHovered(null)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="relative block rounded-full px-5 py-2.5 text-sm font-medium text-muted transition-colors duration-300 hover:text-text aria-[current=page]:text-text"
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0.5 mx-auto h-0.5 w-4 rounded-full bg-gold"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={primaryCta.href}
            className="group hidden items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-on-gold transition-[background-color,gap] duration-300 hover:gap-3 hover:bg-gold-hover sm:inline-flex"
          >
            {primaryCta.label}
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-text/10 text-text transition-colors duration-300 hover:bg-text/20 lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="pointer-events-auto mx-auto mt-2 max-w-5xl rounded-3xl border border-text/15 bg-ground/95 p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl lg:hidden"
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {navigation.map((item) => (
                <li key={item.href} className="border-b border-line last:border-0">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="flex items-center justify-between py-4 font-display text-2xl font-semibold tracking-[-0.02em] text-text aria-[current=page]:text-gold"
                  >
                    {item.label}
                    <Icon name="arrow-right" className="h-5 w-5 text-muted" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={primaryCta.href}
              onClick={() => setOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3.5 text-sm font-semibold text-on-gold"
            >
              {primaryCta.label}
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
