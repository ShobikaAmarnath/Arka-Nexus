import { sanityClient } from "../client";
import { footerQuery } from "./queries/footer.query";

export async function getFooterData() {
  return sanityClient.fetch(footerQuery);
}
