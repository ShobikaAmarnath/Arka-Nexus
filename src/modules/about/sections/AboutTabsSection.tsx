import { useEffect, useRef, useState, type SetStateAction } from "react";
import { ChevronRight, Target, Award, Users, Heart } from "lucide-react";
import { useLocation } from "react-router-dom";
import { getAboutContent } from "../providers/about.provider";
import type { AboutContent } from "../content/about.content";
import "../pages/AboutPage.css";

export default function AboutTabsSection() {
  const location = useLocation();

  const [content, setContent] = useState<AboutContent | null>(null);
  const [activeTab, setActiveTab] = useState("mission");
  const [visibleSections, setVisibleSections] = useState({
    tabs: false,
    content: false,
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const tabTimer = useRef<number | null>(null);
  const isInView = useRef(false);
  const autoRotationTime = 8000;

  // Fetch content
  useEffect(() => {
    getAboutContent().then(setContent);
  }, []);

  // Handle deep linking
  useEffect(() => {
    if (!content) return;

    const currentHash = window.location.hash;
    const matchedTab = content.tabs.tabs.find((t) => t.hash === currentHash);

    if (matchedTab) {
      setActiveTab(matchedTab.id);
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location, content]);

  // Rotate tab logic
  const rotateTab = () => {
    if (!isInView.current || !content) return;

    setActiveTab((current) => {
      const index = content.tabs.tabs.findIndex((t) => t.id === current);
      return content.tabs.tabs[(index + 1) % content.tabs.tabs.length].id;
    });
  };

  const handleTabClick = (tabId: SetStateAction<string>) => {
    setActiveTab(tabId);
    if (tabTimer.current) clearInterval(tabTimer.current);
    tabTimer.current = setInterval(rotateTab, autoRotationTime);
  };

  // Visibility + timers
  useEffect(() => {
    if (!content) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView.current = entry.isIntersecting;
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    setTimeout(() => setVisibleSections((v) => ({ ...v, tabs: true })), 300);
    setTimeout(() => setVisibleSections((v) => ({ ...v, content: true })), 800);

    tabTimer.current = window.setInterval(rotateTab, autoRotationTime);

    return () => {
      if (tabTimer.current) clearInterval(tabTimer.current);
      observer.disconnect();
    };
  }, [content]);

  // Render guard
  if (!content) return null;

  const { tabs, vision, objectives, usps, coreValues } = content.tabs;

  return (
    <div ref={sectionRef} className="w-full scroll-mt-nav-h-scroll">
      {/* Tabs Navigation */}
      <div
        className={`mb-8 flex flex-wrap justify-center gap-3 transition-all duration-1000 ${visibleSections.tabs ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`flex items-center rounded-lg border px-6 py-3 text-body-sm transition-all duration-300 ${
              activeTab === tab.id
                ? "scale-105 border-brand-primary bg-brand-primary font-semibold text-[#031a42] shadow-[0_0_15px_rgba(252,211,77,0.3)]"
                : "border-[#fca74d]/50 bg-white/70 text-slate-800 hover:bg-brand-primary/80 hover:text-white"
            }`}
          >
            {tab.id === "mission" && <Target className="mr-2" size={20} />}
            {tab.id === "objectives" && <ChevronRight className="mr-2" size={20} />}
            {tab.id === "usp" && <Award className="mr-2" size={20} />}
            {tab.id === "values" && <Heart className="mr-2" size={20} />}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Progress Indicators */}
      <div className="mb-8 flex justify-center gap-2">
        {tabs.map((tab) => (
          <div
            key={`progress-${tab.id}`}
            className={`h-1 rounded-full transition-all duration-500 ${
              activeTab === tab.id
                ? "w-16 bg-brand-primary"
                : "w-6 bg-blue-900/80"
            }`}
          />
        ))}
      </div>

      {/* Content Container */}
      <div
        className={`mx-auto flex min-h-[550px] max-w-arka flex-col justify-center rounded-xl border border-[#fca74d]/40 bg-blue-900/20 p-6 shadow-2xl transition-all duration-1000 md:min-h-[450px] md:p-12 ${visibleSections.content ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
      >
        {/* Vision & Mission */}
        {activeTab === "mission" && (
          <div className="animate-fadeIn space-y-10">
            <div>
              <h2 className="mb-section-y border-b border-[#fca74d]/20 pb-2 text-h3 font-bold uppercase text-brand-primary">
                Vision
              </h2>
              <p className="text-justify text-h4 text-neutral-white">
                {vision.visionText}
              </p>
            </div>
            <div>
              <h2 className="mb-section-y border-b border-[#fca74d]/20 pb-2 text-h3 font-bold uppercase text-brand-primary">
                Mission
              </h2>
              <p className="text-justify text-h4 text-neutral-white">
                {vision.missionText}
              </p>
            </div>
          </div>
        )}

        {/* Objectives */}
        {activeTab === "objectives" && (
          <ul className="animate-fadeIn flex flex-col gap-4">
            {objectives.map((text, i) => (
              <li key={i} className="flex items-start">
                <div className="mr-4 mt-1 rounded-full bg-brand-primary p-1 text-[#031a42]">
                  <ChevronRight size={16} />
                </div>
                <p className="text-h4 text-neutral-white">{text}</p>
              </li>
            ))}
          </ul>
        )}

        {/* USPs */}
        {activeTab === "usp" && (
          <div className="justify-center">
            <div className="animate-fadeIn grid gap-6 md:grid-cols-2">
              {usps.map((usp, i) => (
                <div
                  key={i}
                  className="rounded-lg border-l-4 border-brand-primary bg-blue-900/40 p-6"
                >
                  <div className="mb-3 text-brand-primary">
                    {usp.icon === "award" && <Award size={32} />}
                    {usp.icon === "users" && <Users size={32} />}
                    {usp.icon === "target" && <Target size={32} />}
                  </div>
                  <h3 className="mb-2 text-h3 font-semibold text-brand-primary">
                    {usp.title}
                  </h3>
                  <p className="text-body-sm text-neutral-white">
                    {usp.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="years-highlight-legacy inline-block rounded-lg bg-[#bd8409] px-6 py-3 text-h4 font-bold text-brand-primary-blue">
                <span className="mr-1">14+ years</span> of excellence in
                industrial consultancy and training
              </p>
            </div>
          </div>
        )}

        {/* Core Values */}
        {activeTab === "values" && (
          <div className="animate-fadeIn grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((val, i) => (
              <div
                key={i}
                className="flex flex-col items-center rounded-lg border border-[#fca74d]/20 bg-blue-900/60 p-6 text-center transition-all hover:translate-y-[-5px] hover:shadow-lg"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand-primary/30 bg-brand-primary/10 text-brand-primary">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    {val.showCircle && <circle cx="12" cy="12" r="10" />}
                    <path d={val.iconPath} />
                  </svg>
                </div>
                <h3 className="mb-2 text-h3 font-semibold text-brand-primary">
                  {val.title}
                </h3>
                <p className="text-body-sm text-neutral-white">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
