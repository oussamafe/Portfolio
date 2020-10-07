import { css } from 'styled-components';

import JosefinSansThin from '@fonts/JosefinSans-Thin.ttf'
import JosefinSansExtraLight from '@fonts/JosefinSans-ExtraLight.ttf'
import JosefinSansLight from '@fonts/JosefinSans-Light.ttf'
import JosefinSansRegular from '@fonts/JosefinSans-Regular.ttf'
import JosefinSansMedium from '@fonts/JosefinSans-Medium.ttf'
import JosefinSansSemiBold from '@fonts/JosefinSans-SemiBold.ttf'
import JosefinSansBold from '@fonts/JosefinSans-Bold.ttf'
import YesevaOneRegular from '@fonts/YesevaOne-Regular.ttf'


const FontFaces = css`
    @font-face {
        font-family: 'Josefin Sans';
        src: url(${JosefinSansThin}) format('truetype');
        font-weight: 100;
        font-style: normal;
    }
    @font-face {
        font-family: 'Josefin Sans';
        src: url(${JosefinSansExtraLight}) format('truetype');
        font-weight: 200;
        font-style: normal;
    }
    @font-face {
        font-family: 'Josefin Sans';
        src: url(${JosefinSansLight}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Josefin Sans';
        src: url(${JosefinSansRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Josefin Sans';
        src: url(${JosefinSansMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Josefin Sans';
        src: url(${JosefinSansSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'Josefin Sans';
        src: url(${JosefinSansBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'Yeseva One';
        src: url(${YesevaOneRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
`


export default FontFaces;