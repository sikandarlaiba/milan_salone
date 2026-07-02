import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const noto = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DANS | ミラノサローネ出展サポート",
    template: "%s | DANS",
  },
  description:
    "DANSは、ミラノサローネ・フォーリサローネへの出展を現場リサーチから展示企画・設計・運営・PR＆マーケティングまで一貫してサポートします。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "DANS",
    title: "DANS | ミラノサローネ出展サポート",
    description:
      "DANSは、ミラノサローネ・フォーリサローネへの出展を現場リサーチから展示企画・設計・運営・PR＆マーケティングまで一貫してサポートします。",
    images: [
      {
        url: "/images/main/milan-landingimg.jpg",
        width: 1200,
        height: 630,
        alt: "DANS ミラノサローネ出展サポート",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DANS | ミラノサローネ出展サポート",
    description:
      "DANSは、ミラノサローネ・フォーリサローネへの出展を現場リサーチから展示企画・設計・運営・PR＆マーケティングまで一貫してサポートします。",
    images: ["/images/main/milan-landingimg.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DANS",
  url: siteUrl,
  logo: `${siteUrl}/images/logo/DANS_logo_800x800px copy.png`,
  description:
    "ミラノサローネ・フォーリサローネへの出展を現場リサーチから展示企画・設計・運営・PR＆マーケティングまで一貫してサポートするエージェンシー。",
  areaServed: ["JP", "IT"],
  serviceType: "ミラノサローネ出展サポート",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${noto.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
