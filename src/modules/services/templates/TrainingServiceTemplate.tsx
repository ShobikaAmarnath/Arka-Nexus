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
    quote?: string;
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

const HeroSection = ({ title, description, intro, variant }: { title: string, description?: string, intro?: string, variant?: string }) => (
  <section className="relative min-h-[650px] flex items-center overflow-hidden pt-24 pb-16">
    {/* Background Tech Layer with Deep Glows */}
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#e66a1c]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0.1}
            className="inline-block px-4 py-1 rounded-md bg-[#e66a1c]/10 border border-[#e66a1c]/30"
          >
            <span className="text-[#e66a1c] text-[10px] font-bold uppercase tracking-[0.2em]">
                Technical Excellence
            </span>
          </motion.div>
          
          <motion.h1 
            variants={fadeUp} initial="hidden" animate="visible" custom={0.2}
            className="text-3xl md:text-5xl font-black text-brand-primary leading-[1.05]"
          >
            {title}
          </motion.h1>

          {/* Vertical Accent Bar grounding the long description */}
          <motion.div 
            variants={fadeUp} initial="hidden" animate="visible" custom={0.4}
            className="relative pl-8 border-l-2 border-[#e66a1c]/40 group"
          >
            {/* Interactive Corner Decor */}
            <div className="absolute -left-[2px] top-0 w-[2px] h-12 bg-[#e66a1c] shadow-[0_0_15px_#e66a1c]" />
            
            <p className="text-slate-300 text-h3 md:text-body leading-relaxed text-justify max-w-2xl opacity-90">
              {description}
            </p>

            <p className="text-slate-300 text-h3 md:text-body leading-relaxed text-justify max-w-3xl opacity-90">
              {intro}
            </p>
          </motion.div>
        </div>

        {/* Orbital Visual Side */}
        <div className="lg:col-span-5 relative flex justify-center items-center h-full pt-12 lg:pt-24">
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full max-w-[400px] aspect-square"
          >
            {/* Nested Orbital Tech Rings */}
            <div className="absolute inset-0 border border-slate-800 rounded-full animate-[spin_30s_linear_infinite]" />
            <div className="absolute inset-8 border border-dashed border-slate-700/50 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
            
            {/* The Main Icon Card */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative p-12 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl border border-white/10 shadow-2xl">
                    {/* Pulsing Light behind Icon */}
                    <div className="absolute inset-0 bg-[#e66a1c]/10 blur-2xl rounded-full animate-pulse" />
                    
                    {variant === "shield" ? (
                      <Shield size={100} className="relative z-10 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                    ) : (
                      <GraduationCap size={100} className="relative z-10 text-[#e66a1c] drop-shadow-[0_0_15px_rgba(230,106,28,0.3)]" />
                    )}
                </div>
            </div>

            {/* Tech Node Decorations */}
            <div className="absolute top-10 right-10 w-2 h-2 bg-[#e66a1c] rounded-full animate-ping" />
            <div className="absolute bottom-20 left-4 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-50" />
          </motion.div>
        </div>
      </div>
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
        <h2 className="text-h3 md:text-3xl font-bold text-[#e66a1c]">{title}</h2>
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
    <div className="min-h-screen text-white selection:bg-[#e66a1c]/30 selection:text-[#e66a1c] bg-[#020617]">
      
      {/* Hero with dynamic variant and geometric shapes */}
      <HeroSection 
        title={data.title} 
        description={data.description}
        intro={data.intro} 
        variant={data.heroVariant} 
      />

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        {/* ---------- QUOTE ---------- */}
        {data.quote && (
          <motion.div 
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-[#e66a1c]/10 to-transparent border border-[#e66a1c]/20"
          >
            <p className="text-lg text-slate-300 italic text-center">"{data.quote}"</p>
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
