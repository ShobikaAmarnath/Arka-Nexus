import { motion, easeInOut, type Variants } from 'framer-motion';
import { Link } from "react-router-dom";

import img1 from "@/assets/images/services/ea1.jpg";
import img2 from "@/assets/images/services/pq1-orange.png";
import img3 from "@/assets/images/services/hs1.png";
import img4 from "@/assets/images/services/spp1.png";
import img5 from "@/assets/images/services/taa1.png";
import img6 from "@/assets/images/services/vs1.jpg";
import img7 from "@/assets/images/services/isa1.jpg";
import img8 from "@/assets/images/services/it.webp";

export default function ServiceSection() {

    const services = [
        {
            id: 1,
            title: "Energy Audit",
            image: img1,
            link: '/energy-audit'
        },
        {
            id: 2,
            title: "Power Quality Audit",
            image: img2,
            link: '/power-quality'
        },
        {
            id: 3,
            title: "Harmonic Audit",
            image: img3,
            link: '/harmonic-study'
        },
        {
            id: 4,
            title: "Solar Plant Audit",
            image: img4,
            link: '/solar-panel-study'
        },
        {
            id: 5,
            title: "Thermal Study",
            image: img5,
            link: '/thermal-study'
        },
        {
            id: 6,
            title: "Vibration Audit",
            image: img6,
            link: '/vibration-audit'
        },
        {
            id: 7,
            title: "Industrial Safety Audit",
            image: img7,
            link: '/industrial-safety-audit'
        },
        {
            id: 8,
            title: "Industrial Training Program",
            image: img8,
            link: '/industrial-training'
        },
    ];

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: easeInOut,
            },
        }),
    };

    return (
        <section className="pb-20 px-4">
            {/* Section Header */}
            <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-4">
                    Our Services
                </h2>
                <p className="text-neutral-white text-lg md:text-xl">
                    Where expertise meets execution
                </p>
                <div className="w-24 h-1 bg-brand-secondary mx-auto mt-6 rounded-full" />
            </div>

            {/* Services Grid */}
            <div className="lg:max-w-5xl md:max-w-4xl max-w-[25rem] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        variants={cardVariants}
                        whileHover={{ y: -10 }}
                        transition={{ delay: index * 0.05 }}
                        className="group bg-neutral-light rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                    >
                        <Link to={service.link} className="block">
                            <div className="w-full h-24 sm:h-32 md:h-40 bg-gray-50 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-2 text-center border-t border-gray-100">
                                <h3 className="text-dark font-bold text-xs sm:text-sm md:text-base leading-tight">
                                    {service.title}
                                </h3>
                                <div className="w-8 h-0.5 bg-brand-secondary mx-auto mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};