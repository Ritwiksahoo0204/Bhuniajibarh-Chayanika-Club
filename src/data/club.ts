import type { ClubInfo, Milestone } from "@/types";

export const club: ClubInfo = {
  name: {
    en: "Bhuniajibarh Chayanika Club",
    bn: "ভূঁইয়াজীবার চয়নিকা ক্লাব", // TODO: confirm the official Bengali spelling
  },
  shortName: { en: "Chayanika Club", bn: "চয়নিকা ক্লাব" },
  tagline: {
    en: "Together, we make memories.", // placeholder wording
    bn: "একসাথে, গড়ি স্মৃতির মালা।", // TODO: review
  },
  description: {
    en: "A community club in Bhuniajibarh, Ramnagar, Purba Medinipur. [Placeholder: replace with the club's own two-line description.]",
    bn: "পূর্ব মেদিনীপুরের রামনগরের ভূঁইয়াজীবারের একটি কমিউনিটি ক্লাব। [অস্থায়ী লেখা]",
  },
  foundedYear: null,
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
    phone: "+91 XXXXXXXXXX"
  },
  social: {
    facebook: "https://facebook.com/yourpage",
    instagram: "https://instagram.com/yourpage",
    youtube: null,
    whatsapp: "https://wa.me/91XXXXXXXXXX",
  },
  mapEmbedUrl: null,
  siteUrl: null,
};

/** All values stay null until you share real figures */
export const milestones: Milestone[] = [
  {
    id: "founded",
    value: null,
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
