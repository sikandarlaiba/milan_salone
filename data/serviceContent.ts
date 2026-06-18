export type ServiceCard = {
  jp: { title: string; body: string };
  en: { title: string; body: string };
};

export type ServiceSection = {
  jp: { title: string; subtitle: string };
  en: { title: string; subtitle: string };
  dark: boolean;
  cards: ServiceCard[];
};

export const serviceSections: ServiceSection[] = [
  {
    jp: { title: "事前リサーチ", subtitle: "事前リサーチ" },
    en: { title: "Research", subtitle: "Research" },
    dark: true,
    cards: [
      {
        jp: {
          title: "サローネの現状と傾向",
          body: "ミラノサローネを中心とした昨年度の傾向、来場者数やトレンドについて調査し報告します。",
        },
        en: {
          title: "Current Status and Trends of Salone",
          body: "Our staff, who are well versed in the Milan Salone, will research the latest trends of the event and compile a report.",
        },
      },
      {
        jp: {
          title: "イベントの方向性検討",
          body: "お客様のご要望と当社の経験を基に、出展に向けての全体の方向性を検討します。",
        },
        en: {
          title: "Exploring Event Concepts",
          body: "We will propose an overall direction for the event that incorporates your requests while taking into account recent trends at Salone.",
        },
      },
      {
        jp: {
          title: "展示エリアのリサーチ",
          body: "スタッフの豊富な経験を活かし、出展内容に合わせた展示エリアをリサーチし、お客様のニーズに最も適したエリアをご提案します。",
        },
        en: {
          title: "Research on Exhibition Areas",
          body: "Our staff, with extensive experience in Milan, will research exhibition areas based on requirements and recommend the area that best suits your needs.",
        },
      },
    ],
  },
  {
    jp: { title: "展示スペース選定", subtitle: "展示スペース選定" },
    en: { title: "Space Selection", subtitle: "Space Selection" },
    dark: false,
    cards: [
      {
        jp: {
          title: "展示スペースリサーチ",
          body: "ミラノ市内の不動産会社や現地コーディネーターと連携し、ニーズに合った物件を探索します。",
        },
        en: {
          title: "Exhibition Space Research",
          body: "We will contact real estate agencies in Milan and local coordinators to select spaces that meet your specific needs.",
        },
      },
      {
        jp: {
          title: "内見立会いと選定",
          body: "日本語、イタリア語、英語を話せるスタッフが内見に同行し、詳細な情報収集をサポートします。",
        },
        en: {
          title: "Viewing Accompaniment and Selection",
          body: "During property viewings, our staff—who speak Japanese, Italian, and English—will accompany you to help gather detailed information.",
        },
      },
      {
        jp: {
          title: "条件交渉と契約締結",
          body: "物件オーナーや管理会社との条件交渉から契約締結まで、スケジュール管理を含めてサポートします。",
        },
        en: {
          title: "Negotiations and Contract Signing",
          body: "We provide support from scheduling viewings to signing contracts with the property managers.",
        },
      },
    ],
  },
  {
    jp: { title: "イベント企画立案", subtitle: "イベント企画立案" },
    en: { title: "Event Planning", subtitle: "Event Planning" },
    dark: true,
    cards: [
      {
        jp: {
          title: "展示コンテンツ企画立案",
          body: "テーマや方向性に基づき、展示コンテンツの企画立案を行います。",
        },
        en: {
          title: "Exhibition Content Planning",
          body: "We research recent trends at Salone and develop exhibition content tailored to European tastes.",
        },
      },
      {
        jp: {
          title: "展示空間企画立案",
          body: "展示の動線設計や効果的な展示提示方法を含む、展示空間全体の企画立案を行います。",
        },
        en: {
          title: "Exhibition Space Planning",
          body: "We design the entire exhibition space, including visitor flow and effective presentation methods.",
        },
      },
    ],
  },
  {
    jp: { title: "デザインと設計", subtitle: "デザインと設計" },
    en: { title: "Design", subtitle: "Design" },
    dark: false,
    cards: [
      {
        jp: {
          title: "展示コンテンツ製作",
          body: "WEB制作を含む、展示内容を分かりやすく伝えるためのコンテンツを企画・製作します。",
        },
        en: {
          title: "Exhibition Content Production",
          body: "We plan the entire exhibition by determining what to display in the exhibition space and how to present it.",
        },
      },
      {
        jp: {
          title: "各種デザイン製作",
          body: "展示物のグラフィック、広告物、パンフレットなど、ブランドにふさわしい各種デザインを製作します。",
        },
        en: {
          title: "Design Development",
          body: "We propose various graphic design concepts, including exhibition graphics, advertisements, videos, and brochures.",
        },
      },
      {
        jp: {
          title: "展示空間デザイン",
          body: "ご予算内で展示空間が最大限に活かされるよう、来場者の動線や全体の空間デザインをご提案します。",
        },
        en: {
          title: "Exhibition Space Design",
          body: "We design exhibition spaces tailored to your requirements and budget, including visitor flow and overall interior design.",
        },
      },
    ],
  },
  {
    jp: { title: "製作/施工及び監理", subtitle: "製作/施工及び監理" },
    en: { title: "Production", subtitle: "Production" },
    dark: true,
    cards: [
      {
        jp: {
          title: "製作する展示物の幅広い管理",
          body: "サローネに関連する展示用素材、グラフィック、写真、ビデオなど、幅広い製作物に対応します。",
        },
        en: {
          title: "Production of Various Exhibition Elements",
          body: "We produce a wide range of exhibition materials, including graphics, fixtures, and videos.",
        },
      },
      {
        jp: {
          title: "輸入品の輸送及び監理",
          body: "輸入物資全般の輸送と監理をサポートします。イタリアへの輸送に伴うコストや所要時間についてもご案内します。",
        },
        en: {
          title: "Import and Supervision of Exhibition Items",
          body: "We provide support for complex import and export procedures, such as bringing exhibition items into and out of Italy, as well as on-site logistics.",
        },
      },
      {
        jp: {
          title: "施工・設置及び監理",
          body: "弊社の現地施工チームによる工事監理を実施します。展示空間の施工、設置から解体までを管理します。",
        },
        en: {
          title: "Construction, Supervision and Exhibition Space",
          body: "We undertake on-site construction. Our staff oversee material storage, on-site construction to ensure thorough supervision.",
        },
      },
      {
        jp: {
          title: "輸送、設営、解体",
          body: "弊社の監理のもと、現地施工チームによる輸送、設置及び解体までを一貫して管理します。",
        },
        en: {
          title: "Transportation, Setup, and Dismantling",
          body: "Under the supervision of our staff, the local construction team handles transportation, setup, and dismantling of the exhibition.",
        },
      },
    ],
  },
  {
    jp: { title: "PR&マーケティング", subtitle: "PR&マーケティング" },
    en: { title: "PR & Marketing", subtitle: "PR & Marketing" },
    dark: false,
    cards: [
      {
        jp: {
          title: "イベントのPR戦略立案実行",
          body: "効果的なPR戦略を提案し実行します。主要メディアや業界関係者への送付などを含むプレスリリースの企画・実行をサポートします。",
        },
        en: {
          title: "Event PR Strategy and Execution",
          body: "We propose and implement effective PR strategies for the success of your event, including pitching to leading magazines and issuing online press releases.",
        },
      },
      {
        jp: {
          title: "各種広報物の企画・製作",
          body: "イベント告知用の各種広報物を企画・製作します。",
        },
        en: {
          title: "Planning and Production of Promotional Materials",
          body: "We propose and produce materials such as event invitations and promotional gifts.",
        },
      },
      {
        jp: {
          title: "各種マーケティング企画",
          body: "市場マーケティングを企画し実行します。SNSやWEBサイトなどを活用したデジタルマーケティングも行います。",
        },
        en: {
          title: "Various Marketing Initiatives",
          body: "Leveraging our perspective and expertise in the European industry, we gather and analyze valuable information to propose positioning strategies and target audiences based on these insights.",
        },
      },
      {
        jp: {
          title: "メディアとの関係構築",
          body: "海外メディアとの関係構築をサポートし、必要な情報提供を行います。",
        },
        en: {
          title: "Planning, Implementation and Market Development",
          body: "We assist in establishing connections with European retailers and dealers. We also provide support in preparing materials for business negotiations.",
        },
      },
    ],
  },
  {
    jp: { title: "イベントの運営", subtitle: "イベントの運営" },
    en: { title: "Management", subtitle: "Management" },
    dark: true,
    cards: [
      {
        jp: {
          title: "運営スタッフの採用と研修",
          body: "イベント運営のための採用プロセスを管理します。当社スタッフは英語が話せるスタッフを派遣します。",
        },
        en: {
          title: "Recruitment and Training of Event Staff",
          body: "We provide support for Italy's complex employment procedures. Our staff will ensure they can communicate fluently with our contractors.",
        },
      },
      {
        jp: {
          title: "各種運営業務管理",
          body: "イベント当日のすべての運営業務を管理します。",
        },
        en: {
          title: "Event Operations Management",
          body: "We handle all aspects of event operations on the day of the event.",
        },
      },
      {
        jp: {
          title: "取材対応とゲストサービス",
          body: "イベント期間中、必要に応じて取材対応やゲスト案内などのサービスを提供します。",
        },
        en: {
          title: "Media Relations and Guest Services",
          body: "We provide appropriate support for media inquiries and guest services as needed.",
        },
      },
    ],
  },
];

export type ProcessStep = {
  jp: { title: string; caption: string };
  en: { title: string; caption: string };
};

export const processSteps: ProcessStep[] = [
  {
    jp: { title: "事前リサーチ", caption: "通常イベント12ヶ月前後" },
    en: { title: "Preliminary Research", caption: "Typically 12 months before the event" },
  },
  {
    jp: { title: "展示スペース選定", caption: "通常イベント11ヶ月前後" },
    en: { title: "Exhibition Space Selection", caption: "Typically 11 months before the event" },
  },
  {
    jp: { title: "イベント企画立案", caption: "通常イベント11ヶ月前後" },
    en: { title: "Event Planning", caption: "Typically 11 months before the event" },
  },
];

export const processGridSteps: ProcessStep[] = [
  {
    jp: { title: "製作/施工及び監理", caption: "製作期間 最低6ヶ月前後(要相談)" },
    en: {
      title: "Production, Construction, and Supervision",
      caption: "Production time: typically 6 months (negotiable)",
    },
  },
  {
    jp: { title: "デザインと設計", caption: "準備期間 通常6ヶ月前後" },
    en: { title: "Design and Planning", caption: "Preparation period: typically 6 months (negotiable)" },
  },
  {
    jp: {
      title: "PR&マーケティング",
      caption:
        "イベントが本格化する数ヶ月前から、メディア・関係者への事前告知や招待状の準備を本格化させていきます",
    },
    en: {
      title: "PR & Marketing",
      caption:
        "We begin coordinating with PR media outlets once the design is finalized. We will support PR and sales channel development before, during, and after the event.",
    },
  },
];

export const processFinalSteps: ProcessStep[] = [
  {
    jp: { title: "イベントの運営", caption: "" },
    en: { title: "Event Management", caption: "" },
  },
  {
    jp: { title: "総合解析", caption: "" },
    en: { title: "Comprehensive Analysis", caption: "" },
  },
];
