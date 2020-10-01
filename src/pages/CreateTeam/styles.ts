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

export const ListContent = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xxsmall};

    ${media.greaterThan('medium')`
      padding: 0 ${theme.spacings.small};

      fieldset:nth-child(1) {
        padding-right: ${theme.spacings.medium};
      }
    `}
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

    textarea {
      height: 197.5px;
    }
  `}
`;

export const PlayersList = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    width: 100%;

    ${media.greaterThan('large')`
      margin-top: -10px;
    `}

    input {
      margin-bottom: ${theme.spacings.xsmall};
    }

    ul {
      width: 100%;
      max-height: 700px;

      overflow-y: overlay;

      > div + div {
        margin-top: ${theme.spacings.xxsmall};
      }
    }
  `}
`;

export const FormationWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;

    ${media.greaterThan('large')`
      margin-right: ${theme.spacings.small};
    `}

    button {
      border-radius: 4px;
    }
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

export const EmptyState = styled.span`
  ${({ theme }) => css`
    width: 100%;
    height: 200px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${theme.colors.gray};
    font-weight: ${theme.font.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;

export const TagsTitle = styled.h4`
  ${({ theme }) => css`
    font-weight: ${theme.font.medium};
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacings.xxsmall};
  `};
`;

export const WrapperRadio = styled.form`
  ${({ theme }) => css`
    width: 100%;

    h4 {
      color: ${theme.colors.black};
      margin-bottom: ${theme.spacings.xxsmall};
      font-weight: ${theme.font.medium};
    }

    > div {
      display: flex;
      align-items: center;

      input + input {
        margin-left: ${theme.spacings.xlarge};
      }
    }
  `}
`;

export const InputRadio = styled.input`
  ${({ theme }) => css`
    -webkit-appearance: none;

    width: 16px;
    height: 16px;

    border: 1px solid ${theme.colors.black};
    border-radius: 50%;
    outline: none;

    &:hover {
      box-shadow: 0 0 4px 0px ${theme.colors.secondary} inset;
    }

    &::before {
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin: 1.8px 2.2px;
    }

    &:checked:before {
      background: ${theme.colors.gradient};
    }
  `};
`;

export const LabelRadio = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    margin: 0 ${theme.spacings.large} 0 ${theme.spacings.xxsmall};
  `}
`;
