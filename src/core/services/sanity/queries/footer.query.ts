export const footerQuery = `
*[_type == "contactDetails"][0]{
  emails,
  phoneNumbers,
  address
}
`;
