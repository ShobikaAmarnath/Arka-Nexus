import { sanityClient } from "../client";
import { INSTRUMENTS_QUERY } from "./queries/instruments.query";

export const getInstruments = async () => {
  return sanityClient.fetch(INSTRUMENTS_QUERY);
};
