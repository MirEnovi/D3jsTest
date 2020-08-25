import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"
import Login from './views/Login'
import Dashboard from './views/Dashboard'


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Login />
                </Route>
            </Switch>
            <Switch>
                <Route path="/dashboard">
                    <Dashboard/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
