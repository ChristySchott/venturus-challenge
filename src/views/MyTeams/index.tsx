import React, { useState, useEffect } from 'react';
import { Plus } from '@styled-icons/boxicons-regular/Plus';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootState } from 'store/rootReducer';
import { deleteTeam } from 'store/ducks/team';
import { EmptyState } from 'views/CreateTeam/styles';
import { setTeamToEdit } from 'store/ducks/editing';
import { TeamHighlight, Team, PlayerPositions } from 'shared/types/Team';
import getTeamAvgAge from 'shared/utils/teamAverageAge';
import {
  mostPickedPlayerFn,
  leastPickedPlayerFn,
} from 'shared/utils/highlightPlayers';
import { getInitials } from 'shared/utils/initials';

import Button from 'components/Button';
import WrapperList from 'components/WrapperList';
import MostLessPickedPlayers from 'components/MostLessPickedPlayers';
import TeamComponent from 'components/Team';
import TopFiveList from 'components/TopFiveList';

import { Wrapper, Content, TeamsList, AvgTopFive } from './styles';

const MyTeams = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const teams = useSelector((state: RootState) => state.team);

  const initialAvgTeams: TeamHighlight[] = [];

  const initialHighlightPlayers = {
    name: '',
    initials: '',
    rating: 0,
  };

  const [highestAvgTeams, setHighestAvgTeams] = useState(initialAvgTeams);
  const [lowestAvgTeams, setLowestAvgTeams] = useState(initialAvgTeams);
  const [mostPickedPlayer, setMostPickedPlayer] = useState(
    initialHighlightPlayers,
  );
  const [leastPickedPlayer, setLeastPickedPlayer] = useState(
    initialHighlightPlayers,
  );

  function handleDeleteTeam(id: string) {
    const team = teams.find(current => current.id === id);

    if (!team) return;

    dispatch(deleteTeam(team));
  }

  function handleEditTeam(id: string) {
    const team = teams.find(current => current.id === id);

    if (!team) return;

    dispatch(setTeamToEdit(team));

    history.push('/create-team');
  }

  function initialTeamsHighlight() {
    const hasPlayers = (currentTeam: Team) => currentTeam.players.length;

    const averages = teams.filter(hasPlayers).map(currentTeam => ({
      id: currentTeam.id,
      name: currentTeam.name,
      avgAge: getTeamAvgAge(currentTeam),
    }));

    const highestSorted = [...averages].sort((a, b) => b.avgAge - a.avgAge);
    const lowestSorted = [...averages].sort((a, b) => a.avgAge - b.avgAge);

    const highest = highestSorted.slice(0, 5);
    const lowest = lowestSorted.slice(0, 5);

    type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType[number];

    const fmt = (currentTeam: ArrayElement<typeof averages>) => ({
      ...currentTeam,
      avgAge: currentTeam.avgAge.toFixed(1),
    });

    setHighestAvgTeams(highest.map(fmt));
    setLowestAvgTeams(lowest.map(fmt));
  }

  function getHighlightPlayer(getSelectPlayer: (arr: string[]) => string) {
    if (!teams?.length) return;

    const getPlayerId = (player: PlayerPositions) => String(player.id);

    const players = teams.flatMap(currenTeam => currenTeam.players);

    const playersId = players.map(getPlayerId);

    const id = getSelectPlayer(playersId);

    const results = playersId.filter(currentPlayer => currentPlayer === id)
      .length;

    const rating = Math.floor(100 / (playersId.length / results));

    const isHighlighted = (currentPlayer: PlayerPositions) =>
      String(currentPlayer.id) === id;

    const player = players.find(isHighlighted);

    if (!player) return;

    const initials = getInitials(player.name);

    // eslint-disable-next-line consistent-return
    return { name: player.name, initials, rating };
  }

  function inititalPlayersHighlight() {
    const mostPicked = getHighlightPlayer(mostPickedPlayerFn);
    const leastPicked = getHighlightPlayer(leastPickedPlayerFn);

    setMostPickedPlayer(mostPicked || initialHighlightPlayers);
    setLeastPickedPlayer(leastPicked || initialHighlightPlayers);
  }

  useEffect(() => {
    initialTeamsHighlight();
    inititalPlayersHighlight();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teams]);

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
                  <TeamComponent
                    name={team.name}
                    description={team.description}
                    onEdit={() => handleEditTeam(team.id)}
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
              <AvgTopFive>
                <TopFiveList title="Highest avg age" list={highestAvgTeams} />
                <TopFiveList title="Lowest avg age" list={lowestAvgTeams} />
              </AvgTopFive>
            ) : (
              <EmptyState> Create your teams </EmptyState>
            )}
          </WrapperList>

          <MostLessPickedPlayers
            mostPicked={mostPickedPlayer}
            lessPicked={leastPickedPlayer}
          />
        </div>
      </Content>
    </Wrapper>
  );
};

export default MyTeams;
