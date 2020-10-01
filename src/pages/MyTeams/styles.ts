import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-top: ${theme.spacings.small};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 1110px;

    margin: 0 auto;
    padding: 0 ${theme.spacings.xxsmall};

    display: flex;
    flex-direction: column;

    ${media.greaterThan('large')`
      flex-direction: row;
      padding: 0;
      justify-content: space-between;

      section {
        margin-bottom: ${theme.spacings.small};
      }
    `}

    > div {
      margin-bottom: 15px;

      ${media.greaterThan('large')`
        max-width: 540px;
        flex: 1;
      `}
    }

    > div:nth-child(1) {
      ${media.greaterThan('large')`

        section {
          height: 575px;
        }
      `}
    }
  `}
`;

export const TeamsList = styled.ul`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      padding: ${theme.spacings.xxsmall};
    `}
  `}
`;

export const AvgTopFive = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
  `}
`;
