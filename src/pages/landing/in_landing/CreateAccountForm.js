import React, { useContext, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import '../../../index.css';
import './Landing.css';
import { BaseUrl } from '../../../BaseUrl';
import { LoginContext } from '../../../App';

function CreateAccountForm() {
    const [loggedIn, setLoggedIn] = useContext(LoginContext);
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [zipcode, setZipcode] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    function Signup(e) {
        e.preventDefault();
        const url = BaseUrl + 'api/signup/';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                email: email,
                username: username,
                zipcode: zipcode, 
                password: password
            }),
        })
        .then((response) => {return response.json();})
        .then((data) => {
            localStorage.setItem('access', data.access);
            localStorage.setItem('refresh', data.refresh);
            setLoggedIn(true);
            navigate('/verify_account');
        });
    }
    return (
        <div>
            <h1>Welcome to the neighborhost!</h1>
            <h4 style={{ fontWeight: 'normal' }}>We need the following information to set up your account:</h4>
            <form id="signup" onSubmit={Signup}>
                <div>
                    <input 
                        type="email"
                        id="email"
                        placeholder="Email" 
                        className="format" 
                        style={{ width: "90.25%", height: "29.5px", fontSize: "15.92px" }}
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <br />
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
                        type="text"
                        id="zipcode"
                        placeholder="Zipcode" 
                        className="format" 
                        style={{ height: "29.5px", fontSize: "15.92px" }}
                        value={zipcode}
                        onChange={(e) => {
                            setZipcode(e.target.value);
                        }}
                    />
                </div>
                <br />
                <div>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="format" 
                        style={{ width: "90.25%", height: "29.5px", fontSize: "15.92px" }} 
                    />
                </div>
                <br />
                <div>
                    <input 
                        type="password"
                        id="password"
                        placeholder="Confirm password" 
                        className="format" 
                        style={{ width: "90.25%", height: "29.5px", fontSize: "15.92px" }}
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <br />
                <div>
                    <button type="submit" className="button_format" style={{ backgroundColor: "black", color: "white", width: "90.25%", height: "50.29px", fontSize: "15.92px" }}>
                        <p>Sign Up</p>
                    </button>
                </div>
            </form>
            <br />
        </div>
    );
};

export default CreateAccountForm;