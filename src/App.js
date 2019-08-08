import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useSplashScreen } from "./hooks";
import { AuthProvider } from "./context/AuthContext";
import GlobalStyles from "./global-styles";
import Login from "./pages/Login";
import GettingStarted from "./pages/GettingStarted";
import Splash from "./pages/Splash";

const App = () => {
    const showSplash = useSplashScreen();

    return (
        <AuthProvider>
            <Router>
                <GlobalStyles />
                <Route
                    path='/'
                    render={() =>
                        showSplash ? (
                            <Splash />
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
