import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    text-align: center;

    &:hover span {
      opacity: 1;
    }

    > div {
      display: flex;
      flex-direction: column;
      position: absolute;
    }

    span {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.medium};

      opacity: 0;
      border-radius: 6px;
      padding: 5px 0;

      transition: opacity 0.3s ease-in-out;
      display: flex;

      strong {
        margin-left: 2px;
      }
    }
  `}
`;
