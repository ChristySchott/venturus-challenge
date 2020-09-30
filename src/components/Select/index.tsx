import React, { useCallback, SelectHTMLAttributes } from 'react';

import { Wrapper } from './styles';

type SelectTypes = SelectHTMLAttributes<HTMLSelectElement>;

type OptionType = {
  id: string;
  value: string;
  label: string;
};

export type SelectProps = {
  options?: OptionType[];
} & SelectTypes;

const Select = ({ options, ...props }: SelectProps) => {
  const Options = useCallback(() => {
    if (options) {
      return (
        <>
          {options.map(({ id, value, label }) =>
            value !== '-1' ? (
              <option key={id} value={value}>
                {label}
              </option>
            ) : (
              <option key={id} value={value} disabled>
                {label}
              </option>
            ),
          )}
        </>
      );
    }

    return null;
  }, [options]);

  return (
    <Wrapper>
      <select {...props}>
        <Options />
      </select>
    </Wrapper>
  );
};

export default Select;
