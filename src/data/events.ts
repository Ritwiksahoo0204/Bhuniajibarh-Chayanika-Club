import type { EventItem } from "@/types";

export const events: EventItem[] = [
  {
    id: "ev-1",
    slug: "sample-winter-cultural-evening",
    title: {
      en: "[Sample] Winter Cultural Evening",
      bn: "[নমুনা] শীতকালীন সাংস্কৃতিক সন্ধ্যা",
    },
    shortDescription: {
      en: "An evening of songs, dance and recitation. Sample text.",
      bn: "গান, নাচ ও আবৃত্তির এক সন্ধ্যা। নমুনা লেখা।",
    },
    description: {
      en: "Replace this with the real description of the event.",
      bn: "এখানে অনুষ্ঠানের আসল বিবরণ লিখুন।",
    },
    startsAt: "2026-12-20T17:00:00+05:30",
    venue: {
      name: { en: "Club ground, Bhuniajibarh", bn: "ক্লাব প্রাঙ্গণ, ভুনিয়াজিবার্হ" },
    },
    category: "cultural",
    image: null,
    registration: { type: "none" },
    featured: true,
    status: "published",
    isPlaceholder: true,
  },
  {
    id: "ev-2",
    slug: "sample-new-year-picnic",
    title: { en: "[Sample] New Year Get-together", bn: "[নমুনা] নববর্ষের মিলনমেলা" },
    shortDescription: {
      en: "A relaxed day out for members and families. Sample text.",
      bn: "সদস্য ও পরিবারের জন্য একটি আনন্দের দিন। নমুনা লেখা।",
    },
    description: { en: "Replace with real details.", bn: "আসল তথ্য লিখুন।" },
    startsAt: "2027-01-01T10:00:00+05:30",
    venue: { name: { en: "To be announced", bn: "পরে জানানো হবে" } },
    category: "festival",
    image: null,
    registration: { type: "rsvp", note: { en: "RSVP helps us plan.", bn: "আগে জানালে আয়োজনে সুবিধা হয়।" } },
    featured: false,
    status: "published",
    isPlaceholder: true,
  },
  {
    id: "ev-3",
    slug: "sample-youth-sports-day",
    title: { en: "[Sample] Youth Sports Day", bn: "[নমুনা] যুব ক্রীড়া দিবস" },
    shortDescription: {
      en: "Friendly games for young people. Sample text.",
      bn: "তরুণদের জন্য বন্ধুত্বপূর্ণ খেলাধুলা। নমুনা লেখা।",
    },
    description: { en: "Replace with real details.", bn: "আসল তথ্য লিখুন।" },
    startsAt: "2027-01-23T08:00:00+05:30",
    venue: { name: { en: "Local playground", bn: "স্থানীয় খেলার মাঠ" } },
    category: "sports",
    image: null,
    registration: { type: "none" },
    featured: false,
    status: "published",
    isPlaceholder: true,
  },
  {
    id: "ev-4",
    slug: "sample-community-service-day",
    title: { en: "[Sample] Community Service Day", bn: "[নমুনা] সমাজসেবা দিবস" },
    shortDescription: {
      en: "Volunteers working together for the village. Sample text.",
      bn: "গ্রামের জন্য স্বেচ্ছাসেবকদের একসাথে কাজ। নমুনা লেখা।",
    },
    description: { en: "Replace with real details.", bn: "আসল তথ্য লিখুন।" },
    startsAt: "2026-10-10T09:00:00+05:30", // past, to test the "Past events" list
    venue: { name: { en: "Bhuniajibarh", bn: "ভুনিয়াজিবার্হ" } },
    category: "service",
    image: null,
    registration: { type: "none" },
    featured: false,
    status: "published",
    isPlaceholder: true,
  },
];