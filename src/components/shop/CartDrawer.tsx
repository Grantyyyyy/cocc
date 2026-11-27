"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import Icon from "@/components/Icon";
import QtyStepper from "@/components/shop/QtyStepper";
import { formatPeso } from "@/data/books";
import { cart, MAX_QTY, useCart } from "@/lib/cart";

/** Slide-over cart. A modal <dialog> gives focus trapping and Escape for free. */
export default function CartDrawer() {
  const { open, items, count, subtotal } = useCart();
  const dialog = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (open && !element.open) element.showModal();
    if (!open && element.open) element.close();
  }, [open]);

  // Navigating away (e.g. to checkout) closes the drawer.
  useEffect(() => {
    cart.setOpen(false);
  }, [pathname]);

  return (
    <dialog
      ref={dialog}
      aria-labelledby="cart-title"
      onClose={() => cart.setOpen(false)}
      onClick={(event) => {
        if (event.target === event.currentTarget) cart.setOpen(false);
      }}
      className="cart-drawer fixed inset-y-0 left-auto right-0 m-0 h-full max-h-none w-full max-w-md bg-transparent p-0 text-text backdrop:bg-ground/70 backdrop:backdrop-blur-sm"
    >
      <div className="flex h-full flex-col border-l border-line bg-ground shadow-[-30px_0_80px_-20px_rgba(0,0,0,0.8)]">
        <header className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 id="cart-title" className="font-display text-xl font-semibold tracking-[-0.02em]">
            Your cart{" "}
            {count > 0 && <span className="font-normal text-muted numeric">({count})</span>}
          </h2>
          <button
            type="button"
            onClick={() => cart.setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-text/10 transition-colors duration-300 hover:bg-text/20"
            autoFocus
          >
            <Icon name="close" />
            <span className="sr-only">Close cart</span>
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-raised ring-1 ring-line">
              <Icon name="bag" className="h-6 w-6 text-muted" />
            </span>
            <p className="font-display text-lg font-semibold">Your cart is empty</p>
            <Link
              href="/#books"
              onClick={() => cart.setOpen(false)}
              className="text-sm font-semibold text-text underline decoration-text/30 underline-offset-4 hover:decoration-gold"
            >
              Browse books
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-line overflow-y-auto px-6">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 py-6">
                  <Image
                    src={item.book.cover}
                    alt=""
                    sizes="72px"
                    className="h-auto w-[4.5rem] shrink-0 self-start rounded-[3px] shadow-[6px_10px_20px_-8px_rgba(0,0,0,0.8)]"
                  />
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-display font-semibold leading-snug">{item.book.title}</p>
                        <p className="mt-0.5 text-xs text-muted">
                          {item.book.format} · {formatPeso(item.book.price)} each
                        </p>
                      </div>
                      <p className="text-sm font-semibold numeric">{formatPeso(item.total)}</p>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-4">
                      <QtyStepper
                        size="sm"
                        value={item.qty}
                        min={0}
                        max={MAX_QTY}
                        onChange={(qty) => cart.setQty(item.id, qty)}
                        label={`Quantity of ${item.book.title}`}
                      />
                      <button
                        type="button"
                        onClick={() => cart.remove(item.id)}
                        className="text-xs text-muted underline decoration-text/25 underline-offset-4 hover:text-text"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <footer className="border-t border-line px-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-5">
              <div className="flex items-baseline justify-between">
                <p className="text-sm text-muted">Subtotal</p>
                <p className="font-display text-2xl font-semibold numeric">{formatPeso(subtotal)}</p>
              </div>
              <p className="mt-1 text-xs text-muted">Pickup is free. Delivery fee is confirmed on Messenger.</p>
              <Link
                href="/checkout"
                className="group mt-5 flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 text-sm font-semibold text-on-gold transition-[background-color,gap] duration-300 hover:gap-3 hover:bg-gold-hover"
              >
                Checkout
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={() => cart.setOpen(false)}
                className="mt-3 w-full py-2 text-sm font-semibold text-muted transition-colors hover:text-text"
              >
                Continue browsing
              </button>
            </footer>
          </>
        )}
      </div>
    </dialog>
  );
}
