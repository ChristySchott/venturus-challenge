import React, { useCallback } from 'react';

import { TeamHighlight } from 'shared/types/Team';
import { Wrapper, Title } from './styles';

export type TopFiveListProps = {
  title: string;
  list: TeamHighlight[];
};

const TopFiveList = ({ title, list }: TopFiveListProps) => {
  const renderTeamsList = useCallback(
    () => (
      <>
        {list.map(({ id, name, avgAge }) => (
          <li key={id}>
            <span>{name}</span>
            <strong>{avgAge}</strong>
          </li>
        ))}
      </>
    ),
    [list],
  );

  return (
    <Wrapper>
      <Title>{title}</Title>
      <ul>{renderTeamsList()}</ul>
    </Wrapper>
  );
};

export default TopFiveList;
