import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./CoreValuesSection.css";
import { fetchCoreValues } from "../../../core/services/sanity/coreValues.service";

export default function CoreValuesSection() {
  const [values, setValues] = useState<any[]>([]);

  useEffect(() => {
    fetchCoreValues()
      .then((data) => setValues(data?.values || []))
      .catch(console.error);
  }, []);

  return (
    <section className="relative my-section-y overflow-hidden text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-h2 text-brand-secondary">Our Core Values</h2>
        <p className="mb-8 text-body text-neutral-white">
          The principles that drive our success
        </p>
        <div className="mb-8 flex items-center justify-center gap-4">
          <span className="h-2 w-2 rounded-full bg-brand-primary"></span>
          <span className="h-[2px] w-[60px] bg-brand-secondary"></span>
          <span className="h-2 w-2 rounded-full bg-brand-primary"></span>
        </div>
      </motion.div>

      <div className="relative mx-auto px-6">
        {/* Wave Track - Hidden on Mobile */}
        <div className="relative mb-[30px] hidden h-[120px] md:block">
          <motion.svg
            className="absolute left-0 top-0 h-full w-full"
            viewBox="0 0 1200 80"
            preserveAspectRatio="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.path
              d="M 0 40 Q 100 15, 200 40 Q 300 65, 400 40 Q 500 15, 600 40 Q 700 65, 800 40 Q 900 15, 1000 40 Q 1100 65, 1200 40"
              stroke="url(#waveGradient)"
              strokeWidth="4"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient
                id="waveGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#ff7700" />
                <stop offset="50%" stopColor="#ff7b00" />
                <stop offset="100%" stopColor="#ff7b00" />
              </linearGradient>
            </defs>
          </motion.svg>

          <div className="absolute left-0 top-0 flex w-full justify-between px-5">
            {/* Value Point 1 - Gear */}
            <motion.div
              className="relative top-10 flex -translate-y-1/2 items-center justify-center"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
                duration: 0.6,
                type: "spring",
                stiffness: 300,
              }}
            >
              <motion.div
                className="wave-point gear-shape"
                whileHover={{ rotate: 180, transition: { duration: 1.5 } }}
                animate={{
                  rotate: [0, 15, 0, -15, 0],
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <div className="gear-inner"></div>
                <div className="gear-teeth gear-tooth-1"></div>
                <div className="gear-teeth gear-tooth-2"></div>
                <div className="gear-teeth gear-tooth-3"></div>
                <div className="gear-teeth gear-tooth-4"></div>
                <div className="gear-teeth gear-tooth-5"></div>
                <div className="gear-teeth gear-tooth-6"></div>
              </motion.div>
            </motion.div>

            {/* Value Point 2 - Target */}
            <motion.div
              className="relative top-10 flex -translate-y-1/2 items-center justify-center"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.7,
                duration: 0.6,
                type: "spring",
                stiffness: 300,
              }}
            >
              <motion.div
                className="wave-point target-shape"
                whileHover={{ scale: 1.2 }}
              >
                <motion.div
                  className="target-ring target-outer"
                  animate={{ scale: [1, 1.1, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                ></motion.div>
                <div className="target-ring target-middle"></div>
                <motion.div
                  className="target-ring target-inner"
                  animate={{ scale: [1, 0.8, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
                <motion.div
                  className="target-arrow"
                  initial={{ y: -50 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 1, duration: 0.5, type: "spring" }}
                ></motion.div>
              </motion.div>
            </motion.div>

            {/* Value Point 3 - Lab Flask */}
            <motion.div
              className="relative top-10 flex -translate-y-1/2 items-center justify-center"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.9,
                duration: 0.6,
                type: "spring",
                stiffness: 300,
              }}
            >
              <motion.div
                className="wave-point flask-shape"
                whileHover={{ scale: 1.2 }}
              >
                <div className="flask-top"></div>
                <div className="flask-body"></div>
                <motion.div
                  className="flask-liquid"
                  animate={{ height: ["40%", "70%", "40%"] }}
                  transition={{ duration: 4, repeat: Infinity }}
                ></motion.div>
                <motion.div
                  className="flask-bubble flask-bubble-1"
                  animate={{ y: [-10, -20, -10], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
                <motion.div
                  className="flask-bubble flask-bubble-2"
                  animate={{ y: [-5, -15, -5], opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                ></motion.div>
              </motion.div>
            </motion.div>

            {/* Value Point 4 - Scale */}
            <motion.div
              className="relative top-10 flex -translate-y-1/2 items-center justify-center"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 1.1,
                duration: 0.6,
                type: "spring",
                stiffness: 300,
              }}
            >
              <motion.div
                className="wave-point scale-shape"
                whileHover={{ scale: 1.2 }}
              >
                <div className="scale-top"></div>
                <div className="scale-bar"></div>
                <motion.div
                  className="scale-pan scale-pan-left"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                ></motion.div>
                <motion.div
                  className="scale-pan scale-pan-right"
                  animate={{ rotate: [0, -5, 0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                ></motion.div>
              </motion.div>
            </motion.div>

            {/* Value Point 5 - Team Clock */}
            <motion.div
              className="relative top-10 flex -translate-y-1/2 items-center justify-center"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 1.3,
                duration: 0.6,
                type: "spring",
                stiffness: 300,
              }}
            >
              <motion.div
                className="wave-point team-clock-shape"
                whileHover={{ scale: 1.2 }}
              >
                <div className="clock-face"></div>
                <motion.div
                  className="clock-hand clock-hour"
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                ></motion.div>
                <motion.div
                  className="clock-hand clock-minute"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                ></motion.div>
                <div className="team-figure team-figure-1"></div>
                <div className="team-figure team-figure-2"></div>
                <div className="team-figure team-figure-3"></div>
              </motion.div>
            </motion.div>

            {/* Value Point 6 - Education Cap */}
            <motion.div
              className="relative top-10 flex -translate-y-1/2 items-center justify-center"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 1.5,
                duration: 0.6,
                type: "spring",
                stiffness: 300,
              }}
            >
              <motion.div
                className="wave-point cap-shape"
                whileHover={{ scale: 1.2 }}
              >
                <div className="cap-top"></div>
                <div className="cap-tassel"></div>
                <motion.div
                  className="cap-tassel-end"
                  animate={{ rotate: [-10, 10, -10] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Value Cards Container */}
        <div className="mt-5 grid grid-cols-1 gap-5 md:mt-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {values.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-[10px] bg-white p-4 text-center shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-all duration-300"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              whileHover={{
                y: -10,
                boxShadow: "0 15px 30px rgba(255, 204, 0, 0.2)",
                transition: { duration: 0.3 },
              }}
            >
              <h3 className="mb-4 flex min-h-0 items-center justify-center text-body-sm font-bold text-brand-dark md:min-h-[40px]">
                {item.title}
              </h3>
              <div className="mx-auto my-3 h-[3px] w-10 rounded-card bg-brand-primary"></div>
              <p className="text-body-sm leading-relaxed text-neutral-textMain">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
