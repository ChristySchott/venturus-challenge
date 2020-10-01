import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    text-align: center;

    z-index: ${theme.layers.alwaysOnTop};

    &:hover div {
      opacity: 1;
      z-index: ${theme.layers.alwaysOnTop};
    }

    > div {
      display: flex;
      flex-direction: column;
      position: absolute;
      min-width: 200px;

      transition: opacity 0.3s ease-in-out;
      opacity: 0;

      background: ${theme.colors.mainBg};
      padding: ${theme.spacings.xxsmall};

      border-radius: 8px;

      top: -80px;
    }

    span {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.medium};

      display: -webkit-box;

      span {
        margin: 0 5px 0 2px;
        font-weight: ${theme.font.bold};
      }
    }
  `}
`;
