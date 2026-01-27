import { motion } from "framer-motion";
import ListBlock from "../sections/ListBlock";
import AuditSteps from "../sections/AuditSteps";

type Props = {
  data: {
    title: string;
    description: string;
    images?: string[];
    auditImages?: string[];
    steps?: string[];
    keySteps?: string[];
    benefits?: string[];
  };
};

const fadeSlide = {
  hidden: { opacity: 0, x: -30 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay, duration: 0.8 },
  }),
};

const AuditServiceTemplate = ({ data }: Props) => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="mx-auto mt-24 max-w-[1280px] px-5 lg:mt-32 lg:px-8">
        {data.title &&
          data.description &&
          data.images &&
          data.images.length > 0 && (
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              {/* Text Content */}
              <div className="flex flex-col gap-8">
                <motion.h1
                  variants={fadeSlide}
                  initial="hidden"
                  animate="visible"
                  custom={0.2}
                  className="text-h1 font-black leading-[1.05] text-brand-primary"
                >
                  {data.title}
                </motion.h1>

                <motion.p
                  variants={fadeSlide}
                  initial="hidden"
                  animate="visible"
                  custom={0.4}
                  className="text-justify text-body leading-relaxed text-white"
                >
                  {data.description}
                </motion.p>
              </div>

              {/* Hero Image Gallery (Asymmetric Grid) */}
              <motion.div
                variants={fadeSlide}
                initial="hidden"
                animate="visible"
                custom={0.6}
                className="grid grid-cols-2 gap-4"
              >
                {/* Column 1 */}
                <div className="flex flex-col gap-4">
                  <div className="cursor-pointer overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                    <img
                      src={data.images?.[0]}
                      alt="Tool"
                      className="h-40 w-full object-cover"
                    />
                  </div>
                  <div className="cursor-pointer overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                    <img
                      src={data.images?.[1]}
                      alt="Analysis"
                      className="h-48 w-full object-cover"
                    />
                  </div>
                </div>
                {/* Column 2 (Offset) */}
                <div className="mt-8 flex flex-col gap-4">
                  <div className="cursor-pointer overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                    <img
                      src={data.images?.[2]}
                      alt="Monitoring"
                      className="h-48 w-full object-cover"
                    />
                  </div>
                  <div className="cursor-pointer overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                    <img
                      src={data.images?.[3]}
                      alt="Efficiency"
                      className="h-40 w-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          )}
      </section>

      {/* ================= STAGES SECTION ================= */}
      {data.auditImages && data.auditImages.length > 0 && (
        <section className="mx-auto max-w-[1280px] px-5 py-16 lg:py-24">
          <motion.h3
            variants={fadeSlide}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10 text-center text-h2 font-bold text-brand-primary"
          >
            Our Stages in {data.title} :
          </motion.h3>
          <AuditSteps
            steps={data.steps || []}
            images={data.auditImages || []}
          />
        </section>
      )}

      {/* ================= KEY STEPS & BENEFITS SECTION ================= */}
      {data.keySteps && data.benefits && (
        <section className="mx-auto max-w-[1280px] px-5 py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Key Steps Block */}
            <motion.div
              variants={fadeSlide}
              initial="hidden"
              whileInView="visible"
              custom={0.1}
              className="flex flex-col gap-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary">
                  <svg
                    className="h-4 w-4 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-h3 font-bold text-brand-primary">
                  Key Steps Involved
                </h3>
              </div>
              <div className="rounded-2xl border border-[#e4932a] bg-white p-6 shadow-md">
                <ListBlock items={data.keySteps || []} />
              </div>
            </motion.div>

            {/* Benefits Block */}
            <motion.div
              variants={fadeSlide}
              initial="hidden"
              whileInView="visible"
              custom={0.3}
              className="flex flex-col gap-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary">
                  <svg
                    className="h-4 w-4 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-h3 font-bold text-brand-primary">
                  Benefits of {data.title}
                </h3>
              </div>
              <div className="rounded-2xl border border-[#be6f14] bg-gradient-to-br from-white to-[#faf0d1] p-6 shadow-md">
                <ListBlock items={data.benefits || []} />
              </div>
            </motion.div>
          </div>

          {/* ================= PROCESS FLOW INDICATOR ================= */}
          <div className="mt-16 flex items-center justify-center gap-2">
            {(data.keySteps || []).map((_, index) => (
              <div key={index} className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-brand-primary shadow-sm" />
                {index < (data.keySteps?.length || 0) - 1 && (
                  <div className="mx-2 h-[2px] w-8 bg-white opacity-50 lg:w-10" />
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default AuditServiceTemplate;
