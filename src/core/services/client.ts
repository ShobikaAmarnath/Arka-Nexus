import { createClient } from "@sanity/client";
import { sanityConfig } from "../config/sanity.config";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient(sanityConfig);

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}