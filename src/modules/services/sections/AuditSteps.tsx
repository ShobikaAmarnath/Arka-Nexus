import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  steps?: string[];
  images?: string[];
};

const AuditSteps = ({ steps = [], images = [] }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const hasSteps = steps.length > 0;
  const hasImages = images.length > 0;

  // Auto-rotation logic
  useEffect(() => {
    if (!hasImages) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds per step

    return () => clearInterval(interval);
  }, [hasImages, images.length]);

  return (
    <div className="w-full max-w-[1024px] mx-auto px-4">
      <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${!hasSteps ? "justify-center" : ""}`}>
        
        {/* ================= STEP LIST ================= */}
        {hasSteps && (
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12 space-y-3"
          >
            {steps.map((step, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative cursor-pointer transition-all duration-500 p-3 rounded-lg border-l-[3px] 
                    ${isActive 
                      ? "bg-[#e66a1c]/10 border-[#e66a1c] translate-x-2" 
                      : "bg-transparent border-white/10 opacity-50 hover:opacity-100"}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex-shrink-0 w-6 h-6 rounded-card flex items-center justify-center font-bold text-sm
                      ${isActive ? "bg-[#e66a1c] text-black" : "bg-white/10 text-white"}`}>
                      {index + 1}
                    </span>
                    <span className={`text-sm md:text-base font-medium tracking-wide
                      ${isActive ? "text-[#e66a1c]" : "text-white"}`}>
                      {step}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* ================= IMAGE CAROUSEL ================= */}
        {hasImages && (
          <div className="w-full lg:w-7/12 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/3] overflow-hidden rounded-card shadow-card border border-white/10 bg-[#00001d]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={images[activeIndex]}
                  alt={`Audit Stage ${activeIndex + 1}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </AnimatePresence>
              
              {/* Progress Overlay */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1 rounded-full transition-all duration-500 ${i === activeIndex ? "w-6 bg-[#e66a1c]" : "w-1.5 bg-white/40"}`} 
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuditSteps;