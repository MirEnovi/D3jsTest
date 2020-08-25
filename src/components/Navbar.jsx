import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";


const Navbar = (props) => {
    const history = useHistory();

    const logout = () => {
        localStorage.clear();
        history.push("/");
    }
    const exitButton = (
        <button onClick={logout} className="btn btn-outline-light">Salir</button>
    );
    return (
        <Fragment>
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <h3 className="navbar-brand" >React D3</h3>
                { props.exit ? exitButton : ''}
            </nav>
        </Fragment>
    );
}

export default Navbar
