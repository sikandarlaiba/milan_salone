type ServiceItem = {
  jp: string;
  en: string;
  dot: { x: number; y: number };
  side: "top" | "left" | "right" | "bottom";
  offsetX?: number;
  offsetY?: number;
};

const items: ServiceItem[] = [
  {
    jp: "事前リサーチ",
    en: "Research",
    dot: { x: 50, y: 20 },
    side: "top",
    offsetY: 12,
  },
  {
    jp: "展示スペース選定",
    en: "Space Selection",
    dot: { x: 73.46, y: 31.3 },
    side: "right",
    offsetY: -5,
  },
  {
    jp: "製作/施工及び監理",
    en: "Manufacturing / Supervising",
    dot: { x: 79.25, y: 56.68 },
    side: "right",
    offsetY: 4,
  },
  {
    jp: "イベント企画立案",
    en: "Event Planning",
    dot: { x: 63.02, y: 77.03 },
    side: "bottom",
    offsetX: 12,
    offsetY: 14,
  },
  {
    jp: "PR&マーケティング",
    en: "PR & Marketing",
    dot: { x: 36.98, y: 77.03 },
    side: "bottom",
    offsetX: -12,
    offsetY: 14,
  },
  {
    jp: "デザイン&設計",
    en: "Design & Engineering",
    dot: { x: 20.75, y: 56.68 },
    side: "left",
    offsetY: 5,
  },
  {
    jp: "イベントの運営",
    en: "Event Management",
    dot: { x: 26.54, y: 31.3 },
    side: "left",
    offsetY: -5,
  },
];

function ServiceBox({ item }: { item: ServiceItem }) {
  return (
    <div className="flex flex-col items-center justify-center w-[115px] h-[50px] border border-black bg-[#F5F5F5] px-[6px] text-center sm:h-auto sm:w-[150px] sm:px-[8px] sm:py-[5px] md:w-[250px] md:px-[16px] md:py-[10px] xl:w-[300px]">
      <p className="text-[11px] leading-[1.3] sm:text-[14px] md:text-[20px]">
        {item.jp}
      </p>
      <p className="mt-[2px] text-[9px] leading-[1.3] sm:mt-[3px] sm:text-[11px] md:text-[16px]">
        {item.en}
      </p>
    </div>
  );
}

export default function ServiceCircle() {
  return (
    <div className="mt-[100px] mb-[50px] md:mt-[150px] md:mb-0">
      {/* Radial layout, scales down on mobile/tablet */}
      <div className="relative mx-auto aspect-square w-full max-w-[300px] [--sv-off:-1%] sm:max-w-[400px] sm:[--sv-off:3%] md:max-w-[640px] md:[--sv-off:-2%] xl:max-w-[820px]">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 z-10 h-full w-full"
          aria-hidden="true"
        >
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="#000"
            strokeWidth="0.3"
          />
          {items.map((item) => (
            <circle
              key={item.jp}
              cx={item.dot.x}
              cy={item.dot.y}
              r="2"
              fill="#000"
            />
          ))}
        </svg>

        {items.map((item) => (
          <div
            key={item.jp}
            className="absolute"
            style={
              item.side === "top"
                ? {
                    left: `${item.dot.x}%`,
                    top: `calc(${item.dot.y}% - ${item.offsetY ?? 0}%)`,
                    transform: "translate(-50%, -100%)",
                  }
                : item.side === "bottom"
                ? {
                    left: `calc(${item.dot.x}% + ${item.offsetX ?? 0}%)`,
                    top: `calc(${item.dot.y}% + ${item.offsetY ?? 6}%)`,
                    transform: "translate(-50%, 0%)",
                  }
                : item.side === "right"
                ? {
                    left: `calc(${item.dot.x}% + ${item.offsetX != null ? `${item.offsetX}%` : "var(--sv-off, 12%)"})`,
                    top: `calc(${item.dot.y}% + ${item.offsetY ?? 0}%)`,
                    transform: "translate(20%, -50%)",
                  }
                : {
                    right: `calc(${100 - item.dot.x}% + ${item.offsetX != null ? `${-item.offsetX}%` : "var(--sv-off, 12%)"})`,
                    top: `calc(${item.dot.y}% + ${item.offsetY ?? 0}%)`,
                    transform: "translate(-20%, -50%)",
                  }
            }
          >
            <ServiceBox item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
