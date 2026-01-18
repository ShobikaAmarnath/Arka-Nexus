import { useEffect, useRef, useState, type SetStateAction } from "react";
import { ChevronRight, Target, Award, Users, Heart } from 'lucide-react';
import { useLocation } from "react-router-dom";
import '../pages/AboutPage.css';

export default function AboutTabsSection() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('mission');
    const [visibleSections, setVisibleSections] = useState({
        tabs: false,
        content: false
    });

    // For auto rotation of tabs
    const sectionRef = useRef<HTMLDivElement>(null);
    const tabTimer = useRef<number | null>(null);
    const isInView = useRef(false); // Track visibility
    const autoRotationTime = 8000; // 8 seconds per tab

    const tabs = [
        { id: 'mission', hash: '#vision-mission', label: 'Vision & Mission', icon: <Target className="mr-2" size={20} /> },
        { id: 'objectives', hash: '#objectives', label: 'Objectives', icon: <ChevronRight className="mr-2" size={20} /> },
        { id: 'usp', hash: '#usp', label: 'USPs', icon: <Award className="mr-2" size={20} /> },
        { id: 'values', hash: '#values', label: 'Core Values', icon: <Heart className="mr-2" size={20} /> }
    ];

    // Handle deep linking from Nav Bar
    useEffect(() => {
        const currentHash = window.location.hash;
        const matchedTab = tabs.find(t => t.hash === currentHash);
        if (matchedTab) {
            setActiveTab(matchedTab.id);
            // Optional: Smooth scroll to the tabs section if a hash is present
            sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    // Function to handle tab rotation
    const rotateTab = () => {
        if (!isInView.current) return;
        setActiveTab(currentTab => {
            const currentIndex = tabs.findIndex(tab => tab.id === currentTab);
            const nextIndex = (currentIndex + 1) % tabs.length;
            return tabs[nextIndex].id;
        });
    };

    // Manual tab selection that resets timer
    const handleTabClick = (tabId: SetStateAction<string>) => {
        setActiveTab(tabId);

        // Reset the timer when manually changing tabs
        if (tabTimer.current) {
            clearInterval(tabTimer.current);
        }
        tabTimer.current = setInterval(rotateTab, autoRotationTime);
    };

    useEffect(() => {
        // Intersection Observer to detect visibility
        const observer = new IntersectionObserver(
            ([entry]) => {
                isInView.current = entry.isIntersecting;
            },
            { threshold: 0.2 } // Trigger when 20% of the section is visible
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        // Staggered animations
        setTimeout(() => setVisibleSections(prev => ({ ...prev, tabs: true })), 300);
        setTimeout(() => setVisibleSections(prev => ({ ...prev, content: true })), 800);

        tabTimer.current = window.setInterval(rotateTab, autoRotationTime);

        return () => {
            if (tabTimer.current) clearInterval(tabTimer.current);
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={sectionRef} className="w-full scroll-mt-nav-h-scroll">
            {/* Tabs Navigation */}
            <div className={`flex flex-wrap justify-center gap-3 mb-8 transition-all duration-1000 ${visibleSections.tabs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        className={`flex items-center px-6 py-3 rounded-lg border transition-all duration-300 text-sm md:text-base 
                            ${activeTab === tab.id
                                ? 'bg-brand-primary text-[#031a42] font-semibold scale-105 shadow-[0_0_15px_rgba(252,211,77,0.3)] border-brand-primary'
                                : 'bg-white/70 border-[#fca74d]/50 text-slate-800 hover:bg-brand-primary/80 hover:text-white'}`}
                    >
                        {tab.icon}
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-2 mb-8">
                {tabs.map(tab => (
                    <div
                        key={`progress-${tab.id}`}
                        className={`h-1 rounded-full transition-all duration-500 ${activeTab === tab.id ? 'w-16 bg-brand-primary' : 'w-6 bg-blue-900/80'}`}
                    ></div>
                ))}
            </div>

            {/* Tab Content Container */}
            <div className={`mx-auto max-w-arka bg-blue-900/20 p-6 md:p-12 rounded-xl border border-[#fca74d]/40 shadow-2xl transition-all duration-1000 min-h-[550px] md:min-h-[450px] flex flex-col justify-center ${visibleSections.content ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>

                {/* Vision & Mission */}
                {activeTab === 'mission' && (
                    <div className="animate-fadeIn relative w-full h-full flex flex-col justify-center min-h-inherit space-y-10 z-10 lg:px-10">
                        <div>
                            <h2 className="text-2xl font-bold text-brand-primary mb-4 border-b border-[#fca74d]/20 pb-2 uppercase tracking-wide">
                                Vision
                            </h2>
                            <p className="text-neutral-white text-base md:text-lg text-justify leading-relaxed">
                                To lead the global industrial market by offering reliable technological and
                                ethical business practices, setting a benchmark for excellence.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-brand-primary mb-4 border-b border-[#fca74d]/20 pb-2 uppercase tracking-wide">
                                Mission
                            </h2>
                            <p className="text-neutral-white text-base md:text-lg text-justify leading-relaxed">
                                To deliver consultancy services, comprehensive training, and innovative solutions
                                to resolve industrial challenges in enhancing the operational efficiency and
                                sustainable societal growth.
                            </p>
                        </div>
                    </div>
                )}

                {/* Objectives */}
                {activeTab === 'objectives' && (
                    <div className="animate-fadeIn">
                        <h2 className="text-2xl font-bold text-brand-primary mb-6">Our Objectives</h2>
                        <ul className="flex flex-col gap-4">
                            {[
                                "To provide expert industrial consultancy to optimize and enhance industrial process.",
                                "To offer cutting-edge, innovative technological solutions for sustainable growth.",
                                "To train industry professionals to keep them updated on the latest technological advancements through advanced training modules.",
                                "To support industrial and societal development aligned with Sustainable Development Goals (SDGs)."
                            ].map((text, i) => (
                                <li key={i} className="flex items-start group">
                                    <div className="mr-4 mt-1 bg-brand-primary rounded-full p-1 text-[#031a42] group-hover:scale-110 transition-transform">
                                        <ChevronRight size={16} />
                                    </div>
                                    <p className="text-neutral-white text-base md:text-lg">{text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* USPs */}
                {activeTab === 'usp' && (
                    <div className="animate-fadeIn">
                        <h2 className="text-2xl font-bold text-brand-primary mb-8">ARKA Unique Selling Points</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                            {[
                                { title: "Expert Consultants", desc: "Experienced, specialized and certified industrial consultants with advanced, state-of-the-art equipment.", icon: <Award size={32} /> },
                                { title: "Extensive Experience", desc: "Core team members bring over a decade of diverse business experience across various industries.", icon: <Users size={32} /> },
                                { title: "Broad Client Base", desc: "Spanning all industrial sectors, with over 100 clients served across India.", icon: <Users size={32} /> },
                                { title: "Active R&D", desc: "Research in cross-functional areas, offering IIOT and advanced AI/ML solutions to drive innovation.", icon: <Target size={32} /> }
                            ].map((usp, i) => (
                                <div key={i} className="bg-blue-900/40 p-6 rounded-lg border-l-4 border-brand-primary hover:bg-blue-800/60 transition-colors">
                                    <div className="text-brand-primary mb-3">{usp.icon}</div>
                                    <h3 className="text-xl font-semibold text-brand-primary mb-2">{usp.title}</h3>
                                    <p className="text-neutral-white text-sm md:text-base leading-relaxed">{usp.desc}</p>
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
                {activeTab === 'values' && (
                    <div className="animate-fadeIn">
                        <h2 className="text-2xl font-bold text-brand-primary mb-8">Core Values</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: "Reliable Solutions", desc: "Consistently delivering dependable technological solutions", path: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
                                { title: "Optimal Outcomes", desc: "Creating the best possible industrial solutions", path: "M12 8v4l3 3" },
                                { title: "Cross-Functional R&D", desc: "Research spanning multiple disciplines", path: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" },
                                { title: "Ethical Practices", desc: "Upholding high standards of business ethics", path: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
                                { title: "Team Coordination", desc: "Effective teamwork and time management", path: "M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z" },
                                { title: "Advanced Training", desc: "Cutting-edge educational modules for professionals", path: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" }
                            ].map((val, i) => (
                                <div key={i} className="bg-blue-900/60 p-6 rounded-lg border border-[#fca74d]/20 flex flex-col items-center text-center hover:translate-y-[-5px] hover:shadow-lg transition-all">
                                    <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mb-4 text-brand-primary border-2 border-brand-primary/30">
                                        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
                                            {val.title === "Optimal Outcomes" ? <circle cx="12" cy="12" r="10" /> : null}
                                            {val.title === "Team Coordination" ? <circle cx="12" cy="12" r="10" /> : null}
                                            <path d={val.path} />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-brand-primary mb-2">{val.title}</h3>
                                    <p className="text-neutral-white text-sm">{val.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}