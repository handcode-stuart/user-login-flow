import React from "react";
import { mount } from "enzyme";
import LoginForm from "../LoginForm/LoginForm";
import { AuthProvider } from "../../context/AuthContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

let wrapper;

describe("<LoginForm />", () => {
    beforeEach(() => {
        wrapper = mount(
            <AuthProvider>
                <Router>
                    <LoginForm />
                </Router>
            </AuthProvider>,
        );
    });

    test("should render", () => {
        expect(wrapper).toBeTruthy();
    });
});
