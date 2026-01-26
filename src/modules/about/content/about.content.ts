export interface AboutIntroContent {
  headerTagline: string;
  paragraphs: string[];
  brochureFileName: string;
}

export interface AboutTab {
  id: string;
  hash: string;
  label: string;
}

export interface AboutTabsContent {
  tabs: AboutTab[];

  vision: {
    visionText: string;
    missionText: string;
  };

  objectives: string[];

  usps: {
    title: string;
    description: string;
    icon: "award" | "users" | "target";
  }[];

  uspHighlight: {
    emphasis: string;
    text: string;
  };

  coreValues: {
    title: string;
    description: string;
    iconPath: string;
    showCircle?: boolean;
  }[];
}

export interface AboutContent {
  intro: AboutIntroContent;
  tabs: AboutTabsContent;
}

export const aboutContent: AboutContent = {
  intro: {
    headerTagline: "Innovating Industrial Excellence Since 2025",
    paragraphs: [
      "ARKA Nexus, founded in 2025 by experienced professionals, excels in industrial consultancy, technology solutions, and professional training. With a strong industry network built since 2010 through research, product/software development, and process optimization, we drive innovation, efficiency, and sustainable growth across industries.",
      "Our expert consultants provide tailored solutions to optimize performance using cutting-edge technology and industry insights. We offer advanced training to keep professionals ahead in a fast-evolving market and drive sustainable growth through innovative solutions aligned with SDGs. With expertise in IIoT, AI/ML, and R&D, we serve over 100 companies across India, supporting businesses of all sizes in achieving efficiency and long-term success. Partner with us for smarter, sustainable industrial growth.",
    ],
    brochureFileName: "Arka Nexus-brochure.pdf",
  },

  tabs: {
    tabs: [
      { id: "mission", hash: "#vision-mission", label: "Vision & Mission" },
      { id: "objectives", hash: "#objectives", label: "Objectives" },
      { id: "usp", hash: "#usp", label: "USPs" },
      { id: "values", hash: "#values", label: "Core Values" },
    ],

    vision: {
      visionText:
        "To lead the global industrial market by offering reliable technological and ethical business practices, setting a benchmark for excellence.",
      missionText:
        "To deliver consultancy services, comprehensive training, and innovative solutions to resolve industrial challenges in enhancing the operational efficiency and sustainable societal growth.",
    },

    objectives: [
      "To provide expert industrial consultancy to optimize and enhance industrial process.",
      "To offer cutting-edge, innovative technological solutions for sustainable growth.",
      "To train industry professionals to keep them updated on the latest technological advancements through advanced training modules.",
      "To support industrial and societal development aligned with Sustainable Development Goals (SDGs).",
    ],

    usps: [
      {
        title: "Expert Consultants",
        description:
          "Experienced, specialized and certified industrial consultants with advanced, state-of-the-art equipment.",
        icon: "award",
      },
      {
        title: "Extensive Experience",
        description:
          "Core team members bring over a decade of diverse business experience across various industries.",
        icon: "users",
      },
      {
        title: "Broad Client Base",
        description:
          "Spanning all industrial sectors, with over 100 clients served across India.",
        icon: "users",
      },
      {
        title: "Active R&D",
        description:
          "Research in cross-functional areas, offering IIOT and advanced AI/ML solutions to drive innovation.",
        icon: "target",
      },
    ],

    uspHighlight: {
      emphasis: "14+ years",
      text: "of excellence in industrial consultancy and training",
    },

    coreValues: [
      {
        title: "Reliable Solutions",
        description:
          "Consistently delivering dependable technological solutions",
        iconPath: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
      },
      {
        title: "Optimal Outcomes",
        description: "Creating the best possible industrial solutions",
        iconPath: "M12 8v4l3 3",
        showCircle: true,
      },
      {
        title: "Cross-Functional R&D",
        description: "Research spanning multiple disciplines",
        iconPath:
          "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
      },
      {
        title: "Ethical Practices",
        description: "Upholding high standards of business ethics",
        iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
      },
      {
        title: "Team Coordination",
        description: "Effective teamwork and time management",
        iconPath: "M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z",
        showCircle: true,
      },
      {
        title: "Advanced Training",
        description: "Cutting-edge educational modules for professionals",
        iconPath: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",
      },
    ],
  },
};
