import { events, serviceTimes, visitFaqs } from "@/data/content";
import { siteConfig } from "@/data/site";

const dayUrl = (day: string) => `https://schema.org/${day}`;

export default function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Church",
        "@id": `${siteConfig.url}/#church`,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        description: siteConfig.description,
        url: siteConfig.url,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        image: `${siteConfig.url}/opengraph-image`,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.region,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.address.latitude,
          longitude: siteConfig.address.longitude,
        },
        sameAs: siteConfig.socials.map((social) => social.href),
        openingHoursSpecification: serviceTimes.map((service) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: dayUrl(service.day),
          opens: service.time,
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { "@id": `${siteConfig.url}/#church` },
        inLanguage: "en-US",
      },
      ...events.map((event) => ({
        "@type": "Event",
        name: event.title,
        startDate: `${event.date}T${event.time.includes("AM") ? "09:00" : "19:00"}:00-05:00`,
        description: event.description,
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        organizer: { "@id": `${siteConfig.url}/#church` },
        location: {
          "@type": "Place",
          name: `${siteConfig.name}, ${event.location}`,
          address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.address.street,
            addressLocality: siteConfig.address.city,
            addressRegion: siteConfig.address.region,
            postalCode: siteConfig.address.postalCode,
            addressCountry: siteConfig.address.country,
          },
        },
      })),
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        mainEntity: visitFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
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
