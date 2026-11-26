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
    image: "/img/kids-ministry.png",
    imageAlt: "A young child seated on a chair, clapping her hands",
  },
  {
    name: "Youth",
    line: "Friendship and faith for high schoolers",
    image: "/img/youth-ministry.png",
    imageAlt: "A group of young people in white shirts standing together in the sea",
  },
  {
    name: "Life Groups",
    line: "Small groups meeting across the city",
    image: "/img/life-groups-ministry.png",
    imageAlt: "Church members gathered for a group photo in a decorated hall",
  },
  {
    name: "Worship",
    line: "Musicians, singers and the tech team",
    image: "/img/worship-ministry.png",
    imageAlt: "The congregation raising their hands as the worship team leads from the stage, framed by red curtains",
  },
  {
    name: "Outreach",
    line: "Serving barangays across Iligan",
    image: "/img/volunteer-ministry.png",
    imageAlt: "Volunteers gathered around a table with water containers, one holding a tablet",
  },
  {
    name: "Prayer",
    line: "Standing with you in every season",
    image: "/img/prayer-ministry.png",
    imageAlt: "The congregation praying together with eyes closed and hands raised",
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

export const visitSteps = [
  {
    time: "Before 9AM",
    title: "Arrive",
    body: "Head up to Plaza Alemania, 2nd Floor. A host at the entrance will say hello and help you find a seat.",
  },
  {
    time: "9AM",
    title: "Worship",
    body: "We open with songs in English and Cebuano. Sing along, or just listen. Either is fine.",
  },
  {
    time: "Then",
    title: "The message",
    body: "A message from the Bible that connects to everyday life in Iligan.",
  },
  {
    time: "11AM",
    title: "Prayer and kumustahan",
    body: "We close in prayer, then hang around to talk. Stay as long as you like, or slip out. No pressure.",
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
  {
    question: "Is it in English or Cebuano?",
    answer: "Both. We welcome people in Cebuano and English, so you will feel at home either way.",
  },
  {
    question: "Do I need to sign up first?",
    answer:
      "No. The form on this page just helps us get ready for you. You are always welcome to simply show up.",
  },
];
