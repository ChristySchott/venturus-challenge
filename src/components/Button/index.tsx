import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

import { Wrapper } from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  as?: React.ElementType;
} & ButtonTypes;

const Button: React.FC = ({
  children,
  icon,
  size = 'medium',
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </Wrapper>
);

export default Button;
