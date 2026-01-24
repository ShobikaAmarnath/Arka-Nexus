import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ImageMapper from "react-img-mapper";
import { useState, useEffect } from "react";

import ServiceSection from "../sections/ServiceSection";
import arrow from "@/assets/images/services/arrow.png";
import img from "@/assets/images/logos/service_img.png";
import { SERVICES_MAP as MAP } from "../config/services.map";

import { getServicesLandingContent } from "../providers/servicesLanding.provider";
import type { ServicesLandingContent } from "../content/servicesLanding.content";
import NotFoundPage from "../../../shared/not-found/NotFoundPage";

const fadeSlide = {
  hidden: { opacity: 0, x: -30 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay: customDelay, duration: 1 },
  }),
};

function ServiceDetails() {
  const navigate = useNavigate();
  const [content, setContent] = useState<ServicesLandingContent | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [containerWidth, setContainerWidth] = useState(window.innerWidth <= 768 ? window.innerWidth * 0.7 : 320);

  useEffect(() => {

    getServicesLandingContent().then(setContent);

    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setContainerWidth(mobile ? window.innerWidth * 0.7 : 320);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!content) return <NotFoundPage />;

  const handleClick = (area: any) => {
    if (area.href) navigate(area.href);
  };

  const ArrowHint = (
    <motion.div
      variants={fadeSlide}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={0.8}
      className="flex items-center animate-[float_3s_ease-in-out_infinite] mt-6 justify-center lg:justify-start"
    >
      <img
        src={arrow}
        alt="arrow"
        className="block ml-0 mr-4 lg:ml-8 lg:mr-3 w-full max-w-[50px] h-auto bg-white/80 rounded-full"
      />
      <p className="text-xl font-bold text-white/50">
        Click on the image to explore more...
      </p>
    </motion.div>
  );

  return (
    <div className="w-full overflow-x-hidden scroll-mt-nav-h">
      {/* First Container: Flex Wrapper */}
      <div className="flex flex-col lg:flex-row items-center justify-center mt-24 lg:mt-nav-h lg:px-safe-x sm:px-0.5 lg:pl-12 w-full gap-5">

        {/* Image Section */}
        <div className="flex flex-col items-center max-w-full order-1 lg:order-none">
          <div className="cursor-pointer">
            <ImageMapper
              src={img}
              {...MAP}
              parentWidth={containerWidth}
              height={160}
              width={160}
              responsive
              onClick={handleClick}
              areaProps={{ style: { cursor: "pointer" } }}
              imgWidth={1277}
              lineWidth={5}
              strokeColor="rgba(0,0,0,0.5)"
            />
          </div>
          {isMobile && ArrowHint}
        </div>

        {/* Intro Part */}
        <div className="flex-1 max-w-[90%] lg:max-w-[60%] p-0 text-center text-[#e66a1c] order-2">
          <motion.h1
            variants={fadeSlide}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.5}
            className="text-3xl md:text-[2.2rem] font-bold mb-3"
          >
            {content.intro.heading}
          </motion.h1>

          <p className="text-justify text-neutral-white text-base leading-relaxed mx-auto lg:mx-4 max-w-full">
            {content.intro.description}
          </p>

          {!isMobile && ArrowHint}
        </div>
      </div>

      <ServiceSection services={content.services} />
    </div>
  );
}

export default ServiceDetails;