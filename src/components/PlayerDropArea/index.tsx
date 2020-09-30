import React, { useState, useEffect } from 'react';
import { Plus } from '@styled-icons/boxicons-regular/Plus';
import { useDrop, DragObjectWithType } from 'react-dnd';

import { Player } from 'shared/types/Player';
import { PlayerPositions } from 'shared/types/Team';

import Tooltip from 'components/Tooltip';

import { Wrapper } from './styles';

type DropType = DragObjectWithType & { player: PlayerPositions };

export type PlayerDropAreaProps = {
  row: number;
  col: number;
  formation: number[];
  pickPlayer: (player: Player) => void;
  currentPlayer: PlayerPositions | undefined;
};

const PlayerDropArea = (props: PlayerDropAreaProps) => {
  const { pickPlayer, row, col, formation, currentPlayer } = props;

  const position = [row, col];

  const [sheddedPlayer, setSheddedPlayer] = useState<
    PlayerPositions | undefined
  >(currentPlayer);

  useEffect(() => {
    setSheddedPlayer(undefined);
  }, [formation]);

  const [, drop] = useDrop({
    accept: 'player',
    drop: ({ player }: DropType) => {
      const teamPlayer = { ...player, position };

      setSheddedPlayer(teamPlayer);
      pickPlayer(teamPlayer);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  const player = sheddedPlayer || currentPlayer;

  return (
    <Wrapper ref={drop}>
      <div>
        {player && <Tooltip player={player} />}
        {!player && <Plus aria-label="Add a player" data-testid="plus-icon" />}
      </div>
    </Wrapper>
  );
};

export default PlayerDropArea;
