import React from 'react';

import { Wrapper } from './styles';

export type ActionsGroupProps = {
  title: string;
  children: React.ReactNode;
};

const ActionsGroup = ({ title, children }: ActionsGroupProps) => (
  <Wrapper>
    <h2>{title}</h2>
    <div>{children}</div>
  </Wrapper>
);

export default ActionsGroup;
