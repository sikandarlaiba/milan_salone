import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KO-GHEI — Milano Salone",
  description: "DANSがサポートしたKO-GHEIのミラノサローネ出展。展示企画・空間設計・運営・PR&マーケティングを一貫してサポート。",
  alternates: { canonical: "https://dans-milano.com/works/koghei" },
  openGraph: {
    title: "KO-GHEI — Milano Salone | DANS",
    description: "DANSがサポートしたKO-GHEIのミラノサローネ出展。展示企画・空間設計・運営・PR&マーケティングを一貫してサポート。",
    url: "/works/koghei",
    images: [{ url: "/images/credits/ko_ghei/kougei_img01.png", width: 1200, height: 630, alt: "KO-GHEI Milano Salone" }],
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Image from "next/image";

const base = "/images/credits/ko_ghei";

const fullImages = [
  `${base}/kougei_img02.png`,
  `${base}/kougei_img03.png`,
  `${base}/kougei_img04.JPG`,
  `${base}/kougei_img05.JPG`,
  `${base}/kougei_img06.JPG`,
];

const pairImagesA = [
  `${base}/kougei_img07_1.JPG`,
  `${base}/kougei_img07_2.JPG`,
];

const fullImages2 = [
  `${base}/kougei_img08.JPG`,
  `${base}/kougei_img09.png`,
  `${base}/kougei_img10.JPG`,
  `${base}/kougei_img11.png`,
];

const pairImagesB = [
  `${base}/kougei_img12_1.png`,
  `${base}/kougei_img12_2.png`,
];


const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "KO-GHEI — Milano Salone",
  url: "https://dans-milano.com/works/koghei",
  description: "DANSがサポートしたKO-GHEIのミラノサローネ出展。展示企画・空間設計・運営・PR＆マーケティングを一貫してサポート。",
  image: "https://dans-milano.com/images/credits/ko_ghei/kougei_img01.png",
  creator: {
    "@type": "Organization",
    name: "DANS",
    url: "https://dans-milano.com",
  },
  client: {
    "@type": "Organization",
    name: "ANA JAPAN",
  },
};

export default function KoGheiPage() {
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
            src={`${base}/kougei_img01.png`}
            alt="KO-GHEI — Milano Salone"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Project info + description */}
        <section className="px-[10px] pt-[40px] pb-[40px] md:pt-[60px] md:pb-[60px] xl:pt-[80px] xl:pb-[80px] min-[1911px]:px-[65px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[20px] text-[16px] leading-[1.4] md:text-[18px] xl:text-[20px]">
            <div>
              <div className="md:flex md:gap-[10px]">
                <p className="text-[#8B8B8B] md:w-[160px] xl:w-[200px] flex-shrink-0">Client</p>
                <p>ANA JAPAN</p>
              </div>
              <div className="mt-[20px] md:flex md:gap-[10px]">
                <p className="text-[#8B8B8B] md:w-[160px] xl:w-[200px] flex-shrink-0">Industry</p>
                <p>Airline</p>
              </div>
              <div className="mt-[20px] md:flex md:gap-[10px]">
                <p className="text-[#8B8B8B] md:w-[160px] xl:w-[200px] flex-shrink-0">Deliveries</p>
                <p>
                  Communication Strategy
                  <br />
                  PR
                  <br />
                  Storytelling &amp; Tone of Voice
                </p>
              </div>
            </div>

            <div>
              <p className="body-en">
                The Saintnine Tokyo embodies its brand philosophy, &ldquo;Play
                with Soul,&rdquo; pursuing a unique approach that fuses
                intelligence and emotion within the world of sports. From
                spatial design to the creation of a comprehensive brand
                identity — including the logo — the project achieved total
                branding integration. Every element that shapes the golfing
                experience, such as carts, tee markers, and course maps, was
                meticulously designed to infuse the brand&apos;s worldview
                throughout the entire space.
              </p>
              <p className="body-jp mt-[20px]">
                The Saintnine Tokyoは、「Play with Soul」というブランドフィロソフィーのもと、スポーツに知性と感性を融合させる独自のアプローチを追求。空間設計からロゴを含むブランド・アイデンティティ構築まで一貫して手がけたトータルブランディングを実現したプロジェクト。カートやティーマーカー、コースマップなど構成するすべての要素をデザインし、ブランドの世界観を空間全体に浸透させた。
              </p>
            </div>
          </div>
        </section>

        {/* Full-width images */}
        <section className="px-[10px] min-[1911px]:px-[65px] flex flex-col gap-[10px]">
          {fullImages.map((src) => (
            <div key={src} className="relative w-full aspect-[3/2]">
              <Image
                src={src}
                alt="KO-GHEI exhibition"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}

          {/* Pair A */}
          <div className="grid grid-cols-2 gap-[10px]">
            {pairImagesA.map((src) => (
              <div key={src} className="relative w-full aspect-[3/4]">
                <Image
                  src={src}
                  alt="KO-GHEI exhibition detail"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {fullImages2.map((src) => (
            <div key={src} className="relative w-full aspect-[3/2]">
              <Image
                src={src}
                alt="KO-GHEI exhibition"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}

          {/* Pair B */}
          <div className="grid grid-cols-2 gap-[10px] mb-[40px] md:mb-[60px] xl:mb-[80px]">
            {pairImagesB.map((src) => (
              <div key={src} className="relative w-full aspect-[3/2]">
                <Image
                  src={src}
                  alt="KO-GHEI exhibition detail"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <Nav nextSlug="draft" />
      </main>

      <Footer />
    </div>
  );
}
