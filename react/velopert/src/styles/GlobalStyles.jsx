import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        background: #e9ecef;
        overflow: hidden;
    }

    section{
        min-height: 100vh;
        width: 100%;
    }

    img, video{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export default GlobalStyles;