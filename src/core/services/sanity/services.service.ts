import { sanityClient } from "../client";
import { auditServiceQuery } from "./queries/auditServices.query";
import { trainingServiceQuery } from "./queries/trainingServices.query";

export const getTrainingServiceData = async (type: string) => {
  return sanityClient.fetch(trainingServiceQuery(type));
};

export const getAuditServiceData = async (type: string) => {
  return sanityClient.fetch(auditServiceQuery(type));
};
