import { motion, easeInOut, type Variants } from 'framer-motion';
import { Link } from "react-router-dom";
import type { ServiceCardItem } from '../content/servicesLanding.content';

interface Props {
    services: ServiceCardItem[];
}

export default function ServiceSection({ services }: Props) {
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
        <section className="py-section-y px-safe-x max-w-arka mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-h2 md:text-h2-desktop font-bold text-brand-secondary mb-4">
                    Our Services
                </h2>
                <p className="text-neutral-white text-body md:text-h3">
                    Where expertise meets execution
                </p>
                <div className="w-24 h-1 bg-brand-secondary mx-auto mt-6 rounded-full" />
            </div>

            {/* Services Grid */}
            <div className="lg:max-w-5xl md:max-w-4xl max-w-[25rem] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-grid-gap">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        variants={cardVariants}
                        whileHover={{ y: -10 }}
                        transition={{ delay: index * 0.05 }}
                        className="group bg-neutral-light rounded-card overflow-hidden shadow-card hover:shadow-xl transition-all"
                    >
                        <Link to={service.link} className="block">
                            <div className="w-full h-24 sm:h-32 md:h-40 bg-gray-50 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-contain p-1 transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            <div className="pb-2 text-center border-t border-gray-100">
                                <h3 className="text-brand-dark font-bold text-xs sm:text-sm md:text-base leading-tight">
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