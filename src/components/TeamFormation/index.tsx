import React from 'react';

import { Formation } from 'shared/types/Formation';
import { Team } from 'shared/types/Team';
import { Player } from 'shared/types/Player';

import FieldRow from './FieldRow';

import { Wrapper } from './styles';

export type TeamFormationProps = {
  formation: Formation;
  team: Team;
  pickPlayer: (player: Player) => void;
};

const TeamFormation = (props: TeamFormationProps) => {
  const { pickPlayer, formation, team } = props;
  const { players } = team;

  const goalkeeper = 1;

  const defense = formation[0] > 3 ? 3 : formation[0];

  const firstMiddle = formation[0] > 3 ? formation[0] - 3 : 0;

  const secondMiddle = formation[1] > 3 ? 3 : formation[1];

  const thirdMiddle = formation[1] > 3 ? formation[1] - 3 : 0;

  const attack = formation[2];

  const rest = { pickPlayer, formation, players };

  return (
    <Wrapper>
      <FieldRow length={attack} row={0} {...rest} />

      <FieldRow length={thirdMiddle} row={1} {...rest} />

      <FieldRow length={secondMiddle} row={2} {...rest} />

      <FieldRow length={firstMiddle} row={3} {...rest} />

      <FieldRow length={defense} row={4} {...rest} />

      <FieldRow length={goalkeeper} row={5} {...rest} />
    </Wrapper>
  );
};

export default TeamFormation;
