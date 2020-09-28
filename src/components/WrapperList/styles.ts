import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    border-radius: 12px;

    padding-bottom: ${theme.spacings.xsmall};

    header {
      width: 100%;
      padding: ${theme.spacings.xsmall};

      display: flex;
      align-items: center;
      justify-content: space-between;

      border-bottom: 1px solid ${theme.colors.lightGray};

      h2 {
        color: ${theme.colors.primary};
        font-size: ${theme.font.sizes.large};

        ${media.greaterThan('medium')`
          font-size: ${theme.font.sizes.xlarge};
        `}
      }

      button {
        svg {
          width: 25px;
          height: 20px;

          ${media.greaterThan('medium')`
            width: 28px;
            height: 35px;
          `}
        }
      }
    }
  `};
`;
