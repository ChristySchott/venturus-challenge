import styled, { css } from 'styled-components';

import { InputRadioProps } from '.';

type WrapperProps = Partial<InputRadioProps>;

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error }) => css`
    width: 100%;
    padding: ${theme.spacings.xsmall};

    h4 {
      color: ${error ? `${theme.colors.red}` : `${theme.colors.black}`};
      margin-bottom: ${theme.spacings.xxsmall};
    }

    > div {
      display: flex;
      align-items: center;

      label {
        color: ${error ? `${theme.colors.red}` : `${theme.colors.black}`};
        margin: 0 ${theme.spacings.large} 0 ${theme.spacings.xxsmall};
      }

      input + input {
        margin-left: ${theme.spacings.xlarge};
      }

      input {
        -webkit-appearance: none;

        width: 16px;
        height: 16px;

        border: 1px solid
          ${error ? `${theme.colors.red}` : `${theme.colors.black}`};
        border-radius: 50%;
        outline: none;

        &:hover {
          box-shadow: 0 0 4px 0px ${theme.colors.secondary} inset;
        }

        &::before {
          content: '';
          display: block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin: 1.8px 2.2px;
        }

        &:checked:before {
          background: ${theme.colors.gradient};
        }
      }
    }
  `}
`;
