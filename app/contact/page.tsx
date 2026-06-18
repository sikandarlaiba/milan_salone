import Grid12 from "@/components/Grid12";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Background wrapper covers content + footer, but not header */}
      <div className="relative flex flex-col flex-1">
        {/* Full-bleed background image, breaks out of the 1920px max-width container */}
        <div className="absolute inset-0 left-1/2 w-screen -translate-x-1/2 -z-10">
          <Image
            src="/images/contact/shapelined-_JBKdviweXI-unsplash.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-20"
          />
        </div>

        <main className="relative pt-[70px] flex-1">
          {/* Contact intro */}
          <section className="px-[10px] pt-[50px] md:pt-[100px] xl:pt-[100px] min-[1911px]:px-[65px]">
            <Grid12 className="items-start md:grid-cols-12">
              <h1 className="col-span-4 md:col-span-3 min-[1911px]:col-span-2 text-[15px] leading-none md:text-[21px]">
                About DANS
              </h1>

              <div className="col-span-4 mt-[20px] md:col-start-5 md:col-span-8 md:mt-0 min-[1911px]:col-start-7 min-[1911px]:col-span-6 text-[15px] leading-[1.2] md:text-[20px] md:leading-[1.25]">
                <p>
                  We are a multidisciplinary studio, specialized in Business
                  Strategy, Design and Architecture.
                </p>

                <p className="mt-[10px] md:mt-[10px]">
                  DANS はデザインと建築、そして ビジネス戦略を統合する会社です。
                </p>
              </div>
            </Grid12>
          </section>

          <div className="px-[10px] mt-[20px] md:mt-[20px] min-[1911px]:px-[65px] min-[1911px]:mt-[20px]">
            <hr className="border-0 border-t border-black" />
          </div>

          {/* Business Enquiries */}
          <section className="px-[10px] pt-[20px] md:pt-[20px] min-[1911px]:px-[65px] min-[1911px]:pt-[20px]">
            <Grid12 className="items-start md:grid-cols-12">
              {/* Mobile: inline "Label: link" */}
              <p className="col-span-4 md:hidden text-[15px] leading-none">
                Business Enquiries:{" "}
                <a
                  href="mailto:info@dans.jp"
                  className="underline! hover:opacity-50 transition-opacity"
                >
                  info@dans.jp
                </a>
              </p>

              {/* Tablet/Desktop: separate columns */}
              <h2 className="hidden md:block md:col-span-3 min-[1911px]:col-span-2 text-[15px] leading-none font-normal md:text-[21px]">
                Business Enquiries
              </h2>

              <div className="hidden md:block md:col-start-5 md:col-span-8 min-[1911px]:col-start-7 min-[1911px]:col-span-6 text-[15px] leading-[1.2] md:text-[20px] md:leading-[1.25]">
                <a
                  href="mailto:info@dans.jp"
                  className="underline! hover:opacity-50 transition-opacity"
                >
                  info@dans.jp
                </a>
              </div>
            </Grid12>
          </section>

          <div className="px-[10px] mt-[20px] md:mt-[20px] min-[1911px]:px-[65px] min-[1911px]:mt-[20px]">
            <hr className="border-0 border-t border-black" />
          </div>

          {/* Contact Us */}
          <section className="px-[10px] pt-[20px] md:pt-[20px] min-[1911px]:px-[65px] min-[1911px]:pt-[20px]">
            <Grid12 className="items-start md:grid-cols-12">
              {/* Mobile: inline "Label: link" */}
              <p className="col-span-4 md:hidden text-[15px] leading-none">
                Contact Us:{" "}
                <a
                  href="mailto:info@dans.jp"
                  className="underline! hover:opacity-50 transition-opacity"
                >
                  info@dans.jp
                </a>
              </p>

              {/* Tablet/Desktop: separate columns */}
              <h2 className="hidden md:block md:col-span-3 min-[1911px]:col-span-2 text-[15px] leading-none font-normal md:text-[21px]">
                Contact Us
              </h2>

              <div className="hidden md:block md:col-start-5 md:col-span-8 min-[1911px]:col-start-7 min-[1911px]:col-span-6 text-[15px] leading-[1.2] md:text-[20px] md:leading-[1.25]">
                <a
                  href="mailto:info@dans.jp"
                  className="underline! hover:opacity-50 transition-opacity"
                >
                  info@dans.jp
                </a>
              </div>
            </Grid12>
          </section>

          <div className="px-[10px] mt-[20px] md:mt-[20px] min-[1911px]:px-[65px] min-[1911px]:mt-[20px]">
            <hr className="border-0 border-t border-black" />
          </div>

          {/* Jobs */}
          <section className="px-[10px] pt-[20px] md:pt-[20px] min-[1911px]:px-[65px] min-[1911px]:pt-[20px]">
            <Grid12 className="items-start md:grid-cols-12">
              <h2 className="col-span-4 min-[800px]:col-span-3 min-[1911px]:col-span-2 text-[15px] leading-none font-normal md:text-[21px]">
                Jobs
              </h2>

              <div className="col-span-4 mt-[20px] md:col-start-5 md:col-span-8 md:mt-0 min-[1911px]:col-start-7 min-[1911px]:col-span-6 text-[15px] leading-[1.2] md:text-[20px] md:leading-[1.25]">
                <p>
                  We&apos;re always looking for talent, please send us your
                  application (including CV/Portfolio) or questions to:
                </p>

                <a
                  href="mailto:info@dans.jp"
                  className="underline! hover:opacity-50 transition-opacity"
                >
                  info@dans.jp
                </a>
              </div>
            </Grid12>
          </section>

          <div className="px-[10px] pt-[20px] md:pt-[20px] xl:pt-[20px] min-[1911px]:px-[65px]">
            <hr className="border-0 border-t border-black" />
          </div>
        </main>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
