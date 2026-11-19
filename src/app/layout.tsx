import type { Metadata } from "next";
import { fraunces, nunito, hindSiliguri, notoSerifBengali } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhuniajibarh Chayanika Club",
  description:
    "Bhuniajibarh Chayanika Club, a community club in Ramnagar, Purba Medinipur, West Bengal.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${nunito.variable} ${hindSiliguri.variable} ${notoSerifBengali.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}