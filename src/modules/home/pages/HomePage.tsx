import GridMotion from "../components/GridMotion";
import AboutSection from "../sections/AboutSection";
import CoreValuesSection from "../sections/CoreValuesSection";
import ServiceSection from "../../services/sections/ServiceSection";
import { servicesLandingContent } from "../../services/content/servicesLanding.content";
import ClientsSection from "../sections/ClientsSection";
import ContactSection from "../sections/ContactSection";

export default function HomePage() {
  return (
    <div className="pt-nav-h">
      <GridMotion />
      <AboutSection />
      <CoreValuesSection />
      <ServiceSection services={servicesLandingContent.services}/>
      <ClientsSection />
      <ContactSection />
    </div>
  );
}
