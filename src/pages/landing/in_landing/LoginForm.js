import React, { useState, useEffect, useContext } from 'react';
import '../../../index.css';
import './Landing.css';

function LoginForm() {
    return (
        <div>
            <form>
                <div>
                    <input type="email" placeholder="Email" className="format" style={{ width: "90.25%", height: "29.5px", fontSize: "15.92px" }} />
                </div>
                <br />
                <div>
                    <input type="password" placeholder="Password" className="format" style={{ width: "90.25%", height: "29.5px", fontSize: "15.92px" }} />
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