import "./AboutPage.css";
import AboutIntroSection from "./sections/AboutIntroSection";
import AboutTabsSection from "./sections/AboutTabsSection";
import AboutTeamSection from "./sections/AboutTeamsSection";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#00001d] overflow-hidden">
      {/* Background Layer - Managed by Legacy CSS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="fluid-background"></div>
        <div className="overlay-pattern"></div>
      </div>

      {/* Main Content Container - Tailwind Centric */}
      <main className="relative z-10 mx-auto max-w-[1400px] px-4 py-24 md:px-8 lg:py-32">
        <div className="flex flex-col gap-10 lg:gap-8">
          <AboutIntroSection />
          <AboutTabsSection />
          <AboutTeamSection />
        </div>
      </main>
    </div>
  );
};



