import { useEffect, useState } from "react";
import { getLeadershipTeam } from "../../../core/services/sanity/leadershipTeam.service";
import type { LeadershipTeamData } from "../../../core/services/sanity/leadershipTeam.types";

export default function AboutTeamSection() {
  const [team, setTeam] = useState<LeadershipTeamData | null>(null);
  const parts = team?.sectionIntro.split("*").map((p) => p.trim()) ?? [];
  const introText = parts[0];
  const expertiseItems = parts.slice(1).filter((item) => item !== "");
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  useEffect(() => {
    getLeadershipTeam().then(setTeam).catch(console.error);
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
        <div className="mx-auto max-w-[1400px] rounded-2xl border border-[#e88011]/20 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 md:p-10">
          {/* Section Header */}
          <div className="mx-auto mb-12 text-center">
            <h2 className="mb-4 bg-gradient-to-br from-white to-[#e88011] bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
              {team.sectionTitle}
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-100 md:text-lg">
              {introText}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:gap-4">
              {expertiseItems.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-2 whitespace-nowrap rounded-full border border-[#e88011]/30 bg-white/5 px-5 py-2.5 text-sm text-slate-100 transition-all duration-300 hover:border-[#e88011]/60 hover:bg-[#e88011]/10 md:text-base"
                >
                  {/* Glowing Dot Decoration */}
                  <span className="h-2 w-2 rounded-full bg-[#e88011] shadow-[0_0_8px_#e88011] transition-transform group-hover:scale-125" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Team Grid */}
          <div className="mx-auto mb-16 flex max-w-6xl flex-wrap justify-center gap-8 md:gap-12">
            {team.members?.map((member, index) => {
              const isExpanded = expandedCard === index;
              return (
                <div
                  key={index}
                  className="team-card-legacy duration-400 group relative min-w-[320px] max-w-[420px] flex-1 overflow-hidden rounded-2xl border-2 border-[#e88011]/20 bg-gradient-to-br from-white to-slate-50 p-8 text-center shadow-lg transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-[#e88011] before:to-blue-500 before:content-[''] hover:-translate-y-2 hover:border-[#e88011]/40 hover:shadow-2xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Photo Container */}
                  {member.photoUrl && (
                    <div className="relative mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-[0_8px_24px_rgba(232,128,17,0.3)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_12px_32px_rgba(232,128,17,0.4)]">
                      <img
                        src={member.photoUrl}
                        alt={member.name}
                        className="h-full w-full object-cover transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#e88011]/10 to-blue-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                  )}

                  {/* Info */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold tracking-tight text-[#1e3a8a] md:text-h3">
                      {member.name}
                    </h3>
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-[#e88011]">
                      {member.role}
                    </h4>
                    {/* Description with Toggle */}
                    <div className="pt-4">
                      <p
                        className={`text-justify text-sm leading-relaxed text-slate-600 transition-all duration-300 ${isExpanded ? "" : "line-clamp-6"}`}
                      >
                        {member.description}
                      </p>

                      {/* Read More / Less Button */}
                      <button
                        onClick={() => toggleReadMore(index)}
                        className="mt-2 text-xs font-bold uppercase tracking-tighter text-[#e88011] hover:underline focus:outline-none"
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="mx-auto flex w-fit flex-wrap justify-center gap-x-4 gap-y-8 rounded-xl border border-[#e88011]/30 bg-white/10 p-3 backdrop-blur-sm md:gap-12 md:px-8">
            {team.stats?.map((stat, i) => (
              <div
                key={i}
                className="flex w-[calc(50%-1rem)] max-w-[280px] flex-col justify-center space-y-2 text-center md:w-auto md:min-w-[160px]"
              >
                <div className="bg-gradient-to-br from-[#e88011] to-blue-500 bg-clip-text text-h3 font-extrabold text-transparent drop-shadow-sm md:text-3xl">
                  {stat.number}
                </div>
                <div className="text-sm font-medium leading-tight tracking-wide text-neutral-white opacity-90 md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
