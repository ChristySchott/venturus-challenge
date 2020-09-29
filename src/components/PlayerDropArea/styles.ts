import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;
    padding: 4px;

    border-radius: 50%;
    border: 2px dashed ${theme.colors.lightGray};

    > div {
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      background: rgba(220, 140, 188, 0.4);
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
