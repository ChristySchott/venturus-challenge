import React, { InputHTMLAttributes, useCallback } from 'react';

import { Wrapper } from './styles';

type InputTypes = InputHTMLAttributes<HTMLInputElement>;

export type RadioListProps = {
  id: string;
  label: string;
  value?: string | number;
};

export type InputRadioProps = {
  title: string;
  error?: boolean;
  radioList: RadioListProps[];
} & InputTypes;

const Radio = ({ title, error, radioList, ...props }: InputRadioProps) => {
  const renderRadioInput = useCallback(() => {
    if (radioList) {
      return radioList.map(({ id, label, value }) => (
        <>
          <input key={id} type="radio" value={value} {...props} />
          <label htmlFor={id}>{label}</label>
        </>
      ));
    }
    return null;
  }, [radioList, props]);

  return (
    <Wrapper error={error}>
      <h4>{title}</h4>
      <div>{renderRadioInput()}</div>
    </Wrapper>
  );
};

export default Radio;
