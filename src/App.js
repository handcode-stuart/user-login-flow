import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalStyles from "./global-styles";
import Login from "./pages/Login";
import Flash from "./pages/Flash";

const App = () => {
    const [showFlash, setShowFlash] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowFlash(false);
        }, 3000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div>
            <Router>
                <GlobalStyles />
                <Route path='/' render={() => (showFlash ? <Flash /> : <Login />)} />
            </Router>
        </div>
    );
};

export default App;
