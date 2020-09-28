import styled, { css } from 'styled-components';

import { InputProps } from '.';

type WrapperProps = Partial<InputProps>;

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error }) => css`
    width: 100%;
    padding: ${theme.spacings.xsmall};

    label {
      width: 100%;
      font-weight: ${theme.font.bold};
      color: ${error ? `${theme.colors.red}` : `${theme.colors.black}`};
    }

    input {
      width: 100%;
      margin-top: 5px;
      padding: ${theme.spacings.xxsmall} 5px;
      font-size: ${theme.font.sizes.medium};

      background: none;
      border: none;
      border-radius: 4px;
      border: 2px solid ${theme.colors.gray};

      ${error &&
      css`
        border: 2px solid ${theme.colors.red};
      `};

      &:focus {
        outline: none;
        background: white;
        border: 2px solid ${theme.colors.gray};

        ${error &&
        css`
          border: 2px solid ${theme.colors.red};
        `}
      }
    }
  `};
`;
