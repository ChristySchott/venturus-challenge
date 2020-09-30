import { Formation } from 'shared/types/Formation';

export type FormationOption = {
  label: string;
  value: Formation;
};

export const availableFormations: Formation[] = [
  [5, 4, 1],
  [3, 4, 3],
  [3, 5, 2],
  [4, 4, 2],
  [4, 5, 1],
  [4, 3, 2],
];

export const formatFormationOption = (value: Formation) => ({
  value,
  label: value.join(' - '),
});
