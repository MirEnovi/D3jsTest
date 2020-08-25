import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";

const Dashboard = () => {
    const history = useHistory();

    useEffect(() => {
        document.title = 'Dashboard'
        if (localStorage.getItem('token')) {
            console.log('logueado')
        } else {
            history.push('/')
        }
    });


    return (
        <div className="container-fluid px-0 style-container" >
            <Navbar exit/>
            <div className="d-flex justify-content-center align-items-center style-container ">
                <h2>Dashboard</h2>
            </div>
        </div>
    );
}

export default Dashboard
