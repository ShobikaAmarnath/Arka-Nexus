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

const HeroSection = ({
  title,
  description,
  intro,
  variant,
}: {
  title: string;
  description?: string;
  intro?: string;
  variant?: string;
}) => (
  <section className="relative flex min-h-[650px] items-center overflow-hidden pb-16 pt-24">
    {/* Background Tech Layer with Deep Glows */}
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50"></div>
      <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-primary/10 blur-[100px]" />
      <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-900/10 blur-[120px]" />
    </div>

    <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-7">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="inline-block rounded-md border border-brand-primary/30 bg-brand-primary/10 px-4 py-1"
          >
            <span className="text-body-sm font-bold uppercase tracking-[0.2em] text-brand-primary">
              Technical Excellence
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="text-h1 font-black leading-[1.05] text-brand-primary"
          >
            {title}
          </motion.h1>

          {/* Vertical Accent Bar grounding the long description */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="group relative border-l-2 border-brand-primary/40 pl-8"
          >
            {/* Interactive Corner Decor */}
            <div className="absolute -left-[2px] top-0 h-12 w-[2px] bg-brand-primary shadow-[0_0_15px_brand-primary]" />

            <p className="max-w-2xl text-justify text-body leading-relaxed text-neutral-white opacity-90">
              {description}
            </p>

            <p className="max-w-3xl text-justify text-body leading-relaxed text-neutral-white opacity-90">
              {intro}
            </p>
          </motion.div>
        </div>

        {/* Orbital Visual Side */}
        <div className="relative flex h-full items-center justify-center pt-12 lg:col-span-5 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative aspect-square w-full max-w-[400px]"
          >
            {/* Nested Orbital Tech Rings */}
            <div className="absolute inset-0 animate-[spin_30s_linear_infinite] rounded-full border border-slate-800" />
            <div className="absolute inset-8 animate-[spin_20s_linear_infinite_reverse] rounded-full border border-dashed border-slate-700/50" />

            {/* The Main Icon Card */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-12 shadow-2xl backdrop-blur-xl">
                {/* Pulsing Light behind Icon */}
                <div className="absolute inset-0 animate-pulse rounded-full bg-brand-primary/10 blur-2xl" />

                {variant === "shield" ? (
                  <Shield
                    size={100}
                    className="relative z-10 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  />
                ) : (
                  <GraduationCap
                    size={100}
                    className="relative z-10 text-brand-primary drop-shadow-[0_0_15px_rgba(230,106,28,0.3)]"
                  />
                )}
              </div>
            </div>

            {/* Tech Node Decorations */}
            <div className="absolute right-10 top-10 h-2 w-2 animate-ping rounded-full bg-brand-primary" />
            <div className="absolute bottom-20 left-4 h-1.5 w-1.5 rounded-full bg-blue-500 opacity-50" />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const InfoBlock = ({
  title,
  items,
  isNumbered = false,
}: {
  title: string;
  items?: string[];
  isNumbered?: boolean;
}) => {
  if (!items || items.length === 0) return null;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="relative inline-block">
        <h2 className="text-h3 font-bold text-brand-primary">{title}</h2>
        <div className="absolute -bottom-2 left-0 h-1 w-1/2 rounded-full bg-gradient-to-r from-brand-primary to-transparent" />
      </div>

      <div
        className={`grid gap-4 ${isNumbered ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2"}`}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="group flex items-center gap-4 rounded-r-xl border-l-4 border-brand-primary bg-white/5 p-4 transition-all hover:bg-white/10"
          >
            {isNumbered ? (
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary text-body-sm font-bold text-black">
                {i + 1}
              </span>
            ) : (
              <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-primary opacity-70 transition-opacity group-hover:opacity-100" />
            )}
            <span className="text-body-sm font-medium leading-snug text-slate-100">
              {item}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

/* ---------- MAIN TEMPLATE ---------- */

const TrainingServiceTemplate = ({ data }: Props) => {
  return (
    <div className="min-h-screen bg-[#020617] text-neutral-white">
      {/* Hero with dynamic variant and geometric shapes */}
      <HeroSection
        title={data.title}
        description={data.description}
        intro={data.intro}
        variant={data.heroVariant}
      />

      <div className="mx-auto max-w-7xl space-y-24 px-6 py-20">
        {/* ---------- QUOTE ---------- */}
        {data.quote && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-brand-primary/20 bg-gradient-to-br from-brand-primary/10 to-transparent p-8"
          >
            <p className="text-center text-h2 italic text-slate-300">
              "{data.quote}"
            </p>
          </motion.div>
        )}

        {/* ---------- OBJECTIVES ---------- */}
        {data.objectives && data.objectives.length > 0 && (
          <InfoBlock title="Key Objectives" items={data.objectives} />
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
