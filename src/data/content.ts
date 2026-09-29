import type { StaticImageData } from "next/image";
import pastorBayani from "../../public/brand/pastor.webp";
import pastoraAngie from "../../public/brand/pastora.webp";

export const pillars = ["Worship", "The Word", "Prayer", "Family", "Community", "Mission"];

type Leader = {
  name: string;
  role?: string;
  image: StaticImageData;
  imageAlt: string;
  focus: string;
};

export const leaders: Leader[] = [
  {
    name: "Pastor Bayani Areola",
    image: pastorBayani,
    imageAlt: "Pastor Bayani Areola speaking into a microphone in front of the congregation",
    focus: "object-[78%_center]",
  },
  {
    name: "Pastora Angie Areola",
    image: pastoraAngie,
    imageAlt: "Pastora Angie Areola preaching with a microphone, one hand reaching out",
    focus: "object-[18%_center]",
  },
];

export const ministries = [
  {
    name: "Kids",
    line: "The big story of the Bible, at their level",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=70",
    imageAlt: "A laughing child with paint on her face",
  },
  {
    name: "Youth",
    line: "Friendship and faith for high schoolers",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=70",
    imageAlt: "A row of young people sitting arm in arm by the sea",
  },
  {
    name: "Life Groups",
    line: "Small groups meeting across the city",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=70",
    imageAlt: "Friends with their arms around each other at sunset",
  },
  {
    name: "Worship",
    line: "Musicians, singers and the tech team",
    image:
      "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=800&q=70",
    imageAlt: "A crowd worshipping with hands raised under stage lights",
  },
  {
    name: "Outreach",
    line: "Serving barangays across Iligan",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=70",
    imageAlt: "A volunteer in a bright shirt at a community event",
  },
  {
    name: "Prayer",
    line: "Standing with you in every season",
    image:
      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=70",
    imageAlt: "Many hands joined together in a circle",
  },
];

export const sermons = [
  {
    title: "The God Who Stays",
    series: "Exodus: Rescued",
    date: "2026-09-27",
    image:
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=800&q=70",
    imageAlt: "An open Bible held in a person's hands",
  },
  {
    title: "Bread in the Wilderness",
    series: "Exodus: Rescued",
    date: "2026-09-20",
    image:
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=800&q=70",
    imageAlt: "A figure standing in shallow water at sunset",
  },
  {
    title: "When the Water Splits",
    series: "Exodus: Rescued",
    date: "2026-09-13",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=70",
    imageAlt: "Waves rolling onto a bright shoreline",
  },
];

export const events = [
  {
    title: "Newcomers Lunch",
    date: "2026-10-04",
    time: "After Sunday Service",
    location: "Plaza Alemania, 2nd Floor, Iligan City",
    description: "Meet the pastors over lunch, ask anything, and find out where you fit.",
  },
  {
    title: "Night of Worship",
    date: "2026-10-16",
    time: "7PM",
    location: "Venue to be announced",
    description: "An evening of extended worship, Scripture reading and prayer.",
  },
  {
    title: "City Serve Day",
    date: "2026-10-24",
    time: "8AM",
    location: "Barangay to be announced",
    description: "Families, youth and adults serving side by side across the city.",
  },
];

export const visitFaqs = [
  {
    question: "Where is it?",
    answer:
      "Plaza Alemania, 2nd Floor, in Iligan City. Our hosts wait at the entrance and will help you find a seat.",
  },
  {
    question: "How long is the service?",
    answer: "Two hours, 9AM to 11AM: worship, a message from the Bible, and prayer.",
  },
  {
    question: "What should I wear?",
    answer: "Whatever you’re comfortable in. Come as you are.",
  },
  {
    question: "Can I bring my kids?",
    answer: "Yes, families are welcome. Ask a host on Sunday about what we have for kids.",
  },
];
