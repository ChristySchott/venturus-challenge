import React from 'react';
import { Plus } from '@styled-icons/boxicons-regular/Plus';

import Button from 'components/Button';
import WrapperList from 'components/WrapperList';
import MostLessPickedPlayers from 'components/MostLessPickedPlayers';
import Team from 'components/Team';
import TopFiveList from 'components/TopFiveList';

import { Wrapper, Content, TeamsList, AvgTopFive } from './styles';

const mostPicked = {
  name: 'Cristiano Ronaldo',
  initials: 'CR',
  rating: '75%',
};

const lessPicked = {
  name: 'Gareth Bale',
  initials: 'GB',
  rating: '14%',
};

const teams = [
  {
    id: '1',
    name: 'AC Milan',
    average: '31.9',
  },
  {
    id: '2',
    name: 'FC Nantes',
    average: '28.3',
  },
  {
    id: '3',
    name: 'Grêmio',
    average: '27.9',
  },
  {
    id: '4',
    name: 'Inter',
    average: '25.6',
  },
];

const MyTeams: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <div>
          <WrapperList
            title="My Teams"
            button={
              <Button
                icon={<Plus />}
                size="small"
                aria-label="Create a new team"
              />
            }
          >
            <TeamsList>
              <Team name="Barcelona" description="Barcelona Squad" />
              <Team name="Real Madrid" description="Real Madrid Squad" />
              <Team name="Milan" description="Milan Squad" />
              <Team name="Liverpool" description="Liverpool Squad" />
            </TeamsList>
          </WrapperList>
        </div>

        <div>
          <WrapperList title="Top 5">
            <AvgTopFive>
              <TopFiveList title="Highest avg age" list={teams} />
              <TopFiveList title="Lowest avg age" list={teams} />
            </AvgTopFive>
          </WrapperList>

          <MostLessPickedPlayers
            mostPicked={mostPicked}
            lessPicked={lessPicked}
          />
        </div>
      </Content>
    </Wrapper>
  );
};

export default MyTeams;
