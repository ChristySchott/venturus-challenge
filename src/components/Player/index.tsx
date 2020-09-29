import React from 'react';
import { DragSource, useDrag } from 'react-dnd';

import { collect } from 'App';
import { Player } from 'shared/types/Player';

import { Wrapper, Info } from './styles';

export type PlayerProps = {
  player: Player;
};

export const playerSrc = {
  beginDrag(props: { id: string }) {
    const item = { id: props.id };
    return item;
  },
};

const Player = ({ player }: PlayerProps) => {
  const [, dragRef] = useDrag({
    item: { type: 'player', player },
  });

  return (
    <Wrapper ref={dragRef}>
      <div>
        <div>
          <Info>
            <span>Name:</span>
            {player.name}
          </Info>
          <Info>
            <span>Age:</span>
            {player.age}
          </Info>
        </div>
        <div>
          <Info>
            <span>Nationality:</span>
            {player.nationality}
          </Info>
        </div>
      </div>
    </Wrapper>
  );
};

export default DragSource('player', playerSrc, collect)(Player);
