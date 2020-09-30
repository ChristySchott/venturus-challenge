import React, { KeyboardEvent, useRef } from 'react';
import { Close } from '@styled-icons/evaicons-solid/Close';

import { Wrapper, InputWrapper } from './styles';

export type TagBoxProps = {
  tags: string[];
  addTag: (value: string) => void;
  deleteTag: (index: number) => () => void;
};

const TagsBox = (props: TagBoxProps) => {
  const { tags, addTag, deleteTag } = props;

  const inputRef = useRef();

  const inputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const { value } = e.target as any;

    const handleAdd = (key === 'Enter' || key === ';') && value;

    if (handleAdd) {
      const lower = (name: string) => name.toLowerCase();

      const tagExists = (tag: string) => lower(tag) === lower(value);

      if (tags.find(tagExists)) return;

      addTag(value);

      if (!inputRef?.current) return;
      (inputRef.current as any).value = null;
    }

    if (key === 'Backspace' && !value) {
      deleteTag(tags.length - 1)();
    }
  };

  return (
    <Wrapper>
      <ul>
        {tags.map((tag, i: number) => (
          <li key={i}>
            {tag}
            <button
              type="button"
              onClick={deleteTag(i)}
              aria-label="Delete tag"
            >
              <Close />
            </button>
          </li>
        ))}
        <InputWrapper>
          <input ref={inputRef as any} onKeyDown={inputKeyDown} />
        </InputWrapper>
      </ul>
    </Wrapper>
  );
};

export default TagsBox;
