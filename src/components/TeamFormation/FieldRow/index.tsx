import React from 'react';

import { PlayerPositions } from 'shared/types/Team';
import { Player } from 'shared/types/Player';

import PlayerDropArea from 'components/PlayerDropArea';
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

  function selectPosition(column: number) {
    return [row, column];
  }

  const positionIsTheSame = (column: number) => (player: PlayerPositions) => {
    const { position: playerPosition = [] } = player;

    const position = selectPosition(column);

    const matchesPlace = (currentPosition: number, index: number) =>
      currentPosition === position[index];

    return playerPosition.every(matchesPlace);
  };

  function findPlayer(column: number) {
    return players.find(positionIsTheSame(column));
  }

  const rest = { row, pickPlayer, formation };

  return (
    <Wrapper>
      {allPlayers.map((_, column) => (
        <PlayerDropArea
          col={column}
          currentPlayer={findPlayer(column)}
          {...rest}
        />
      ))}
    </Wrapper>
  );
};

export default FieldRow;
