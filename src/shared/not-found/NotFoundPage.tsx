import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, AlertTriangle } from "lucide-react";
import BackgroundDecor from "../components/background/BackgroundDecor";

const NotFoundPage = () => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Reusing your global background decoration */}
            <BackgroundDecor />

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 text-center">

                {/* Animated Visual Area - Scale icon for mobile */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative mb-6 md:mb-8"
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    >
                        {/* Size scales from 80 on mobile to 120 on desktop */}
                        <AlertTriangle className="w-20 h-20 md:w-28 md:h-28 lg:w-[120px] lg:h-[120px] text-[#e66a1c] opacity-90" />
                    </motion.div>
                </motion.div>

                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="space-y-3 md:space-y-4"
                >
                    {/* Responsive font size: 6xl on mobile, 8xl on desktop */}
                    <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-[#e66a1c] tracking-tighter">
                        404
                    </h1>
                    
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white uppercase tracking-widest px-2">
                        Oops! Path Not Found
                    </h2>
                    
                    <p className="max-w-[280px] sm:max-w-md mx-auto text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed">
                        The page you are looking for might have been moved, renamed, or is temporarily unavailable in our industrial network.
                    </p>
                </motion.div>

                {/* Action Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 md:mt-10"
                >
                    <Link
                        to="/"
                        className="group flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 bg-[#e66a1c] hover:bg-[#f97316] text-black font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(230,106,28,0.3)] text-sm md:text-base"
                    >
                        <Home size={18} className="group-hover:animate-bounce" />
                        Back to Home
                    </Link>
                </motion.div>

                {/* Minimalist Footer Decor - Hidden on very small screens to save space */}
                <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-2 opacity-80">
                    <div className="w-8 md:w-12 h-[1px] bg-white" />
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.5em] text-white whitespace-nowrap">
                        Arka Nexus Intelligence
                    </span>
                    <div className="w-8 md:w-12 h-[1px] bg-white" />
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;