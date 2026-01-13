import { useEffect, useState } from "react";
import { getLeadershipTeam } from "../../../core/services/sanity/leadershipTeam.service";
import type { LeadershipTeamData } from "../../../core/services/sanity/leadershipTeam.types";

export default function AboutTeamSection() {

    const [team, setTeam] = useState<LeadershipTeamData | null>(null);
    const parts = team?.sectionIntro.split('*').map(p => p.trim()) ?? [];
    const introText = parts[0];
    const expertiseItems = parts.slice(1).filter(item => item !== "");
    const [expandedCard, setExpandedCard] = useState<number | null>(null);

    useEffect(() => {
        getLeadershipTeam()
            .then(setTeam)
            .catch(console.error);
    }, []);

    const toggleReadMore = (index: number) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    if (!team) {
        return <p style={{ padding: 80, color: "#fff" }}>Loading...</p>;
    }

    return (
        <>
            <section id="team" className="mt-1 scroll-mt-nav-h">
                <div className="max-w-[1400px] mx-auto p-6 md:p-10 rounded-2xl border border-[#e88011]/20 bg-gradient-to-br from-white/5 to-white/[0.02]">

                    {/* Section Header */}
                    <div className="text-center mb-12 mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-br from-white to-[#e88011] bg-clip-text text-transparent">
                            {team.sectionTitle}
                        </h2>
                        <p className="text-slate-100 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                            {introText}
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8">
                        {expertiseItems.map((item, idx) => (
                            <div 
                                key={idx}
                                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-[#e88011]/30 text-slate-100 text-sm md:text-base whitespace-nowrap hover:bg-[#e88011]/10 hover:border-[#e88011]/60 transition-all duration-300 group"
                            >
                                {/* Glowing Dot Decoration */}
                                <span className="w-2 h-2 rounded-full bg-[#e88011] shadow-[0_0_8px_#e88011] group-hover:scale-125 transition-transform" />
                                {item}
                            </div>
                        ))}
                    </div>
                    </div>

                    {/* Team Grid */}
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16 max-w-6xl mx-auto">
                        {team.members?.map((member, index) => {
                        const isExpanded = expandedCard === index;
                        return (
                            <div
                                key={index}
                                className="team-card-legacy relative flex-1 min-w-[320px] max-w-[420px] bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 text-center transition-all duration-400 border-2 border-[#e88011]/20 shadow-lg hover:-translate-y-2 hover:shadow-2xl hover:border-[#e88011]/40 overflow-hidden group
                                    before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-[#e88011] before:to-blue-500"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Photo Container */}
                                {member.photoUrl && (
                                    <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-[0_8px_24px_rgba(232,128,17,0.3)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_12px_32px_rgba(232,128,17,0.4)]">
                                        <img
                                            src={member.photoUrl}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#e88011]/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                )}

                                {/* Info */}
                                <div className="space-y-2">
                                    <h3 className="text-xl md:text-2xl font-bold text-[#1e3a8a] tracking-tight">
                                        {member.name}
                                    </h3>
                                    <h4 className="text-sm font-semibold text-[#e88011] uppercase tracking-widest">
                                        {member.role}
                                    </h4>
                                    {/* Description with Toggle */}
                                    <div className="pt-4">
                                        <p className={`text-slate-600 text-sm leading-relaxed text-justify transition-all duration-300 ${isExpanded ? '' : 'line-clamp-6'}`}>
                                            {member.description}
                                        </p>
                                        
                                        {/* Read More / Less Button */}
                                        <button 
                                            onClick={() => toggleReadMore(index)}
                                            className="mt-2 text-[#e88011] text-xs font-bold uppercase tracking-tighter hover:underline focus:outline-none"
                                        >
                                            {isExpanded ? 'Read Less' : 'Read More'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )})}
                    </div>

                    {/* Stats Section */}
                    <div className="flex flex-wrap justify-center gap-y-8 gap-x-4 md:gap-12 p-3 md:px-8 rounded-xl border border-[#e88011]/30 bg-white/10 backdrop-blur-sm w-fit mx-auto">
                        {team.stats?.map((stat, i) => (
                            <div 
                                key={i} 
                                className="text-center space-y-2 w-[calc(50%-1rem)] md:w-auto md:min-w-[160px] max-w-[280px] flex flex-col justify-center"
                            >
                                <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-br from-[#e88011] to-blue-500 bg-clip-text text-transparent drop-shadow-sm">
                                    {stat.number}
                                </div>
                                <div className="text-neutral-white text-sm md:text-base font-medium opacity-90 leading-tight tracking-wide">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

