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
        const matchedTab = content.tabs.tabs.find(t => t.hash === currentHash);

        if (matchedTab) {
            setActiveTab(matchedTab.id);
            sectionRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [location, content]);

    // Rotate tab logic
    const rotateTab = () => {
        if (!isInView.current || !content) return;

        setActiveTab(current => {
            const index = content.tabs.tabs.findIndex(t => t.id === current);
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
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        setTimeout(() => setVisibleSections(v => ({ ...v, tabs: true })), 300);
        setTimeout(() => setVisibleSections(v => ({ ...v, content: true })), 800);

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
            <div className={`flex flex-wrap justify-center gap-3 mb-8 transition-all duration-1000 ${visibleSections.tabs ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        className={`flex items-center px-6 py-3 rounded-lg border transition-all duration-300 text-sm md:text-base 
              ${activeTab === tab.id
                                ? "bg-brand-primary text-[#031a42] font-semibold scale-105 shadow-[0_0_15px_rgba(252,211,77,0.3)] border-brand-primary"
                                : "bg-white/70 border-[#fca74d]/50 text-slate-800 hover:bg-brand-primary/80 hover:text-white"}`}
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
            <div className="flex justify-center gap-2 mb-8">
                {tabs.map(tab => (
                    <div
                        key={`progress-${tab.id}`}
                        className={`h-1 rounded-full transition-all duration-500 ${activeTab === tab.id ? "w-16 bg-brand-primary" : "w-6 bg-blue-900/80"
                            }`}
                    />
                ))}
            </div>

            {/* Content Container */}
            <div className={`mx-auto max-w-arka bg-blue-900/20 p-6 md:p-12 rounded-xl border border-[#fca74d]/40 shadow-2xl transition-all duration-1000 min-h-[550px] md:min-h-[450px] flex flex-col justify-center ${visibleSections.content ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>

                {/* Vision & Mission */}
                {activeTab === "mission" && (
                    <div className="animate-fadeIn space-y-10">
                        <div>
                            <h2 className="text-h3 font-bold text-brand-primary mb-section-y border-b border-[#fca74d]/20 pb-2 uppercase">
                                Vision
                            </h2>
                            <p className="text-neutral-white text-base md:text-lg text-justify">
                                {vision.visionText}
                            </p>
                        </div>
                        <div>
                            <h2 className="text-h3 font-bold text-brand-primary mb-section-y border-b border-[#fca74d]/20 pb-2 uppercase">
                                Mission
                            </h2>
                            <p className="text-neutral-white text-base md:text-lg text-justify">
                                {vision.missionText}
                            </p>
                        </div>
                    </div>
                )}

                {/* Objectives */}
                {activeTab === "objectives" && (
                    <ul className="flex flex-col gap-4 animate-fadeIn">
                        {objectives.map((text, i) => (
                            <li key={i} className="flex items-start">
                                <div className="mr-4 mt-1 bg-brand-primary rounded-full p-1 text-[#031a42]">
                                    <ChevronRight size={16} />
                                </div>
                                <p className="text-neutral-white text-base md:text-lg">{text}</p>
                            </li>
                        ))}
                    </ul>
                )}

                {/* USPs */}
                {activeTab === "usp" && (
                    <div className="justify-center">
                        <div className="grid md:grid-cols-2 gap-6 animate-fadeIn">
                            {usps.map((usp, i) => (
                                <div key={i} className="bg-blue-900/40 p-6 rounded-lg border-l-4 border-brand-primary">
                                    <div className="text-brand-primary mb-3">
                                        {usp.icon === "award" && <Award size={32} />}
                                        {usp.icon === "users" && <Users size={32} />}
                                        {usp.icon === "target" && <Target size={32} />}
                                    </div>
                                    <h3 className="text-xl font-semibold text-brand-primary mb-2">
                                        {usp.title}
                                    </h3>
                                    <p className="text-neutral-white text-sm md:text-base">
                                        {usp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 text-center">
                            <p className="years-highlight-legacy inline-block bg-[#bd8409] text-brand-primary-blue px-6 py-3 rounded-lg text-lg font-bold">
                                <span className="mr-1">14+ years</span> of excellence in industrial consultancy and training
                            </p>
                        </div>
                    </div>
                )}

                {/* Core Values */}
                {activeTab === "values" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
                        {coreValues.map((val, i) => (
                            <div key={i} className="bg-blue-900/60 p-6 rounded-lg border border-[#fca74d]/20 flex flex-col items-center text-center hover:translate-y-[-5px] hover:shadow-lg transition-all">
                                <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mb-4 text-brand-primary border-2 border-brand-primary/30">
                                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
                                        {val.showCircle && <circle cx="12" cy="12" r="10" />}
                                        <path d={val.iconPath} />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-brand-primary mb-2">
                                    {val.title}
                                </h3>
                                <p className="text-neutral-white text-sm">
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
