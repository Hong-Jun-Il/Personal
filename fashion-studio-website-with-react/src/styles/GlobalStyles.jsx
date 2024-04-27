import {createGlobalStyle} from "styled-components";
import "@openfonts/sirin-stencil_latin";
import "@fontsource/kaushan-script";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: "Sirin Stencil";
        overflow-x: hidden;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    img,
    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export default GlobalStyles;