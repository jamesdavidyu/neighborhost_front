import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import logo from './neighborhost_logo.png';

function HomeButton() {
    const navigate = useNavigate()
    function goHome() {
        navigate('/')
    };
    return (
        <form onClick={goHome}>
            <button type="submit" className="buttonless_button">
                <img src={logo} alt="neighborhost.com" className="logo" />
                <br />
                <br />
            </button>
        </form>
    );
};

export default HomeButton;