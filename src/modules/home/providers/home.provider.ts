import { homeContent } from "../content/home.content";
import type { HomeContent } from "../content/home.content";

export const getHomeContent = async (): Promise<HomeContent> => {
  return homeContent;
};
