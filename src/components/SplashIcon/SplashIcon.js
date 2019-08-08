import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import StyledLogo from "./styles";

const SplashIcon = () => {
    return (
        <StyledLogo>
            <Logo />
        </StyledLogo>
    );
};

export default SplashIcon;
