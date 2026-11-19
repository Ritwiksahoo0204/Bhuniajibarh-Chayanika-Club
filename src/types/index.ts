export type Locale = "en" | "bn";

/** Text that exists in both languages */
export type Localized = Record<Locale, string>;

export type ImageRef = {
  src: string;
  alt: Localized;
  width?: number;
  height?: number;
};

export type EventCategory =
  | "cultural"
  | "festival"
  | "youth"
  | "service"
  | "sports"
  | "learning";

export type EventItem = {
  id: string;
  slug: string; // used in the URL: /events/<slug>
  title: Localized;
  shortDescription: Localized; // two lines, for cards
  description: Localized; // full text, for the detail page
  startsAt: string; // ISO, e.g. "2026-12-20T17:00:00+05:30"
  endsAt?: string;
  venue: { name: Localized; address?: Localized };
  category: EventCategory;
  image: ImageRef | null;
  registration: {
    type: "none" | "rsvp" | "external";
    url?: string;
    deadline?: string;
    note?: Localized;
  };
  featured: boolean;
  status: "published" | "draft";
  isPlaceholder?: boolean;
};

export type Photo = {
  id: string;
  src: string;
  alt: Localized;
  caption?: Localized;
  width: number;
  height: number;
};

export type Album = {
  id: string;
  slug: string;
  title: Localized;
  description?: Localized;
  date: string; // ISO date
  cover: ImageRef | null;
  photos: Photo[];
  isPlaceholder?: boolean;
};

export type AnnouncementTag = "notice" | "registration" | "news";

export type Announcement = {
  id: string;
  title: Localized;
  body?: Localized;
  date: string; // ISO
  tag: AnnouncementTag;
  link?: string;
  pinned: boolean;
  expiresAt?: string; // hidden automatically after this date
  isPlaceholder?: boolean;
};

export type TeamMember = {
  id: string;
  name: Localized;
  role: Localized;
  group: "committee" | "advisor" | "volunteer";
  bio?: Localized;
  photo: ImageRef | null;
  order: number;
  isPlaceholder?: boolean;
};

export type Activity = {
  id: string;
  title: Localized;
  description: Localized;
  icon: string; // a Lucide icon name
  isPlaceholder?: boolean;
};

export type Milestone = {
  id: string;
  value: number | null; // null = hidden until you give a real figure
  suffix?: string; // e.g. "+"
  label: Localized;
};

export type ClubInfo = {
  name: Localized;
  shortName: Localized;
  tagline: Localized;
  description: Localized;
  foundedYear: number | null;
  address: {
    village: string;
    block: string;
    district: string;
    state: string;
    country: string;
    postalCode: string;
  };
  contact: { email: string | null; phone: string | null };
  social: {
    facebook: string | null;
    instagram: string | null;
    youtube: string | null;
    whatsapp: string | null;
  };
  mapEmbedUrl: string | null;
  siteUrl: string | null; // add when the domain is chosen
};