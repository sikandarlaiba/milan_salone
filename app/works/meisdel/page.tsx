import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "MEISDEL — Milano Salone",
  description: "DANSがサポートしたMEISDELのミラノサローネ出展。展示企画・空間設計・運営・PR＆マーケティングを一貫してサポート。",
  alternates: { canonical: `${SITE_URL}/works/meisdel` },
  openGraph: {
    title: "MEISDEL — Milano Salone | DANS",
    description: "DANSがサポートしたMEISDELのミラノサローネ出展。展示企画・空間設計・運営・PR＆マーケティングを一貫してサポート。",
    url: "/works/meisdel",
    images: [{ url: "/images/credits/meisdel/MEIS_MITSUI_2.JPG", width: 1200, height: 630, alt: "MEISDEL Milano Salone" }],
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Image from "next/image";
import PressCarousel from "@/components/PressCarousel";

const base = "/images/credits/meisdel";


const pair2A = [
  `${base}/misdel_side.JPG`,
  `${base}/MEISDEL_IMG_9614_e.png`,
];




const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "MEISDEL — Milano Salone",
  url: `${SITE_URL}/works/meisdel`,
  description: "DANSがサポートしたMEISDELのミラノサローネ出展。展示企画・空間設計・運営・PR＆マーケティングを一貫してサポート。",
  image: `${SITE_URL}/images/credits/meisdel/MEIS_MITSUI_2.JPG`,
  creator: {
    "@type": "Organization",
    name: "DANS",
    url: SITE_URL,
  },
  client: {
    "@type": "Organization",
    name: "MEISDEL",
  },
};

export default function MeisdelPage() {
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
            src={`${base}/MEISDEL_Image_lwm6qylwm6qylwm6.png`}
            alt="TOYOTA Setsuna — Milano Salone"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Project info + description */}
        <section className="px-[10px] pt-[40px] pb-[40px] md:pt-[40px] md:pb-[40px] xl:pt-[50px] xl:pb-[50px] min-[1911px]:px-[65px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[20px] text-[16px] leading-[1.4] md:text-[18px] xl:text-[20px]">
            <div>
              <div className="md:flex md:gap-[10px]">
                <p className="text-[#8B8B8B] md:w-[160px] xl:w-[200px] flex-shrink-0">Client</p>
                <p>MEISDEL</p>
              </div>
              <div className="mt-[20px] md:flex md:gap-[10px]">
                <p className="text-[#8B8B8B] md:w-[160px] xl:w-[200px] flex-shrink-0">Industry</p>
                <p>Kitchen / Design</p>
              </div>
              <div className="mt-[20px] md:flex md:gap-[10px]">
                <p className="text-[#8B8B8B] md:w-[160px] xl:w-[200px] flex-shrink-0">Deliveries</p>
                <p>
                  Communication Strategy
                  <br />
                  PR
                </p>
              </div>
            </div>
            <div>
              <p>
                The Saintnine Tokyo embodies its brand philosophy, “Play with Soul,” pursuing a unique approach that fuses intelligence and emotion within the world of sports. From spatial design to the creation of a comprehensive brand identity — including the logo — the project achieved total branding integration.Every element that shapes the golfing experience, such as carts, tee markers, and course maps, was meticulously designed to infuse the brand’s worldview throughout the entire space.
              </p>
              <p className="mt-[20px]">
                The Saintnine Tokyoは、「Play with Soul」というブランドフィロソフィーのもと、スポーツに知性と感性を融合させる独自のアプローチを追求。空間設計からロゴを含むブランド・アイデンティティ構築までを一貫して手がけ、トータルブランディングを実現したプロジェクト。カートやティーマーク、コースマップなど、ゴルフ体験を構成するすべての要素をデザインし、ブランドの世界観を空間全体に浸透させた。
              </p>
            </div>
          </div>
        </section>

        {/* Setsuna-33 — full width */}
        <section className="px-[10px] min-[1911px]:px-[65px] mt-[10px] min-[1911px]:mt-[10px]">
          <div className="relative w-full aspect-[3/2]">
            <Image
              src={`${base}/MEISDEL_Image05_04_33.png`}
              alt="MEISDEL FRONT KITCHEN"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* 2 images side by side — pair A */}
        <section className="px-[10px] min-[1911px]:px-[65px] mt-[10px] min-[1911px]:mt-[10px]">
          <div className="grid grid-cols-2 gap-[10px]">
            {pair2A.map((src) => (
              <div key={src} className="relative w-full aspect-[4/3]">
                <Image
                  src={src}
                  alt="MEISDEL Kitchen detail"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>


        {/* kitchen_img — full width */}
        <section className="px-[10px] min-[1911px]:px-[65px] mt-[10px] min-[1911px]:mt-[10px]">
          <div className="relative w-full aspect-[3/2]">
            <Image
              src={`${base}/MEISDEL_front_kitchenimg.png`}
              alt="MEISDEL kitchen Milano Salone"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* Poople — full width */}
        <section className="px-[10px] min-[1911px]:px-[65px] mt-[10px] min-[1911px]:mt-[10px]">
          <div className="relative w-full aspect-[3/2]">
            <Image
              src={`${base}/MEISDEL_IMG_9616_ppl motionblur.png`}
              alt="Misdel salone"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>

        <PressCarousel />

        <Nav nextSlug="toyota" />
      </main>

      <Footer />
    </div>
  );
}
