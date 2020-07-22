import { createGlobalStyle } from 'styled-components';
import FontFaces from './fonts';
import theme from './theme';
const { colors, fonts } = theme;

const GlobalStyle = createGlobalStyle`
  ${FontFaces};
  html {
    box-sizing: border-box;
    width: 100%;
  }

  body {
    background-color: ${colors.dark};
    font-family : ${fonts.ProximaNova};
    color: ${colors.grey};
  }
`



export default GlobalStyle;
