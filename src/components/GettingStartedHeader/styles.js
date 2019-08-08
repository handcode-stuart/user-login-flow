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
        background: #a43091;
    }

    .content {
        position: relative;
    }
`;
