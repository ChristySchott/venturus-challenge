import styled, { css } from 'styled-components';
import { TextAreaProps } from '.';

type WrapperProps = Partial<TextAreaProps>;

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error }) => css`
    width: 100%;
    height: 100%;

    label {
      width: 100%;
      font-weight: ${theme.font.medium};
      color: ${error ? `${theme.colors.red}` : `${theme.colors.black}`};
    }

    textarea {
      width: 100%;
      margin-top: 5px;
      padding: ${theme.spacings.xxsmall};
      border-radius: 5px;
      font-family: ${theme.font.family};

      background: transparent;
      border: 1px solid ${theme.colors.gray};
      resize: none;

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
  `}
`;
