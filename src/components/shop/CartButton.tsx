"use client";

import Icon from "@/components/Icon";
import { cart, useCart } from "@/lib/cart";

/** Header bag icon; only appears once something is in the cart. */
export default function CartButton() {
  const { count } = useCart();
  if (count === 0) return null;

  return (
    <button
      type="button"
      onClick={() => cart.setOpen(true)}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-text/10 text-text transition-colors duration-300 hover:bg-text/20"
    >
      <Icon name="bag" />
      <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[0.6875rem] font-bold text-on-gold numeric">
        {count}
      </span>
      <span className="sr-only">Open cart, {count} {count === 1 ? "item" : "items"}</span>
    </button>
  );
}
