import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useFlashScreen } from "./hooks";
import { AuthProvider } from "./context/AuthContext";
import GlobalStyles from "./global-styles";
import Login from "./pages/Login";
import GettingStarted from "./pages/GettingStarted";
import Flash from "./pages/Flash";

const App = () => {
    const showFlash = useFlashScreen();

    return (
        <AuthProvider>
            <Router>
                <GlobalStyles />
                <Route
                    path='/'
                    render={() =>
                        showFlash ? (
                            <Flash />
                        ) : (
                            <Switch>
                                <Route exact path='/' component={Login} />
                                <Route path='/getting-started' component={GettingStarted} />
                            </Switch>
                        )
                    }
                />
            </Router>
        </AuthProvider>
    );
};

export default App;
