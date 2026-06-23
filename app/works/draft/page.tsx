import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "DRAFT — Milano Salone",
  description: "DANSがサポートしたDRAFTのミラノサローネ出展。展示企画・空間設計・運営・PR＆マーケティングを一貫してサポート。",
  alternates: { canonical: `${SITE_URL}/works/draft` },
  openGraph: {
    title: "DRAFT — Milano Salone | DANS",
    description: "DANSがサポートしたDRAFTのミラノサローネ出展。展示企画・空間設計・運営・PR＆マーケティングを一貫してサポート。",
    url: "/works/draft",
    images: [{ url: "/images/credits/drafts/DAFT_about_DRAFT_26_DSC01280_s_e.png", width: 1200, height: 630, alt: "DRAFT Milano Salone" }],
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Image from "next/image";

const base = "/images/credits/drafts";

const fullImages = [
  `${base}/DAFT_about_DRAFT_26_DSC01285_s_e.png`,
  `${base}/DAFT_about_DRAFT_26_DSC01275_s_e.png`,
  `${base}/DAFT_about_DRAFT_26_DSC01344_s_e.png`,
];

const pair2 = [
  `${base}/DAFT_about_DRAFT_26_DSC01347_s_e.png`,
  `${base}/DAFT_about_DRAFT_26_DSC01308_s_e.jpg`,
];


const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "DRAFT — Milano Salone",
  url: `${SITE_URL}/works/draft`,
  description: "DANSがサポートしたDRAFTのミラノサローネ出展。展示企画・空間設計・運営・PR＆マーケティングを一貫してサポート。",
  image: `${SITE_URL}/images/credits/drafts/DAFT_about_DRAFT_26_DSC01280_s_e.png`,
  creator: {
    "@type": "Organization",
    name: "DANS",
    url: SITE_URL,
  },
  client: {
    "@type": "Organization",
    name: "DRAFT",
  },
};

export default function DraftPage() {
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
            src={`${base}/DAFT_about_DRAFT_26_DSC01280_s_e.png`}
            alt="DRAFT — Milano Salone"
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
                <p>DRAFT</p>
              </div>
              <div className="mt-[20px] md:flex md:gap-[10px]">
                <p className="text-[#8B8B8B] md:w-[160px] xl:w-[200px] flex-shrink-0">Industry</p>
                <p>Furniture</p>
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
                DRAFT is a premium furniture brand developed by DRAFT Inc. Through its continuous participation in the Salone del Mobile.Milano, the brand has steadily strengthened its international presence and recognition within the global design community.
                In 2026, DAFT about DRAFT departed from Rho Fiera Milano, where it had exhibited for three consecutive years, and presented its work for the first time as part of the Fuorisalone program during Milan Design Week.
              </p>
              <p className="mt-[10px]">
                Installed within the auditorium of Teatro Gerolamo, a historic opera-style theater established in 1868 and located near Milan Cathedral, the exhibition featured a monumental 4.8-meter-tall chair. The piece was fabricated in Italy using advanced 3D-printing technology and finished with meticulously crafted faux-finishing techniques by the specialist scenic art team of Teatro alla Scala, one of Italy’s most renowned opera houses.
              </p>
                
              <p className="body-jp mt-[20px] text-[15px] md:text-[20px] xl:text-[22px]">
                DRAFT は DRAFT社の擁する新進気鋭の高級具ブランドであり、ミラノサローネには継続的に参加を続けながら、国際的な文脈におけるブランド認知を高めている。
                2026年度は、これまで3年に渡りミラノサローネ展示を行ったRho Fiera 会場を離れ、初めてフォーリサローネとして知られるミラノデザインウィーク場外展示を行った。
              </p>
              <p className="body-jp mt-[10px] text-[15px] md:text-[20px] xl:text-[22px]">
                大聖堂至近に位置する、1868年開館のオペラシアター型小劇場 ”Teatro Geroramo”の客席空間に設営された4.8メートルの巨大椅子は、イタリア国内にて３Dプリンティング技術を駆使して製作され、外装にはミラノ・スカラ座の専門美術チームによって丁寧な美術偽装塗装が施された。
              </p>
            </div>
          </div>
        </section>

        {/* DSC01334 — tall chair photo, show full image at natural height */}
        <section className="px-[10px] min-[1911px]:px-[65px]">
          <Image
            src={`${base}/DAFT_about_DRAFT_26_DSC01334_s_e.png`}
            alt="DRAFT chair — Milano Salone"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </section>

        {/* Full-width images */}
        <section className="px-[10px] min-[1911px]:px-[65px] mt-[10px] flex flex-col gap-[10px]">
          {fullImages.map((src) => (
            <div key={src} className="relative w-full aspect-[3/2]">
              <Image
                src={src}
                alt="DRAFT Milano Salone exhibition"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </section>

        {/* 2 layout grid */}
        <section className="px-[10px] min-[1911px]:px-[65px] mt-[10px]">
          <div className="grid grid-cols-2 gap-[10px]">
            {pair2.map((src) => (
              <div key={src} className="relative w-full aspect-[3/2]">
                <Image
                  src={src}
                  alt="DRAFT Milano Salone"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* DSC01312 — full width */}
        <section className="px-[10px] min-[1911px]:px-[65px] mt-[10px]">
          <div className="relative w-full aspect-[3/2]">
            <Image
              src={`${base}/DAFT_about_DRAFT_26_DSC01312_s_e.png`}
              alt="DRAFT Milano Salone"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* DSC01356 — full width */}
        <section className="px-[10px] min-[1911px]:px-[65px] mt-[10px] mb-[40px] md:mb-[60px] xl:mb-[80px]">
          <div className="relative w-full aspect-[3/2]">
            <Image
              src={`${base}/DAFT_about_DRAFT_26_DSC01356_s_e.jpg`}
              alt="DRAFT Milano Salone"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>

        <Nav nextSlug="meisdel" />
      </main>

      <Footer />
    </div>
  );
}
