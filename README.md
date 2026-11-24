# Bhuniajibarh Chayanika Club (ভুনিয়াজিবর চয়নিকা ক্লাব)

> **স্থাপিত: ১৯৬৫ | Estd. 1965**  
> *Where Every Neighbour is Family, Every Festival a Memory.*  
> *ভুনিয়াজিবর, পূর্ব মেদিনীপুর, পশ্চিমবঙ্গ*

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.js.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![next-intl](https://img.shields.io/badge/i18n-next--intl-green)](https://next-intl-docs.vercel.app/)

The official website for **Bhuniajibarh Chayanika Club**, a community and cultural club founded in 1965 in Bhuniajibarh village, Purba Medinipur, West Bengal. This modern platform serves as a digital home for village events, festival archives, community notices, membership applications, and cultural heritage.

---

## ✨ Features

- 🌐 **Bilingual (English & বাংলা):** Seamless language switching powered by `next-intl` with dedicated localization for all pages, navigation, and notices.
- 🎪 **Multi-Day Event Management:**
  - Dynamic interactive multi-day schedules (e.g. Saraswati Puja 5-day celebration).
  - High-resolution event posters with full-screen zoom using Lightbox.
  - Automatic event lifecycle (events move to "Past Events" based on date).
- 🖼️ **Dynamic Gallery:**
  - Automatically scans folders inside `public/photos/gallery/` into categorized photo albums.
  - Interactive grid layout with full-screen lightbox viewing.
- 🤝 **Get Involved & Contact:**
  - 100% Free Membership Application Form.
  - Volunteer Sign-up Form.
  - Direct General Contact Form.
  - Email notification pipeline delivered straight to the club's Gmail using the Resend API.
- 📱 **Mobile-Optimized & Accessible:**
  - Floating dropdown navigation for mobile screens.
  - Responsive layout tuned for desktops, tablets, and smartphones.
  - Custom warm Bengali cultural color scheme (cream, sage, terracotta, forest).
- 🔍 **SEO & Web Standards:**
  - Auto-generated `sitemap.xml` and `robots.txt` covering all bilingual routes and dynamic event/gallery paths.
  - OpenGraph social cards and official club emblem favicon.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 16 (App Router)** | Full-stack React framework with Turbopack |
| **React 19 & TypeScript** | Component architecture and type safety |
| **Tailwind CSS v4** | Modern utility-first styling with custom palette |
| **next-intl** | Internationalization (English `en` & Bengali `bn`) |
| **Lucide React** | Clean, accessible icons |
| **Yet Another React Lightbox** | Smooth, high-performance image zoom & lightboxes |
| **Zod** | Client-side and server-side form validation |
| **Resend** | Transactional email delivery for enquiries |

---

## 📁 Project Structure

```text
community-club/
├── messages/               # Bilingual translation dictionaries
│   ├── bn.json             # Bengali translations
│   └── en.json             # English translations
├── public/                 # Static assets
│   ├── logo.png            # Official club logo
│   ├── favicon.ico         # Club favicon
│   └── photos/             # Real photo archives (gallery, events, hero)
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── [locale]/       # Localized pages (home, about, events, gallery, contact)
│   │   ├── api/enquiry/    # Server route for handling form submissions
│   │   ├── robots.ts       # Dynamic robots.txt
│   │   └── sitemap.ts      # Dynamic sitemap.xml
│   ├── components/         # Reusable React UI components
│   │   ├── events/         # Event schedules, cards, and lightboxes
│   │   ├── forms/          # Membership, volunteer & contact forms
│   │   ├── gallery/        # Lightbox image grids
│   │   ├── home/           # Hero, notice board, countdown, activity cards
│   │   └── layout/         # Navbar, mobile dropdown, footer, logo
│   ├── data/               # Club details, committee, announcements, event data
│   ├── lib/                # Gallery scanner, email delivery, validations
│   └── styles/             # Global CSS and Google fonts
└── next.config.ts          # Next.js configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have installed:
- [Node.js](https://nodejs.org/) (version 18.17+ or 20+)
- npm, pnpm, or yarn

### 1. Clone the Repository

```bash
git clone https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
cd community-club
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root of the project:

```env
# Resend API Key for sending form notifications
RESEND_API_KEY=your_resend_api_key_here

# Destination email for club inquiries
CONTACT_EMAIL=club.bhuniajibarhchayanika@gmail.com

# Production site URL (used in sitemap and SEO metadata)
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build

To verify and create an optimized production build:

```bash
npm run build
npm run start
```

---

## 🌐 Deployment (Vercel)

The easiest way to deploy this application is using [Vercel](https://vercel.com):

1. Push your repository to GitHub.
2. Import the project into Vercel.
3. In **Project Settings → Environment Variables**, add:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
   - `NEXT_PUBLIC_SITE_URL`
4. Click **Deploy**.

---

## 📬 Official Club Contact

- **Name:** Bhuniajibarh Chayanika Club (ভুনিয়াজিবর চয়নিকা ক্লাব)
- **Email:** [club.bhuniajibarhchayanika@gmail.com](mailto:club.bhuniajibarhchayanika@gmail.com)
- **Location:** Bhuniajibarh, Purba Medinipur, West Bengal, India
- **Facebook:** [Chayanika Club Facebook Group](https://www.facebook.com/share/g/1ChvCJvWM4/)
- **Instagram:** [@chayanika_club_1965](https://www.instagram.com/chayanika_club_1965)
- **YouTube:** [@BHUNIAJIBARHCHAYANIKACLUB](https://www.youtube.com/@BHUNIAJIBARHCHAYANIKACLUB)

---

## 📄 License

This repository is maintained for **Bhuniajibarh Chayanika Club**. All photographs, posters, and club insignia belong to the respective copyright holders and the club committee.
