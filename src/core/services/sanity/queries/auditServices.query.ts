export const auditServiceQuery = (type: string) => `
*[_type == "${type}"][0]{
  title,
  description,
  "images": images[].asset->url,
  "auditImages": auditImages[].asset->url,
  steps,
  keySteps,
  benefits
}
`;
