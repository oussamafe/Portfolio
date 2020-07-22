import { css } from 'styled-components';

import ProximaNovaRegular from '@fonts/ProximaNova-Regular.otf'
import ProximaNovaBold from '@fonts/Proxima Nova Bold.otf'
import LondrinaOutline from '@fonts/LondrinaOutline-Regular.ttf'


const FontFaces = css`
    @font-face {
        font-family: 'Proxima Nova';
        src: url(${ProximaNovaRegular}) format('opentype');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Proxima Nova';
        src: url(${ProximaNovaBold}) format('opentype');
        font-weight: 700;
        font-style: bold;
    }
    @font-face {
        font-family: 'Londrina Outline';
        src: url(${LondrinaOutline}) format('truetype');
        font-weight: 400;
        font-style: nomral;
    }
`


export default FontFaces;