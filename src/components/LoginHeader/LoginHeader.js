import React from "react";
import StyledLoginHeader from "./styles";

import Container from "../Container/Container";

const LoginHeader = () => {
    return (
        <StyledLoginHeader>
            <Container>
                <h1>Log in</h1>
                <h3>Please log in with your email and password.</h3>
            </Container>
        </StyledLoginHeader>
    );
};

export default LoginHeader;
