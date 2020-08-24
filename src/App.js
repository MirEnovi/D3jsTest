import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom"
import NavbarComponent from './components/Navbar';
import Login from './routes/Login.jsx';
import Dashboard from './routes/Dashboard';

// CSS
import './css/app.css'

function App() {
    
    
    return (
        <Router>
            <div className= "container-fluid px-0 style-container" >
                < NavbarComponent/>
                <Switch>
                    <Route path="/" exact>
                        { localStorage.getItem('token') ? <Redirect to="/dashboard"/> : <Login />}
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/dashboard">
                        {  localStorage.getItem('token') ? <Dashboard/> : <Redirect to="/"/> }
                    </Route>
                </Switch>
                
            </div>
        </Router>
    );
}

export default App;
