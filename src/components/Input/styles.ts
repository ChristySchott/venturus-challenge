import styled, { css } from 'styled-components';

import { InputProps } from '.';

type WrapperProps = Partial<InputProps>;

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error }) => css`
    width: 100%;

    label {
      width: 100%;
      font-weight: ${theme.font.medium};
      color: ${error ? `${theme.colors.red}` : `${theme.colors.black}`};
    }

    input {
      width: 100%;
      margin-top: 5px;
      padding: ${theme.spacings.xxsmall} 10px;
      font-size: ${theme.font.sizes.medium};

      background: none;
      border: none;
      border-radius: 4px;
      border: 1px solid ${theme.colors.gray};

      ${error &&
      css`
        border: 1px solid ${theme.colors.red};
      `};

      &:focus {
        outline: none;
        background: white;
        border: 1px solid ${theme.colors.gray};

        ${error &&
        css`
          border: 1px solid ${theme.colors.red};
        `}
      }
    }
  `};
`;
