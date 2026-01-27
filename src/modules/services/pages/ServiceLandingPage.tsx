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
  const [containerWidth, setContainerWidth] = useState(
    window.innerWidth <= 768 ? window.innerWidth * 0.7 : 320,
  );

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
      className="mt-6 flex animate-[float_3s_ease-in-out_infinite] items-center justify-center lg:justify-start"
    >
      <img
        src={arrow}
        alt="arrow"
        className="ml-0 mr-4 block h-auto w-full max-w-[50px] rounded-full bg-white/80 lg:ml-8 lg:mr-3"
      />
      <p className="text-body text-white/30">
        Click on the image to explore more...
      </p>
    </motion.div>
  );

  return (
    <div className="w-full scroll-mt-nav-h overflow-x-hidden">
      {/* First Container: Flex Wrapper */}
      <div className="mt-24 flex w-full flex-col items-center justify-center gap-5 sm:px-0.5 lg:mt-nav-h lg:flex-row lg:px-safe-x lg:pl-12">
        {/* Image Section */}
        <div className="order-1 flex max-w-full flex-col items-center lg:order-none">
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
        <div className="order-2 max-w-[90%] flex-1 p-0 text-center text-brand-primary lg:max-w-[60%]">
          <motion.h1
            variants={fadeSlide}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.5}
            className="my-3 text-h1 font-black leading-[1.05]"
          >
            {content.intro.heading}
          </motion.h1>

          <p className="mx-auto max-w-full text-justify text-body leading-relaxed text-neutral-white lg:mx-4">
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
