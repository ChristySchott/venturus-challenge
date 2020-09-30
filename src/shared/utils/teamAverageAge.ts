import { Team } from 'shared/types/Team';

const add = (a: number, b: number) => a + b;

const getTeamAvgAge = (team: Team) => {
  const ages = team.players.map(p => p.age);

  const total = ages.reduce(add, 0);

  return Number((total / ages.length).toFixed(2));
};

export default getTeamAvgAge;
