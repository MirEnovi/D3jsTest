import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
} from "react-router-dom"
import NavbarComponent from './components/Navbar';

function App() {
    return (
        <Router>
            <div className="container">
                < NavbarComponent / >
                <hr />
                <Switch>
                    <Route path="/" exact>
                        <h2>
                            Login
                        </h2>
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/dashboard">
                        <h2>
                            Dashboard
                        </h2>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
