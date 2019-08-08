import styled from "styled-components";

export default styled.div`
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    height: calc(100% - 80px);
    background-color: #fff;
    border-radius: 30px 28px 0 0;
    z-index: 1;
    color: #000;
    padding: 30px;
    overflow: scroll;
    font-size: 16px;
    line-height: 1.5em;

    span {
        position: fixed;
        top: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        background-color: #000;
        display: block;
    }

    .button-holder {
        padding-top: 30px;
    }
`;
