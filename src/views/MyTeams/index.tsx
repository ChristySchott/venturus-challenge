import React from 'react';
import { Plus } from '@styled-icons/boxicons-regular/Plus';
import { useSelector } from 'react-redux';

import Button from 'components/Button';
import WrapperList from 'components/WrapperList';
import MostLessPickedPlayers from 'components/MostLessPickedPlayers';
import Team from 'components/Team';
// import TopFiveList from 'components/TopFiveList';

import { RootState } from 'store/rootReducer';
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

const MyTeams: React.FC = () => {
  const teams = useSelector((state: RootState) => state.team);

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
              {teams.length > 0 &&
                teams.map(team => (
                  <Team name={team.name} description={team.description} />
                ))}
            </TeamsList>
          </WrapperList>
        </div>

        <div>
          <WrapperList title="Top 5">
            <AvgTopFive>
              {/* <TopFiveList title="Highest avg age" list={teams} /> */}
              {/* <TopFiveList title="Lowest avg age" list={teams} /> */}
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
