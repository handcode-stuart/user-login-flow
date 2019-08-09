import React from "react";
import { mount } from "enzyme";
import TermsModal from "../TermsModal/TermsModal";
import { AuthProvider } from "../../context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";

let wrapper;
let closeTermsModal = jest.fn();

describe("<TermsModal />", () => {
    beforeEach(() => {
        wrapper = mount(
            <AuthProvider>
                <Router>
                    <TermsModal closeTermsModal={closeTermsModal} />
                </Router>
            </AuthProvider>,
        );
    });

    test("should render", () => {
        expect(wrapper).toBeTruthy();
    });

    test("should render more copy when button is clicked", () => {
        const button = wrapper.find("button");
        expect(wrapper.find("p").length).toBe(3);
        button.simulate("click");
        expect(wrapper.find("p").length).toBe(4);
    });
});
