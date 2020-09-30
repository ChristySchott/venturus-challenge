import styled, { css } from 'styled-components';
import media from 'styled-media-query';

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

    position: relative;
  `}
`;

export const MidField = styled.div`
  ${({ theme }) => css`
    position: absolute;

    width: 130px;
    height: 130px;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;

    border: 1px solid ${theme.colors.lightGray};
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    ${media.greaterThan('large')`
      width: 100px;
      height: 100px;
    `}
  `}
`;

export const MidFieldLine = styled.div`
  ${({ theme }) => css`
    position: absolute;

    width: 100%;

    border: 0.5px solid ${theme.colors.lightGray};
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  `}
`;
