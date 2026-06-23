import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "クライアント実績",
  description: "DANSがミラノサローネ出展をサポートしたクライアント一覧。トヨタ・ダイキンをはじめ、多数の日本企業の出展をプロデュースしてきました。",
  alternates: { canonical: `${SITE_URL}/clients` },
  openGraph: {
    title: "クライアント実績 | DANS",
    description: "DANSがミラノサローネ出展をサポートしたクライアント一覧。トヨタ・ダイキンをはじめ、多数の日本企業の出展をプロデュースしてきました。",
    url: "/clients",
    images: [{ url: "/images/main/milan-landingimg.jpg", width: 1200, height: 630, alt: "DANS クライアント実績" }],
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ClientsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="relative pt-[65px] md:pt-[61px] xl:pt-[75px] flex-1">
        <section className="px-[10px] py-[40px] md:py-[60px] xl:py-[80px] min-[1911px]:px-[65px]">
          {/* Desktop / Tablet */}
          <div className="hidden md:block">
            <Image
              src="/images/clients/dans CLIENTS_1.jpg"
              alt="Our clients"
              width={3457}
              height={2161}
              sizes="100vw"
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <Image
              src="/images/clients/dans CLIENTS-02.jpg"
              alt="Our clients"
              width={1562}
              height={5106}
              sizes="100vw"
              className="w-full h-auto"
              priority
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
