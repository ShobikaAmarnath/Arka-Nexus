import { createClient } from "@sanity/client";
import { sanityConfig } from "../config/sanity.config";
import { createImageUrlBuilder } from "@sanity/image-url";

export const sanityClient = createClient(sanityConfig);

const builder = createImageUrlBuilder(sanityClient);
export function urlFor(source: any) {
  return builder.image(source);
}
