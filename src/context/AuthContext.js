import React, { useState, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [errors, setErrors] = useState(false);

    const email = "johnsmith@gmail.com";
    const password = "password";

    const authenticateUser = formData => {
        if (formData.email !== email || formData.password !== password) {
            return setErrors(true);
        }

        return setIsAuthenticated(true);
    };

    const unauthenticateUser = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider
            value={{
                auth: isAuthenticated,
                authenticateUser,
                unauthenticateUser,
                errors,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
