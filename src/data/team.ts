// team.ts  (empty until you share real names)
import type { TeamMember } from "@/types";

export const team: TeamMember[] = [
    {
        id: "president",
        name: {
            en: "Susovon Sahoo", // Member name in English
            bn: "সুশোভন সাহু",    // Member name in Bengali
        },
        role: {
            en: "President",             // Role in English
            bn: "সভাপতি",                 // Role in Bengali
        },
        group: "committee",            // "committee", "advisor", or "volunteer"
        photo: {
            src: "/photos/team/susovon.jpg",
            alt: { en: "President", bn: "সভাপতি" },
        },                   // null (or { src: "/photos/team/name.jpg", alt: {...} })
        order: 1,
    },


];