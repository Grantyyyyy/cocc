export const siteConfig = {
  name: "Crossed Over Citi Church",
  shortName: "COCC",
  tagline: "Building lives. Glorifying God.",
  welcome: {
    ceb: "Kung kinsa man ka, unsa man ka, welcome ka!",
    en: "Whoever you are, whatever you are, you are welcome here.",
  },
  description:
    "Crossed Over Citi Church (COCC) meets every Sunday, 9AM to 11AM, at Plaza Alemania in Iligan City. Building lives. Glorifying God. Whoever you are, you are welcome.",
  url: "https://www.cocciligan.org",
  locale: "en_PH",
  service: {
    day: "Sunday",
    time: "9AM to 11AM",
    opens: "09:00",
    closes: "11:00",
  },
  venue: {
    name: "Plaza Alemania, 2nd Floor",
    city: "Iligan City",
    region: "Lanao del Norte",
    postalCode: "9200",
    country: "PH",
  },
  phone: "(063) 224 0407",
  email: "coccyan@gmail.com",
  office: {
    name: "Crossed Over Center",
    street: "2nd Floor, Plaza Alemania",
    city: "Iligan City",
    region: "Lanao del Norte",
    postalCode: "9200",
    country: "PH",
  },
  facebook: "https://www.facebook.com/cocciligan",
  watchUrl: "https://www.facebook.com/cocciligan/videos",
} as const;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${siteConfig.venue.name}, ${siteConfig.venue.city}`,
)}`;

export const navigation = [
  { label: "About", href: "/about" },
  { label: "Ministries", href: "/ministries" },
  { label: "Watch", href: "/watch" },
  { label: "Events", href: "/events" },
  { label: "Visit", href: "/visit" },
] as const;

export const primaryCta = {
  label: "Plan your visit",
  href: "/visit",
} as const;

export const secondaryCta = {
  label: "Watch online",
  href: "/watch",
} as const;
