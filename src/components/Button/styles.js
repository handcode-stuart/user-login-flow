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
    transition: opacity 250ms ease-in-out;
    -webkit-box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.12);
    -moz-box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.12);
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.12);

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }
`;
