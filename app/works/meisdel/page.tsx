import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "MEISDEL — Milano Salone",
  description: "DANSがサポートしたMEISDELのミラノサローネ出展。展示企画・空間設計・運営・PR＆マーケティングまで一貫してサポートした事例をご紹介します。出展の様子や成果を写真とともに掲載。",
  alternates: { canonical: `${SITE_URL}/works/meisdel` },
  openGraph: {
    title: "MEISDEL — Milano Salone | DANS",
    description: "DANSがサポートしたMEISDELのミラノサローネ出展。展示企画・空間設計・運営・PR＆マーケティングまで一貫してサポートした事例をご紹介します。出展の様子や成果を写真とともに掲載。",
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
  description: "DANSがサポートしたMEISDELのミラノサローネ出展。展示企画・空間設計・運営・PR＆マーケティングまで一貫してサポートした事例をご紹介します。出展の様子や成果を写真とともに掲載。",
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
        <h1 className="sr-only">MEISDEL — Milano Salone</h1>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[20px] text-[16px] leading-[1.4] md:text-[21px] xl:text-[23px]">
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
              <p className="body-en">
                MEISDEL is a bespoke luxury kitchen brand by Tanico Corporation, one of Japan&apos;s leading commercial kitchen equipment manufacturers.
                <br />
                Their participation in Salone del Mobile.Milano aimed to expand global recognition and strengthen their position in the international luxury market, where they unveiled their flagship kitchen, ANIMA 01.
              </p>
              <p className="mt-[10px]">
                Through DANS&apos;s exhibition design and integrated production — covering spatial design, PR, and marketing — the project drew significant attention from design professionals, architects, and media across Italy and beyond, generating extensive coverage in prestigious international design publications.
              </p>
              <p className="mt-[10px]">
                By showcasing exceptional Japanese craftsmanship alongside an original design philosophy, the exhibition successfully communicated MEISDEL&apos;s vision on one of the world&apos;s greatest design stages — making a significant contribution to establishing them as a globally recognized luxury kitchen brand.
              </p>
              <p className="body-jp mt-[20px] text-[15px] md:text-[20px] xl:text-[22px]">
                MEISDELは、業務用厨房機器有名メーカー・タニコーが展開するフルオーダーキッチンブランドである。
                <br />
                ミラノサローネ（ミラノデザインウィーク／フォーリサローネ）への出展は、世界市場におけるブランド認知の拡大とブランド価値の向上を目的として実施。展示では、ラグジュアリーキッチン「ANIMA 01」を発表した。
              </p>
              <p className="body-jp mt-[10px] text-[15px] md:text-[20px] xl:text-[22px]">
                DANSが手掛けた展示空間デザインと、展示設計からPR・マーケティングまでを一体化した戦略的なプロデュースにより、イタリア市場をはじめ、世界各国のデザイン関係者や主要メディアから高い評価と大きな注目を獲得。一流メディアにおける多数の記事露出を実現した。
              </p>
              <p className="body-jp mt-[10px] text-[15px] md:text-[20px] xl:text-[22px]">
                日本の職人技術に裏打ちされた高品質と、独創的なデザインが生み出す新たなライフスタイルの可能性を国際的なデザインの舞台で発信し、MEISDELのグローバルブランドイメージの確立に大きく貢献した。
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
