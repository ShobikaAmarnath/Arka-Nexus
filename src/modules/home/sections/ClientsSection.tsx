import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Marquee from 'react-fast-marquee';
import { fetchClientLogos } from "../../../core/services/sanity/clients.service";
import { urlFor } from "../../../core/services/client";
import './ClientsSection.css';

type ClientLogos = {
    count: number;
    title: string;
    topRowLogos: any[];
    bottomRowLogos: any[];
};

export default function ClientsSection() {
    const [clientLogos, setClientLogos] = useState<ClientLogos | null>(null);

    useEffect(() => {
        fetchClientLogos()
            .then(setClientLogos)
            .catch(console.error);
    }, []);

    if (!clientLogos) return null;

    return (
        <section id="clients" className="clients-section-animated relative overflow-hidden py-12 md:py-16 scroll-mt-nav-h-scroll">
            {/* Paint spray texture overlay (Legacy CSS) */}
            <div className="legacy-texture-overlay" />
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%231e90ff' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                backgroundColor: '#ff8c00',
                mixBlendMode: 'multiply',
                pointerEvents: 'none'
            }} />

            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
                {/* Main Client Count Title */}
                <motion.h1
                    className="blw-50-clients text-3xl md:text-5xl font-extrabold text-center mb-1 tracking-tight"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                >
                    {clientLogos?.count ?? 50}+ Clients Worldwide
                </motion.h1>

                {/* Section Title */}
                <motion.h2
                    className="client-title-underline text-xl md:text-3xl font-bold text-center mb-12 text-brand-dark leading-tight relative pb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {clientLogos?.title}
                </motion.h2>

                {/* Logo Marquee - Top Row */}
                {clientLogos?.topRowLogos?.length > 0 && (
                    <div className="mb-8 py-4">
                        <Marquee direction="left" speed={40} gradient={false}>
                            {clientLogos.topRowLogos.map((logo, index) => (
                                <div key={index}
                                    className="bg-white/95 p-4 mx-4 md:mx-6 flex items-center justify-center rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-md border border-white/30 group"
                                >
                                    <img
                                        src={urlFor(logo).url()}
                                        alt="Client"
                                        className="h-16 md:h-20 w-full max-w-[140px] md:max-w-[190px] object-contain filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </Marquee>
                    </div>
                )}

                {/* Logo Marquee - Bottom Row */}
                {clientLogos?.bottomRowLogos?.length > 0 && (
                    <div className="py-4">
                        <Marquee direction="right" speed={40} gradient={false}>
                            {clientLogos.bottomRowLogos.map((logo, index) => (
                                <div key={index}
                                    className="bg-white/95 p-3 md:p-4 mx-4 md:mx-6 flex items-center justify-center rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-md border border-white/30 group"
                                >
                                    <img
                                        src={urlFor(logo).url()}
                                        alt="Client"
                                        className="h-20 md:h-24 w-[160px] md:w-[220px] object-contain filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </Marquee>
                    </div>
                )}
            </div>
        </section>
    );
};