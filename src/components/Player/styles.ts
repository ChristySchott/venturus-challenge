import styled, { css } from 'styled-components';

export const Wrapper = styled.li`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};

    > div {
      width: 100%;
      padding: ${theme.spacings.xsmall};

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
      font-weight: ${theme.font.bold};
      margin-right: 4px;
      color: ${theme.colors.black};
    }
  `}
`;
