import React from "react";
import StyledLoginHeader from "./styles";

import Container from "../Container/Container";

const LoginHeader = () => {
    return (
        <StyledLoginHeader>
            <Container>
                <h1>Log in</h1>
                <h4>Please log in with your email and password.</h4>
            </Container>
        </StyledLoginHeader>
    );
};

export default LoginHeader;
