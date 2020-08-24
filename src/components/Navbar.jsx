import React, {Fragment, useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";


const Navbar = () => {
    const history = useHistory();
    const [userToken, setUsertoken] = useState(null)
    
    useEffect(() => {
        let token = JSON.parse(localStorage.getItem('token'))
        console.log(token);
        if (token) {
            setUsertoken({
                token
            })
        }
    }, []);

    const logout = () => {
        setTimeout(() => {
            history.push("/");
        }, 2000);
        localStorage.clear();
        setUsertoken(null);
        // history.push("/");
    }
    const exitButton = (
        <button onClick={logout} className="btn btn-outline-light">Salir</button>
    );
    return (
        <Fragment>
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <h3 className="navbar-brand" >React D3</h3>
                { userToken ? exitButton : ''}
            </nav>
        </Fragment>
    );
}

export default Navbar
