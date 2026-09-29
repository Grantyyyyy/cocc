export const siteConfig = {
  name: "Crossed Over Citi Church",
  shortName: "Crossed Over",
  initials: "COCC",
  tagline: "A family where faith, hope and love grow together",
  description:
    "Crossed Over Citi Church (COCC) is a welcoming, Christ-centered family in Iligan City. Join us every Sunday for worship, Bible teaching, kids ministry and life groups.",
  url: "https://www.cocciligan.org",
  locale: "en_PH",
  email: "hello@cocciligan.org",
  phone: "+63 917 000 0000",
  address: {
    street: "Placeholder address, confirm with the church office",
    city: "Iligan City",
    region: "Lanao del Norte",
    postalCode: "9200",
    country: "PH",
    latitude: 8.228,
    longitude: 124.2452,
  },
  watchUrl: "https://www.youtube.com/@cocciligan",
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/cocciligan" },
    { label: "Instagram", href: "https://www.instagram.com/cocciligan" },
    { label: "YouTube", href: "https://www.youtube.com/@cocciligan" },
    { label: "TikTok", href: "https://www.tiktok.com/@cocciligan" },
  ],
} as const;

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Service Times", href: "#services" },
  { label: "Ministries", href: "#ministries" },
  { label: "Sermons", href: "#sermons" },
  { label: "Events", href: "#events" },
  { label: "Visit", href: "#visit" },
] as const;

export const primaryCta = {
  label: "Plan Your Visit",
  href: "#visit",
} as const;

export const secondaryCta = {
  label: "Watch Online",
  href: "#sermons",
} as const;
