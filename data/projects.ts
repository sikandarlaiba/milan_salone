export type Project = {
  name: string;
  slug: string;
  image: string;
  video?: string;
};

export const projects: Project[] = [
  { name: "TOYOTA", slug: "toyota", image: "/images/credits/toyota/TOYOTA-SALONE_Setsuna-1.jpg", video: "/images/credits/toyota/toyota_thumbnail.mp4" },
  { name: "KO GHEI", slug: "koghei", image: "/images/credits/ko_ghei/kougei_img01.png", video: "/images/credits/ko_ghei/opening.mp4" },
  { name: "DRAFT", slug: "draft", image: "/images/credits/drafts/DAFT_about_DRAFT_26_DSC01280_s_e.png", video: "/images/credits/drafts/DRAFT2026_thumbnail.mp4" },
  { name: "MEISDEL", slug: "meisdel", image: "/images/credits/meisdel/MEIS_MITSUI_2.JPG", video: "/images/credits/meisdel/IMG_1811.mov" },
];
