import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    img, video{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    section{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default GlobalStyles;