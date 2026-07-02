import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ページが見つかりません",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-[10px] pt-[120px] pb-[80px] text-center">
        <h1 className="text-[28px] font-bold md:text-[36px]">404</h1>
        <p className="mt-[16px] text-[15px] md:text-[18px]">
          お探しのページが見つかりませんでした。
        </p>
        <Link
          href="/"
          className="mt-[30px] inline-block underline hover:opacity-50 transition-opacity"
        >
          トップページへ戻る
        </Link>
      </main>
      <Footer />
    </div>
  );
}
