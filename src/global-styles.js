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
        font-weight: 300;
        margin-bottom: 10px;
    }

    h4 {
        font-weight: 400;
        margin: 0;
    }
`;
