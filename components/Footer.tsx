export default function Footer() {
  return (
    <footer className="px-[15px] pt-[50px] pb-[20px] ">

      {/* 上段 */}

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-6
        xl:grid-cols-12
        gap-x-[10px]
        gap-y-[30px]
        "
      >
        {/* Left */}

        <div
          className="
          md:col-span-3
          xl:col-span-4

          text-[13px]
            md:[16px]
            xl:[18px]
          "
        >
          We are a design consulting firm based in Milan and Tokyo.
        </div>

        {/* Milan */}

        <div
          className="
          md:col-span-1
          xl:col-start-9
          xl:col-span-2

          text-[13px]
            md:[16px]
            xl:[18px]
          "
        >
          <p>Milan</p>

          <p className="mt-[6px]">
            Via Ebro 4,
            Milan 20141,
            Italy
          </p>

          <p>
            Tel +39 02 36560702
          </p>
        </div>

        {/* Tokyo */}

        <div
          className="
          md:col-span-2
          xl:col-span-2

          text-[13px]
            md:[16px]
            xl:[18px]
          "
        >
          <p>Tokyo</p>

          <p className="mt-[6px]">
            NL Building 2F,
            2-13-16,
            Minamiaoyama,
            Minato-ku,
            Tokyo,
            Japan
          </p>

          <p>
            Tel +81 3 64349498
          </p>
        </div>
      </div>

      {/* Divider */}

      <div className="border-t border-black mt-[20px] pt-[20px]">

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-6
          xl:grid-cols-12
          gap-x-[10px]
          gap-y-[20px]
          "
        >
          {/* Copyright */}

          <div
            className="
            md:col-span-3
            xl:col-span-4

            text-[13px]
            md:[16px]
            xl:[18px]
            "
          >
            © 2025 DANS Inc. All Rights Reserved
          </div>

          {/* Business */}

          <div
            className="
            md:col-span-1
            xl:col-start-9
            xl:col-span-2

            text-[13px]
            md:[16px]
            xl:[18px]
            
            "
          >
            Business Enquiries:
            <br />
            <a href="mailto:info@dans.jp" 
               className="hover:opacity-50 transition-opacity">info@dans.jp</a>
          </div>

          {/* Privacy */}

          <div
            className="
            md:col-span-2
            xl:col-span-2

            text-[13px]
            md:[16px]
            xl:[18px]
            "
          >
            Privacy Policy
          </div>
        </div>

      </div>

    </footer>
  );
}