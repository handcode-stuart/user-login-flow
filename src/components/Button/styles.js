import styled from "styled-components";

export default styled.button`
    border: none;
    cursor: pointer;
    width: 100%;
    height: 46px;
    background-color: #ff0085;
    color: #fff;
    border-radius: 23px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1px;
    opacity: 1;
    -webkit-transition: opacity 250ms ease-in-out;
    -moz-transition: opacity 250ms ease-in-out;
    -o-transition: opacity 250ms ease-in-out;
    transition: opacity 250ms ease-in-out;

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }
`;
