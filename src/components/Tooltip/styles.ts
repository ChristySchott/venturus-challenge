import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    text-align: center;

    &:hover > div {
      opacity: 1;
    }

    > div {
      display: flex;
      flex-direction: column;
      position: absolute;

      transition: opacity 0.3s ease-in-out;
      opacity: 0;

      background: ${theme.colors.mainBg};
      padding: ${theme.spacings.xxsmall};

      border-radius: 8px;
    }

    span {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.medium};

      display: -webkit-box;

      strong {
        margin: 0 5px 0 2px;
        display: flex;
      }
    }
  `}
`;
