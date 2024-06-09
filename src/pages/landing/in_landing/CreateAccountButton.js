import React, { useState } from 'react';
import '../../../index.css';
import './Landing.css';
import CreateAccountForm from './CreateAccountForm';

const CreateAccountButton = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    return (
        <div>
            <label className="format">Looking for your friends?</label>
            <div style={{ paddingLeft: "5px" }}>
                <button onClick={togglePopup} className="button_format" style={{ backgroundColor: "yellow", width: "90.25%", height: "59.2px", fontSize: "15.92px" }}>
                    <p>Create an account</p>
                </button>
            </div>
            {isPopupVisible && (
                <div className="popup">
                    <span onClick={togglePopup} className="x">X</span>
                    <CreateAccountForm />
                </div>
            )}
        </div>
    );
};

export default CreateAccountButton;