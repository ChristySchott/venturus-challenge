import React from 'react';

import { PlayerPositions } from 'shared/types/Team';
import { Player } from 'shared/types/Player';

// import { FormationSectionContainer } from '../../styles';
// import DroppableSpot from '../DroppableSpot';

import { Wrapper } from './styles';

export type FieldRowProps = {
  length: number;
  row: number;
  formation: number[];
  players: PlayerPositions[];
  pickPlayer: (player: Player) => void;
};

const FieldRow = (props: FieldRowProps) => {
  const { length, pickPlayer, row, formation, players } = props;

  const allPlayers = Array(length).fill(0);

  const selectPosition = (column: number) => [row, column];

  const checkIfPositionIsTheSame = (column: number) => (
    player: PlayerPositions,
  ) => {
    const { position: playerPosition = [] } = player;

    const position = selectPosition(column);

    const matchesPlace = (p: number, i: number) => p === position[i];

    return playerPosition.every(matchesPlace);
  };

  const findPlayer = (column: number) =>
    players.find(checkIfPositionIsTheSame(column));

  const spotParams = { row, pickPlayer, formation };

  return (
    <Wrapper>
      {/* {allPlayers.map((_, col) => (
        // <DroppableSpot
        //   col={col}
        //   key={col}
        //   editingPlayer={findPlayer(col)}
        //   {...spotParams}
        // />
      ))} */}
    </Wrapper>
  );
};

export default FieldRow;
