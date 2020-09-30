import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import Select from 'react-select';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-top: ${theme.spacings.small};

    section {
      margin-top: ${theme.spacings.small};
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 1110px;

    margin: 0 auto;
    padding: 0 ${theme.spacings.xxsmall};

    display: flex;
    flex-direction: column;
  `}
`;

export const Fieldset = styled.fieldset`
  ${({ theme }) => css`
    width: 100%;
    border: none;

    input[type='text'],
    textarea,
    form {
      margin-bottom: ${theme.spacings.xsmall};
    }

    ${media.greaterThan('medium')`
      padding: 0 ${theme.spacings.xsmall};
    `}
  `}
`;

export const PlayersList = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    width: 100%;

    ${media.greaterThan('medium')`
      padding: 0 ${theme.spacings.xsmall};
    `}

    input {
      margin-bottom: ${theme.spacings.xsmall};
    }

    ul {
      width: 100%;
    }

    li + li {
      margin-top: ${theme.spacings.xxsmall};
    }
  `}
`;

export const FormationWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;

    ${media.greaterThan('large')`
      margin-right: ${theme.spacings.small};
    `}
  `}
`;

export const FormationSection = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      justify-content: center;
    `}

    ${media.greaterThan('medium')`
      justify-content: flex-start;
    `}

    > div {
      width: 100%;
    }

    h4 {
      font-weight: ${theme.font.medium};
    }
  `}
`;

export const FormationSelect = styled(Select)`
  ${({ theme }) => css`
    max-width: 200px;
    align-self: flex-end;

    z-index: ${theme.layers.alwaysOnTop};

    ${media.greaterThan('medium')`
      max-width: 300px;
      margin-left: ${theme.spacings.xsmall};
    `}

    ${media.greaterThan('large')`
      max-width: 200px;
    `}
  `}
`;
