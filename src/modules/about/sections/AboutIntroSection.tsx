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
    setTimeout(() => setVisibleSections((v) => ({ ...v, header: true })), 300);
    setTimeout(() => setVisibleSections((v) => ({ ...v, intro: true })), 800);
  }, []);

  if (!content) return <NotFoundPage />;

  const downloadBrochure = () => {
    const link = document.createElement("a");
    link.href = Brochure;
    link.download = content ? content.about.brochureFileName : "Brochure.pdf";
    link.click();
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        {/* Header Section */}
        <div
          className={`transition-all duration-1000 ${
            visibleSections.header
              ? "translate-y-0 opacity-100"
              : "translate-y-[10px] opacity-0"
          }`}
        >
          <p className="mb-4 text-center text-h3 font-bold uppercase text-brand-primary">
            {content.intro.headerTagline}
          </p>
        </div>

        {/* Introduction Section */}
        <div
          className={`mx-auto max-w-arka transition-all duration-1000 ${
            visibleSections.intro
              ? "translate-y-0 opacity-100"
              : "translate-y-[10px] opacity-0"
          }`}
        >
          <div className="rounded-lg border border-[#ab6e18]/60 bg-blue-900/30 px-6 pt-6 text-justify shadow-xl md:p-8">
            {content.intro.paragraphs.map((p: string, i: number) => (
              <p
                key={i}
                className="mb-6 text-h4 leading-relaxed text-neutral-white"
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Download Button Section */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={downloadBrochure}
            className="download-brochure-btn mx-auto mt-2 flex cursor-pointer items-center justify-center gap-2"
          >
            <Download size={18} />
            Download Brochure
          </button>
        </div>
      </div>
    </>
  );
}
