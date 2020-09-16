import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";


const Navbar = (props) => {
    const history = useHistory();

    const logout = () => {
        localStorage.clear();
        history.push("/");
    }
    const redirectTest = () => {
        history.push('/test');
    }
    const redirectDash = () => {
        history.push('/dashboard');
    }
    const exitButton = (
        <button onClick={logout} className="btn btn-outline-light">Salir</button>
    );
    const testButton = (
        <button onClick={redirectTest} className="btn btn-outline-light">Test</button>
    );
    const dashButton = (
        <button onClick={redirectDash} className="btn btn-outline-light">Dashboard</button>
    );
    return (
        <Fragment>
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <h3 className="navbar-brand" >React D3</h3>

                { localStorage.getItem('token') ? (window.location.pathname === '/test' ? dashButton : testButton) : ''}
                
                { props.exit ? exitButton : ''}

            </nav>
        </Fragment>
    );
}

export default Navbar
