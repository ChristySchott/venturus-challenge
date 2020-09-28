import React, { InputHTMLAttributes } from 'react';

import { Wrapper } from './styles';

type InputTypes = InputHTMLAttributes<HTMLInputElement>;

export type InputProps = {
  id: string;
  error: boolean;
  label: string;
} & InputTypes;

const Input = ({ id, error, label, ...props }: InputProps) => (
  <Wrapper error={error}>
    <label htmlFor={id}>{label}</label>
    <input id={id} {...props} />
  </Wrapper>
);

export default Input;
