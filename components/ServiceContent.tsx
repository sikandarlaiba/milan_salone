"use client";

import { useState } from "react";
import Image from "next/image";
import { serviceSections, type ServiceSection } from "@/data/serviceContent";
import ProcessFlow from "@/components/ProcessFlow";

function ServiceSectionBlock({
  section,
  lang,
}: {
  section: ServiceSection;
  lang: "jp" | "en";
}) {
  const content = section[lang];
  const n = section.cards.length;
  const colCount = n === 4 ? 4 : 3;
  const spacers = n === 2 ? 0 : colCount - n;
  const borderClass = section.dark ? "border-white/40" : "border-black/30";
  const fontClass = lang === "en" ? "body-en" : "body-jp";

  return (
    <section
      className={`full-bleed flex min-h-[500px] flex-col items-center justify-center px-[20px] py-[60px] md:min-h-[700px] md:px-[10px] md:py-[80px] xl:min-h-[1100px] xl:px-[65px] xl:py-[100px] text-center ${
        section.dark ? "bg-black text-white" : "bg-[#F5F5F5] text-black"
      }`}
    >
      <h2 className={`${fontClass} font-bold text-[24px] md:text-[36px] xl:text-[48px]`}>
        {content.title}
      </h2>

      <p className="body-en font-bold mt-[10px] text-[15px] md:text-[20px] xl:text-[25px]">
        {section[lang === "jp" ? "en" : "jp"].title}
      </p>

      {/* Mobile (< md): stacked cards */}
      <div className="mt-[80px] grid w-full grid-cols-1 gap-y-[40px] text-left md:hidden">
        {section.cards.map((card, i) => {
          const cc = card[lang];
          return (
            <div key={i}>
              <p className={`${fontClass} font-bold border-b pb-[16px] text-[14px] ${borderClass}`}>
                {cc.title}
              </p>
              <p className={`${fontClass} mt-[16px] text-[13px] leading-[1.6]`}>
                {cc.body}
              </p>
            </div>
          );
        })}
      </div>

      {/* Tablet+ (md+): 3-row aligned flat grid — titles/dividers/bodies each share a row */}
      <div
        className={`mt-[100px] xl:mt-[150px] hidden gap-x-[20px] xl:gap-x-[50px] gap-y-[20px] text-left md:grid
          ${n === 2 ? "md:grid-cols-2 w-2/3 mx-auto" : n === 4 ? "md:grid-cols-4 w-full" : "md:grid-cols-3 w-full"}`}
      >
        {/* Row 1: titles — top-aligned so space appears below shorter titles */}
        {section.cards.map((card, i) => (
          <p key={`t${i}`} className={`${fontClass} font-bold self-start pb-[14px] text-[14px] md:text-[16px] xl:text-[20px]`}>
            {card[lang].title}
          </p>
        ))}
        {Array.from({ length: spacers }).map((_, i) => <span key={`ts${i}`} />)}
        {/* Row 2: dividers */}
        {section.cards.map((_, i) => (
          <hr key={`hr${i}`} className={`self-start border-t ${borderClass}`} />
        ))}
        {Array.from({ length: spacers }).map((_, i) => <span key={`hrs${i}`} />)}
        {/* Row 3: body text */}
        {section.cards.map((card, i) => (
          <p key={`b${i}`} className={`${fontClass} self-start pt-[16px] text-[13px] md:text-[15px] leading-[1.6] xl:text-[18px]`}>
            {card[lang].body}
          </p>
        ))}
        {Array.from({ length: spacers }).map((_, i) => <span key={`bs${i}`} />)}
      </div>
    </section>
  );
}

export default function ServiceContent() {
  const [lang, setLang] = useState<"jp" | "en">("jp");

  return (
    <>
      {/* Hero */}
      <section className="full-bleed relative aspect-[3/4] md:aspect-[16/9] min-[1911px]:aspect-[21/8] overflow-hidden">
        <Image
          src="/images/service/milan_landingimg.png"
          alt="Milano Salone"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-[15px] md:px-[40px] xl:px-[65px]">
          <h1 className="body-jp font-bold text-[32px] md:text-[42px] xl:text-[55px]">
            サービス内容
          </h1>

          <p className="body-en font-bold mt-[10px] text-[15px] md:text-[20px] xl:text-[25px]">
            Services
          </p>

          <p className="body-en mx-auto mt-[50px] max-w-[800px] text-[15px] leading-[1.6] md:text-[17px] xl:max-w-[1100px] xl:text-[22px]">
            As the leader of our international design team, we can provide
            comprehensive support in Japanese, from developing exhibition
            concepts to managing on-site events.
          </p>

          <p className="body-jp mt-[10px] max-w-[800px] text-[15px] leading-[1.6] md:text-[17px] xl:text-[22px]">
            インターナショナルデザインチームを率いる弊社は、日本語で展示内容コンセプト企画から現地イベント運営まで一貫したサポートをご提供できます。
          </p>
        </div>
      </section>

      {/* Language toggle */}
      <div className="flex justify-center gap-[10px] px-[15px] py-[30px] md:py-[40px]">
        <button
          type="button"
          onClick={() => setLang("en")}
          className={`rounded-[10px] border border-black px-[30px] py-[10px] text-[10px] font-bold tracking-wide transition-colors md:text-[12px] xl:text-[14px] ${
            lang === "en" ? "bg-black text-white" : "hover:bg-black hover:text-white!"
          }`}
        >
          EN
        </button>

        <button
          type="button"
          onClick={() => setLang("jp")}
          className={`rounded-[10px] border border-black px-[30px] py-[10px] text-[10px] font-bold tracking-wide transition-colors md:text-[12px] xl:text-[14px] ${
            lang === "jp" ? "bg-black text-white" : "hover:bg-black hover:text-white!"
          }`}
        >
          JP
        </button>
      </div>

      {/* Sections */}
      {serviceSections.map((section, i) => (
        <ServiceSectionBlock key={i} section={section} lang={lang} />
      ))}

      {/* Process */}
      <ProcessFlow lang={lang} />
    </>
  );
}
