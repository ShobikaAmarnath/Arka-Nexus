import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import './AboutSection.css';
import { VisionIcon, MissionIcon } from "./AboutIcons";
import sampleVideo from "@/assets/videos/eiei.mp4";
import Brochure from '@/assets/docs/Brochure.pdf';

export default function AboutSection() {

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '-50px 0px' }
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
  }, []);

  const downloadBrochure = () => {
    const link = document.createElement('a');
    link.href = Brochure;
    link.download = 'Arka Nexus-brochure.pdf';
    link.click();
  };

  return (
    <>
      <motion.section
        id="about"
        className="about-section relative bg-brand-blue-bg bg-gradient-to-br from-[#000c20] to-[#000c1c] py-[30px] px-5 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        {/* Centered Main Heading */}
        <div className="max-w-[1200px] mx-auto text-center mb-5 relative">
          <motion.div className="flex flex-col items-center relative" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <motion.span className="inline-block text-base font-semibold tracking-[3px] text-brand-secondary uppercase bg-brand-secondary/10 py-1.5 px-[15px] rounded-[4px] mb-[15px]">
              ARKA NEXUS
            </motion.span>

            <motion.h2 className="text-[2rem] text-brand-secondary mb-5 font-extrabold tracking-tight drop-shadow-md"
              transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100 }}>
              Who We Are
            </motion.h2>

            <motion.div className="h-1 bg-gradient-to-r from-transparent via-brand-secondary to-transparent rounded-[2px] relative overflow-hidden w-[120px]"
              whileInView={{ width: "120px" }} transition={{ delay: 0.7, duration: 0.8 }}>
              <motion.div className="decorator-shine absolute top-0 left-0 w-[30px] h-full bg-gradient-to-r from-transparent via-white/90 to-transparent"
                animate={{ x: [0, 120, 0], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 3, repeatDelay: 2 }} />
            </motion.div>
          </motion.div>
        </div>

        {/* Main content container with text and video */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1.5fr] max-w-[1300px] mx-auto mb-[60px] items-center gap-10">
          {/* Left Text Content */}
          <div className="space-y-4 text-justify font-semibold">
            <motion.p className="text-xl lg:text-xl text-neutral-white border-l-4 border-brand-secondary pl-[15px] font-medium leading-relaxed"
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
              <strong className="text-brand-secondary font-semibold">ARKA Nexus</strong>, founded in 2025 by experienced professionals, excels in industrial consultancy, technology solutions, and professional training.
            </motion.p>
            <motion.p className="text-lg lg:text-lg text-neutral-white text-justify leading-relaxed" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
              With a strong industry network built since 2010 through research, product/software development, and process optimization, we drive innovation, efficiency, and sustainable growth across industries.
            </motion.p>
            <motion.p className="text-lg lg:text-lg text-neutral-white text-justify leading-relaxed" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.7, duration: 0.6 }}>
              Our expert consultants provide tailored solutions using cutting-edge technology and industry insights. We offer advanced training and support over 100 companies across India, helping them achieve efficiency and long-term success.
            </motion.p>
          </div>

          {/* Right Video */}
          <div className="relative flex justify-center">
            <motion.div className="relative w-4/5 group" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.03 }}>
              <video src={sampleVideo} autoPlay muted loop playsInline className="w-full rounded-2xl shadow-2xl border-3 border-brand-secondary/30 transition-all duration-300" />
              <div className="absolute bottom-5 right-5 lg:right-[10px] bg-brand-secondary text-brand-blue-bg py-2 px-4 rounded-full font-semibold text-[0.6rem] shadow-lg">
                Industrial Excellence
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mission and Vision Container */}
        <section ref={sectionRef} className="max-w-[1200px] mx-auto py-5 px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-start">

            {/* Vision Card */}
            <div className={`relative bg-white rounded-2xl p-6 border border-slate-200 shadow-xl min-h-[180px] transition-all duration-500 cursor-pointer hover:-translate-y-1.5 hover:shadow-2xl 
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12 scale-95'}`}>
              <div className="flex flex-row md:flex-row items-center gap-3 mb-4 text-center md:text-left">
                <div className="flex-shrink-0">
                  <VisionIcon isVisible={isVisible} />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-slate-800">Our Vision</h3>
              </div>
              <p className="text-slate-500 leading-relaxed text-base lg:text-base text-justify md:text-left">
                To lead the global industrial market with reliable technological and ethical business practices, setting a benchmark for excellence in innovation and sustainability.              </p>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 md:w-[60px] h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-lg" />
            </div>

            {/* Mission Card */}
            <div className={`relative bg-white rounded-2xl p-6 border border-slate-200 shadow-xl min-h-[180px] transition-all duration-500 cursor-pointer hover:-translate-y-1.5 hover:shadow-2xl 
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 scale-95'}`}>
              <div className="flex flex-row md:flex-row items-center gap-4 mb-4 text-center md:text-left">
                <MissionIcon isVisible={isVisible} />
                <h3 className="text-xl lg:text-2xl font-bold text-slate-800">Our Mission</h3>
              </div>
              <p className="text-slate-500 leading-relaxed text-base lg:text-base text-justify md:text-left">
                To deliver consultancy services, comprehensive training, and innovative solutions to resolve industrial challenges and enhance operational efficiency for sustainable societal growth.              </p>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 md:w-[60px] h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-b-lg" />
            </div>

          </div>
        </section>

        <button onClick={downloadBrochure} className="download-brochure-btn mx-auto flex items-center justify-center gap-2 mt-2 cursor-pointer">
          <Download size={18} />
          Download Brochure
        </button>
      </motion.section>
    </>
  );
}
