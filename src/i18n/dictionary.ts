export type Lang = "ja" | "en";

export type ActivityItem = {
  role: string;
  name: string;
  desc: string;
  url: string;
};

export type CredentialItem = { name: string; note: string };

export type Dict = {
  nav: {
    about: string;
    activities: string;
    credentials: string;
    research: string;
    contact: string;
  };
  hero: {
    tagline: string;
    name: string;
    nameRoman: string;
    affiliation: string;
    lead: string;
    ctaContact: string;
    ctaActivities: string;
  };
  about: { title: string; body: string };
  activities: { title: string; items: ActivityItem[] };
  credentials: { title: string; items: CredentialItem[] };
  research: { title: string; items: string[] };
  contact: {
    title: string;
    lead: string;
    emailLabel: string;
    xLabel: string;
    copy: string;
    copied: string;
  };
  footer: { copy: string };
  langToggle: { ja: string; en: string };
};

export const dict: Record<Lang, Dict> = {
  ja: {
    nav: {
      about: "About",
      activities: "Activities",
      credentials: "Credentials",
      research: "Research",
      contact: "Contact",
    },
    hero: {
      tagline: "中小企業のAI業務実装",
      name: "田口 雄大",
      nameRoman: "Taguchi Yudai",
      affiliation: "大阪公立大学 情報工学科 2年",
      lead:
        "中小企業の現場にAIを実装します。業務理解・要件整理から開発・運用まで一貫して伴走し、現場に根付く仕組みづくりを支援します。",
      ctaContact: "ご相談する",
      ctaActivities: "詳しく見る",
    },
    about: {
      title: "About",
      body:
        "大阪公立大学 情報工学科 2年。中小企業向けのAI業務実装を主な活動としています。takeforestでは中小企業向けAI経営戦略の研究開発、株式会社AffectifyではOMU+とPortal AIの開発に従事。学内ではAIサークル OIF（OMU Innovation Frontier）を創設・代表として運営し、GDGoC OMUのFounder / Co-Organizerも務めています。",
    },
    activities: {
      title: "Activities",
      items: [
        {
          role: "代表 / 創設者",
          name: "OIF (OMU Innovation Frontier)",
          desc: "大阪公立大学のAIサークルを創設し、代表として運営。",
          url: "https://oif-ai.com/",
        },
        {
          role: "Founder / Co-Organizer",
          name: "GDGoC OMU",
          desc: "Google Developer Groups on Campus (OMU) を立ち上げ、運営を継続。",
          url: "https://gdgoc-omu.jp/",
        },
        {
          role: "インターン",
          name: "株式会社Affectify",
          desc: "OMU+ と Portal AI の開発に従事。",
          url: "https://affectify.jp/",
        },
        {
          role: "インターン",
          name: "takeforest株式会社",
          desc: "中小企業向け AI 経営戦略の研究開発に従事。",
          url: "https://takeforest.com/",
        },
      ],
    },
    credentials: {
      title: "Credentials",
      items: [
        { name: "E資格 (26#1)", note: "JDLA Engineer" },
        { name: "松尾研 DL基礎講座", note: "修了" },
        { name: "松尾研 LLM基礎講座", note: "修了" },
      ],
    },
    research: {
      title: "Research Interests",
      items: ["戦略AI", "強化学習", "マルチエージェント", "LLM"],
    },
    contact: {
      title: "Contact",
      lead:
        "AI業務実装のご相談・お見積もり、その他お問い合わせはこちらまで。お気軽にご連絡ください。",
      emailLabel: "Email",
      xLabel: "X (Twitter)",
      copy: "クリックでコピー",
      copied: "コピーしました",
    },
    footer: {
      copy: "© 2026 Taguchi Yudai",
    },
    langToggle: { ja: "JA", en: "EN" },
  },
  en: {
    nav: {
      about: "About",
      activities: "Activities",
      credentials: "Credentials",
      research: "Research",
      contact: "Contact",
    },
    hero: {
      tagline: "AI Implementation for SMEs",
      name: "Yudai Taguchi",
      nameRoman: "田口 雄大",
      affiliation:
        "B.S. Information Engineering, Osaka Metropolitan University (2nd year)",
      lead:
        "I help small and medium-sized enterprises put AI to work — from understanding your operations and scoping the right solution to implementation and run.",
      ctaContact: "Get in touch",
      ctaActivities: "Learn more",
    },
    about: {
      title: "About",
      body:
        "Second-year undergraduate in Information Engineering at Osaka Metropolitan University. I focus on AI implementation for small and medium-sized enterprises. At takeforest Inc. I work on R&D for AI-driven business strategy for SMEs, and at Affectify Inc. I develop OMU+ and Portal AI. I also founded and lead OIF (OMU Innovation Frontier), the campus AI club, and serve as Founder / Co-Organizer of GDGoC OMU.",
    },
    activities: {
      title: "Activities",
      items: [
        {
          role: "Founder & President",
          name: "OIF (OMU Innovation Frontier)",
          desc: "Founded and run the campus AI club at Osaka Metropolitan University.",
          url: "https://oif-ai.com/",
        },
        {
          role: "Founder / Co-Organizer",
          name: "GDGoC OMU",
          desc: "Founded the Google Developer Groups on Campus chapter at OMU.",
          url: "https://gdgoc-omu.jp/",
        },
        {
          role: "Intern",
          name: "Affectify Inc.",
          desc: "Developing OMU+ and Portal AI.",
          url: "https://affectify.jp/",
        },
        {
          role: "Intern",
          name: "takeforest Inc.",
          desc: "R&D on AI-driven business strategy for small & medium enterprises.",
          url: "https://takeforest.com/",
        },
      ],
    },
    credentials: {
      title: "Credentials",
      items: [
        { name: "JDLA E Qualification (26#1)", note: "Deep Learning Engineer" },
        { name: "Matsuo Lab — DL Foundations", note: "Completed" },
        { name: "Matsuo Lab — LLM Foundations", note: "Completed" },
      ],
    },
    research: {
      title: "Research Interests",
      items: [
        "Strategic AI",
        "Reinforcement Learning",
        "Multi-Agent Systems",
        "LLM",
      ],
    },
    contact: {
      title: "Contact",
      lead:
        "Open to AI implementation projects, consulting requests, and other inquiries. Feel free to reach out.",
      emailLabel: "Email",
      xLabel: "X (Twitter)",
      copy: "Click to copy",
      copied: "Copied",
    },
    footer: {
      copy: "© 2026 Yudai Taguchi",
    },
    langToggle: { ja: "JA", en: "EN" },
  },
};
