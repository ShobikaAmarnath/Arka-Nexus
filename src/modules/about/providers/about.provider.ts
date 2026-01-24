import { aboutContent } from "../content/about.content";
import type { AboutContent } from "../content/about.content";

export const getAboutContent = async (): Promise<AboutContent> => {
  return aboutContent;
};
