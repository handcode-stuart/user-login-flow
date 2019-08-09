import React from "react";
import { mount } from "enzyme";
import LoginForm from "../LoginForm/LoginForm";
import { AuthProvider } from "../../context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "../Button/Button";

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

    test("should not be allowed to click the log in button on load", () => {
        const button = wrapper.find(".form-group.submit").find(Button);
        expect(button.props().disabled).toBeTruthy();
    });
});
