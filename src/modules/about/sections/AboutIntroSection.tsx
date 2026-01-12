import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import Brochure from "@/assets/docs/Brochure.pdf";

export default function AboutIntroSection() {
  const [visibleSections, setVisibleSections] = useState({
    header: false,
    intro: false,
  });

  useEffect(() => {
    setTimeout(() => setVisibleSections(v => ({ ...v, header: true })), 300);
    setTimeout(() => setVisibleSections(v => ({ ...v, intro: true })), 800);
  }, []);

  const downloadBrochure = () => {
    const link = document.createElement("a");
    link.href = Brochure;
    link.download = "Arka Nexus-brochure.pdf";
    link.click();
  };

  return (
    <>
      <div className="flex flex-col gap-4">
      {/* Header Section */}
      <div 
        className={`transition-all duration-1000 ${
          visibleSections.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[10px]'
        }`}
      >
        <p className="text-xl md:text-2xl text-brand-primary font-bold uppercase text-center mb-4">
          Innovating Industrial Excellence Since 2025
        </p>
      </div>

      {/* Introduction Section */}
      <div 
        className={`mx-auto max-w-arka transition-all duration-1000 ${
          visibleSections.intro ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[10px]'
        }`}
      >
        <div className="bg-blue-900/30 p-6 md:p-8 rounded-lg shadow-xl border border-[#ab6e18]/60 text-justify">
          <p className="text-neutral-white text-base md:text-lg leading-relaxed mb-4">
            ARKA Nexus, founded in 2025 by experienced professionals, excels in industrial consultancy, 
            technology solutions, and professional training. With a strong industry network built since 2010 
            through research, product/software development, and process optimization, we drive innovation, 
            efficiency, and sustainable growth across industries.
          </p>
          <p className="text-neutral-white text-base md:text-lg leading-relaxed">
            Our expert consultants provide tailored solutions to optimize performance using cutting-edge 
            technology and industry insights. We offer advanced training to keep professionals ahead in a 
            fast-evolving market and drive sustainable growth through innovative solutions aligned with SDGs. 
            With expertise in IIoT, AI/ML, and R&D, we serve over 100 companies across India, supporting 
            businesses of all sizes in achieving efficiency and long-term success. Partner with us for smarter, 
            sustainable industrial growth.
          </p>
        </div>
      </div>

      {/* Download Button Section */}
      <div className="flex justify-center mt-4">
        <button onClick={downloadBrochure} className="download-brochure-btn mx-auto flex items-center justify-center gap-2 mt-2 cursor-pointer">
          <Download size={18} />
          Download Brochure
        </button>
      </div>
    </div>
    </>
  );
};
