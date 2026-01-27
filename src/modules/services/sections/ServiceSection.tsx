import { motion, easeInOut, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import type { ServiceCardItem } from "../content/servicesLanding.content";

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
    <section className="mx-auto my-section-y max-w-arka px-safe-x">
      {/* Section Header */}
      <div className="mb-section-y text-center">
        <h2 className="text-h2 text-brand-secondary">Our Services</h2>
        <p className="text-h4 text-neutral-white">
          Where expertise meets execution
        </p>
        <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-brand-secondary" />
      </div>

      {/* Services Grid */}
      <div className="mx-auto grid max-w-[25rem] grid-cols-2 gap-grid-gap md:max-w-4xl md:grid-cols-3 lg:max-w-5xl lg:grid-cols-4">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            transition={{ delay: index * 0.05 }}
            className="group overflow-hidden rounded-card bg-neutral-light shadow-card transition-all hover:shadow-xl"
          >
            <Link to={service.link} className="block">
              <div className="h-24 w-full overflow-hidden bg-gray-50 sm:h-32 md:h-40">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-contain p-1 transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="border-t border-gray-100 pb-2 text-center">
                <h3 className="text-body-sm font-bold leading-tight text-brand-dark">
                  {service.title}
                </h3>
                <div className="mx-auto mt-1 h-0.5 w-8 bg-brand-secondary opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
