import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../../index.css';
import './Landing.css';
import { BaseUrl } from '../../../BaseUrl';
import { LoginContext } from '../../../App';

function LoginForm() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [loggedIn, setLoggedIn] = useContext(LoginContext);

    const location = useLocation();
    const navigate = useNavigate();

    function Login(e) {
        e.preventDefault();
        const url = BaseUrl + 'api/token/';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                username: username,
                password: password
            }),
        })
        .then((response) => {return response.json();})
        .then((data) => {
            localStorage.setItem('access', data.access);
            localStorage.setItem('refresh', data.refresh);
            setLoggedIn(true);
            navigate(
                location?.state?.previousUrl 
                ? location.state.previousUrl 
                : '/login'
            );
        });
    }
    
    return (
        <div>
            <form id="neieghbor" onSubmit={Login}>
                <div>
                    <input 
                        type="text" 
                        id="username"
                        placeholder="Username" 
                        className="format" 
                        style={{ width: "90.25%", height: "29.5px", fontSize: "15.92px" }} 
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </div>
                <br />
                <div>
                    <input 
                        type="password" 
                        id="password"
                        placeholder="Password" 
                        className="format" 
                        style={{ width: "90.25%", height: "29.5px", fontSize: "15.92px" }}
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <br />
                <div style={{ paddingLeft: "5px" }}>
                    <button type="submit" className="button_format" style={{ backgroundColor: "blue", color: "white", width: "90.25%", height: "50.29px", fontSize: "15.92px" }}>
                        <p>Log In</p>
                    </button>
                </div>
            </form>
            <br />
        </div>
    );
};

export default LoginForm;