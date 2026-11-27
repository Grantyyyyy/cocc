import Checkout from "@/components/shop/Checkout";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Checkout",
  description: `Order books from ${siteConfig.name}.`,
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return <Checkout />;
}
