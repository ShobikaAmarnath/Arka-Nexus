export const trainingServiceQuery = (type: string) => `
*[_type == "${type}"][0]{
  title,
  description,
  intro,
  "images": images[].asset->url,
  "auditImages": auditImages[].asset->url,
  steps,
  keyAreas,
  needs,
  objectives,
  stages,
  quote,
}
`;
