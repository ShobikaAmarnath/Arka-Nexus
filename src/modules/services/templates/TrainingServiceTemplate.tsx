import { motion, easeOut } from "framer-motion";
import { Shield, GraduationCap, CheckCircle2 } from "lucide-react";

type Props = {
  data: {
    title: string;
    description: string;
    intro?: string;
    images?: string[];
    heroVariant?: "shield" | "training";
    keyAreas?: string[];
    needs?: string[];
    objectives?: string[];
    stages?: string[];
  };
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: d, duration: 0.8, ease: easeOut },
  }),
};

const HeroSection = ({ title, description, variant }: { title: string, description: string, variant?: string }) => (
  <section className="relative min-h-[500px] flex items-center overflow-hidden pt-20">
    {/* Geometric Background Shapes */}
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-white/10 rounded-full animate-pulse" />
      <div className="absolute bottom-[20%] right-[15%] w-56 h-56 bg-white/5 rounded-full animate-bounce" style={{ animationDuration: '6s' }} />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
      <div className="text-center lg:text-left space-y-6">
        <motion.h1 
          variants={fadeUp} initial="hidden" animate="visible" custom={0.1}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#e66a1c] leading-tight"
        >
          {title}
        </motion.h1>
        <motion.p 
          variants={fadeUp} initial="hidden" animate="visible" custom={0.3}
          className="text-slate-200 text-base md:text-lg leading-relaxed text-justify max-w-2xl mx-auto lg:mx-0"
        >
          {description}
        </motion.p>
      </div>

      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 1 }}
        className="relative flex items-center justify-center h-64"
      >
        {/* Pulse Rings */}
        <div className="absolute w-48 h-48 border-2 border-[#e66a1c]/30 rounded-full animate-ping" />
        <div className="absolute w-64 h-64 border border-[#e66a1c]/10 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        
        {variant === "shield" ? (
          <Shield className="w-32 h-32 text-white drop-shadow-[0_0_20px_rgba(230,106,28,0.4)]" />
        ) : (
          <div className="bg-[#e66a1c]/20 p-8 rounded-full">
            <GraduationCap className="w-24 h-24 text-[#e66a1c]" />
          </div>
        )}
      </motion.div>
    </div>
  </section>
);

const InfoBlock = ({ title, items, isNumbered = false }: { title: string; items?: string[]; isNumbered?: boolean }) => {
  if (!items || items.length === 0) return null;

  return (
    <motion.div
      variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="relative inline-block">
        <h2 className="text-2xl md:text-3xl font-bold text-[#e66a1c]">{title}</h2>
        <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-[#e66a1c] to-transparent rounded-full" />
      </div>

      <div className={`grid gap-4 ${isNumbered ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
        {items.map((item, i) => (
          <div 
            key={i} 
            className="flex items-center gap-4 p-4 bg-white/5 border-l-4 border-[#e66a1c] rounded-r-xl hover:bg-white/10 transition-all group"
          >
            {isNumbered ? (
              <span className="shrink-0 w-8 h-8 rounded-full bg-[#e66a1c] text-black flex items-center justify-center font-bold text-sm">
                {i + 1}
              </span>
            ) : (
              <CheckCircle2 className="shrink-0 w-5 h-5 text-[#e66a1c] opacity-70 group-hover:opacity-100 transition-opacity" />
            )}
            <span className="text-slate-100 font-medium text-sm md:text-base leading-snug">{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

/* ---------- MAIN TEMPLATE ---------- */

const TrainingServiceTemplate = ({ data }: Props) => {
  return (
    <div className="min-h-screen text-white selection:bg-[#e66a1c]/30 selection:text-[#e66a1c]">
      
      {/* Hero with dynamic variant and geometric shapes */}
      <HeroSection 
        title={data.title} 
        description={data.description} 
        variant={data.heroVariant} 
      />

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        
        {/* Optional Intro sentence if provided */}
        {data.intro && (
          <motion.div 
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-[#e66a1c]/10 to-transparent border border-[#e66a1c]/20"
          >
            <p className="text-lg text-slate-300 italic text-center">"{data.intro}"</p>
          </motion.div>
        )}

        {/* ---------- OBJECTIVES ---------- */}
        {data.objectives && data.objectives.length > 0 && (
          <InfoBlock
            title="Key Objectives"
            items={data.objectives}
          />
        )}

        {/* ---------- NEEDS ---------- */}
        {data.needs && data.needs.length > 0 && (
          <InfoBlock
            title={
              data.heroVariant === "shield"
                ? "Need for Industrial Safety Audit"
                : "Need for the Training Program"
            }
            items={data.needs}
          />
        )}

        {/* ---------- STAGES ---------- */}
        {data.stages && data.stages.length > 0 && (
          <InfoBlock
            title="Stages of Implementation"
            items={data.stages}
            isNumbered
          />
        )}

        {/* ---------- KEY AREAS ---------- */}
        {data.keyAreas && data.keyAreas.length > 0 && (
          <InfoBlock
            title="Key Areas Covered"
            items={data.keyAreas}
            isNumbered
          />
        )}

      </div>
    </div>
  );
};

export default TrainingServiceTemplate;
