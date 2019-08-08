import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html { height: 100%; }

    body {
        font-family: 'Poppins', sans-serif;
        margin: 0;
        background-color: rgb(0, 31, 40);
        background-image: url('/images/background.svg');
        background-repeat: no-repeat;
        background-position: top right;
        background-size: auto 100%;
        color: #FFF;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    h1 {
        font-size: 32px;
        line-height: 42px;
        font-weight: 300;
        margin-bottom: 13px;
    }

    h4 {
        font-weight: 400;
        margin: 0;
        font-size: 16px;
        line-height: 26px;
    }
`;
