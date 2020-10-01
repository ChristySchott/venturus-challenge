import React from 'react';
import { DragSource, useDrag } from 'react-dnd';

import { collect } from 'App';
import { Player } from 'shared/types/Player';

import { Wrapper, Info } from './styles';

export const playerSrc = {
  beginDrag(props: { id: string }) {
    const item = { id: props.id };
    return item;
  },
};

const PlayerCard = (props: Player & { connectDragSource: any }) => {
  const [, dragRef] = useDrag({
    item: { type: 'player', player: props },
  });

  const { connectDragSource } = props;

  return connectDragSource(
    <div ref={dragRef}>
      <Wrapper>
        <div>
          <div>
            <Info>
              <span>Name:</span>
              {props.name}
            </Info>
            <Info>
              <span>Age:</span>
              {props.age}
            </Info>
          </div>
          <div>
            <Info>
              <span>Nationality:</span>
              {props.nationality}
            </Info>
          </div>
        </div>
      </Wrapper>
    </div>,
  );
};

export default DragSource('player', playerSrc, collect)(PlayerCard);
