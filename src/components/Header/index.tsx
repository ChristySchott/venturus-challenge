import React from 'react';

import { getInitials } from 'utils/initials';

import logoImg from 'assets/logo.svg';
import { Wrapper, LogoBox, UserInfos, Content } from './styles';

export type HeaderProps = {
  user: string;
};

const Header = ({ user }: HeaderProps) => (
  <Wrapper>
    <Content>
      <LogoBox to="/">
        <img
          src={logoImg}
          alt="Círculo branco com um V de Venturus no centro."
        />
        <h2>Squad Management Tool</h2>
      </LogoBox>

      <UserInfos>
        <span>{user}</span>
        <div>{getInitials(user)}</div>
      </UserInfos>
    </Content>
  </Wrapper>
);

export default Header;
