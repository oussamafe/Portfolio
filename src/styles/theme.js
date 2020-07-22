const hex2rgba = (hex, alpha = 1) => {
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
};


const WHITE = '#fff'


const theme = {
    colors: {
        yellow: '#FFBE55',
        dark: '#151515',
        grey: hex2rgba(WHITE, 0.07),
    },
    fonts: {
        ProximaNova: 'Proxima Nova, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
        LondrinaOutline: 'Londrina Outline, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
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