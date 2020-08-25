import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Chart from '../components/Chart';
import Card from '../components/Card'
// css 
import '../css/styles.css'

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
            <div className="d-flex  flex-column justify-content-center align-items-center style-container">
                <div className="row">
                <h2>Dashboard</h2>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 px-0">
                        <Chart/>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <Card title={'Sub A1'} subtitle={4}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard
