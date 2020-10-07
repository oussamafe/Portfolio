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
    background-color: ${colors.blue};
    font-family : ${fonts.JosefinSans};
    color: ${colors.white};
    margin : 0 !important;
  }
`



export default GlobalStyle;
