import GridMotion from "./components/GridMotion";
import AboutSection from "./sections/AboutSection";

export default function HomePage() {
  return (
    <div className="pt-nav-h">
      <GridMotion autoSpeed={1.5} />
      <AboutSection/>
      {/* other home sections will be added later */}
    </div>
  );
}
