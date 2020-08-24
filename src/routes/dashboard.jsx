import React, {useEffect} from 'react'

const Dashboard = () => {
    useEffect(() => {
        document.title = 'Dashboard'
    });

  

    return (
        <div className="d-flex justify-content-center align-items-center style-container ">
            <h2>Dashboard</h2>
        </div>
    );
}

export default Dashboard
