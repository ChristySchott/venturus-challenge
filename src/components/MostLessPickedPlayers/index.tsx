import React from 'react';

import {
  Wrapper,
  MostPicked,
  MidField,
  MidFieldLine,
  LessPicked,
  PlayerInfos,
  RatingsContainer,
} from './styles';

export type PickedPlayerProps = {
  name: string;
  initials: string;
  rating: string;
};

export type MostLessPickedPlayersProps = {
  mostPicked: PickedPlayerProps;
  lessPicked: PickedPlayerProps;
};

const MostLessPickedPlayers = ({
  mostPicked,
  lessPicked,
}: MostLessPickedPlayersProps) => (
  <Wrapper>
    <MostPicked>
      <PlayerInfos>
        <h1>{mostPicked.name}</h1>
        <div>
          <h2>{mostPicked.initials}</h2>
          <RatingsContainer>
            <h3>{mostPicked.rating}</h3>
          </RatingsContainer>
        </div>
      </PlayerInfos>
    </MostPicked>

    <MidField />
    <MidFieldLine />

    <LessPicked>
      <PlayerInfos>
        <h1>{lessPicked.name}</h1>
        <div>
          <h2>{lessPicked.initials}</h2>
          <RatingsContainer>
            <h3>{lessPicked.rating}</h3>
          </RatingsContainer>
        </div>
      </PlayerInfos>
    </LessPicked>
  </Wrapper>
);

export default MostLessPickedPlayers;
