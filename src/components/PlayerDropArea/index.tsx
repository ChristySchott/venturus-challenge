import React from 'react';
import { Plus } from '@styled-icons/boxicons-regular/Plus';

import { Player } from 'shared/types/Player';
import Tooltip from 'components/Tooltip';

import { Wrapper } from './styles';

export type PlayerDropAreaProps = {
  player?: Player;
};

const PlayerDropArea = ({ player }: PlayerDropAreaProps) => (
  <Wrapper>
    <div>
      {player && <Tooltip player={player} />}
      {!player && <Plus aria-label="Add a player" data-testid="plus-icon" />}
    </div>
  </Wrapper>
);

export default PlayerDropArea;
