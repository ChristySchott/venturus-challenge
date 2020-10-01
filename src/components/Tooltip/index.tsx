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
        <span>{player.name}</span>
      </span>
      <span>
        Age:
        <span>{player.age}</span>
      </span>
      <span>
        Nationality:
        <span>{player.nationality}</span>
      </span>
    </div>
  </Wrapper>
);

export default Tooltip;
