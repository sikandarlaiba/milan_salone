import type { Metadata } from "next";
import Header from "@/components/Header";
import { SITE_URL } from "@/lib/site";

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "DANS",
  url: SITE_URL,
  description: "DANSは、ミラノサローネ・フォーリサローネへの出展を現場リサーチから展示企画・設計・運営・PR＆マーケティングまで一貫してサポートします。",
  inLanguage: ["ja", "en"],
};

export const metadata: Metadata = {
  title: "ミラノサローネ出展サポートサービス | DANS",
  description:
    "DANSは、ミラノサローネ・フォーリサローネへの出展を現場リサーチから展示企画・設計・運営・PR＆マーケティングまで一貫してサポートします。",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "DANS | ミラノサローネ出展サポートサービス",
    description:
      "DANSは、ミラノサローネ・フォーリサローネへの出展を現場リサーチから展示企画・設計・運営・PR＆マーケティングまで一貫してサポートします。",
    url: "/",
    images: [{ url: "/images/main/milan-landingimg.jpg", width: 1200, height: 630, alt: "DANS ミラノサローネ出展サポート" }],
  },
};
import Footer from "@/components/Footer";
import ServiceCircle from "@/components/ServiceCircle";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectsCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Header />

      <main className="relative pt-[65px] md:pt-[61px] xl:pt-[75px] flex-1">
        {/* Hero */}
        <section className="full-bleed relative aspect-[3/4] md:aspect-[16/9] min-[1911px]:aspect-[21/8] overflow-hidden">
          <Image
            src="/images/main/milan-landingimg.jpg"
            alt="Milano Duomo"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-80"
          />

          <div className="absolute inset-x-0 top-[40%] md:top-[40%] flex flex-col items-center text-center px-[15px] md:px-[40px] xl:px-[65px]">
            <h1 className="body-jp font-bold leading-[1.3] text-[32px] md:text-[50px] xl:text-[68px] min-[1911px]:text-[50px]">
              ミラノサローネ出展サポートサービス
            </h1>

            <p className="body-jp font-bold leading-[1.5] mt-[10px] text-[20px] md:text-[24px] xl:text-[32px] min-[1911px]:text-[28px]">
              東京とミラノに拠点を持つデザイン&ブランディング会社の DANS が、
              <br className="hidden md:block" />
              ミラノサローネへの出展をサポートします。
            </p>
          </div>
        </section>

        {/* Service */}
        <section className="overflow-x-hidden px-[15px] py-[100px] md:py-[80px] xl:py-[100px] min-[1911px]:px-[65px] text-center">
          <h2 className="body-jp font-bold text-[24px] md:text-[36px] xl:text-[48px]">
            サービス内容
          </h2>

          <p className="body-en font-bold mt-[10px] text-[18px] md:text-[20px] xl:text-[25px]">
            Services
          </p>

          <div className="mx-auto mt-[50px] max-w-[800px] text-[15px] leading-[1.6] md:text-[16px] xl:text-[18px]">
            <p className="body-en">
              As the leader of our international design team, we can provide
              comprehensive support in Japanese, from developing exhibition
              concepts to managing on-site events.
            </p>

            <p className="body-jp mt-[10px]">
              インターナショナルデザインチームを率いる弊社は、日本語で展示内容コンセプト企画から現地イベント運営まで一貫したサポートをご提供できます。
            </p>
          </div>

          <ServiceCircle />

          <Link
            href="/service"
            className="mt-[100px] md:mt-[150px] inline-block rounded-[10px] border border-black px-[30px] py-[10px] text-[10px] font-bold tracking-wide transition-colors hover:bg-black hover:text-white! md:text-[12px] xl:text-[14px]"
          >
            READ MORE
          </Link>
        </section>

        {/* Milano Salone */}
        <section className="full-bleed relative aspect-[3/4] md:aspect-[16/9] min-[1911px]:aspect-[21/8] overflow-hidden">
          <Image
            src="/images/main/milan_salon_img.png"
            alt="Piazza del Duomo"
            fill
            loading="eager"
            sizes="100vw"
            className="object-cover opacity-80%"
          />

          <div className="absolute inset-0 flex items-center justify-center px-[15px]">
            <div className="px-[30px] py-[30px] text-center md:px-[60px] md:py-[40px] ">
              <h2 className="body-jp font-bold text-[24px] md:text-[36px] xl:text-[48px]">
                サローネとは
              </h2>

              <p className="body-en font-bold mt-[10px] text-[18px] md:text-[20px] xl:text-[25px]">
                About MILANO SALONE
              </p>

              <div className="mx-auto mt-[50px] max-w-[600px] text-[15px] leading-[1.6] md:text-[16px] xl:text-[18px]">
                <p className="body-en">
                  The Milan Salone is the world&apos;s most famous design
                  trade fair.
                </p>

                <p className="body-jp mt-[10px]">
                  ミラノサローネは、世界で最も有名なデザインの見本市です。
                </p>
              </div>

              <Link
                href="/milansalone"
                className="mt-[100px] inline-block rounded-[10px] border border-black px-[30px] py-[10px] text-[10px] font-bold tracking-wide transition-colors hover:bg-black hover:text-white! md:text-[12px] xl:text-[14px]"
              >
                READ MORE
              </Link>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="px-[15px] py-[60px] md:py-[80px] xl:py-[100px] min-[1911px]:px-[65px]">
          <div className="text-center">
            <h2 className="body-jp font-bold text-[24px] md:text-[36px] xl:text-[48px]">
              実績
            </h2>

            <p className="body-en font-bold mt-[10px] text-[18px] md:text-[20px] xl:text-[25px]">
              Case Studies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[10px] gap-y-[20px] mt-[50px] md:mt-[50px]">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
