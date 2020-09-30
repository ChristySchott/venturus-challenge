import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 120px;
    display: flex;
    flex-wrap: wrap;

    background: transparent;
    border-radius: 4px;
    border: 1px solid ${theme.colors.gray};

    ul {
      width: 100%;

      display: flex;
      flex-wrap: wrap;
      padding: ${theme.spacings.xsmall};

      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 20px;

        border-radius: 20px;
        color: ${theme.colors.white};
        background: ${theme.colors.red};

        padding: 10px;
      }

      li + li {
        margin: 0 0 5px 5px;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      background: none;
      border: none;
      border-radius: 50%;

      color: ${theme.colors.white};
      height: 16px;
      margin-left: 5px;

      svg {
        width: 16px;
        height: 16px;
      }
    }
  `}
`;

export const InputWrapper = styled.div`
  background: none;
  flex: 1;

  input {
    background: transparent;
    border: none;

    width: 100%;
  }
`;
