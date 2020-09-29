import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xsmall};

    ul {
      border-radius: 12px;
      border: 1px solid ${theme.colors.lightGray};
      background: ${theme.colors.lightGray};

      li {
        display: flex;
        justify-content: space-between;
        padding: 12px;

        border-radius: 12px;
        border: 1px solid ${theme.colors.lightGray};
        background: #fff;

        &:hover {
          border: 1px solid ${theme.colors.red};
        }

        span {
          color: ${theme.colors.black};
        }
      }

      li + li {
        margin-top: 1px;
      }
    }
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`;
