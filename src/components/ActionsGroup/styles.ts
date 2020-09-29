import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      ${media.greaterThan('large')`
        flex-direction: row;
        align-items: flex-start;
      `}
    }

    h2 {
      color: ${theme.colors.gray};
      font-size: ${theme.font.sizes.large};
      margin-bottom: ${theme.spacings.small};

      width: 100%;
      text-align: center;
      text-transform: uppercase;

      ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.xlarge};
      `}
    }
  `}
`;
