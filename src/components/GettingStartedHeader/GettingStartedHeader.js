import React from "react";
import StyledGettingStartedHeader from "./styles";

import Container from "../Container/Container";

const GettingStartedHeader = () => {
    return (
        <StyledGettingStartedHeader>
            <Container>
                <h1>Let's get started!</h1>
                <h3>Enter your address</h3>
            </Container>
        </StyledGettingStartedHeader>
    );
};

export default GettingStartedHeader;
