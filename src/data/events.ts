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
    schedule: [
      {
        dayNumber: 1,
        date: "10 Feb 2027",
        title: {
          en: "Day 1: Ghat Sthapan, Inauguration & Sports Competitions",
          bn: "দিন ১: ঘট স্থাপন, পূজা সূচনা ও ক্রীড়া প্রতিযোগিতা",
        },
        subEvents: [
          {
            id: "day1-ghot",
            title: {
              en: "Ghat Sthapan & Puja Inauguration",
              bn: "পবিত্র ঘট স্থাপন ও মহোৎসবের শুভারম্ভ",
            },
            time: {
              en: "Night 09:00 PM onwards",
              bn: "রাত্রি ৯:০০ ঘটিকা হইতে",
            },
            venue: {
              en: "Kanupoydahat Birendranath Sasmal Prangan",
              bn: "কানুপয়ডাহাট বীরেন্দ্রনাথ শাসমল প্রাঙ্গণ",
            },
            description: {
              en: "Auspicious Ghat Sthapan ceremony marking the grand beginning of Sri Sri Saraswati Puja & Bani Bandana.",
              bn: "শ্রী শ্রী সরস্বতী পূজা ও বাণী বন্দনার শুভ সূচনা লগ্নে বৈদিক রীতিতে পবিত্র ঘট স্থাপন ও পূজা আরম্ভ। সকল ভক্তবৃন্দের উপস্থিতি কাম্য।",
            },
            image: {
              src: "/photos/events/saraswati-puja-2027/day-1/ghot.png",
              alt: {
                en: "Ghat Sthapan Ceremony Poster",
                bn: "ঘট স্থাপন অনুষ্ঠান পোস্টার",
              },
              width: 1792,
              height: 2400,
            },
          },
          {
            id: "day1-game",
            title: {
              en: "Sports & Fun Competitions",
              bn: "বার্ষিক ক্রীড়া ও আনন্দানুষ্ঠান প্রতিযোগিতা",
            },
            time: {
              en: "Afternoon 02:00 PM onwards",
              bn: "দুপুর ২:০০ ঘটিকা হইতে",
            },
            venue: {
              en: "Club Ground & Premises",
              bn: "ক্লাব সংলগ্ন খেলার মাঠ",
            },
            description: {
              en: "Exciting games, sports and athletic competitions for children, youth, and village members.",
              bn: "ছোট-বড় সকলের জন্য বিভিন্ন মজাদার খেলা ও ক্রীড়া প্রতিযোগিতা। বিজয়ীদের জন্য থাকছে আকর্ষণীয় পুরস্কার।",
            },
            image: {
              src: "/photos/events/saraswati-puja-2027/day-1/game.png",
              alt: {
                en: "Sports & Games Poster",
                bn: "ক্রীড়া প্রতিযোগিতা পোস্টার",
              },
              width: 1792,
              height: 2400,
            },
          },
        ],
      },
      {
        dayNumber: 2,
        date: "11 Feb 2027",
        title: {
          en: "Day 2: Maha Puja, Pushpanjali & Quiz Competition",
          bn: "দিন ২: মহাপূজা, পুষ্পাঞ্জলি ও সাধারণ জ্ঞান কুইজ প্রতিযোগিতা",
        },
        subEvents: [
          {
            id: "day2-puspanjali",
            title: {
              en: "Maha Pushpanjali, Hate-Khori & Prasad",
              bn: "মহা পুষ্পাঞ্জলি, হাতেখড়ি ও মহাপ্রসাদ বিতরণ",
            },
            time: {
              en: "Morning 09:30 AM onwards",
              bn: "সকাল ৯:৩০ ঘটিকা হইতে",
            },
            venue: {
              en: "Kanupoydahat Birendranath Sasmal Prangan",
              bn: "কানুপয়ডাহাট বীরেন্দ্রনাথ শাসমল প্রাঙ্গণ",
            },
            description: {
              en: "Sacred Pushpanjali offering to Devi Saraswati, auspicious Hate-Khori initiation for young children, followed by holy Prasad distribution.",
              bn: "মা সরস্বতীর শ্রীচরণে ভক্তিভরে পুষ্পাঞ্জলি নিবেদন, কচিকাঁচাদের বিদ্যারম্ভে হাতেখড়ি এবং ভক্তমণ্ডলীর মাঝে মহাপ্রসাদ বিতরণ।",
            },
            image: {
              src: "/photos/events/saraswati-puja-2027/day-2/puspanjali.png",
              alt: {
                en: "Pushpanjali and Puja Poster",
                bn: "পুষ্পাঞ্জলি ও পূজা অনুষ্ঠান পোস্টার",
              },
              width: 1792,
              height: 2400,
            },
          },
          {
            id: "day2-quiz",
            title: {
              en: "General Knowledge & Quiz Contest",
              bn: "সাধারণ জ্ঞান ও কুইজ প্রতিযোগিতা",
            },
            time: {
              en: "Evening 05:00 PM onwards",
              bn: "সন্ধ্যা ৫:০০ ঘটিকা হইতে",
            },
            venue: {
              en: "Club Cultural Stage",
              bn: "ক্লাব প্রাঙ্গণ সাংস্কৃতিক মঞ্চ",
            },
            description: {
              en: "Inter-school and open quiz competition for students and youth. Test your knowledge and win attractive prizes and trophies.",
              bn: "ছাত্র-ছাত্রী ও যুবকদের জন্য চিত্তাকর্ষক কুইজ প্রতিযোগিতা। বিজয়ীদের জন্য থাকছে আকর্ষণীয় স্মারক ও মেধা পুরস্কার।",
            },
            image: {
              src: "/photos/events/saraswati-puja-2027/day-2/Quiz.png",
              alt: {
                en: "Quiz Competition Poster",
                bn: "কুইজ প্রতিযোগিতা পোস্টার",
              },
              width: 1792,
              height: 2400,
            },
          },
        ],
      },
      {
        dayNumber: 3,
        date: "12 Feb 2027",
        title: {
          en: "Day 3: Sit & Draw Competition & Badminton Tournament",
          bn: "দিন ৩: বসে আঁকো প্রতিযোগিতা ও জমজমাট ব্যাডমিন্টন টুর্নামেন্ট",
        },
        subEvents: [
          {
            id: "day3-drawing",
            title: {
              en: "Sit & Draw / Art Competition",
              bn: "বার্ষিক বসে আঁকো প্রতিযোগিতা",
            },
            time: {
              en: "Morning 10:00 AM onwards",
              bn: "সকাল ১০:০০ ঘটিকা হইতে",
            },
            venue: {
              en: "Club Cultural Hall & Premises",
              bn: "ক্লাব প্রাঙ্গণ ও সাংস্কৃতিক মঞ্চ",
            },
            description: {
              en: "Annual drawing competition for children and students in multiple age groups. Drawing sheets provided. Exciting awards and certificates for all participants.",
              bn: "বিভিন্ন বিভাগে শিশু ও ছাত্র-ছাত্রীদের জন্য বার্ষিক অঙ্কন প্রতিযোগিতা। সকল অংশগ্রহণকারীর জন্য রয়েছে উৎসাহমূলক উপহার এবং বিজয়ীদের জন্য বিশেষ পুরস্কার।",
            },
            image: {
              src: "/photos/events/saraswati-puja-2027/day-3/drawing.png",
              alt: {
                en: "Sit and Draw Competition Poster",
                bn: "বসে আঁকো প্রতিযোগিতা পোস্টার",
              },
              width: 1792,
              height: 2400,
            },
          },
          {
            id: "day3-badminton",
            title: {
              en: "Exciting Badminton Tournament",
              bn: "জমজমাট ব্যাডমিন্টন টুর্নামেন্ট",
            },
            time: {
              en: "Evening 05:30 PM onwards",
              bn: "সন্ধ্যা ৫:৩০ ঘটিকা হইতে",
            },
            venue: {
              en: "Club Floodlight Badminton Court",
              bn: "ক্লাব সংলগ্ন ফ্লাডলাইট ব্যাডমিন্টন কোর্ট",
            },
            description: {
              en: "Thrilling evening badminton championship featuring local and guest pairs. High-energy matches under floodlights with trophies for champions and runners-up.",
              bn: "ফ্লাডলাইটের আলোয় জমজমাট নক-আউট ব্যাডমিন্টন চ্যাম্পিয়নশিপ। স্থানীয় ও আমন্ত্রিত দলগুলির দ্বৈত লড়াই ও ট্রফি প্রদান।",
            },
            image: {
              src: "/photos/events/saraswati-puja-2027/day-3/batminton.png",
              alt: {
                en: "Badminton Tournament Poster",
                bn: "ব্যাডমিন্টন টুর্নামেন্ট পোস্টার",
              },
              width: 1792,
              height: 2400,
            },
          },
        ],
      },
      {
        dayNumber: 4,
        date: "13 Feb 2027",
        title: {
          en: "Day 4: Exciting Games & Grand Immersion Procession",
          bn: "দিন ৪: বিশেষ আনন্দ প্রতিযোগিতা ও শোভাযাত্রা সহকারে শুভ বিসর্জন",
        },
        subEvents: [
          {
            id: "day4-games",
            title: {
              en: "Special Sports & Fun Competitions",
              bn: "বিশেষ ক্রীড়া ও আনন্দানুষ্ঠান প্রতিযোগিতা",
            },
            time: {
              en: "Afternoon 02:30 PM onwards",
              bn: "দুপুর ২:৩০ ঘটিকা হইতে",
            },
            venue: {
              en: "Club Ground & Premises",
              bn: "ক্লাব সংলগ্ন মাঠ ও প্রাঙ্গণ",
            },
            description: {
              en: "Exciting traditional games, fun sports, and community challenges for all age groups with trophy presentations.",
              bn: "গ্রামবাসী ও যুবকদের জন্য চিত্তাকর্ষক ক্রীড়া ও ঐতিহ্যবাহী আনন্দ প্রতিযোগিতা। বিজয়ীদের মাঝে পুরস্কার বিতরণ।",
            },
            image: {
              src: "/photos/events/saraswati-puja-2027/day-4/games.png",
              alt: {
                en: "Special Games Poster",
                bn: "ক্রীড়া ও আনন্দানুষ্ঠান পোস্টার",
              },
              width: 1792,
              height: 2400,
            },
          },
          {
            id: "day4-bisorjon",
            title: {
              en: "Grand Immersion Procession (Bisarjan)",
              bn: "বর্ণাঢ্য শোভাযাত্রা সহকারে শুভ বিসর্জন",
            },
            time: {
              en: "Evening 05:00 PM onwards",
              bn: "বিকাল ৫:০০ ঘটিকা হইতে",
            },
            venue: {
              en: "Village Procession to Waterbody",
              bn: "সমগ্র গ্রাম পরিক্রমা ও স্থানীয় জলাশয়",
            },
            description: {
              en: "Solemn and celebratory immersion of Maa Saraswati with traditional Dhak, Shankha, firecrackers, and village-wide procession.",
              bn: "ঢাকের বোল, শঙ্খধ্বনি ও বাদ্যের তালে বর্ণাঢ্য শোভাযাত্রা সহকারে সমগ্র গ্রাম পরিক্রমা শেষে মা সরস্বতীর বিদায় ও শুভ বিসর্জন।",
            },
            image: {
              src: "/photos/events/saraswati-puja-2027/day-4/bisorjon.png",
              alt: {
                en: "Bisarjan Procession Poster",
                bn: "শুভ বিসর্জন পোস্টার",
              },
              width: 1792,
              height: 2400,
            },
          },
        ],
      },
      {
        dayNumber: 5,
        date: "14 Feb 2027",
        title: {
          en: "Day 5: Grand Community Feast & Annaprasad Distribution",
          bn: "দিন ৫: সার্বজনীন অন্নপ্রসাদ বিতরণ ও সমাপনী মহোৎসব",
        },
        subEvents: [
          {
            id: "day5-onnoprosad",
            title: {
              en: "Maha Annaprasad Distribution",
              bn: "সার্বজনীন মহাপ্রসাদ ও অন্নপ্রসাদ বিতরণ",
            },
            time: {
              en: "Midday 12:30 PM onwards",
              bn: "দুপুর ১২:৩০ ঘটিকা হইতে",
            },
            venue: {
              en: "Kanupoydahat Birendranath Sasmal Prangan",
              bn: "কানুপয়ডাহাট বীরেন্দ্রনাথ শাসমল প্রাঙ্গণ",
            },
            description: {
              en: "Sacred community feast and Annaprasad distribution for all devotees, neighbours, and guests, concluding our 5-day Saraswati Puja celebration with gratitude and brotherhood.",
              bn: "সমগ্র গ্রামবাসী, ভক্তবৃন্দ ও শুভাকাঙ্ক্ষীদের জন্য মহোৎসবের সমাপনী দিনে সার্বজনীন অন্নপ্রসাদ সেবা। সকলকে সপরিবারে প্রসাদ গ্রহণের আন্তরিক সাদর আমন্ত্রণ।",
            },
            image: {
              src: "/photos/events/saraswati-puja-2027/day-5/onnoprosad.png",
              alt: {
                en: "Annaprasad Distribution Poster",
                bn: "অন্নপ্রসাদ বিতরণ পোস্টার",
              },
              width: 1792,
              height: 2400,
            },
          },
        ],
      },
    ],
  },
];
