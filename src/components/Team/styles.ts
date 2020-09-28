import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { lighten } from 'polished';

export const Wrapper = styled.li`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 45px;
    padding: ${theme.spacings.xxsmall};

    border-radius: 6px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${lighten(0.5, '#b13d6d')};
      color: ${theme.colors.secondary};
    }

    ${media.greaterThan('medium')`
      button {
        opacity: 0;
        transition: opacity 0.2s linear;
      }

      &:hover {
        button {
        opacity: 1;
        }
      }
    `}
  `}
`;

export const Name = styled.div`
  width: calc(40% + 80px);

  ${({ theme }) => css`
    span {
      font-size: ${theme.font.sizes.small};

      ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.medium};
      `}
    }
  `}
`;

export const Description = styled(Name)`
  width: 100%;
`;

export const Actions = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;

    button {
      background: transparent;
      border: none;
    }

    button + button {
      margin-left: 8px;

      ${media.greaterThan('medium')`
        margin-left: 15px;
      `}
    }

    svg {
      width: 16px;
      height: 16px;
      color: ${theme.colors.secondary};

      ${media.greaterThan('medium')`
        width: 20px;
        height: 20px;
      `}
    }
  `}
`;
