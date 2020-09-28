import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'react-router-dom';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 60px;

    background-image: ${theme.colors.gradient};
    color: ${theme.colors.white};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 1048px;
    height: 100%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 ${theme.spacings.xxsmall};
  `}
`;

export const LogoBox = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: transparent;
    color: ${theme.colors.white};

    text-decoration: none;

    img {
      width: 50px;
    }

    h2 {
      display: none;

      ${media.greaterThan('medium')`
        display: block;
        margin-left: 6px;
        font-size: ${theme.font.sizes.large};
      `}

      ${media.greaterThan('large')`
        font-size: ${theme.font.sizes.xlarge};
        margin-left: ${theme.spacings.xsmall};
      `}
    }
  `}
`;

export const UserInfos = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: #fff;

    span {
      font-size: ${theme.font.sizes.medium};
      margin-right: 6px;
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 40px;
      height: 40px;

      background: ${theme.colors.mainBg};
      border-radius: 50%;

      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.xlarge};

      ${media.greaterThan('large')`
        width: 45px;
        height: 45px;
      `}
    }
  `}
`;
