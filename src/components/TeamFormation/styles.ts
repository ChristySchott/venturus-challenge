import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: 740px;
    padding: ${theme.spacings.small} 0px;

    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;

    background: ${theme.colors.gradient};
    border-radius: 6px;
  `}
`;
