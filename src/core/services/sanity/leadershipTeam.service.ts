import { sanityClient } from "../client";
import { LEADERSHIP_TEAM_QUERY } from "./queries/leadershipTeam.query";

export const getLeadershipTeam = async () => {
  return sanityClient.fetch(LEADERSHIP_TEAM_QUERY);
};
