"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export type GridPhoto = { id: string; src: string; alt: string; width: number; height: number };

export function PhotoGrid({ photos }: { photos: GridPhoto[] }) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {photos.map((p, i) => (
          <li key={p.id} className={i === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={p.alt}
              className="group block h-full w-full overflow-hidden rounded-3xl"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                sizes="(min-width: 768px) 33vw, 50vw"
                loading="lazy"
                className="h-full w-full object-cover transition duration-200 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos.map((p) => ({ src: p.src, alt: p.alt, width: p.width, height: p.height }))}
      />
    </>
  );
}