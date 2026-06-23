import type { Metadata } from "next";
import Header from "@/components/Header";
import { SITE_URL } from "@/lib/site";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ミラノサローネ出展サポートサービス",
  provider: {
    "@type": "Organization",
    name: "DANS",
    url: SITE_URL,
  },
  serviceType: "展示会出展サポート",
  areaServed: ["JP", "IT"],
  description:
    "事前リサーチ・展示スペース選定・イベント企画・デザイン・製作施工・PR＆マーケティング・運営管理まで、ミラノサローネ出展に必要な全工程をワンストップで対応します。",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "サービスメニュー",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "事前リサーチ" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "展示スペース選定" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "イベント企画立案" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "デザインと設計" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "製作・施工及び監理" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "PR＆マーケティング" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "イベントの運営" } },
    ],
  },
};

export const metadata: Metadata = {
  title: "サービス内容",
  description:
    "DANSのミラノサローネ出展サポートサービス詳細。事前リサーチ・展示スペース選定・イベント企画・デザイン・製作施工・PR＆マーケティング・運営管理まで、出展に必要な全工程をワンストップで対応します。",
  alternates: {
    canonical: `${SITE_URL}/service`,
  },
  openGraph: {
    title: "サービス内容 | DANS",
    description:
      "DANSのミラノサローネ出展サポートサービス詳細。事前リサーチ・展示スペース選定・イベント企画・デザイン・製作施工・PR＆マーケティング・運営管理まで、出展に必要な全工程をワンストップで対応します。",
    url: "/service",
    images: [{ url: "/images/main/milan-landingimg.jpg", width: 1200, height: 630, alt: "DANSサービス内容" }],
  },
};
import Footer from "@/components/Footer";
import ServiceContent from "@/components/ServiceContent";

export default function ServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />

      <main className="relative pt-[65px] md:pt-[61px] xl:pt-[75px] flex-1">
        <ServiceContent />
      </main>

      <Footer />
    </div>
  );
}
