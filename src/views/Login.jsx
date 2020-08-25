import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import '../css/login.css'
import Navbar from '../components/Navbar'


const Login = () => {
    const history = useHistory()
    const [user, setUser] = useState({
        email: '',
        password: '',
        token: null
    });
    const [alert, setAlert] = useState({
        alertWrong: false
    });


    useEffect(() => {
        document.title = 'Login';
        if (localStorage.getItem('token')) {
            history.push('/dashboard')
        } else {
            console.log("deslogueado");
        }
    });

    // functions

    const loginFucntion = (event) => {
        // hace login 
        if (user.email === 'correo@valido.com' && user.password === '123456') {
            
            history.push("/dashboard");
            setUser({
                token: 'eyJpc3MiOiJodHRwczpcL1wvbWFya2V0cGxhY2UuYWlkYy5teFwvYXBpXC92MlwvbG9naW4iLCJpYXQiOjE1OTgwNDAzOTIsIm5i'
            })
            localStorage.setItem('token', JSON.stringify('eyJpc3MiOiJodHRwczpcL1wvbWFya2V0cGxhY2UuYWlkYy5teFwvYXBpXC92MlwvbG9naW4iLCJpYXQiOjE1OTgwNDAzOTIsIm5i'));
        
        } else {
            setAlert({
                alertWrong: true
            })
        }
    }

    const handleInputChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }
    const alertMessage = (
        <div className="alert alert-danger">Error en la autenticación</div>
    );

    return (
        <div className= "container-fluid px-0 style-container" >
            <Navbar exit={false}/>
            <div className="d-flex flex-column justify-content-center align-items-center style-container " >
                { alert.alertWrong ? alertMessage : '' }
                <div className="card style-card">
                    <div className="card-body ">
                        <h2 className="card-title text-center">Login</h2>
                        <form  onSubmit={loginFucntion}>
                            <div className="form-group">
                                <input
                                    placeholder="Correo Electronico"
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    onChange={handleInputChange}
                                />
                                
                            </div>
                            <div className="form-group">
                                <input
                                    placeholder="Contraseña"
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    onChange={handleInputChange}
                                />
                                
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Ingresar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;


