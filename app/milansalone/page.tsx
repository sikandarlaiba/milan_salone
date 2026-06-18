import type { Metadata } from "next";
import Header from "@/components/Header";

const milansaloneSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "ミラノサローネとは | DANS",
  url: "https://dans-milano.com/milansalone",
  description:
    "ミラノサローネ（Salone del Mobile.Milano）とフォーリサローネについて解説。世界最大のデザイン見本市の規模・来場者数・メディア注目度と、DANSによる出展サポートをご紹介します。",
  inLanguage: ["ja", "en"],
  about: {
    "@type": "Event",
    name: "Salone del Mobile.Milano",
    alternateName: ["ミラノサローネ", "Milano Salone", "Fuorisalone", "フォーリサローネ"],
    location: {
      "@type": "Place",
      name: "Fiera Milano",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rho",
        addressRegion: "Milan",
        addressCountry: "IT",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Federlegno Arredo Evento",
    },
  },
};

export const metadata: Metadata = {
  title: "ミラノサローネとは",
  description:
    "ミラノサローネ（Salone del Mobile.Milano）とフォーリサローネについて解説。世界最大のデザイン見本市の規模・来場者数・メディア注目度と、DANSによる出展サポートをご紹介します。",
  alternates: {
    canonical: "https://dans-milano.com/milansalone",
  },
  openGraph: {
    title: "ミラノサローネとは | DANS",
    description:
      "ミラノサローネ（Salone del Mobile.Milano）とフォーリサローネについて解説。世界最大のデザイン見本市の規模・来場者数・メディア注目度と、DANSによる出展サポートをご紹介します。",
    url: "/milansalone",
    images: [{ url: "/images/milansalone/milano_img004.jpg", width: 1200, height: 630, alt: "ミラノサローネ Milano Salone" }],
  },
};
import Footer from "@/components/Footer";
import Image from "next/image";

const base = "/images/milansalone";
const barData = [
  { label: "ミラノサローネ\n&フォーリサローネ", en: "Milano Salone\n& Fuorisalone", value: 100, display: "100万人" },
  { label: "ミラノサローネ", en: "Milano Salone", value: 43, display: "43万人" },
  { label: "ケルン・メッセ", en: "Cologne Messe", value: 12, display: "12万人" },
  { label: "メゾン・エ・オブジェ", en: "Maison et Objet", value: 8.5, display: "8.5万人" },
];

export default function MilanoSalonePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(milansaloneSchema) }}
      />
      <main className="relative flex-1">
        {/* Hero — full-bleed at all sizes */}
        <div className="relative left-1/2 w-screen -translate-x-1/2 aspect-[3/4] md:aspect-[16/9] min-[1911px]:aspect-auto min-[1911px]:h-screen">
          <Image
            src={`${base}/milano_img004.jpg`}
            alt="Milano Salone"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 top-[40%] flex flex-col items-center text-center text-white px-[15px] md:px-[40px] xl:px-[65px]">
            <h1 className="body-jp font-bold leading-[1.3] text-[24px] md:text-[28px] xl:text-[30px] min-[1911px]:text-[24px]">
              ミラノサローネ
            </h1>
            <p className="body-en font-bold leading-[1.3] mt-[10px] text-[32px] md:text-[48px] xl:text-[72px] min-[1911px]:text-[54px]">
              MILANO SALONE
            </p>
            <p className="body-en mt-[50px] text-[18px] md:text-[20px] xl:text-[24px]">
              The world&apos;s most famous design trade fair.
            </p>
            <p className="body-jp mt-[6px] text-[18px] md:text-[20px] xl:text-[24px]">
              世界で最も有名なデザインの見本市
            </p>
          </div>
        </div>

        {/* Section 1 — サローネ・デル・モービレ・ミラノ */}
        <section className="px-[10px] pt-[40px] pb-[40px] md:pt-[60px] md:pb-[60px] xl:pt-[80px] xl:pb-[80px] min-[1911px]:px-[65px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[20px]">
            <div>
              <h2 className="body-jp font-bold text-[20px] md:text-[28px] xl:text-[32px] leading-[1.4] min-[1920px]:text-[30px]">
                サローネ・デル・モービレ・ミラノ
              </h2>
              <p className="body-en font-bold mt-[20px] text-[17px] md:text-[24px] xl:text-[28px] min-[1920px]:text-[24px] leading-none">
                The Salone del Mobile.Milano
              </p>
            </div>

            <div className="text-[16px] md:text-[18px] xl:text-[20px] leading-[1.4]">
              <p className="body-jp min-[1920px]:text-[20px]">
                サローネ・デル・モービレ・ミラノ（Salone del Mobile.Milano / ミラノサローネ国際家具見本市）は、イタリア家具工業会社 Federlegno Arredo Evento により 1961 年から始められてきた国際的なデザイン見本市です。ミラノ市の Rho パビリオンで「サローネ木国際寝具見本市」、「サローネ国際キッチン見本市」、「サローネ国際照明器具見本市（エウロルーチェ）」、「サテリタ（若手デザイナー専用）」、「サローネ国際初期部品見本市」などの複数の見本市が同時開催されます。現代家具・インテリアデザインの世界をリードする見本市として位置づけられています。
              </p>
              <p className="body-jp mt-[20px] min-[1920px]:text-[20px]">
                その規模はインテリアデザインの見本市としては世界最大で、約 2,500 社もの企業が集まり、イタリア国内、海外から来場者数は 30 万人を超えます。
              </p>

              <p className="body-en mt-[30px] min-[1920px]:text-[21px]">
                The Salone del Mobile.Milano (Milan International Furniture Fair) is a world-renowned design fair organized by the Italian furniture industry association Federlegno Arredo Evento since 1961. Held at the Rho Pavilion in Milan, multiple trade fairs are held simultaneously, including the &ldquo;Salone del Mobile,&rdquo; &ldquo;Salone del Cucina,&rdquo; &ldquo;Salone del Lavoro,&rdquo; &ldquo;Salone del Bagno,&rdquo; &ldquo;Salone Satellite&rdquo; (dedicated to emerging designers), and the &ldquo;Salone del Luce.&rdquo; Every year, the event brings together cutting-edge furniture designs from around the world.
              </p>
              <p className="body-en mt-[20px] min-[1920px]:text-[21px]">
                It is the world&apos;s largest interior design trade fair, bringing together some 2,500 companies on a site spanning approximately 210,000 square meters, and attracting over 300,000 visitors from Italy and abroad.
              </p>
            </div>
          </div>
        </section>

        {/* Images after section 1 */}
        <div className="flex flex-col gap-[10px] min-[1911px]:gap-[20px] px-[10px] min-[1911px]:px-[65px]">
          <div className="relative w-full aspect-[16/9]">
            <Image src={`${base}/milano_img05.jpg`} alt="ミラノサローネ会場 Rhoパビリオンの展示ブース" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="relative w-full aspect-[16/9]">
            <Image src={`${base}/milano_img06.jpg`} alt="サローネ・デル・モービレ・ミラノ インテリアデザイン展示" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="relative w-full aspect-[16/9]">
            <Image src={`${base}/milano_img07.jpg`} alt="ミラノサローネ 家具・インテリアデザイン展示空間" fill sizes="100vw" className="object-cover" />
          </div>

          <div className="relative mt-[50px] left-1/2 w-screen -translate-x-1/2 aspect-[3/4] md:aspect-[16/9] min-[1911px]:aspect-auto min-[1911px]:h-screen">
            <Image
              src={`${base}/milano_img08.jpg`}
              alt="Fuorisalone"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Section 2 — フォーリサローネ */}
        <section className="px-[10px] pt-[40px] pb-[40px] md:pt-[60px] md:pb-[60px] xl:pt-[80px] xl:pb-[80px] min-[1911px]:px-[65px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[20px]">
            <div>
              <h2 className="body-jp font-bold text-[20px] md:text-[28px] xl:text-[32px] leading-[1.4] min-[1920px]:text-[30px] ">
                フォーリサローネ
              </h2>
              <p className="body-en font-bold mt-[20px] text-[17px] md:text-[24px] xl:text-[28px] min-[1920px]:text-[24px] leading-none">
                Fuorisalone
              </p>
            </div>

            <div className="text-[16px] md:text-[18px] xl:text-[20px] leading-[1.4]">
              <p className="body-jp min-[1920px]:text-[20px] ">
                フォーリサローネは、サローネ・デル・モービレ・ミラノの開催期間に合わせてミラノの街全体で行われるデザインの展覧会です。サローネ・デル・モービレよりも、家具専門企業だけでなく、様々な分野のデザインが集まります。
              </p>
              <p className="body-jp mt-[10px] min-[1920px]:text-[20px]">
                元々は、1980 年代に、複数の家具製作会社や産業デザイン会社などが自然発生的に始まりましたが、現在は自動車、テクノロジー、電気通信、アート、ファッション、食などの様々な分野にさらに広がりました。近年では、TOYOTA、CANON、東芝、河合楽器、パナソニックなど日本企業も出展するようになります。
              </p>
              <p className="body-jp mt-[10px] min-[1920px]:text-[20px]">
                フォーリサローネは、中心的な運営者を持ちません。それぞれのイベント経営者は、自分で全て運営するか、あるいは Studiolabo というサローネ期間中のスペース選びをサポートする組織や、Fuorisalone に記載されるような組織などをコンタクトすることができます。
              </p>
              <p className="body-jp mt-[10px] min-[1920px]:text-[20px] ">
                サローネ・デル・モービレとフォーリサローネは、総称してミラノデザインウィーク、あるいはミラノデザインウィークと呼ばれます。ミラノサローネ期間中は、デザインがミラノを覆います。街を舞台としてデザインの名の下で 7 日間その景観を大きく変えるパーティー、イベントが開催されます。ミラノはこの 1 週間その様相を大きく変えるのです。
              </p>

              <p className="body-en mt-[20px] min-[1920px]:text-[21px]">
                Fuorisalone is a design exhibition that takes place throughout the city of Milan during the Salone del Mobile in Milan. Unlike the Salone del Mobile, which focuses on furniture companies, Fuorisalone brings together design from a wide variety of fields.
              </p>
              <p className="body-en mt-[10px] min-[1920px]:text-[21px]">
                Originally, it was a trade fair that began spontaneously in the 1980s when a group of volunteers from various furniture manufacturers and industrial design firms came together. Today, it has expanded to cover a wide range of fields, including automobiles, technology, telecommunications, art, fashion, and food. In recent years, Japanese companies such as Toyota, Canon, Toshiba, Kawai Musical Instruments, and Panasonic have been particularly active.
              </p>
              <p className="body-en mt-[10px] min-[1920px]:text-[21px]">
                Fuorisalone has no central organizer. Event organizers can either manage everything on their own or contact organizations such as Studiolabo, which assists with finding spaces during Salone, or groups that provide support for strategies aimed at being selected by Fuorisalone.it.
              </p>
              <p className="body-en mt-[10px] min-[1920px]:text-[21px]">
                Salone del Mobile and Fuorisalone are collectively known as Milan Design Week. During Milan Design Week, design takes over Milan. Using the city as a stage, over a thousand parties and events are held over seven days in the name of design. Milan undergoes a dramatic transformation during this week.
              </p>
            </div>
          </div>
        </section>

        {/* Images after section 2 */}
        <div className="flex flex-col gap-[10px] min-[1911px]:gap-[20px] px-[10px] min-[1911px]:px-[65px]">
          <div className="relative w-full aspect-[16/9]">
            <Image src={`${base}/milano_img04.jpg`} alt="フォーリサローネ ミラノ市内のデザインイベント展示" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="relative w-full aspect-[16/9]">
            <Image src={`${base}/milano_img02.jpg`} alt="フォーリサローネ ミラノデザインウィーク 街中の展示" fill sizes="100vw" className="object-cover" />
          </div>
        </div>

        {/* Section 3 — 群を抜いた来場者数 */}
        <section className="px-[10px] pt-[40px] pb-[40px] md:pt-[60px] md:pb-[60px] xl:pt-[80px] xl:pb-[80px] min-[1911px]:px-[65px]">
          {/* Title block — right-aligned on tablet+, full width on mobile */}
          <div className="md:ml-[calc(50%+20px)]">
            <h2 className="body-jp font-bold mb-0 text-[20px] md:text-[24px] xl:text-[28px] min-[1920px]:text-[25px]">
              群を抜いた来場者数
            </h2>
            <p className="body-en font-bold mt-[20px] text-[16px] md:text-[18px] xl:text-[22px] min-[1920px]:text-[45px] leading-none">
              An unprecedented number of visitors
            </p>
            <div className="mt-[20px] text-[16px] md:text-[18px] xl:text-[20px] leading-[1.4]">
              <p className="body-jp min-[1920px]:text-[20px]">
                世界で多くのデザイン見本市が開かれていますが、ミラノサローネは世界 3 大見本市の中でもさらに群を抜いた集客力を誇ります。
              </p>
              <p className="body-en mt-[10px] min-[1920px]:text-[20px]">
                While there are many design trade shows held around the world, the Salone del Mobile in Milan stands out among the world&apos;s three major trade shows for its exceptional ability to draw crowds.
              </p>
            </div>
          </div>

          {/* Bar chart — full width */}
          <div className="mt-[50px] md:mt-[60px] flex gap-[20px]">
            {/* Labels column */}
            <div className="w-[90px] md:w-[160px] min-[1920px]:w-[220px] flex-shrink-0 flex flex-col justify-around">
              {barData.map((row) => (
                <div key={row.label} className="body-jp font-bold text-right text-[11px] md:text-[14px] min-[1920px]:text-[18px] leading-[1.4] whitespace-pre-line py-[20px] md:py-[28px] min-[1920px]:py-[36px]">
                  {row.label}
                </div>
              ))}
            </div>

            {/* Axis line + bars */}
            <div className="flex gap-[0px] flex-1">
              {/* Single continuous axis line */}
              <div className="w-[1px] bg-black flex-shrink-0" />

              {/* Bars column */}
              <div className="flex-1 flex flex-col">
                {barData.map((row, i) => (
                  <div key={row.label} className="flex items-center gap-[12px] py-[20px] md:py-[28px] min-[1920px]:py-[36px]">
                    <div className="flex-1 h-[50px] md:h-[80px] min-[1920px]:h-[110px]">
                      <div
                        className="h-full"
                        style={{
                          width: `${row.value}%`,
                          backgroundColor: i < 2 ? "#000" : "#C8C8C8",
                        }}
                      />
                    </div>
                    <span className="body-jp text-[11px] md:text-[14px] min-[1920px]:text-[18px] flex-shrink-0 w-[40px] md:w-[56px] min-[1920px]:w-[72px]">
                      {row.display}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Image after section 3 */}
        <div className="px-[10px] min-[1911px]:px-[65px]">
          <div className="relative w-full aspect-[16/9]">
            <Image src={`${base}/milano_img09.jpg`} alt="ミラノサローネ 100万人超の来場者でにぎわう会場" fill sizes="100vw" className="object-cover" />
          </div>
        </div>

        {/* Section 4 — メディアの注目 */}
        <section className="px-[10px] pt-[40px] pb-[40px] md:pt-[60px] md:pb-[60px] xl:pt-[80px] xl:pb-[80px] min-[1911px]:px-[65px]">
          <div className="md:ml-[calc(50%+20px)]">
            <h2 className="body-jp font-bold mb-0 text-[20px] md:text-[24px] xl:text-[28px] min-[1920px]:text-[25px]">
              メディアの注目
            </h2>
            <p className="body-en font-bold mt-[20px] text-[15px] md:text-[18px] xl:text-[22px] min-[1920px]:text-[45px] leading-none">
              Media attention
            </p>

            <div className="mt-[30px] text-[16px] md:text-[18px] xl:text-[20px] leading-[1.4]">
              <p className="body-jp min-[1920px]:text-[20px]">
                ミラノサローネには世界から 5,000 人を超えるメディア関係者が取材に訪れ、様々なジャンル・媒体のメディアに取り上げられることから、ミラノサローネはデザイン発信地として世界的に認められています。
              </p>
              <p className="body-jp mt-[12px] min-[1920px]:text-[20px]">
                フォーリサローネも開催前からすでにメディアに取り上げられる話題になる出展企業も多くあります。期間前・期間中・期間後に「見逃せない展示」「最も成功を収めた企業」など、様々なテーマで全世界に発信されます。
              </p>
              <p className="body-en mt-[20px] min-[1920px]:text-[20px]">
                With over 5,000 media representatives from around the world attending the Salone del Mobile to cover the event, and given the extensive coverage it receives across various genres and media outlets, the Salone del Mobile is globally recognized as a leading hub for design.
              </p>
              <p className="body-en mt-[12px] min-[1920px]:text-[20px]">
                Many exhibitors at Fuorisalone are already generating buzz in the media even before the event begins. Before, during, and after the event, stories on various themes—such as &ldquo;must-see exhibitions&rdquo; and &ldquo;the most successful companies&rdquo;—are shared with audiences worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Images after section 4 */}
        <div className="flex flex-col gap-[10px] min-[1911px]:gap-[20px] px-[10px] min-[1911px]:px-[65px]">
          <div className="relative w-full aspect-[16/9]">
            <Image src={`${base}/milano_img001.jpg`} alt="ミラノサローネ 世界5000人超のメディア関係者が取材" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="relative w-full aspect-[16/9]">
            <Image src={`${base}/milano_img002.jpg`} alt="ミラノサローネ フォーリサローネ メディア注目イベント" fill sizes="100vw" className="object-cover" />
          </div>
        </div>

        {/* Section 5 — DANSのサポート */}
        <section className="px-[10px] pt-[40px] pb-[60px] md:pt-[60px] md:pb-[80px] xl:pt-[80px] xl:pb-[100px] min-[1911px]:px-[65px]">
          <div className="md:ml-[calc(50%+20px)]">
            <h2 className="body-jp font-bold mb-0 text-[20px] md:text-[24px] xl:text-[28px] min-[1920px]:text-[25px]">
              DANSのサポート
            </h2>
            <p className="body-en font-bold mt-[20px] text-[15px] md:text-[18px] xl:text-[22px] min-[1920px]:text-[45px] leading-none">
              DANS Support
            </p>

            <div className="mt-[30px] text-[16px] md:text-[20px] xl:text-[21px] leading-[1.4]">
              <p className="body-jp min-[1920px]:text-[20px]">
                世界各国のデザイナー、企業が集まる中で、出展を成功させ注目を得るためには、高度な展示企画、空間デザイン、マーケティングなどを要します。DANS は、現場リサーチから展示企画・設計から運営、PR＆マーケティングまで全てをサポートいたします。
              </p>
              <p className="body-en mt-[16px] min-[1920px]:text-[20px]">
                With designers and companies from around the world gathering at these events, achieving a successful exhibition and attracting attention requires sophisticated exhibition planning, spatial design, and marketing. DANS provides comprehensive support for everything from on-site research and exhibition planning and design to operations, PR, and marketing.
              </p>
            </div>
          </div>
        </section>

        {/* Image after section 5 */}
        <div className="px-[10px] min-[1911px]:px-[65px] pb-[40px] md:pb-[60px] xl:pb-[80px]">
          <div className="relative w-full aspect-[16/9]">
            <Image src={`${base}/milano_img03.jpg`} alt="DANSによるミラノサローネ出展サポート 展示空間デザイン" fill sizes="100vw" className="object-cover" />
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
