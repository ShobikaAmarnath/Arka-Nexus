import { sanityClient } from "../client";
import { SNAPSHOTS_QUERY } from "./queries/snapshots.query";

export const getSnapshotsPage = async () => {
  return sanityClient.fetch(SNAPSHOTS_QUERY);
};
