import React from 'react';
import { Plus } from '@styled-icons/boxicons-regular/Plus';
import { useSelector, useDispatch } from 'react-redux';

import Button from 'components/Button';
import WrapperList from 'components/WrapperList';
import MostLessPickedPlayers from 'components/MostLessPickedPlayers';
import Team from 'components/Team';
// import TopFiveList from 'components/TopFiveList';

import { RootState } from 'store/rootReducer';
import { deleteTeam } from 'store/ducks/team';
import { EmptyState } from 'views/CreateTeam/styles';
import { Wrapper, Content, TeamsList, AvgTopFive } from './styles';

const mostPicked = {
  name: '',
  initials: '',
  rating: '',
};

const lessPicked = {
  name: '',
  initials: '',
  rating: '',
};

const MyTeams: React.FC = () => {
  const dispatch = useDispatch();

  const teams = useSelector((state: RootState) => state.team);

  function handleDeleteTeam(id: string) {
    const team = teams.find(t => t.id === id);

    if (!team) return;

    dispatch(deleteTeam(team));
  }

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
                as="a"
                href="/create-team"
              />
            }
          >
            <TeamsList>
              {teams.length > 0 ? (
                teams.map(team => (
                  <Team
                    name={team.name}
                    description={team.description}
                    onDelete={() => handleDeleteTeam(team.id)}
                  />
                ))
              ) : (
                <EmptyState> Create your teams </EmptyState>
              )}
            </TeamsList>
          </WrapperList>
        </div>

        <div>
          <WrapperList title="Top 5">
            {teams.length > 0 ? (
              teams.map(team => (
                <AvgTopFive>
                  {/* <TopFiveList title="Highest avg age" list={teams} /> */}
                  {/* <TopFiveList title="Lowest avg age" list={teams} /> */}
                </AvgTopFive>
              ))
            ) : (
              <EmptyState> Create your teams </EmptyState>
            )}
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
