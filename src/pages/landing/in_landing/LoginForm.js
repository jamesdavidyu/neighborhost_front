import React from 'react';
import '../../../index.css';
import './Landing.css';

function LoginForm() {
    return (
        <div>
            <form>
                <div>
                    <input type="email" placeholder="Email" className="format" style={{ width: "90.25%", height: "29.5px", fontSize: "15.92px" }}></input>
                </div>
                <br />
                <div>
                    <input type="password" placeholder="Password" className="format" style={{ width: "90.25%", height: "29.5px", fontSize: "15.92px" }}></input>
                </div>
                <br />
                <div style={{ paddingLeft: "5px" }}>
                    <input type="submit" value="Log In" className="button_format" style={{ backgroundColor: "blue", color: "white", width: "90.25%", height: "50.29px", fontSize: "15.92px" }}></input>
                </div>
            </form>
            <br />
        </div>
    );
};

export default LoginForm;