import React from "react";
import StyledGettingStartedHeader from "./styles";

import Container from "../Container/Container";

const GettingStartedHeader = () => {
    return (
        <StyledGettingStartedHeader>
            <div className='bg' />
            <Container>
                <div className='content'>
                    <h1>Let's get started!</h1>
                    <h3>Enter your address</h3>
                </div>
            </Container>
        </StyledGettingStartedHeader>
    );
};

export default GettingStartedHeader;
