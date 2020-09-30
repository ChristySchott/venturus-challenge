import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    z-index: ${theme.layers.base};

    width: 70px;
    height: 70px;
    padding: 4px;

    border-radius: 50%;
    border: 2px dashed ${theme.colors.lightGray};

    ${media.greaterThan('medium')`
      width: 80px;
      height: 80px;
    `}

    > div {
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      background: rgb(220, 140, 188);
      border: 1px solid ${theme.colors.gray};

      border-radius: 50%;
      text-transform: uppercase;
      font-size: ${theme.font.sizes.medium};

      svg {
        width: 25px;
        height: 25px;

        color: ${theme.colors.white};
      }
    }
  `}
`;
