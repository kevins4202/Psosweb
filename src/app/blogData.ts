export type Author = {
  slug: string;
  name: string;
  role: string;
  credentials: string[];
  bio: string;
  focus: string;
};

export type Article = {
  slug: string;
  title: string;
  deck: string;
  category: string;
  date: string;
  readTime: string;
  authorSlug: string;
  featured?: boolean;
  sections: { heading?: string; paragraphs: string[] }[];
};

export const authors: Author[] = [
  {
    slug: "sophia-xia",
    name: "Sophia Xia",
    role: "Founder, Project Save Our Skin",
    credentials: [
      "Founder of Project Save Our Skin",
      "Community skin-health educator",
      "Youth nonprofit leader and health-equity advocate",
    ],
    bio: "Sophia founded Project Save Our Skin in 2022 after her own skin-health journey showed her how deeply access, education, and confidence are connected. She leads the organization's national education, donation, and chapter-building work.",
    focus: "Accessible skin-health education, youth advocacy, and community-led prevention.",
  },
  {
    slug: "maya-patel",
    name: "Maya Patel",
    role: "Community Education Contributor",
    credentials: [
      "Medical student",
      "Community dermatological health educator",
      "Sun-safety outreach volunteer",
    ],
    bio: "Maya translates evidence-informed prevention guidance into approachable, practical resources for families and community groups. Her outreach work centers on making everyday sun protection easier to understand and use.",
    focus: "Sun protection, prevention education, and health communication.",
  },
  {
    slug: "aisha-rahman",
    name: "Aisha Rahman",
    role: "Student Wellness Contributor",
    credentials: [
      "Collegiate health advocate",
      "Peer wellness educator",
      "Project Save Our Skin chapter volunteer",
    ],
    bio: "Aisha writes about the intersection of skin health, confidence, and student wellness. She believes good health education should feel welcoming, stigma-free, and relevant to everyday life.",
    focus: "Student wellness, acne confidence, and compassionate health education.",
  },
];

export const articles: Article[] = [
  {
    slug: "sun-protection-is-community-care",
    title: "Sun Protection Is Community Care",
    deck: "Small, shared habits can make prevention more accessible—from the family picnic to the neighborhood summer camp.",
    category: "Prevention",
    date: "May 18, 2025",
    readTime: "5 min read",
    authorSlug: "sophia-xia",
    featured: true,
    sections: [
      {
        paragraphs: [
          "Sun safety is often framed as a personal routine, but prevention becomes far more powerful when communities practice it together. A reminder from a friend, a shade tent at an outdoor event, or sunscreen available at camp can turn knowledge into a habit.",
          "That is why Project Save Our Skin brings education into familiar public spaces. Clear information is important, but access to the tools that support healthy choices matters just as much.",
        ],
      },
      {
        heading: "Make protection visible",
        paragraphs: [
          "Normalize seeking shade, wearing protective clothing, and reapplying broad-spectrum sunscreen. When adults and peers model these choices without embarrassment, younger community members learn that prevention is ordinary—not excessive.",
          "Skin health belongs in everyday wellness conversations. The goal is not fear; it is confidence built through practical knowledge.",
        ],
      },
      {
        heading: "Start with one shared habit",
        paragraphs: [
          "Choose one action your group can repeat: keep sunscreen near the door, add shade breaks to outdoor programming, or include a sun-safety reminder in event materials. Consistency makes care easier to remember and easier to share.",
        ],
      },
    ],
  },
  {
    slug: "a-simple-guide-to-everyday-sun-safety",
    title: "A Simple Guide to Everyday Sun Safety",
    deck: "An approachable checklist for building a routine that works on busy school, work, and family days.",
    category: "Skin 101",
    date: "April 7, 2025",
    readTime: "4 min read",
    authorSlug: "maya-patel",
    sections: [
      {
        paragraphs: [
          "A useful sun-safety routine does not need to be complicated. Start with a broad-spectrum sunscreen, protective clothing when possible, and shade during long stretches outdoors.",
          "Apply sunscreen to commonly missed areas such as ears, the back of the neck, and the tops of the feet. Follow the product label and remember to reapply, especially after swimming or sweating.",
        ],
      },
      {
        heading: "Build a routine you can repeat",
        paragraphs: [
          "Pair sunscreen with a habit you already have, such as brushing your teeth or packing your bag. Keep a backup where you are likely to need it. The best routine is the one that fits your day consistently.",
        ],
      },
    ],
  },
  {
    slug: "acne-confidence-and-kindness",
    title: "Acne, Confidence, and a Little More Kindness",
    deck: "Skin changes can affect more than appearance. Compassionate language helps create room for confidence and care.",
    category: "Confidence",
    date: "March 12, 2025",
    readTime: "6 min read",
    authorSlug: "aisha-rahman",
    sections: [
      {
        paragraphs: [
          "Acne is common, but the emotions surrounding it can feel isolating. Casual comments and unrealistic images can turn a skin concern into a source of shame. A kinder culture starts by treating skin changes as a health experience—not a character flaw.",
          "Support can be simple: listen without offering unsolicited fixes, avoid commenting on another person's appearance, and encourage professional guidance when someone wants it.",
        ],
      },
      {
        heading: "Confidence is not conditional",
        paragraphs: [
          "People deserve to participate fully in school, work, photos, and relationships on every kind of skin day. Care and confidence can grow at the same time.",
        ],
      },
    ],
  },
];

export const getAuthor = (slug?: string) =>
  authors.find((author) => author.slug === slug);

export const getArticle = (slug?: string) =>
  articles.find((article) => article.slug === slug);
