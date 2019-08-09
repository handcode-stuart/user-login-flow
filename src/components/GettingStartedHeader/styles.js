import styled from "styled-components";

export default styled.header`
    position: relative;
    text-align: center;
    background: rgb(245, 245, 245);
    padding: 115px 0px;
    width: 100%;
    height: 225px;

    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 225px;
        border-radius: 0 0 50% 50% / 10%;
        background: #971d8d;
        background: -moz-linear-gradient(45deg, #971d8d 0%, #b31688 100%);
        background: -webkit-linear-gradient(45deg, #971d8d 0%, #b31688 100%);
        background: linear-gradient(45deg, #971d8d 0%, #b31688 100%);
    }

    .content {
        position: relative;
    }
`;
