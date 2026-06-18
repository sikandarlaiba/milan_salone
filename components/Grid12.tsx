import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Grid12({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        h-full
        grid

        grid-cols-4
        gap-[10px]

        md:grid-cols-6

        xl:grid-cols-12

        items-center

        ${className}
      `}
    >
      {children}
    </div>
  );
}