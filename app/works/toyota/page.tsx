import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "TOYOTA Setsuna — Milano Salone",
  description: "DANSがプロデュースしたTOYOTA Setsunaのミラノサローネ出展。展示企画・空間設計・運営・PR＆マーケティングを一貫してサポート。",
  alternates: { canonical: `${SITE_URL}/works/toyota` },
  openGraph: {
    title: "TOYOTA Setsuna — Milano Salone | DANS",
    description: "DANSがプロデュースしたTOYOTA Setsunaのミラノサローネ出展。展示企画・空間設計・運営・PR＆マーケティングを一貫してサポート。",
    url: "/works/toyota",
    images: [{ url: "/images/credits/toyota/TOYOTA-SALONE_Setsuna-1.jpg", width: 1200, height: 630, alt: "TOYOTA Setsuna Milano Salone" }],
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Image from "next/image";

const base = "/images/credits/toyota";
const progressBase = "/images/credits/toyota/progress";

const grid4A = [
  `${base}/TOYOTA-SALONE_Setsuna-3.jpg`,
  `${base}/TOYOTA-SALONE_Setsuna-5.jpg`,
  `${base}/TOYOTA-SALONE_Setsuna-4.jpg`,
  `${base}/TOYOTA-SALONE_Setsuna-2.jpg`,
];

const pair2A = [
  `${base}/TOYOTA-SALONE_Setsuna-7.jpg`,
  `${base}/TOYOTA-SALONE_Setsuna-10.jpg`,
];

const pair2B = [
  `${base}/TOYOTA-SALONE_Setsuna-39.jpg`,
  `${base}/TOYOTA-SALONE_Setsuna-41.jpg`,
];

const pair2C = [
  `${base}/TOYOTA-SALONE_Setsuna-44.JPG`,
  `${base}/TOYOTA-SALONE_Setsuna-47.JPG`,
];

const grid4B = [
  `${base}/TOYOTA-SALONE_Setsuna-44.JPG`,
  `${base}/TOYOTA-SALONE_Setsuna-46.JPG`,
  `${base}/TOYOTA-SALONE_Setsuna-50.jpg`,
  `${base}/TOYOTA-SALONE_Setsuna-47.JPG`,
];

// 4 columns × 6 rows, ordered column-first: face → star → flower → fire (top to bottom each)
// faces: 13-18, stars: 19-24, flowers: 25-30, candles: 31-36
const faces   = [13,14,15,16,17,18].map((n) => `${progressBase}/TOYOTA-SALONE_Setsuna-${n}.png`);
const stars   = [
  `${progressBase}/TOYOTA-SALONE_Setsuna-19.png`,
  `${progressBase}/TOYOTA-SALONE_Setsuna-20.jpg`,
  `${progressBase}/TOYOTA-SALONE_Setsuna-21.png`,
  `${progressBase}/TOYOTA-SALONE_Setsuna-22.png`,
  `${progressBase}/TOYOTA-SALONE_Setsuna-23.png`,
  `${progressBase}/TOYOTA-SALONE_Setsuna-24.png`,
];
const flowers = [25,26,27,28,29,30].map((n) => `${progressBase}/TOYOTA-SALONE_Setsuna-${n}.png`);
const candles = [31,32,33,34,35,36].map((n) => `${progressBase}/TOYOTA-SALONE_Setsuna-${n}.png`);

// Interleave: row1=[face1,star1,flower1,candle1], row2=…
const progressGrid = Array.from({ length: 6 }, (_, row) => [
  faces[row],
  stars[row],
  flowers[row],
  candles[row] ?? "",
]).flat().filter(Boolean);


const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "TOYOTA Setsuna — Milano Salone",
  url: `${SITE_URL}/works/toyota`,
  description: "DANSがプロデュースしたTOYOTA Setsunaのミラノサローネ出展。展示企画・空間設計・運営・PR＆マーケティングを一貫してサポート。",
  image: `${SITE_URL}/images/credits/toyota/TOYOTA-SALONE_Setsuna-1.jpg`,
  creator: {
    "@type": "Organization",
    name: "DANS",
    url: SITE_URL,
  },
  client: {
    "@type": "Organization",
    name: "TOYOTA",
  },
};

export default function ToyotaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      <main className="relative flex-1">
        {/* Hero — full screen */}
        <div className="relative left-1/2 w-screen -translate-x-1/2 aspect-[3/2] md:aspect-auto md:h-screen">
          <Image
            src={`${base}/TOYOTA-SALONE_Setsuna-1.jpg`}
            alt="TOYOTA Setsuna — Milano Salone"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Project info + description */}
        <section className="px-[10px] pt-[40px] pb-[40px] md:pt-[40px] md:pb-[40px] xl:pt-[50px] xl:pb-[50px] min-[1911px]:px-[65px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[20px] text-[16px] leading-[1.4] md:text-[21px] xl:text-[23px]">
            <div>
              <div className="md:flex md:gap-[10px]">
                <p className="text-[#8B8B8B] md:w-[160px] xl:w-[200px] flex-shrink-0">Client</p>
                <p>TOYOTA</p>
              </div>
              <div className="mt-[20px] md:flex md:gap-[10px]">
                <p className="text-[#8B8B8B] md:w-[160px] xl:w-[200px] flex-shrink-0">Industry</p>
                <p>Automotive</p>
              </div>
              <div className="mt-[20px] md:flex md:gap-[10px]">
                <p className="text-[#8B8B8B] md:w-[160px] xl:w-[200px] flex-shrink-0">Deliveries</p>
                <p>
                  Communication Strategy
                  <br />
                  Storytelling &amp; Tone of Voice
                  <br />
                  UX &amp; UI Design
                  <br />
                  Visual Design
                </p>
              </div>
            </div>
            <div>
              <p>
                In an era where automobiles have become highly industrialised products, Toyota sought to revisit the original spirit of mobility — a vehicle&apos;s ability to connect families and strengthen emotional bonds. To share this philosophy with the world, Toyota chose to exhibit at Milan Design Week (Salone del Mobile) — an event known as the pinnacle of human design. With automotive experience as a producer at the event, DANS was commissioned to work on Setsuna, responsible for all aspects of planning, production, and management, except for the wooden show car that had already been developed by Toyota.
              </p>
              <p className="mt-[20px] text-[15px] md:text-[20px] xl:text-[22px]">
                クルマが高度に工業化された時代に、トヨタは移動の本来の精神、つまり家族をつなぎ感情的な絆を育むクルマの本質に立ち戻ることを目指しました。このフィロソフィーを世界と共有するため、トヨタはデザインの頂点として知られるミラノデザインウィーク（サローネ・デル・モービレ）への出展を選択しました。イベントのプロデューサーとしての自動車業界での経験を活かし、DANSは「Setsuna」を担当。木製のショーカーはすでにトヨタが開発していたものを除き、企画・製作・管理に至るすべての工程を担いました。
              </p>
            </div>
          </div>
        </section>

        {/* 4 images — 2×2 grid, set A */}
        <section className="px-[10px] min-[1911px]:px-[65px] mt-[20px] md:mt-[40px] min-[1911px]:mt-[40px]">
          <div className="grid grid-cols-2 gap-[10px] min-[1911px]:gap-[10px]">
            {grid4A.map((src) => (
              <div key={src} className="relative w-full aspect-[3/2]">
                <Image
                  src={src}
                  alt="TOYOTA Setsuna Milano Salone exhibition"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Video */}
        <section className="px-[10px] min-[1911px]:px-[65px] mt-[10px] min-[1911px]:mt-[10px]">
          <div className="relative w-full aspect-[16/9]">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={`${base}/toyota_media_motion.mp4`} type="video/mp4" />
            </video>
          </div>
        </section>

        {/* Setsuna-43 — full width */}
        <section className="px-[10px] min-[1911px]:px-[65px] mt-[10px] min-[1911px]:mt-[10px]">
          <div className="relative w-full aspect-[3/2]">
            <Image
              src={`${base}/TOYOTA-SALONE_Setsuna-43.jpg`}
              alt="TOYOTA Setsuna Milano Salone"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* 2 images side by side — pair A */}
        <section className="px-[10px] min-[1911px]:px-[65px] mt-[10px] min-[1911px]:mt-[10px]">
          <div className="grid grid-cols-2 gap-[10px] min-[1911px]:gap-[10px]">
            {pair2A.map((src) => (
              <div key={src} className="relative w-full aspect-[3/2]">
                <Image
                  src={src}
                  alt="TOYOTA Setsuna detail"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Setsuna-9 — full width */}
        <section className="px-[10px] min-[1911px]:px-[65px] mt-[10px] min-[1911px]:mt-[10px]">
          <div className="relative w-full aspect-[3/2]">
            <Image
              src={`${base}/TOYOTA-SALONE_Setsuna-9.JPG`}
              alt="TOYOTA Setsuna Milano Salone"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* 2 images side by side — pair B */}
        <section className="px-[10px] min-[1911px]:px-[65px] mt-[10px] min-[1911px]:mt-[10px]">
          <div className="grid grid-cols-2 gap-[10px] min-[1911px]:gap-[20px]">
            {pair2B.map((src) => (
              <div key={src} className="relative w-full aspect-[3/2]">
                <Image
                  src={src}
                  alt="TOYOTA Setsuna Milano Salone"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Progress — tall left image + 4×6 grid */}
        <section className="px-[10px] min-[1911px]:px-[65px] mt-[10px] min-[1911px]:mt-[10px]">
          <div className="flex gap-[10px] min-[1911px]:gap-[10px]">
            {/* Tall left image */}
            <div className="relative flex-shrink-0 w-[25%]">
              <Image
                src={`${progressBase}/TOYOTA-SALONE_Setsuna-12.jpg`}
                alt="TOYOTA Setsuna — The Passing of Time"
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
            {/* 4×6 grid */}
            <div className="flex-1 grid grid-cols-4 gap-[10px] min-[1911px]:gap-[10px]">
              {progressGrid.map((src) => (
                <div key={src} className="relative w-full aspect-square">
                  <Image
                    src={src}
                    alt="TOYOTA Setsuna design process"
                    fill
                    sizes="19vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2 images side by side — pair C */}
        <section className="px-[10px] min-[1911px]:px-[65px] mt-[10px] min-[1911px]:mt-[10px]">
          <div className="grid grid-cols-2 gap-[10px] min-[1911px]:gap-[10px]">
            {pair2B.map((src) => (
              <div key={src} className="relative w-full aspect-[3/2]">
                <Image
                  src={src}
                  alt="TOYOTA Setsuna Milano Salone"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Rectangle72 — full width */}
        <section className="px-[10px] min-[1911px]:px-[65px] mt-[10px] min-[1911px]:mt-[10px]">
          <div className="relative w-full aspect-[3/2]">
            <Image
              src={`${base}/Rectangle 72.jpg`}
              alt="TOYOTA Setsuna"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* Setsuna-40 — full width */}
        <section className="px-[10px] min-[1911px]:px-[65px] mt-[10px] min-[1911px]:mt-[10px]">
          <div className="relative w-full aspect-[3/2]">
            <Image
              src={`${base}/TOYOTA-SALONE_Setsuna-40.jpg`}
              alt="TOYOTA Setsuna Milano Salone"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* 4 images — 2×2 grid, set B */}
        <section className="px-[10px] min-[1911px]:px-[65px] mt-[10px] min-[1911px]:mt-[10px]">
          <div className="grid grid-cols-2 gap-[10px] min-[1911px]:gap-[10px]">
            {grid4B.map((src) => (
              <div key={src} className="relative w-full aspect-[3/2]">
                <Image
                  src={src}
                  alt="TOYOTA Setsuna Milano Salone"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <Nav nextSlug="koghei" />
      </main>

      <Footer />
    </div>
  );
}
