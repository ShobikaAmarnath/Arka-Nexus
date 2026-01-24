import { servicesLandingContent, type ServicesLandingContent } from "../content/servicesLanding.content";

export const getServicesLandingContent =
  async (): Promise<ServicesLandingContent> => {
    return servicesLandingContent;
  };
