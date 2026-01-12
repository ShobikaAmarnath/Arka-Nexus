import { sanityClient } from "../client";
import { CLIENT_LOGOS } from "./queries/clients.query";

export const fetchClientLogos = async () => {
  return sanityClient.fetch(CLIENT_LOGOS);
};
