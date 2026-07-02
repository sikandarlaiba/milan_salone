import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "KO-GHEI — Milano Salone",
  description: "DANSがサポートしたKO-GHEIのミラノサローネ出展。展示企画・空間設計・運営・PR＆マーケティングまで一貫してサポートした事例をご紹介します。出展の様子や成果を写真とともに掲載。",
  alternates: { canonical: `${SITE_URL}/works/koghei` },
  openGraph: {
    title: "KO-GHEI — Milano Salone | DANS",
    description: "DANSがサポートしたKO-GHEIのミラノサローネ出展。展示企画・空間設計・運営・PR＆マーケティングまで一貫してサポートした事例をご紹介します。出展の様子や成果を写真とともに掲載。",
    url: "/works/koghei",
    images: [{ url: "/images/credits/ko_ghei/kougei_img01.png", width: 1200, height: 630, alt: "KO-GHEI Milano Salone" }],
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Image from "next/image";

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "KO-GHEI — Milano Salone",
  url: `${SITE_URL}/works/koghei`,
  description: "DANSがサポートしたKO-GHEIのミラノサローネ出展。展示企画・空間設計・運営・PR＆マーケティングを一貫してサポート。",
  image: `${SITE_URL}/images/credits/ko_ghei/kougei_img01.png`,
  creator: { "@type": "Organization", name: "DANS", url: SITE_URL },
  client: { "@type": "Organization", name: "KO-GHEI" },
};

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


export default function KoGheiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      <main className="relative flex-1">
        <h1 className="sr-only">KO-GHEI — Milano Salone</h1>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[20px] text-[16px] leading-[1.4] md:text-[21px] xl:text-[23px]">
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
                KO=GHEI is a national initiative by the Government of Japan dedicated to showcasing Japanese craftsmanship on the global stage. By blending traditional craft with contemporary design, it redefines craftsmanship as a living cultural expression — creating new international markets and elevating the value of Japanese culture worldwide.
              </p>
              <p className="mt-[10px]">
                At the ADI Design Museum in Milan, DANS led the exhibition planning, spatial design, and PR and marketing for &ldquo;KO=GHEI: The Intersection of Rationality and Emotion.&rdquo; Bringing together Living National Treasures, renowned artisans, and leading Japanese companies, the exhibition presented the depth and creative innovation of Japanese craft to an international audience.
              </p>
              <p className="mt-[10px]">
                Through cohesive exhibition design and strategic branding, the project drew widespread attention from design professionals and global media, earning coverage in major international publications. By opening up new lifestyle possibilities on one of the world&apos;s greatest design stages, the exhibition helped establish KO=GHEI as a globally recognized cultural brand.
              </p>
              <p className="body-jp mt-[20px] text-[15px] md:text-[20px] xl:text-[22px]">
                KO＝GHEIは、日本政府および内閣府の主導のもと、日本各地に受け継がれる伝統工芸と現代デザインを融合し、日本のものづくり文化を世界へ発信する国家プロジェクトである。工芸を単なる伝統技術としてではなく、現代のライフスタイルや価値観と結び付けた新たな文化として再定義し、日本文化の国際的な価値向上と市場創出を目指す。
              </p>
              <p className="body-jp mt-[10px] text-[15px] md:text-[20px] xl:text-[22px]">
                イタリア・ミラノのADI Design Museumにおいて開催された「KO＝GHEI 工＝藝 理性と感情の交点」において、DANSは展示企画・総合プロデュースをはじめ、展示ディレクション、空間デザイン、PR・マーケティング戦略までを一貫して統括。日本全国から伝統工芸ブランド、人間国宝をはじめとする著名作家、企業を集結させ、日本の工芸が有する高度な技術力、美意識、創造性を世界へ向けて発信した。
              </p>
              <p className="body-jp mt-[10px] text-[15px] md:text-[20px] xl:text-[22px]">
                展示空間デザインと一体化した戦略的なブランディングおよび広報活動により、イタリアをはじめ世界各国のデザイン関係者や主要メディアから高い評価と大きな注目を獲得、一流メディアにおける多数の記事露出を実現した。さらに、日本の伝統工芸を現代デザインの文脈で再編集し、国際的なデザインの舞台において新たなライフスタイルの可能性を提示。日本の工芸文化の国際的な認知向上と市場価値の創出を推進し、KO＝GHEIのグローバルブランドイメージの確立に大きく貢献した。
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
