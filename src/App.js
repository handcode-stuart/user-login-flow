import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { useFlashScreen } from "./hooks";
import GlobalStyles from "./global-styles";
import Login from "./pages/Login";
import Flash from "./pages/Flash";

const App = () => {
    const showFlash = useFlashScreen();

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
