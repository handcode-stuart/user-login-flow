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
        background-size: auto;
        color: #FFF;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    h1 {
        font-size: 32px;
        line-height: 42px;
        font-weight: 300;
        margin: 0 0 10px;
    }

    h2 {
        font-size: 26px;
        line-height: 38px;
        font-weight: 300;
        margin-bottom: 10px;
    }

    h3 {
        font-size: 16px;
        line-height: 26px;
        font-weight: 400;
        margin: 0;
    }

    p {
        font-weight: 300;
    }
`;
