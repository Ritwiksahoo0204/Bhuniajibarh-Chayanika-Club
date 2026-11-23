import type { Activity } from "@/types";

export const activities: Activity[] = [
  {
    id: "cultural", icon: "Music", isPlaceholder: true,
    title: { en: "Cultural programmes", bn: "সাংস্কৃতিক অনুষ্ঠান" },
    description: { en: "Music, dance, drama and recitation.", bn: "গান, নাচ, নাটক ও আবৃত্তি।" }
  },
  {
    id: "festivals", icon: "PartyPopper", isPlaceholder: true,
    title: { en: "Festivals", bn: "উৎসব" },
    description: { en: "Celebrating our traditions together.", bn: "ঐতিহ্য মিলেমিশে উদযাপন।" }
  },
  {
    id: "youth", icon: "Sparkles", isPlaceholder: true,
    title: { en: "Youth activities", bn: "যুব কার্যক্রম" },
    description: { en: "Spaces for young people to grow.", bn: "তরুণদের বেড়ে ওঠার জায়গা।" }
  },
  {
    id: "service", icon: "HeartHandshake", isPlaceholder: true,
    title: { en: "Community service", bn: "সমাজসেবা" },
    description: { en: "Helping neighbours and the village.", bn: "প্রতিবেশী ও গ্রামের পাশে থাকা।" }
  },
  {
    id: "sports", icon: "Trophy", isPlaceholder: true,
    title: { en: "Sports and games", bn: "খেলাধুলা" },
    description: { en: "Friendly matches and play.", bn: "বন্ধুত্বপূর্ণ প্রতিযোগিতা ও খেলা।" }
  },

];