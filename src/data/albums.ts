import type { Album } from "@/types";

export const albums: Album[] = [
    {
        id: "saraswati-puja-memories",
        slug: "saraswati-puja-memories",
        title: {
            en: "Saraswati Puja Celebrations",
            bn: "শ্রী শ্রী সরস্বতী পূজা উৎসব",
        },
        description: {
            en: "Memories and celebrations from our club.",
            bn: "আমাদের ক্লাবের স্মরণীয় মুহূর্ত ও উৎসবের ছবি।",
        },
        date: "2026-02-14",
        cover: {
            src: "/photos/gallery/saraswati-puja-poster.jpg",
            alt: { en: "Saraswati Puja", bn: "সরস্বতী পূজা" },
            width: 764,
            height: 1024,
        },
        photos: [
            {
                id: "p1",
                src: "/photos/gallery/saraswati-puja-poster.jpg",
                alt: { en: "Saraswati Puja 2027 Poster", bn: "শ্রী শ্রী সরস্বতী পূজা ২০২৭ পোস্টার" },
                width: 764,
                height: 1024,
            },
        ],
    },
];