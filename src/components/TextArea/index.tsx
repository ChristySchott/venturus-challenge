import React, { TextareaHTMLAttributes } from 'react';

import { Wrapper } from './styles';

type TextAreaTypes = TextareaHTMLAttributes<HTMLTextAreaElement>;

export type TextAreaProps = {
  id: string;
  label: string;
  error: boolean;
  children?: React.ReactNode;
} & TextAreaTypes;

const TextArea = ({ id, label, error, children, ...props }: TextAreaProps) => (
  <Wrapper error={error}>
    <label htmlFor={id}>{label}</label>
    <textarea id={id} {...props}>
      {children}
    </textarea>
  </Wrapper>
);

export default TextArea;
