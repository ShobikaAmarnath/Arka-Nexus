import img1 from "@/assets/images/services/ea1.jpg";
import img2 from "@/assets/images/services/pq1-orange.png";
import img3 from "@/assets/images/services/hs1.png";
import img4 from "@/assets/images/services/spp1.png";
import img5 from "@/assets/images/services/taa1.png";
import img6 from "@/assets/images/services/vs1.jpg";
import img7 from "@/assets/images/services/isa1.jpg";
import img8 from "@/assets/images/services/it.webp";

export interface ServiceCardItem {
  id: number;
  title: string;
  image: string;
  link: string;
}

export interface ServicesLandingContent {
  intro: {
    heading: string;
    description: string;
  };
  services: ServiceCardItem[];
}

export const servicesLandingContent: ServicesLandingContent = {
  intro: {
    heading: "Industrial Consultancy Services",
    description:
      "Consultancy is the practice of providing expert advice, guidance, or specialized knowledge to industry or organizations to help them solve problems, improve efficiency, or achieve their goals. Our technical consultants are professionals with expertise in specific fields like Energy Audit, Power Quality Audit, Thermal, Vibration Audit, Solar Panel efficiency, Industrial safety and Quality Audit, who analyze issues, recommend solutions, and assist in implementation.",
  },

  services: [
    {
      id: 1,
      title: "Energy Audit",
      image: img1,
      link: "/services/energy-audit",
    },
    {
      id: 2,
      title: "Power Quality Audit",
      image: img2,
      link: "/services/power-quality",
    },
    {
      id: 3,
      title: "Harmonic Audit",
      image: img3,
      link: "/services/harmonic-study",
    },
    {
      id: 4,
      title: "Solar Plant Audit",
      image: img4,
      link: "/services/solar-panel-study",
    },
    {
      id: 5,
      title: "Thermal Study",
      image: img5,
      link: "/services/thermal-study",
    },
    {
      id: 6,
      title: "Vibration Audit",
      image: img6,
      link: "/services/vibration-audit",
    },
    {
      id: 7,
      title: "Industrial Safety Audit",
      image: img7,
      link: "/services/industrial-safety-audit",
    },
    {
      id: 8,
      title: "Industrial Training Program",
      image: img8,
      link: "/services/industrial-training",
    },
  ],
};
