import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Milano Salone | DANS",
  description: "For any enquiries about Milano Salone, or just to say hello, get in touch with DANS.",
  alternates: { canonical: "https://dans-milano.com/contact" },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Background image — full page including footer */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/contact/shapelined-_JBKdviweXI-unsplash.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
      </div>

      <Header />

      {/* Content — outside <main> to avoid max-width:1920px centering from globals.css */}
      <div className="flex-1 px-[10px] min-[1911px]:px-[65px] pt-[210px] pb-[100px]">
          <div className="w-full flex flex-col min-[800px]:flex-row">

            {/* Left 50%: heading */}
            <div className="min-[800px]:w-1/2 min-[800px]:pr-[20px]">
              <h1
                className="leading-[1.1] tracking-[-0.02em]"
                style={{ fontSize: "clamp(38px, 5vw, 65px)" }}
              >
                Contact Us
              </h1>
            </div>

            {/* Right 50%: middle 25% + right 25% */}
            <div className="mt-[40px] min-[800px]:mt-0 min-[800px]:w-1/2 flex flex-col min-[800px]:grid min-[800px]:grid-cols-2 min-[800px]:gap-x-[20px]">

              {/* Middle 25% (= 50% of right half): English + Japanese texts */}
              <div>
                <p
                  className="leading-[1.3] tracking-[-0.02em]"
                  style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}
                >
                  For any enquiries about Milano Salone, or just to say hello, get in touch and contact us.
                </p>
                <p
                  className="mt-[20px] min-[800px]:mt-[20px] leading-[1.5] tracking-[-0.02em]"
                  style={{ fontSize: "clamp(19px, 2vw, 26px)" }}
                >
                  ミラノ・サローネに関するご相談やお問い合わせ等、お気軽にご連絡くださいませ。
                </p>
              </div>

              {/* Right 25% (= 50% of right half): contact info */}
              <div className="mt-[50px] min-[800px]:mt-0 ">
                <Link
                  href="mailto:info@dans.jp"
                  className="block leading-[1.2] tracking-[-0.02em] underline hover:opacity-50 transition-opacity"
                  style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}
                >
                  info@dans.jp
                </Link>

                <div className="mt-[20px] min-[800px]:mt-[20px]">
                  <p
                    className="leading-[1.2] tracking-[-0.02em] text-[#8B8B8B]"
                    style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}
                  >
                    Tokyo Office
                  </p>
                  <p
                    className="leading-[1.2] tracking-[-0.02em]"
                    style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}
                  >
                    +81 3 64349498
                  </p>
                </div>

                <div className="mt-[20px] min-[800px]:mt-[20px]">
                  <p
                    className="leading-[1.2] tracking-[-0.02em] text-[#8B8B8B]"
                    style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}
                  >
                    Milan Office
                  </p>
                  <p
                    className="leading-[1.2] tracking-[-0.02em]"
                    style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}
                  >
                    +39 02 36560702
                  </p>
                </div>
              </div>

            </div>
          </div>
      </div>

      <Footer />
    </div>
  );
}
