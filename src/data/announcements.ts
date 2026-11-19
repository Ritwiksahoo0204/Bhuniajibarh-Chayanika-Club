// announcements.ts
import type { Announcement } from "@/types";

export const announcements: Announcement[] = [
  {
    id: "an-1",
    title: { en: "[Sample] Membership enquiries are open", bn: "[নমুনা] সদস্যপদের জন্য যোগাযোগ করুন" },
    date: "2026-11-15",
    tag: "registration",
    pinned: true,
    isPlaceholder: true,
  },
  {
    id: "an-2",
    title: { en: "[Sample] Winter programme dates announced", bn: "[নমুনা] শীতকালীন অনুষ্ঠানের তারিখ ঘোষণা" },
    date: "2026-11-10",
    tag: "news",
    pinned: false,
    isPlaceholder: true,
  },
];