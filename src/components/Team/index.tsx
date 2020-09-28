import React from 'react';

import { Delete as DeleteIcon } from '@styled-icons/material/Delete';
import { ShareFill as ShareIcon } from '@styled-icons/bootstrap/ShareFill';
import { Edit as EditIcon } from '@styled-icons/material/Edit';

import { Wrapper, Name, Description, Actions } from './styles';

export type TeamProps = {
  name: string;
  description: string;
  onDelete?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onShare?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onEdit?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Team = ({ name, description, onDelete, onShare, onEdit }: TeamProps) => (
  <Wrapper>
    <Name>
      <span>{name}</span>
    </Name>
    <Description>
      <span>{description}</span>
    </Description>
    <Actions>
      <button type="button" aria-label="Delete team" onClick={onDelete}>
        <DeleteIcon />
      </button>
      <button type="button" aria-label="Share team" onClick={onShare}>
        <ShareIcon />
      </button>
      <button type="button" aria-label="Edit team" onClick={onEdit}>
        <EditIcon />
      </button>
    </Actions>
  </Wrapper>
);

export default Team;
