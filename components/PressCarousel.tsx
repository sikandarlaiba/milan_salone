"use client";

import Image from "next/image";
import { useState } from "react";

const slides = [
  "/images/credits/meisdel/press for Melsdel 2026_Page_02.jpg",
  "/images/credits/meisdel/press for Melsdel 2026_Page_04.jpg",
  "/images/credits/meisdel/press for Melsdel 2026_Page_05.jpg",
  "/images/credits/meisdel/press for Melsdel 2026_Page_06.jpg",
];

export default function PressCarousel() {
  const [current, setCurrent] = useState(0);
  const [hoveredLeft, setHoveredLeft] = useState(false);
  const [hoveredRight, setHoveredRight] = useState(false);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="px-[10px] min-[1911px]:px-[65px] mt-[10px] mb-[40px] md:mb-[60px] xl:mb-[80px]">

      {/* Desktop / Tablet — arrow navigation */}
      <div className="hidden md:flex items-center gap-[20px]">
        <button
          onClick={prev}
          onMouseEnter={() => setHoveredLeft(true)}
          onMouseLeave={() => setHoveredLeft(false)}
          className="flex-shrink-0 w-[44px] h-[44px] flex items-center justify-center border transition-colors text-[24px]"
          style={{
            borderColor: hoveredLeft ? "#4A9FDC" : "#000",
            color: hoveredLeft ? "#4A9FDC" : "#000",
          }}
          aria-label="Previous"
        >
          ←
        </button>

        <div className="relative flex-1 aspect-[4/3]">
          <Image
            src={slides[current]}
            alt={`Press ${current + 1}`}
            fill
            sizes="90vw"
            className="object-contain"
          />
        </div>

        <button
          onClick={next}
          onMouseEnter={() => setHoveredRight(true)}
          onMouseLeave={() => setHoveredRight(false)}
          className="flex-shrink-0 w-[44px] h-[44px] flex items-center justify-center border transition-colors text-[24px]"
          style={{
            borderColor: hoveredRight ? "#4A9FDC" : "#000",
            color: hoveredRight ? "#4A9FDC" : "#000",
          }}
          aria-label="Next"
        >
          →
        </button>
      </div>

      {/* Mobile — horizontal scroll */}
      <div className="md:hidden flex gap-[10px] overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        {slides.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[85vw] snap-center relative aspect-[4/3]"
          >
            <Image
              src={src}
              alt={`Press ${i + 1}`}
              fill
              sizes="85vw"
              className="object-contain"
            />
          </div>
        ))}
      </div>

    </section>
  );
}
