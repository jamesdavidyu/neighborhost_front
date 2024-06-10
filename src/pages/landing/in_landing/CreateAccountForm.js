import React from 'react';
import '../../../index.css';
import './Landing.css';

function CreateAccountForm() {
    return (
        <div>
            <h1>Welcome to the neighborhost!</h1>
            <h4 style={{ fontWeight: 'normal' }}>We need the following information to set up your account:</h4>
            <form>
                <div>
                    <input type="email" placeholder="Email" className="format" style={{ width: "90.25%", height: "29.5px", fontSize: "15.92px" }} />
                </div>
                <br />
                <div>
                    <input type="text" placeholder="Username" className="format" style={{ width: "90.25%", height: "29.5px", fontSize: "15.92px" }} />
                </div>
                <br />
                <div>
                    <input type="text" placeholder="Zipcode" className="format" style={{ height: "29.5px", fontSize: "15.92px" }} />
                </div>
                <br />
                <div>
                    <input type="password" placeholder="Password" className="format" style={{ width: "90.25%", height: "29.5px", fontSize: "15.92px" }} />
                </div>
                <br />
                <div>
                    <input type="password" placeholder="Confirm password" className="format" style={{ width: "90.25%", height: "29.5px", fontSize: "15.92px" }} />
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