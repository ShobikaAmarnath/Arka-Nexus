import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import "./AboutSection.css";
import { VisionIcon, MissionIcon } from "./AboutIcons";
import sampleVideo from "@/assets/videos/eiei.mp4";
import Brochure from "@/assets/docs/Brochure.pdf";
import { getHomeContent } from "../providers/home.provider";
import type { HomeContent } from "../content/home.content";

export default function AboutSection() {
  const [content, setContent] = useState<HomeContent | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!content) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "-50px 0px" },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [content]);

  // Fetch content
  useEffect(() => {
    getHomeContent().then(setContent);
  }, []);

  const downloadBrochure = () => {
    const link = document.createElement("a");
    link.href = Brochure;
    link.download = content ? content.about.brochureFileName : "Brochure.pdf";
    link.click();
  };

  if (!content) return null;

  return (
    <>
      <motion.section
        id="about"
        className="about-section relative overflow-hidden bg-brand-primary-blue bg-gradient-to-br from-[#000c20] to-[#000c1c] px-safe-x py-section-y"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        {/* Centered Main Heading */}
        <div className="relative mx-auto mb-section-y max-w-arka text-center">
          <motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.span className="mb-[15px] inline-block rounded-[4px] bg-brand-secondary/10 px-[15px] py-1.5 text-body-sm font-semibold uppercase tracking-[3px] text-brand-secondary">
              {content.about.badge}
            </motion.span>

            <motion.h2
              className="mb-5 text-h2 tracking-tight text-brand-secondary drop-shadow-md"
              transition={{
                delay: 0.4,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
            >
              {content.about.heading}
            </motion.h2>

            <motion.div
              className="relative h-1 w-[120px] overflow-hidden rounded-card bg-gradient-to-r from-transparent via-brand-secondary to-transparent"
              whileInView={{ width: "120px" }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.div
                className="decorator-shine absolute left-0 top-0 h-full w-[30px] bg-gradient-to-r from-transparent via-white/90 to-transparent"
                animate={{ x: [0, 120, 0], opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 3, repeatDelay: 2 }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Main content container with text and video */}
        <div className="mx-auto my-section-y mb-8 grid max-w-arka grid-cols-1 items-center gap-8 sm:px-0.5 md:grid-cols-[1fr_1fr] lg:grid-cols-[2fr_1.5fr] lg:gap-1 lg:px-safe-x">
          {/* Left Text Content */}
          <div className="space-y-4 text-justify font-semibold">
            {content.about.paragraphs.map((para, idx) => (
              <motion.p
                key={idx}
                className={
                  para.variant === "highlight"
                    ? "border-l-4 border-brand-secondary pl-[15px] text-h4 font-medium leading-relaxed text-neutral-white"
                    : "text-justify text-body leading-relaxed text-neutral-white"
                }
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.2, duration: 0.6 }}
              >
                {para.emphasis ? (
                  <>
                    <strong className="text-brand-secondary">
                      {para.emphasis}
                    </strong>
                    , {para.text}
                  </>
                ) : (
                  para.text
                )}
              </motion.p>
            ))}
          </div>

          {/* Right Video */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <motion.div
              className="group relative w-4/5"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
            >
              <video
                src={sampleVideo}
                autoPlay
                muted
                loop
                playsInline
                className="border-3 w-full rounded-card border-brand-secondary/30 shadow-card transition-all duration-300"
              />
              <div className="absolute bottom-3 right-3 rounded-full bg-brand-secondary p-2 text-[0.6rem] font-semibold text-brand-primary-blue shadow-lg lg:right-[10px]">
                {content.about.videoLabel}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mission and Vision Container */}
        <section
          ref={sectionRef}
          className="mx-auto my-section-y max-w-arka sm:px-0.5 lg:px-safe-x"
        >
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:gap-10">
            {/* Vision Card */}
            <div
              className={`relative min-h-[180px] cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 scale-95 opacity-0"}`}
            >
              <div className="mb-2 flex flex-row items-center gap-3 text-center md:flex-row md:text-left">
                <div className="flex-shrink-0">
                  <VisionIcon isVisible={isVisible} />
                </div>
                <h3 className="text-h3 text-brand-dark">Our Vision</h3>
              </div>
              <p className="text-justify text-body-sm leading-relaxed text-slate-500 md:text-left">
                {content.about.vision}
              </p>
              <div className="absolute left-1/2 top-0 h-1 w-10 -translate-x-1/2 rounded-b-lg bg-gradient-to-r from-blue-500 to-purple-500 md:w-[60px]" />
            </div>

            {/* Mission Card */}
            <div
              className={`relative min-h-[180px] cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl ${isVisible ? "translate-x-0 opacity-100" : "translate-x-12 scale-95 opacity-0"}`}
            >
              <div className="mb-2 flex flex-row items-center gap-4 text-center md:flex-row md:text-left">
                <MissionIcon isVisible={isVisible} />
                <h3 className="text-h3 text-brand-dark">Our Mission</h3>
              </div>
              <p className="text-justify text-body-sm leading-relaxed text-slate-500 md:text-left">
                {content.about.mission}
              </p>
              <div className="absolute left-1/2 top-0 h-1 w-10 -translate-x-1/2 rounded-b-lg bg-gradient-to-r from-purple-500 to-pink-500 md:w-[60px]" />
            </div>
          </div>
        </section>
        {/* Download Brochure Button */}
        <button
          onClick={downloadBrochure}
          className="download-brochure-btn mx-auto flex cursor-pointer items-center justify-center gap-2"
        >
          <Download size={18} />
          Download Brochure
        </button>
      </motion.section>
    </>
  );
}
