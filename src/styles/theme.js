const hex2rgba = (hex, alpha = 1) => {
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
};


const WHITE = '#F1FAEE'
//const Yellow = '#FFBE55'

const theme = {
    colors: {
        blue: '#1D3557',
        grey: hex2rgba(WHITE, 0.7),
        white: '#F1FAEE',
        lightBlue: '#457B9D',
        darkBlue: '#1D3557'
    },
    fonts: {
        JosefinSans: 'Josefin Sans',
        YesevaOne: 'Yeseva One',
    },
    fontSizes: {
        xs: '12px',
        smish: '13px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        xxl: '22px',
        h3: '32px',
    },
}



export default theme;