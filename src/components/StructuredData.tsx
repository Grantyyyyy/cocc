import { siteConfig } from "@/data/site";

export default function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Church",
        "@id": `${siteConfig.url}/#church`,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        slogan: siteConfig.tagline,
        description: siteConfig.description,
        url: siteConfig.url,
        logo: `${siteConfig.url}/brand/cocc-logo.webp`,
        image: `${siteConfig.url}/opengraph-image`,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.venue.name,
          addressLocality: siteConfig.venue.city,
          addressRegion: siteConfig.venue.region,
          postalCode: siteConfig.venue.postalCode,
          addressCountry: siteConfig.venue.country,
        },
        telephone: siteConfig.phone,
        email: siteConfig.email,
        sameAs: [siteConfig.facebook],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "https://schema.org/Sunday",
          opens: siteConfig.service.opens,
          closes: siteConfig.service.closes,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { "@id": `${siteConfig.url}/#church` },
        inLanguage: "en-PH",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export function FaqStructuredData({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/visit#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
