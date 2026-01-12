export type LeadershipTeamMember = {
  name: string;
  role: string;
  description: string;
  photoUrl?: string;
};

export type LeadershipTeamStat = {
  number: string;
  label: string;
};

export type LeadershipTeamData = {
  sectionTitle: string;
  sectionIntro: string;
  members: LeadershipTeamMember[];
  stats: LeadershipTeamStat[];
};
