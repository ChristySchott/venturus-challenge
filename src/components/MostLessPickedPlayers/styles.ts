import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-image: ${theme.colors.lightenGradient};
    border-radius: 12px;
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    text-align: center;

    ${media.greaterThan('medium')`
      flex-direction: row;
      justify-content: space-between;
      padding: ${theme.spacings.medium} ${theme.spacings.large};
    `}

    ${media.greaterThan('large')`
      padding: ${theme.spacings.small};
    `}
  `}
`;

export const MostPicked = styled.div`
  ${({ theme }) => css`
    h2 {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        border: ${theme.colors.primary} 2px dashed;
        box-shadow: 1px 1px 1px 1px outset green;

        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border-radius: 50%;
      }
    }
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

    ${media.greaterThan('medium')`
      left: 50%;
      width: 0;
      height: 100%;
    `}
  `}
`;

export const LessPicked = styled.div`
  ${({ theme }) => css`
    margin-top: 220px;

    ${media.greaterThan('medium')`
      margin-top: 0;
    `}

    h2 {
      border: 2px solid ${theme.colors.red};
    }
  `}
`;

export const PlayerInfos = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      color: ${theme.colors.white};
      margin-bottom: ${theme.spacings.xsmall};
      font-size: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.medium};

      ${media.greaterThan('large')`
        font-size: 2.2rem;
      `}
    }

    > div {
      display: flex;
      flex-direction: column;

      ${media.greaterThan('medium')`
        flex-direction: row;
      `}
    }

    h2 {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: ${theme.colors.white};
      font-size: ${theme.font.sizes.xxlarge};

      background: rgba(255, 255, 255, 0.1);

      svg {
        color: rgba(255, 255, 255, 0.2);
        width: 70px;
        height: 70px;
      }
    }
  `}
`;

export const RatingsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    color: ${theme.colors.white};

    h3 {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.xxlarge};
      border-bottom: 4px solid ${theme.colors.white};
      margin-top: ${theme.spacings.xsmall};

      ${media.greaterThan('medium')`
        margin-top: 0;
        margin-left: ${theme.spacings.small};
        height: 25px;

        font-size: ${theme.font.sizes.large};
        border-bottom: 3px solid ${theme.colors.white};
      `}

      ${media.greaterThan('large')`
        margin-left: ${theme.spacings.xxsmall};
      `}
    }
  `}
`;
