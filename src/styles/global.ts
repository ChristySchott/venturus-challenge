import { createGlobalStyle, css } from 'styled-components';
import { ThemeType } from '../App';

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    outline: 0;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }

    button {
      cursor: pointer;
    }

    ul {
      list-style: none;
    }
  `}
`;

export default GlobalStyles;
