import styled, { css, DefaultTheme } from 'styled-components';
import { lighten } from 'polished';

import { ButtonProps } from '.';

type WrapperProps = { hasIcon: boolean } & Omit<ButtonProps, 'children'>;

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    background: ${theme.colors.gradient};
    color: ${theme.colors.white};
    text-decoration: none;

    border: 0;
    border-radius: 12px;
    padding: ${theme.spacings.xxsmall};

    -webkit-box-shadow: 0px 2px 12px -1px rgba(83, 45, 140, 0.72);
    -moz-box-shadow: 0px 2px 12px -1px rgba(83, 45, 140, 0.72);
    box-shadow: 0px 2px 12px -1px rgba(83, 45, 140, 0.72);

    &:hover {
      background: ${lighten(0.2, '#532d8c')};
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!hasIcon && wrapperModifiers.withIcon(theme)}

    svg {
      width: 30px;
      height: 30px;
    }
  `}
`;
