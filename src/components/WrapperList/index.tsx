import React from 'react';

import { Wrapper } from './styles';

export type WrapperListProps = {
  title: string;
  button?: React.ReactElement;
  children?: React.ReactNode;
};

const WrapperList = ({ title, button, children }: WrapperListProps) => (
  <Wrapper>
    <header>
      <h2>{title}</h2>
      {button && button}
    </header>

    <div>{children}</div>
  </Wrapper>
);

export default WrapperList;
