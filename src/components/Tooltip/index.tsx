import React from 'react';

import { getInitials } from 'shared/utils/initials';
import { Player } from 'shared/types/Player';

import { Wrapper } from './styles';

export type TooltipProps = {
  player: Player;
};

const Tooltip = ({ player }: TooltipProps) => (
  <Wrapper>
    <h4>{getInitials(player.name)}</h4>
    <div>
      <span>
        Name:
        <strong>{player.name}</strong>
      </span>
      <span>
        Age:
        <strong>{player.age}</strong>
      </span>
      <span>
        Nationality:
        <strong>{player.nationality}</strong>
      </span>
    </div>
  </Wrapper>
);

export default Tooltip;
