import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce/lib';
import { RootState } from 'store/rootReducer';
import { useSelector, useDispatch } from 'react-redux';

import WrapperList from 'components/WrapperList';
import ActionsGroup from 'components/ActionsGroup';
import Input from 'components/Input';
import TextArea from 'components/TextArea';
import PlayerCard from 'components/Player';
import { useHistory } from 'react-router-dom';

import { Team } from 'shared/types/Team';
import getPlayers from 'shared/services/Player';
import TeamFormation from 'components/TeamFormation';
import { Player } from 'shared/types/Player';
import {
  availableFormations,
  formatFormationOption,
  FormationOption,
} from 'shared/utils/formations';
import { createTeam, updateTeam, setTeamToUpdate } from 'store/ducks/team';

import Button from 'components/Button';
import TagsBox from 'components/TagsBox';

import {
  Wrapper,
  Content,
  Fieldset,
  PlayersList,
  FormationWrapper,
  FormationSection,
  FormationSelect,
  ListContent,
  EmptyState,
  TagsTitle,
  WrapperRadio,
  InputRadio,
  LabelRadio,
} from './styles';

const CreateTeam = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const editing = useSelector((state: RootState) => state.team.teamToEdit);

  const initialTeamState = editing.id ? editing : new Team();

  const [players, setPlayers] = useState<Player[]>([]);
  const [team, setTeam] = useState(initialTeamState);
  const [search, setSearch] = useState('');
  const [formation, setFormation] = useState(new Team().formation);
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);

  const [searchDebounce] = useDebounce(search, 450);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { value, id } = event.target;

    if (id === 'real' || id === 'fantasy') {
      const isReal = value === 'real';

      setTeam(state => ({ ...state, type: isReal ? 'real' : 'fantasy' }));
      return;
    }

    setTeam(state => ({ ...state, [id]: value }));
  }

  function handleSelectFormation(formationOption: FormationOption) {
    const { value } = formationOption;

    setFormation(value);
    setSelectedPlayers([]);
    setTeam(state => ({ ...state, players: [] }));
  }

  function handleSearchInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    setSearch(value);
  }

  useEffect(() => {
    async function searchPlayers() {
      const response = await getPlayers(search);

      if (response) {
        setPlayers(response);
      }
    }
    searchPlayers();
  }, [searchDebounce, search]);

  function pickPlayer(player: Player) {
    setSelectedPlayers(state => [...state, player]);
  }

  const handleAddTag = (value: string) => {
    setTeam(state => ({ ...state, tags: [...state.tags, value] }));
  };

  const handleDeleteTag = (index: number) => () => {
    setTeam(state => ({
      ...state,
      tags: state.tags.filter((_, i2) => i2 !== index),
    }));
  };

  const formations = availableFormations.map(formatFormationOption);

  function handleSave() {
    const teamToSave = { ...team, players: selectedPlayers, formation };

    if (editing.name) {
      dispatch(updateTeam(teamToSave));
    }

    if (!editing.name) {
      dispatch(createTeam(teamToSave));
    }

    dispatch(setTeamToUpdate(new Team()));

    setTeam(new Team());

    history.push('/');
  }

  const emptyStateText = search ? 'No players found!' : 'Search for players';

  return (
    <Wrapper>
      <Content>
        <WrapperList title="Create your team">
          <ListContent>
            <ActionsGroup title="Team information">
              <Fieldset>
                <Input
                  type="text"
                  label="Team name"
                  placeholder="Input team name"
                  error={false}
                  id="name"
                  value={team.name}
                  onChange={handleChange}
                />

                <TextArea
                  id="description"
                  label="Description"
                  error={false}
                  value={team.description}
                  onChange={handleChange}
                />
              </Fieldset>

              <Fieldset>
                <Input
                  type="text"
                  label="Team website"
                  placeholder="http://myteam.com"
                  error={false}
                  id="website"
                  value={team.website}
                  onChange={handleChange}
                />

                <WrapperRadio>
                  <h4>Team type</h4>
                  <InputRadio
                    id="real"
                    type="radio"
                    value="real"
                    checked={team.type === 'real'}
                    onChange={handleChange}
                  />
                  <LabelRadio>Real</LabelRadio>

                  <InputRadio
                    id="fantasy"
                    type="radio"
                    value="fantasy"
                    checked={team.type === 'fantasy'}
                    onChange={handleChange}
                  />
                  <LabelRadio>Fantasy</LabelRadio>
                </WrapperRadio>

                <TagsTitle>Tags</TagsTitle>
                <TagsBox
                  addTag={handleAddTag}
                  deleteTag={handleDeleteTag}
                  tags={team.tags}
                />
              </Fieldset>
            </ActionsGroup>

            <ActionsGroup title="Configure Squad">
              <FormationWrapper>
                <FormationSection>
                  <h4>Formation</h4>
                  <FormationSelect
                    options={formations}
                    value={formatFormationOption(formation)}
                    onChange={handleSelectFormation}
                  />
                </FormationSection>
                <FormationSection>
                  <TeamFormation
                    team={team}
                    formation={formation}
                    pickPlayer={pickPlayer}
                  />
                </FormationSection>

                <Button
                  fullWidth
                  aria-label="Save team"
                  role="button"
                  onClick={handleSave}
                >
                  Save
                </Button>
              </FormationWrapper>

              <PlayersList>
                <Input
                  type="text"
                  label="Search players"
                  placeholder="Insert player name"
                  error={false}
                  id="search"
                  value={search}
                  onChange={handleSearchInputChange}
                />

                <ul>
                  {players.length > 0 ? (
                    players.map((player, index) => (
                      <PlayerCard key={index} {...player} />
                    ))
                  ) : (
                    <EmptyState>{emptyStateText}</EmptyState>
                  )}
                </ul>
              </PlayersList>
            </ActionsGroup>
          </ListContent>
        </WrapperList>
      </Content>
    </Wrapper>
  );
};

export default CreateTeam;
