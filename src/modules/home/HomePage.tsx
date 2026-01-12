import GridMotion from "./components/GridMotion";
import AboutSection from "./sections/AboutSection";
import CoreValuesSection from "./sections/CoreValuesSection";
import ServiceSection from "./components/ServiceSection";
import ClientsSection from "./sections/ClientsSection";
import ContactSection from "./sections/ContactSection";

export default function HomePage() {
  return (
    <div className="pt-nav-h">
      <GridMotion />
      <AboutSection />
      <CoreValuesSection />
      <ServiceSection />
      <ClientsSection />
      <ContactSection />
    </div>
  );
}
