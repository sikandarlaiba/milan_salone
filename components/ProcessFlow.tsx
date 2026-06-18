import Image from "next/image";
import {
  processSteps,
  processGridSteps,
  processFinalSteps,
  type ProcessStep,
} from "@/data/serviceContent";

function ProcessBox({ step, lang, wide = false }: { step: ProcessStep; lang: "jp" | "en"; wide?: boolean }) {
  const content = step[lang];
  const fontClass = lang === "en" ? "body-en" : "body-jp";

  return (
    <div
      className={`flex flex-col border rounded-[10px] border-black px-[15px] py-[20px] md:px-[30px] md:py-[30px] ${
        wide
          ? "items-center justify-center text-center min-h-[140px] md:min-h-[160px] xl:min-h-[190px]"
          : "items-start justify-start text-left"
      }`}
    >
      <p className={`${fontClass} font-bold text-[16px] md:text-[22px] xl:text-[26px]`}>
        {content.title}
      </p>

      {content.caption && (
        <p className={`${fontClass} mt-[10px] text-[13px] leading-[1.6] md:text-[15px] xl:text-[17px]`}>
          {content.caption}
        </p>
      )}
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex justify-center py-[15px] md:py-[20px]">
      <Image
        src="/images/service/Vector.png"
        alt=""
        width={206}
        height={192}
        className="w-[30px] md:w-[50px]"
      />
    </div>
  );
}

export default function ProcessFlow({ lang }: { lang: "jp" | "en" }) {
  const fontClass = lang === "en" ? "body-en" : "body-jp";
  return (
    <section className="full-bleed flex min-h-[500px] flex-col items-center justify-center bg-[#F5F5F5] px-[15px] py-[60px] md:min-h-[700px] md:py-[80px] xl:min-h-[1100px] xl:py-[100px] min-[1911px]:px-[65px] text-center">
      <h2 className={`${fontClass} font-bold text-[24px] md:text-[36px] xl:text-[48px]`}>
        {lang === "jp" ? "プロセス" : "Process"}
      </h2>

      <p className={`${lang === "en" ? "body-jp" : "body-en"} font-bold mt-[10px] text-[15px] md:text-[20px] xl:text-[25px]`}>
        {lang === "jp" ? "Process" : "プロセス"}
      </p>

      <div className="mx-auto mt-[50px] max-w-[900px]">
        {processSteps.map((step, i) => (
          <div key={i}>
            <ProcessBox step={step} lang={lang} wide />
            <Arrow />
          </div>
        ))}

        <div className="grid grid-cols-3 gap-[10px] [grid-auto-rows:auto]">
          {processGridSteps.map((step, i) => {
            const content = step[lang];
            return (
              <div key={i} className="[grid-row:span_2] grid [grid-template-rows:subgrid] gap-y-0 rounded-[10px] border border-black px-[15px] py-[20px] md:px-[30px] md:py-[30px]">
                <p className={`${fontClass} font-bold self-start text-[14px] md:text-[20px] xl:text-[24px]`}>
                  {content.title}
                </p>
                <p className={`${fontClass} self-start mt-[10px] text-[12px] leading-[1.6] md:text-[14px] xl:text-[16px]`}>
                  {content.caption}
                </p>
              </div>
            );
          })}
        </div>

        <Arrow />

        {processFinalSteps.map((step, i) => (
          <div key={i}>
            <ProcessBox step={step} lang={lang} wide />
            {i < processFinalSteps.length - 1 && <Arrow />}
          </div>
        ))}
      </div>
    </section>
  );
}
