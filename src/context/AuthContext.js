import React, { useState, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const email = "johndoe@example.com";
    const password = "password";

    const authenticateUser = formData => {
        if (formData.email === email && formData.password === password) {
            setIsAuthenticated(true);
        }
    };

    const unauthenticateUser = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider
            value={{
                auth: isAuthenticated,
                authenticateUser,
                unauthenticateUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
