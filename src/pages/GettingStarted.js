import React from "react";
import authRoute from "../components/authRoute/authRoute";

const GettingStarted = () => (
    <div>
        <h1>Getting Started</h1>
    </div>
);

export default authRoute(GettingStarted, "/");
