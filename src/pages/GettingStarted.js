import React from "react";
import authRoute from "../components/authRoute/authRoute";
import GettingStartedHeader from "../components/GettingStartedHeader/GettingStartedHeader";
import AddressForm from "../components/AddressForm/AddressForm";

const GettingStarted = () => (
    <div>
        <GettingStartedHeader />
        <AddressForm />
    </div>
);

export default authRoute(GettingStarted, "/");
