import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "DANSのプライバシーポリシー。",
  alternates: { canonical: "https://dans-milano.com/privacy" },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivacyContent from "./PrivacyContent";

export default function PrivacyPage() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 px-[10px] min-[1911px]:px-[65px] pt-[120px] pb-[60px]">
        <PrivacyContent />
      </main>
      <Footer />
    </div>
  );
}
