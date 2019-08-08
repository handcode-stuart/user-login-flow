import React from "react";
import StyledButton from "./styles";

const Container = ({ children, ...rest }) => {
    return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Container;
