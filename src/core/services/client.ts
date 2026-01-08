import { createClient } from "@sanity/client";
import { sanityConfig } from "../config/sanity.config";

export const sanityClient = createClient(sanityConfig);
