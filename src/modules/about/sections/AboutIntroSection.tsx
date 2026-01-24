import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import Brochure from "@/assets/docs/Brochure.pdf";
import { getAboutContent } from "../providers/about.provider";
import NotFoundPage from "../../../shared/not-found/NotFoundPage";

export default function AboutIntroSection() {
  const [content, setContent] = useState<any>(null);
  const [visibleSections, setVisibleSections] = useState({
    header: false,
    intro: false,
  });

  useEffect(() => {
    getAboutContent().then(setContent);
    setTimeout(() => setVisibleSections(v => ({ ...v, header: true })), 300);
    setTimeout(() => setVisibleSections(v => ({ ...v, intro: true })), 800);
  }, []);

  if (!content) return <NotFoundPage />;

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
        <p className="text-xl md:text-h3 text-brand-primary font-bold uppercase text-center mb-4">
          {content.intro.headerTagline}
        </p>
      </div>

      {/* Introduction Section */}
      <div 
        className={`mx-auto max-w-arka transition-all duration-1000 ${
          visibleSections.intro ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[10px]'
        }`}
      >
        <div className="bg-blue-900/30 px-6 pt-6 md:p-8 rounded-lg shadow-xl border border-[#ab6e18]/60 text-justify">
          {content.intro.paragraphs.map((p: string, i: number) => (
            <p
              key={i}
              className="text-neutral-white text-base md:text-lg leading-relaxed mb-6"
            >
              {p}
            </p>
          ))}
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
