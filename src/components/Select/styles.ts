import styled, { css } from 'styled-components';

import dropdown from 'assets/dropdown.svg';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    border-radius: 12px;

    select {
      width: 100%;
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.black};
      padding: 8px 10px;

      -webkit-appearance: none;
      -moz-appearance: none;
      background: transparent;
      background-image: url(${dropdown});
      background-repeat: no-repeat;
      background-size: 15px;
      background-position-x: 98%;
      background-position-y: 8px;

      &:focus {
        outline: none;
      }
    }
  `}
`;
