export const LEADERSHIP_TEAM_QUERY = `
*[_type == "leadershipTeam"][0]{
  sectionTitle,
  sectionIntro,
  members[]{
    name,
    role,
    description,
    "photoUrl": photo.asset->url
  },
  stats[]{
    number,
    label
  }
}
`;
