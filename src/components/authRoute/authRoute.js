import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const authRoute = (WrappedComponent, nextDestination) => {
    const HOC = props => {
        const authContext = useContext(AuthContext);

        return authContext.auth ? (
            <WrappedComponent {...props} />
        ) : (
            <Redirect to={nextDestination} />
        );
    };

    return HOC;
};

export default authRoute;
