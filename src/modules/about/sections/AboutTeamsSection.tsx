import { useEffect, useState } from "react";
import { getLeadershipTeam } from "../../../core/services/sanity/leadershipTeam.service";
import type { LeadershipTeamData } from "../../../core/services/sanity/leadershipTeam.types";

export default function AboutTeamSection() {

    const [team, setTeam] = useState<LeadershipTeamData | null>(null);

    useEffect(() => {
        getLeadershipTeam()
            .then(setTeam)
            .catch(console.error);
    }, []);

    if (!team) {
        return <p style={{ padding: 80, color: "#fff" }}>Loading...</p>;
    }

    return (
        <>
            <section id="team" className="mt-1 px-2 sm:px-4 lg:px-6">
                <div className="max-w-[1400px] mx-auto p-6 md:p-10 rounded-2xl border border-[#e88011]/20 bg-gradient-to-br from-white/5 to-white/[0.02]">

                    {/* Section Header */}
                    <div className="text-center mb-12 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-br from-white to-[#e88011] bg-clip-text text-transparent">
                            {team.sectionTitle}
                        </h2>
                        <p className="text-slate-100 text-base md:text-lg leading-relaxed">
                            {team.sectionIntro}
                        </p>
                    </div>

                    {/* Team Grid */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16">
                        {team.members?.map((member, index) => (
                            <div
                                key={index}
                                className="team-card-legacy relative w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2.5rem)] max-w-sm bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 text-center transition-all duration-400 border-2 border-[#e88011]/20 shadow-lg hover:-translate-y-2 hover:shadow-2xl hover:border-[#e88011]/40 overflow-hidden group
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
                                    <p className="text-slate-600 text-sm leading-relaxed text-justify pt-4">
                                        {member.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-8 md:p-12 rounded-xl border border-[#e88011]/30 bg-white/10 backdrop-blur-sm">
                        {team.stats?.map((stat, i) => (
                            <div key={i} className="text-center space-y-2">
                                <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-br from-[#e88011] to-blue-500 bg-clip-text text-transparent">
                                    {stat.number}
                                </div>
                                <div className="text-white text-sm md:text-base font-medium opacity-90">
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

