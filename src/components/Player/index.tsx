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

const PlayerCard = (props: PlayerProps & { connectDragSource: any }) => {
  const [, dragRef] = useDrag({
    item: { type: 'player', player: props },
  });

  const { connectDragSource } = props;

  return connectDragSource(
    <Wrapper ref={dragRef}>
      <div>
        <div>
          <Info>
            <span>Name:</span>
            {props.player.name}
          </Info>
          <Info>
            <span>Age:</span>
            {props.player.age}
          </Info>
        </div>
        <div>
          <Info>
            <span>Nationality:</span>
            {props.player.nationality}
          </Info>
        </div>
      </div>
    </Wrapper>,
  );
};

export default DragSource('player', playerSrc, collect)(PlayerCard);
