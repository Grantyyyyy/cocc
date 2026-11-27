"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Icon from "@/components/Icon";
import QtyStepper from "@/components/shop/QtyStepper";
import { formatPeso, type Book } from "@/data/books";
import { cart, MAX_QTY } from "@/lib/cart";

export default function BuyBox({ book }: { book: Book }) {
  const router = useRouter();
  const [qty, setQty] = useState(1);

  return (
    <div>
      <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
        <p className="font-display text-4xl font-semibold tracking-[-0.03em] text-text numeric">
          {formatPeso(book.price)}
        </p>
        {!book.priceConfirmed && (
          <span className="mb-1.5 rounded-full bg-text/10 px-2.5 py-1 text-xs font-medium text-muted">
            Sample price
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-muted">{book.format} · Pick up on Sunday or have it delivered</p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <QtyStepper
          value={qty}
          onChange={setQty}
          min={1}
          max={MAX_QTY}
          label={`Quantity of ${book.title}`}
        />
        <button
          type="button"
          onClick={() => cart.add(book.id, qty)}
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-text/30 px-6 text-sm font-semibold text-text transition-colors duration-300 hover:border-text/60 hover:bg-text/10 sm:flex-none"
        >
          <Icon name="bag" className="h-4 w-4" />
          Add to cart
        </button>
      </div>
      <button
        type="button"
        onClick={() => {
          cart.add(book.id, qty, { open: false });
          router.push("/checkout");
        }}
        className="group mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gold px-7 text-sm font-semibold text-on-gold transition-[background-color,gap] duration-300 hover:gap-3 hover:bg-gold-hover"
      >
        Buy now
        <Icon name="arrow-right" className="h-4 w-4" />
      </button>
    </div>
  );
}
