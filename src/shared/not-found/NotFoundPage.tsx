import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, AlertTriangle } from "lucide-react";
import BackgroundDecor from "../components/background/BackgroundDecor";

const NotFoundPage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Reusing your global background decoration */}
      <BackgroundDecor />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center sm:px-6">
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
            <AlertTriangle className="h-20 w-20 text-brand-primary opacity-90 md:h-28 md:w-28 lg:h-[120px] lg:w-[120px]" />
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
          <h1 className="text-6xl font-black tracking-tighter text-brand-primary">
            404
          </h1>

          <h2 className="px-2 text-h3 font-bold uppercase tracking-widest text-white">
            Oops! Path Not Found
          </h2>

          <p className="mx-auto max-w-[280px] text-body-sm leading-relaxed text-slate-400 sm:max-w-md">
            The page you are looking for might have been moved, renamed, or is
            temporarily unavailable in our industrial network.
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
            className="group flex transform items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-body-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#f97316] hover:shadow-[0_10px_20px_rgba(230,106,28,0.3)] md:gap-3 md:px-8"
          >
            <Home size={18} className="group-hover:animate-bounce" />
            Back to Home
          </Link>
        </motion.div>

        {/* Minimalist Footer Decor - Hidden on very small screens to save space */}
        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 opacity-80 sm:flex md:bottom-10">
          <div className="h-[1px] w-8 bg-white md:w-12" />
          <span className="whitespace-nowrap text-body-sm uppercase tracking-[0.3em] text-white md:tracking-[0.5em]">
            Arka Nexus Intelligence
          </span>
          <div className="h-[1px] w-8 bg-white md:w-12" />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
