export interface HomeGridContent {
  heroTitle: string;
  heroTagline: string;
  gradientColor: string;
  autoSpeed: number;
  gridItems: string[];
}

export interface HomeAboutContent {
  badge: string;
  heading: string;
  paragraphs: AboutParagraph[];
  videoLabel: string;
  vision: string;
  mission: string;
  brochureFileName: string;
}

export interface HomeContactContent {
  title: string;
  description: string;
  services: string[];
}

export interface HomeContent {
  grid: HomeGridContent;
  about: HomeAboutContent;
  contact: HomeContactContent;
}

export interface AboutParagraph {
  variant: "highlight" | "normal";
  text: string;
  emphasis?: string;
}

export const homeContent: HomeContent = {
  grid: {
    heroTitle: "Arka Nexus",
    heroTagline: "Engineering Intelligence Empowering Industry",
    gradientColor: "rgba(238, 255, 0, 0.3)",
    autoSpeed: 1.5,
    gridItems: [
      "https://media.istockphoto.com/id/1390249924/photo/industrial-plant-for-the-production-of-sheet-metal-in-a-steel-mill-storage-of-sheet-rolls.jpg?s=1024x1024&w=is&k=20&c=hNYNzW3cJemADUDb8rmGhmpCT-E2bwtPyFS6eO9wT44=",
      "https://plus.unsplash.com/premium_photo-1678889596384-6e317ec8bf97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://th.bing.com/th/id/OIP.l9MV3oQFW5yvSSWyGzbD4AHaDi?rs=1&pid=ImgDetMain",
      "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://media.istockphoto.com/id/173194744/photo/close-up-of-a-heartbeat-on-a-machine.jpg?s=1024x1024&w=is&k=20&c=_zsgrJzOq-kYstc3DlRWaU15ftpe9vAk6YjJA1d-uhI=",
      "https://images.unsplash.com/photo-1643649819787-8433d30868ce?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://media.istockphoto.com/id/1337173750/photo/solar-and-wind-power.jpg?s=612x612&w=0&k=20&c=krNUQVFMq4DDPDvhKhW4SwL06NlmZ7dcHWWGDsxZzKI=",
      "https://plus.unsplash.com/premium_photo-1678889596384-6e317ec8bf97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1679917152396-4b18accacb9d?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1643649819787-8433d30868ce?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://media.istockphoto.com/id/1135885965/photo/thermoscan-industrial-equipment-used-for-checking-the-internal-temperature-of-the-machine-for.jpg?s=1024x1024&w=is&k=20&c=-UNNRcvTu0zZ6dqkE31PrC32wqD-ZW9tY48XvDKN55Y=",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbp0Dxw3RTE6T4RMGdX3hX8ZmhDzCpTTJMJA&s",
      "https://plus.unsplash.com/premium_photo-1679917152396-4b18accacb9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29sYXIlMjBwYW5lbHxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1682144748274-add3d8ed04ea?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1690973692388-239878450c7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661960643553-ccfbf7d921f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1678889596384-6e317ec8bf97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://th.bing.com/th/id/OIP.l9MV3oQFW5yvSSWyGzbD4AHaDi?rs=1&pid=ImgDetMain",
      "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://media.istockphoto.com/id/173194744/photo/close-up-of-a-heartbeat-on-a-machine.jpg?s=1024x1024&w=is&k=20&c=_zsgrJzOq-kYstc3DlRWaU15ftpe9vAk6YjJA1d-uhI=",
      "https://plus.unsplash.com/premium_photo-1678889596384-6e317ec8bf97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1679917152396-4b18accacb9d?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1643649819787-8433d30868ce?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://media.istockphoto.com/id/1135885965/photo/thermoscan-industrial-equipment-used-for-checking-the-internal-temperature-of-the-machine-for.jpg?s=1024x1024&w=is&k=20&c=-UNNRcvTu0zZ6dqkE31PrC32wqD-ZW9tY48XvDKN55Y=",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbp0Dxw3RTE6T4RMGdX3hX8ZmhDzCpTTJMJA&s",
      "https://media.istockphoto.com/id/1337173750/photo/solar-and-wind-power.jpg?s=612x612&w=0&k=20&c=krNUQVFMq4DDPDvhKhW4SwL06NlmZ7dcHWWGDsxZzKI=",
      "https://plus.unsplash.com/premium_photo-1678889596384-6e317ec8bf97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },

  about: {
    badge: "ARKA NEXUS",
    heading: "Who We Are",
    paragraphs: [
      {
        variant: "highlight",
        emphasis: "ARKA NEXUS",
        text: "founded in 2025 by experienced professionals, excels in industrial consultancy, technology solutions, and professional training.",
      },
      {
        variant: "normal",
        text: "With a strong industry network built since 2010 through research, product/software development, and process optimization, we drive innovation, efficiency, and sustainable growth across industries.",
      },
      {
        variant: "normal",
        text: "Our expert consultants provide tailored solutions using cutting-edge technology and industry insights. We offer advanced training and support over 100 companies across India, helping them achieve efficiency and long-term success.",
      },
    ],
    videoLabel: "Industrial Excellence",
    vision:
      "To lead the global industrial market with reliable technological and ethical business practices, setting a benchmark for excellence in innovation and sustainability.",
    mission:
      "To deliver consultancy services, comprehensive training, and innovative solutions to resolve industrial challenges and enhance operational efficiency for sustainable societal growth.",
    brochureFileName: "Arka Nexus-brochure.pdf",
  },

  contact: {
    title: "Empowering Your Industry Through Engineering Excellence",
    description:
      "Ensure optimal performance and reliability of your electrical systems with our comprehensive audit and analysis services. Deep technical expertise meets intelligent solutions.",
    services: [
      "Comprehensive energy auditing",
      "Advanced power quality analysis",
      "Harmonic distortion assessment",
      "Thermal imaging diagnostics",
      "Vibration analysis & monitoring",
    ],
  },
};
