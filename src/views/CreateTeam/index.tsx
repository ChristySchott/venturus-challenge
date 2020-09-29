import React from 'react';

import WrapperList from 'components/WrapperList';

import ActionsGroup from 'components/ActionsGroup';
import Input from 'components/Input';
import TextArea from 'components/TextArea';
import Radio from 'components/Radio';
import Player from 'components/Player';

import { Wrapper, Content, Fieldset, PlayersList } from './styles';

const radios = [
  {
    id: '1',
    value: '',
    label: 'Real',
  },
  {
    id: '2',
    value: '',
    label: 'Fantasy',
  },
];

const CreateTeam = () => {
  return (
    <Wrapper>
      <Content>
        <WrapperList title="Create your team">
          <ActionsGroup title="Team information">
            <Fieldset>
              <Input
                type="text"
                label="Team name"
                placeholder="Input team name"
                error={false}
                id="name"
              />

              <TextArea id="description" label="Description" error={false} />
            </Fieldset>

            <Fieldset>
              <Input
                type="text"
                label="Team website"
                placeholder="http://myteam.com"
                error={false}
                id="website"
              />

              <Radio radioList={radios} title="Team type" />

              <TextArea id="tags" label="Tags" error={false} />
            </Fieldset>
          </ActionsGroup>

          <ActionsGroup title="Configure Squad">
            <div>
              <span>Formation</span>
            </div>

            <PlayersList>
              <Input
                type="text"
                label="Search players"
                placeholder="Insert player name"
                error={false}
                id="players"
              />

              <ul>
                <Player
                  name="Cristiano Ronaldo"
                  age="32"
                  nationality="Portugal"
                />
                <Player
                  name="Ronaldo Luiz de Alves"
                  age="28"
                  nationality="Brazil"
                />
                <Player
                  name="Ronaldo da Silva de Souza"
                  age="18"
                  nationality="Brazil"
                />
              </ul>
            </PlayersList>
          </ActionsGroup>
        </WrapperList>
      </Content>
    </Wrapper>
  );
};

export default CreateTeam;
