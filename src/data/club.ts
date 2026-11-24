import type { ClubInfo, Milestone } from "@/types";

export const club: ClubInfo = {
  name: {
    en: "Bhuniajibarh Chayanika Club",
    bn: "ভূঁঞ্যাজিবাড় চয়নিকা ক্লাব",
  },
  shortName: { en: "Chayanika Club", bn: "চয়নিকা ক্লাব" },
  tagline: {
    en: "Together, we make memories.",
    bn: "একসাথে, গড়ি স্মৃতির মালা।",
  },
  description: {
    en: "A community club in Bhuniajibarh, Ramnagar, Purba Medinipur, established in 1965.",
    bn: "পূর্ব মেদিনীপুরের রামনগরের ভূঁঞ্যাজিবাড়ের একটি ঐতিহ্যবাহী কমিউনিটি ক্লাব, স্থাপিত 1965।",
  },
  foundedYear: 1965,
  address: {
    village: "Bhuniajibarh",
    block: "Ramnagar",
    district: "Purba Medinipur",
    state: "West Bengal",
    country: "India",
    postalCode: "721455",
  },
  contact: {
    email: "club.bhuniajibarhchayanika@gmail.com",
    phone: null
  },
  social: {
    facebook: "https://www.facebook.com/share/g/1ChvCJvWM4/?mibextid=NSMWBT",
    instagram: "https://www.instagram.com/chayanika_club_1965?utm_source=ig_web_button_share_sheet&avpt=ZDNlZDc0MzIxNw==",
    youtube: "https://www.youtube.com/@BHUNIAJIBARHCHAYANIKACLUB",
    whatsapp: null,
  },
  mapEmbedUrl: null,
  siteUrl: null,
};

/** All values stay null until you share real figures */
export const milestones: Milestone[] = [
  {
    id: "founded",
    value: 1965,
    label: { en: "Year founded", bn: "প্রতিষ্ঠার বছর" },
  },
  {
    id: "events",
    value: null,
    suffix: "+",
    label: { en: "Events held", bn: "অনুষ্ঠান" },
  },
  {
    id: "members",
    value: null,
    suffix: "+",
    label: { en: "Members", bn: "সদস্য" },
  },
];
