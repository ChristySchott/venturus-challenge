import React from 'react';

import { Wrapper, Info } from './styles';

export type PlayerProps = {
  name: string;
  age: string;
  nationality: string;
};

const Player = ({ name, age, nationality }: PlayerProps) => (
  <Wrapper>
    <div>
      <div>
        <Info>
          <span>Name:</span>
          {name}
        </Info>
        <Info>
          <span>Age:</span>
          {age}
        </Info>
      </div>
      <div>
        <Info>
          <span>Nationality:</span>
          {nationality}
        </Info>
      </div>
    </div>
  </Wrapper>
);

export default Player;
