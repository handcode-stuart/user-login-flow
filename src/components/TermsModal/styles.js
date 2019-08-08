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

    .cls-btn {
        position: fixed;
        top: 30px;
        right: 20px;
    }

    .button-holder {
        padding-top: 30px;
    }
`;
