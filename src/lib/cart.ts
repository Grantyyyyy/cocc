"use client";

import { useSyncExternalStore } from "react";
import { findBook } from "@/data/books";

export type CartLine = { id: string; qty: number };
type CartState = { lines: CartLine[]; open: boolean };

const STORAGE_KEY = "cocc-cart";
const MAX_QTY = 20;
const EMPTY: CartState = { lines: [], open: false };

let state: CartState = EMPTY;
let hydrated = false;
const listeners = new Set<() => void>();

function hydrate() {
  if (hydrated || typeof window === "undefined") return;
  hydrated = true;
  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]") as CartLine[];
    const lines = saved.filter((line) => findBook(line.id) && line.qty > 0);
    state = { ...state, lines };
  } catch {
    // A corrupt or blocked store just means an empty cart.
  }
}

function commit(next: CartState) {
  state = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next.lines));
  } catch {
    // Private mode or full storage: the cart still works for this visit.
  }
  listeners.forEach((listener) => listener());
}

const clampQty = (qty: number) => Math.max(0, Math.min(MAX_QTY, Math.round(qty)));

export const cart = {
  add(id: string, qty = 1, { open = true } = {}) {
    hydrate();
    const existing = state.lines.find((line) => line.id === id);
    const lines = existing
      ? state.lines.map((line) => (line.id === id ? { ...line, qty: clampQty(line.qty + qty) } : line))
      : [...state.lines, { id, qty: clampQty(qty) }];
    commit({ lines, open: open || state.open });
  },
  setQty(id: string, qty: number) {
    hydrate();
    const next = clampQty(qty);
    const lines = next === 0
      ? state.lines.filter((line) => line.id !== id)
      : state.lines.map((line) => (line.id === id ? { ...line, qty: next } : line));
    commit({ ...state, lines });
  },
  remove(id: string) {
    cart.setQty(id, 0);
  },
  clear() {
    commit({ ...state, lines: [] });
  },
  setOpen(open: boolean) {
    hydrate();
    commit({ ...state, open });
  },
};

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key !== STORAGE_KEY) return;
    hydrated = false;
    hydrate();
    listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

const getSnapshot = () => {
  hydrate();
  return state;
};
const getServerSnapshot = () => EMPTY;

/** The cart, kept in localStorage and shared by every component that reads it. */
export function useCart() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const items = snapshot.lines.flatMap((line) => {
    const book = findBook(line.id);
    return book ? [{ ...line, book, total: book.price * line.qty }] : [];
  });
  return {
    open: snapshot.open,
    items,
    count: items.reduce((sum, item) => sum + item.qty, 0),
    subtotal: items.reduce((sum, item) => sum + item.total, 0),
  };
}

export { MAX_QTY };
