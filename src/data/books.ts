import type { StaticImageData } from "next/image";
import blessedLife from "../../public/books/the-blessed-life.png";

export type Book = {
  id: string;
  title: string;
  author: string;
  subtitle: string;
  tagline: string;
  foreword: string;
  format: string;
  /** Price in Philippine pesos. */
  price: number;
  /** False until the church confirms the price; the page labels it as a sample. */
  priceConfirmed: boolean;
  cover: StaticImageData;
  coverAlt: string;
};

export const books: Book[] = [
  {
    id: "the-blessed-life",
    title: "The Blessed Life",
    author: "Bayani C. Areola",
    subtitle: "10 Principles to a Prosperous, Peaceful, and Productive Life",
    tagline: "Receiving a Hundredfold of Increase in Times of Crisis",
    foreword: "Foreword by Bishop Daniel Balais",
    format: "Paperback",
    // TODO(church): confirm the real price, then set priceConfirmed to true.
    price: 350,
    priceConfirmed: false,
    cover: blessedLife,
    coverAlt: "The Blessed Life by Bayani C. Areola, with gold grapevines on a dark green cover",
  },
];

export const findBook = (id: string) => books.find((book) => book.id === id);

const peso = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
  maximumFractionDigits: 0,
});

export const formatPeso = (amount: number) => peso.format(amount);
