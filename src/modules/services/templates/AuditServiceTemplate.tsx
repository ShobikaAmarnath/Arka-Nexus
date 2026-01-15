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
            <section className="max-w-[1280px] mx-auto mt-24 lg:mt-32 px-5 lg:px-8">
                {data.title && data.description && data.images && data.images.length > 0 && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Text Content */}
                        <div className="flex flex-col gap-8">
                            <motion.h1
                                variants={fadeSlide}
                                initial="hidden"
                                animate="visible"
                                custom={0.2}
                                className="text-4xl lg:text-5xl font-bold text-[#e66a1c] leading-[1.1]"
                            >
                                {data.title}
                            </motion.h1>

                            <motion.p
                                variants={fadeSlide}
                                initial="hidden"
                                animate="visible"
                                custom={0.4}
                                className="text-base text-white text-justify leading-relaxed"
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
                                <div className="overflow-hidden rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
                                    <img src={data.images?.[0]} alt="Tool" className="w-full h-40 object-cover" />
                                </div>
                                <div className="overflow-hidden rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
                                    <img src={data.images?.[1]} alt="Analysis" className="w-full h-48 object-cover" />
                                </div>
                            </div>
                            {/* Column 2 (Offset) */}
                            <div className="flex flex-col gap-4 mt-8">
                                <div className="overflow-hidden rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
                                    <img src={data.images?.[2]} alt="Monitoring" className="w-full h-48 object-cover" />
                                </div>
                                <div className="overflow-hidden rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
                                    <img src={data.images?.[3]} alt="Efficiency" className="w-full h-40 object-cover" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </section>

            {/* ================= STAGES SECTION ================= */}
            {data.auditImages && data.auditImages.length > 0 && (
                <section className="py-16 lg:py-24 max-w-[1280px] mx-auto px-5">
                    <motion.h3
                        variants={fadeSlide}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-h2 font-bold text-[#e66a1c] mb-10 text-center"
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
                <section className="py-16 max-w-[1280px] mx-auto px-5 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Key Steps Block */}
                        <motion.div
                            variants={fadeSlide}
                            initial="hidden"
                            whileInView="visible"
                            custom={0.1}
                            className="flex flex-col gap-8"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-[#e66a1c] rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-[#e66a1c]">Key Steps Involved</h3>
                            </div>
                            <div className="bg-white border border-[#e4932a] rounded-2xl p-6 shadow-md">
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
                                <div className="w-8 h-8 bg-[#e66a1c] rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-[#e66a1c]">Benefits of {data.title}</h3>
                            </div>
                            <div className="bg-gradient-to-br from-white to-[#faf0d1] border border-[#be6f14] rounded-2xl p-6 shadow-md">
                                <ListBlock items={data.benefits || []} />
                            </div>
                        </motion.div>
                    </div>

                    {/* ================= PROCESS FLOW INDICATOR ================= */}
                    <div className="flex items-center justify-center gap-2 mt-16">
                        {(data.keySteps || []).map((_, index) => (
                            <div key={index} className="flex items-center">
                                <div className="w-3 h-3 bg-[#de801c] rounded-full shadow-sm" />
                                {index < (data.keySteps?.length || 0) - 1 && (
                                    <div className="w-8 lg:w-10 h-[2px] bg-white mx-2 opacity-50" />
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