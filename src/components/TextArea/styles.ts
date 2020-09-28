import styled, { css } from 'styled-components';
import { TextAreaProps } from '.';

type WrapperProps = Partial<TextAreaProps>;

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error }) => css`
    width: 100%;
    height: 100%;
    padding: ${theme.spacings.small};

    label {
      width: 100%;
      font-weight: ${theme.font.bold};
      color: ${error ? `${theme.colors.red}` : `${theme.colors.black}`};
    }

    textarea {
      width: 100%;
      margin-top: 5px;
      padding: ${theme.spacings.xxsmall};
      border-radius: 5px;
      font-family: ${theme.font.family};

      background: ${theme.colors.white};
      border: 2px solid ${theme.colors.gray};
      resize: none;

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
  `}
`;
