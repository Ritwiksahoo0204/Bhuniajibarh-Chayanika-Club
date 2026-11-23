import type { EventItem } from "@/types";

export const events: EventItem[] = [
  {
    id: "saraswati-puja-2027",
    slug: "saraswati-puja-2027",
    title: {
      en: "Sarbajanin Sri Sri Saraswati Puja & Bani Bandana",
      bn: "সার্বজনীন শ্রী শ্রী সরস্বতী পূজা ও বাণী বন্দনা",
    },
    shortDescription: {
      en: "Annual Saraswati Puja celebration, devotional prayer, and cultural festival.",
      bn: "ঐতিহ্যবাহী শ্রী শ্রী সরস্বতী পূজা, আরাধনা ও সাংস্কৃতিক উৎসব।",
    },
    description: {
      en: "Organised with great devotion and celebration by Bhuniajibarh Chayanika Club (Estd. 1965). All devotees, neighbours, and community members are warmly invited to join the auspicious celebration and cultural programmes.\n\nDates: 10th February to 14th February, 2027.\nVenue: Kanupoydahat Birendranath Sasmal Prangan, Bhuniajibarh, Purba Medinipur.",
      bn: "ভূঁঞ্যাজিবাড় চয়নিকা ক্লাব (স্থাপিত - ১৯৬৫)-এর পরিচালনায় আয়োজিত ঐতিহ্যবাহী সার্বজনীন শ্রী শ্রী সরস্বতী পূজা ও বাণী বন্দনা।\n\n১০ই ফেব্রুয়ারি থেকে ১৪ই ফেব্রুয়ারি, ২০২৭ পর্যন্ত ৫ দিনব্যাপী এই মহা উৎসবে সমস্ত ভক্তবৃন্দ, গ্রামবাসী ও শুভানুধ্যায়ীদের আন্তরিক আমন্ত্রণ জানাচ্ছি।\n\nস্থান: কানুপয়ডাহাট বীরেন্দ্রনাথ শাসমল প্রাঙ্গণ, ভূঁঞ্যাজিবাড়, পূর্ব মেদিনীপুর।",
    },
    startsAt: "2027-02-10T08:00:00+05:30",
    endsAt: "2027-02-14T22:00:00+05:30",
    venue: {
      name: {
        en: "Kanupoydahat Birendranath Sasmal Prangan",
        bn: "কানুপয়ডাহাট বীরেন্দ্রনাথ শাসমল প্রাঙ্গণ",
      },
      address: {
        en: "Bhuniajibarh, Purba Medinipur",
        bn: "ভূঁঞ্যাজিবাড়, পূর্ব মেদিনীপুর",
      },
    },
    category: "festival",
    image: {
      src: "/photos/saraswati-puja-poster.jpg",
      alt: {
        en: "Sarbajanin Sri Sri Saraswati Puja & Bani Bandana Poster",
        bn: "সার্বজনীন শ্রী শ্রী সরস্বতী পূজা ও বাণী বন্দনা পোস্টার",
      },
      width: 800,
      height: 1100,
    },
    registration: { type: "none" },
    featured: true,
    status: "published",
    isPlaceholder: false,
  },
  {
    id: "ev-4",
    slug: "sample-community-service-day",
    title: {
      en: "[Sample] Community Service Day",
      bn: "[নমুনা] সমাজসেবা দিবস",
    },
    shortDescription: {
      en: "Volunteers working together for the village. Sample text.",
      bn: "গ্রামের জন্য স্বেচ্ছাসেবকদের একসাথে কাজ। নমুনা লেখা।",
    },
    description: { en: "Replace with real details.", bn: "আসল তথ্য লিখুন।" },
    startsAt: "2026-10-10T09:00:00+05:30", // past, to test the "Past events" list
    venue: { name: { en: "Bhuniajibarh", bn: "ভূঁইয়াজীবার" } },
    category: "service",
    image: null,
    registration: { type: "none" },
    featured: false,
    status: "published",
    isPlaceholder: true,
  },
];
