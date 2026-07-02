import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DANS | ミラノサローネ出展サポート",
    short_name: "DANS",
    description:
      "DANSは、ミラノサローネ・フォーリサローネへの出展を現場リサーチから展示企画・設計・運営・PR＆マーケティングまで一貫してサポートします。",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F5F5",
    theme_color: "#F5F5F5",
    icons: [
      {
        src: "/icon.png",
        sizes: "612x550",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
