import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.li`
  ${({ theme }) => css`
    > div {
      width: 100%;
      padding: ${theme.spacings.xxsmall};

      font-size: ${theme.font.sizes.small};

      ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.medium};
      `}

      background: linear-gradient(
        180deg,
        ${theme.colors.white},
        ${theme.colors.lightGray}
      );
      border: 1px dashed ${theme.colors.gray};

      > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
  `}
`;

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.red};
    line-height: 1.4;

    span {
      font-weight: ${theme.font.medium};
      margin-right: 4px;
      color: ${theme.colors.black};
    }
  `}
`;
