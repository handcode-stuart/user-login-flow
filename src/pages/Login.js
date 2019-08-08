import React from "react";

import guestRoute from "../components/guestRoute/guestRoute";
import LoginForm from "../components/LoginForm/LoginForm";
import LoginHeader from "../components/LoginHeader/LoginHeader";

const Login = () => {
    return (
        <div>
            <LoginHeader />
            <LoginForm />
        </div>
    );
};

export default guestRoute(Login, "/getting-started");
