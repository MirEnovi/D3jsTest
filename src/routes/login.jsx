import React, { useState, useEffect } from "react";
import '../css/login.css'
import { useHistory, Redirect } from "react-router-dom";


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
    });

    // functions 
    const loginFucntion = (event) => {
        event.preventDefault();
        // hace login 
        if (user.email === 'correo@valido.com' && user.password === '123456') {
            setUser({
                token: 'eyJpc3MiOiJodHRwczpcL1wvbWFya2V0cGxhY2UuYWlkYy5teFwvYXBpXC92MlwvbG9naW4iLCJpYXQiOjE1OTgwNDAzOTIsIm5i'
            })
            localStorage.setItem('token', JSON.stringify('eyJpc3MiOiJodHRwczpcL1wvbWFya2V0cGxhY2UuYWlkYy5teFwvYXBpXC92MlwvbG9naW4iLCJpYXQiOjE1OTgwNDAzOTIsIm5i'));
            history.push("/dashboard");
            // return <Redirect to="/"></Redirect>
        
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
        <div className="d-flex flex-column justify-content-center align-items-center style-container " >
            { alert.alertWrong ? alertMessage : '' }
            <div className="card style-card">
                <div className="card-body">
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
    )
}

export default Login;


