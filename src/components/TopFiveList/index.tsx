import React, { useCallback } from 'react';

import { Wrapper, Title } from './styles';

export type ListProps = {
  id: string;
  name: string;
  average: string;
};

export type TopFiveListProps = {
  title: string;
  list: ListProps[];
};

const TopFiveList = ({ title, list }: TopFiveListProps) => {
  const TeamsList = useCallback(
    () => (
      <>
        {list.map(({ id, name, average }) => (
          <li key={id}>
            <span>{name}</span>
            <strong>{average}</strong>
          </li>
        ))}
      </>
    ),
    [list],
  );

  return (
    <Wrapper>
      <Title>{title}</Title>
      <ul>
        <TeamsList />
      </ul>
    </Wrapper>
  );
};

export default TopFiveList;
